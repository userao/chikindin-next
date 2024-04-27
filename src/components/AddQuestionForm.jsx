import { Field } from "formik";

export default function AddQuestionForm() {
  const inputClasses =
    "block pt-2.5 pb-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-primary-400 peer";
  const labelClasses =
    "absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-primary-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-6";

  const fields = [
    {
      name: "title",
      label: "Текст вопроса",
      type: "input",
    },
    {
      name: "type",
      label: "Тип вопроса",
      type: "radio",
      options: ["Текст", "Один вариант", "Несколько вариантов"],
    },
    {
      name: "options",
      label: "Варианты (через перенос строки)",
      type: "textarea",
    },
    {
      name: "projectType",
      label: "Тип объекта",
      type: "radio",
      options: ["Жилой", "Общественный", "Любой"],
    },
    {
      name: "required",
      label: "Обязательный вопрос",
      type: "radio",
      options: ["Да", "Нет"],
    },
  ];

  return (
    <>
      {fields.map((field) => {
        if (field.type === 'radio' || field.type === 'checkbox') {
          return (
            <div key={field.name} className="py-4">
              <p className="pb-1 font-bold text-lg">{field.label}</p>
              {field.options &&
                field.options.map((option) => {
                  return (
                    <div className="py-1" key={option}>
                      <Field
                        type={field.type}
                        id={option}
                        name={`questions.${field.name}`}
                        value={option}
                      />
                      <label htmlFor={option} className="ps-1">
                        {option}
                      </label>
                    </div>
                  );
                })}
            </div>
          );
        }

        return (
          <div key={field.name} className="py-4">
            <div className="relative z-0">
              <Field
                className={inputClasses}
                id={field.name}
                name={`questions.${field.name}`}
                type="text"
                as={field.type}
                rows="4"
                placeholder=" "
              />
              <label htmlFor={field.name} className={labelClasses}>
                {field.label}
              </label>
            </div>
          </div>
        );
      })}
    </>
  );
}
