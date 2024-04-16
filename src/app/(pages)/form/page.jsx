import QuestionList from "@/components/QuestionsList";
import TextSpinner from "@/components/TextSpinner";
// import questions from "@/questions.json";
import ReduxProvider from "@/components/ReduxProvider";
import PageLoadedCheck from "@/components/PageLoadedCheck";
import getBackendRoute from "@/utils/getBackendRoute";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export const metadata = {
  title: "Chikindin-design: Анкета",
  description:
    "Вопросы из этой анкеты помогут нам лучше понять желания заказчика и учесть все необходимые особенности при разработке дизайн-проекта.",
};

export default async function Form() {
  const res = await fetch(`${getBackendRoute()}/api/questions`);
  const questions = await res.json();
  
  return (
    <ReduxProvider>
      <section className="flex justify-center my-6 min-h-screen">
        <TextSpinner text={"заполните анкету"} radius={150} color={"brand-primary-400"} />
        <div className="mx-8 w-full md:w-2/3 lg:w-2/5">
          <h1 className="uppercase text-3xl text-brand-primary-400 py-5">анкета</h1>
          <Suspense fallback={<Loading />}>
            <QuestionList questions={questions} />
          </Suspense>
        </div>
        <PageLoadedCheck />
      </section>
    </ReduxProvider>
  );
}
