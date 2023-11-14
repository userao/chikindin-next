import QuestionList from "@/components/QuestionsList";
import TextSpinner from "@/components/TextSpinner";
import questions from '@/questions.json';

export default async function Form() {
  return (
    <section className="flex justify-center my-6">
      <TextSpinner
        text={"заполните анкету"}
        radius={150}
        color={"brand-primary-400"}
      />
      <div className="w-2/5">
        <h1 className="uppercase text-3xl text-brand-primary-400 py-5">анкета</h1>
        <QuestionList questions={questions} />
      </div>
    </section>
  );
}
