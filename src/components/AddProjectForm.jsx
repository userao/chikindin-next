import { Field, useFormikContext } from "formik";

export default function AddProjectForm() {
  const { values, setFieldValue } = useFormikContext();
  const inputFields = [
    {
      name: "name",
      type: "text",
      label: "Название проекта",
    },
    {
      name: "description",
      type: "text",
      label: "Описание проекта",
    },
    {
      name: "location",
      type: "text",
      label: "Местоположение объекта",
    },
    {
      name: "year",
      type: "text",
      label: "Год выполнения проекта",
    },
    {
      name: "use",
      type: "text",
      label: "Тип объекта",
    },
    {
      name: "photos",
      type: "file",
      label: "Фотографии",
    },
  ];

  const inputClasses =
    "block pt-2.5 pb-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-primary-400 peer";
  const labelClasses =
    "absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-primary-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-6";

  return (
    <>
      {inputFields.map((field) => (
        <div key={field.name} className="py-4">
          <div className="relative z-0">
            <Field
              className={inputClasses}
              id={field.name}
              name={`projects.${field.name}`}
              onChange={(e) => {
                if (field.type === "file") {
                  const currentFiles = values.projects.files;
                  const newFiles = Array.from(e.currentTarget.files);
                  setFieldValue('projects.files', [...currentFiles, ...newFiles]);
                  return;
                }
                setFieldValue(`projects.${field.name}`, e.currentTarget.value);
              }}
              type={field.type}
              multiple
              placeholder=" "
            />
            <label htmlFor={field.name} className={labelClasses}>
              {field.label}
            </label>
          </div>
        </div>
      ))}
      <div>Всего файлов добавлено: {values.projects.files.length}</div>
    </>
  );
}
