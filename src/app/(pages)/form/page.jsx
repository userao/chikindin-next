import QuestionList from "@/components/QuestionsList";
import TextSpinner from "@/components/TextSpinner";
import questions from '@/questions.json';
import ReduxProvider from "@/components/ReduxProvider";
import PageLoadedCheck from "@/components/PageLoadedCheck";

export default async function Form() {
  return (
    <section className="flex justify-center my-6">
      <TextSpinner
        text={"заполните анкету"}
        radius={150}
        color={"brand-primary-400"}
      />
      <div className="mx-8 w-full md:w-2/3 lg:w-2/5">
        <h1 className="uppercase text-3xl text-brand-primary-400 py-5">анкета</h1>
        <QuestionList questions={questions} />
      </div>
      <ReduxProvider>
        <PageLoadedCheck />
      </ReduxProvider>
    </section>
  );
}
