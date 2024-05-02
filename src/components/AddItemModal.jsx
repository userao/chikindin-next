import { useState } from "react";
import * as Yup from "yup";
import AddQuestionForm from "./AddQuestionForm";
import AddProjectForm from "./AddProjectForm";
import { Formik, Form } from "formik";
import getBackendRoute from "@/utils/getBackendRoute";
import Loading from "./Loading";

export default function AddItemModal({ item, handleClose }) {
  const backendRoute = getBackendRoute();
  const FormFields =
    item === "projects" ? <AddProjectForm /> : <AddQuestionForm />;
  const [submitState, setSubmitState] = useState("not submitted");
  const schemas = {
    projects: Yup.object().shape({
      projects: Yup.object({
        name: Yup.string().required(),
        description: Yup.string().required(),
        year: Yup.string().required(),
        use: Yup.string().required(),
        location: Yup.string().required(),
        files: Yup.array().min(1).required(),
      }),
    }),
    questions: Yup.object().shape({
      questions: Yup.object({
        title: Yup.string().required(),
        type: Yup.string().required(),
        projectType: Yup.string().required(),
        required: Yup.string().required(),
        options: Yup.string().when("type", {
          is: (val) => val !== "Текст",
          then: (schema) => schema.required(),
        }),
      }),
    }),
  };

  const initialValues = {
    projects: {
      name: "",
      description: "",
      year: "",
      use: "",
      location: "",
      files: [],
    },
    questions: {
      title: "",
      type: "",
      options: "",
      projectType: "",
      required: "",
    },
  };

  function questionNormalize(values) {
    const answersMapping = {
      projectType: {
        Жилой: "living",
        Общественный: "civic",
        Любой: "all",
      },
      required: {
        Да: true,
        Нет: false,
      },
      type: {
        Текст: "input",
        "Один вариант": "radio",
        "Несколько вариантов": "checkbox",
      },
    };

    return {
      ...values,
      type: answersMapping.type[values.type],
      projectType: answersMapping.projectType[values.projectType],
      required: answersMapping.required[values.required],
      options: values.options.split("\n"),
    };
  }

  function projectNormalize(values) {
    const normalizedProject = {
      id: Date.now(),
      ...values,
      photos: values.files,
    };
    delete normalizedProject.files;
    return normalizedProject;
  }

  const normalizeItemFunc = {
    projects: projectNormalize,
    questions: questionNormalize,
  };

  function createQuestion(question) {
    return fetch(`${backendRoute}/api/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    });
  }

  function createProject(project) {
    const formData = new FormData();
    for (const key in project) {
      if (Array.isArray(project[key])) {
        project[key].forEach((el) => {
          formData.append(key, el);
        });
      } else {
        formData.append(key, project[key]);
      }
    }
    return fetch(`${backendRoute}/api/projects`, {
      method: "POST",
      body: formData,
    });
  }

  const createItemFunc = {
    projects: createProject,
    questions: createQuestion,
  };

  function handleSubmit(values) {
    const normalizedValues = normalizeItemFunc[item](values[item]);
    setSubmitState("submitting");
    createItemFunc[item](normalizedValues)
      .then(() => {
        setSubmitState("success");
        handleClose();
      })
      .catch((e) => {
        setSubmitState("error");
      });
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-card-hover">
      <div className="w-80 bg-white rounded-xl">
        <div className="p-5">
          <Formik
            initialValues={initialValues}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={schemas[item]}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ isValid }) => {
              return (
                <Form className="relative">
                  {submitState !== "submitting" ? (
                    FormFields
                  ) : (
                    <div className="flex items-center justify-center h-[10rem]">
                      <Loading />
                    </div>
                  )}
                  {!isValid || submitState === "error" ? (
                    <div className="absolute text-red-400 bottom-12">
                      {!isValid
                        ? "Заполните обязательные поля"
                        : "Ошибка связи"}
                    </div>
                  ) : null}
                  <div className="flex justify-between gap-4 mt-6">
                    <button
                      type="submit"
                      disabled={submitState === "submitting"}
                      className="border-green-700 border-2 rounded-md p-2 w-[8rem] hover:bg-green-700 hover:text-white duration-300"
                    >
                      Добавить
                    </button>
                    <button
                      onClick={handleClose}
                      className="border-red-700 border-2 rounded-md p-2 w-[8rem] hover:bg-red-700 hover:text-white duration-300"
                    >
                      Отменить
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
