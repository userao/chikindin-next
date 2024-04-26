import * as Yup from "yup";
import AddQuestionForm from "./AddQuestionForm";
import AddProjectForm from "./AddProjectForm";
import { Formik, Form } from "formik";

export default function AddItemModal({ item, handleClose }) {
  const FormFields = item === "projects" ? <AddProjectForm /> : <AddQuestionForm />;
  const schemas = {
    projects: Yup.object().shape({
      projects: Yup.object({
        name: Yup.string().required(),
        description: Yup.string().required(),
        year: Yup.string().required(),
        use: Yup.string().required(),
        location: Yup.string().required(),
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
      photos: [],
    },
    questions: {
      title: "",
      type: "",
      options: "",
      projectType: "",
      required: "",
    },
  };

  function handleSubmit(values) {
    const formValues = values[item];
    console.log("submitted:\n", formValues);
    handleClose();
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
            onSubmit={(values) => handleSubmit(values)}>
            {({ isValid, errors, values }) => {
              console.log(errors);
              return (
                <Form className="relative">
                  {FormFields}
                  {isValid ? null : (
                    <div className="absolute text-red-400 bottom-12">Заполните обязательные поля</div>
                  )}
                  <div className="flex justify-between gap-4 mt-6">
                    <button
                      type="submit"
                      className="border-green-700 border-2 rounded-md p-2 w-[8rem] hover:bg-green-700 hover:text-white duration-300">
                      Добавить
                    </button>
                    <button
                      onClick={handleClose}
                      className="border-red-700 border-2 rounded-md p-2 w-[8rem] hover:bg-red-700 hover:text-white duration-300">
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
