import QuestionList from "@/components/QuestionsList";
import TextSpinner from "@/components/TextSpinner";
import routes from "@/utils/routes";

export default async function Form() {
  const req = await fetch(routes.getQuestions());
  const questions = await req.json();

  return (
    <section className="flex justify-center my-6">
      <TextSpinner
        text={"заполните анкету"}
        radius={150}
        color={"brand-primary-400"}
      />
      <div>
        <h1 className="uppercase text-3xl text-brand-primary-400">анкета</h1>
        <QuestionList questions={questions} />
      </div>
    </section>
  );
}
