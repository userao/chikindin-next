import TextSpinner from "@/components/TextSpinner";
import ReduxProvider from "@/components/ReduxProvider";
import PageLoadedCheck from "@/components/PageLoadedCheck";

export const metadata = {
  title: "Chikindin-design: Услуги",
  description: "Услуги, предоставляемые заказчику при разработке индивидуального дизайн-проекта.",
};

export default function Services() {
  return (
    <main>
      <TextSpinner text="услуги" radius={150} color={"brand-primary-400"} />
      <section className="flex flex-col items-center">
        <div className="flex gap-10 mx-6 flex-wrap justify-center mt-10">
          <div className="w-[17.5rem] duration-500 py-4 px-3 relative rounded-xl border border-transparent hover:border-brand-primary-400 hover:bg-brand-primary-100/50">
            <h3 className="uppercase text-3xl mb-10">
              Пакет <span className="text-brand-primary-400">C</span>
            </h3>
            <ul className="list-services pl-4 mb-[5rem]">
              <li className="py-2">Обмерный план</li>
              <li className="py-2">Планировочное решение</li>
              <li className="py-2">Альбом технического задания</li>
              <li className="py-2">План осветительных приборов</li>
              <li className="py-2">План электрики</li>
            </ul>
            <p className="w-full absolute bottom-4 text-brand-primary-400 font-semibold">
              1800 р/м<span style={{ fontVariantPosition: "super" }}>2</span>
            </p>
          </div>
          <div className="w-[17.5rem] duration-500 py-4 px-3 relative rounded-xl border border-transparent hover:border-brand-primary-400 hover:bg-brand-primary-100/50">
            <h3 className="uppercase text-3xl mb-10">
              Пакет <span className="text-brand-primary-400">H</span>
            </h3>
            <ul className="list-services pl-4 mb-[5rem]">
              <li className="py-2">Обмерный план</li>
              <li className="py-2">Планировочное решение</li>
              <li className="py-2">Альбом технического задания</li>
              <li className="py-2">Концептуальный мудборд</li>
              <li className="py-2">Проектная документация</li>
            </ul>
            <p className="w-full absolute bottom-4 text-brand-primary-400 font-semibold">
              2000 р/м<span style={{ fontVariantPosition: "super" }}>2</span>
            </p>
          </div>
          <div className="w-[17.5rem] duration-500 py-4 px-3 relative rounded-xl border border-transparent hover:border-brand-primary-400 hover:bg-brand-primary-100/50">
            <h3 className="uppercase text-3xl mb-10">
              Пакет <span className="text-brand-primary-400">CH</span>
            </h3>
            <ul className="list-services pl-4 mb-[5rem]">
              <li className="py-2">Обмерный план</li>
              <li className="py-2">Планировочное решение</li>
              <li className="py-2">Альбом технического задания</li>
              <li className="py-2">Визуализация</li>
              <li className="py-2">Проектная документация</li>
              <li className="py-2">Базовый подбор материалов</li>
            </ul>
            <p className="w-full absolute bottom-4 text-brand-primary-400 font-semibold">
              2500 р/м<span style={{ fontVariantPosition: "super" }}>2</span>
            </p>
          </div>
          <div className="w-[17.5rem] duration-500 py-4 px-3 relative rounded-xl border border-transparent hover:border-brand-primary-400 hover:bg-brand-primary-100/50">
            <h3 className="uppercase text-3xl mb-10">
              Пакет{" "}
              <span className="text-brand-primary-400 relative">
                CH<span className="text-[0.7rem] absolute -bottom-5 right-0">deluxe</span>
              </span>
            </h3>
            <ul className="list-services pl-4 mb-[5rem]">
              <li className="py-2">Обмерный план</li>
              <li className="py-2">Планировочное решение</li>
              <li className="py-2">Альбом технического задания</li>
              <li className="py-2">Визуализация</li>
              <li className="py-2">Проектная документация</li>
              <li className="py-2">Полная комплектация</li>
              <li className="py-2">1 месяц авторского надзора</li>
            </ul>
            <p className="w-full absolute bottom-4 text-brand-primary-400 font-semibold">
              3000 р/м<span style={{ fontVariantPosition: "super" }}>2</span>
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="max-w-[800px] mx-4 my-8">
          <h2 className="uppercase text-3xl my-12">Этапы работ</h2>
          <ol className="list-services-numbered">
            <li className="flex flex-col md:flex-row gap-10">
              <h3 className="pl-10 text-xl uppercase basis-full">
                Составление технического задания на проектирование дизайн-проекта
              </h3>
              <p className="basis-full italic">
                - Формирование всех запросов и пожеланий на проектирование вашего пространства.
              </p>
            </li>
            <hr className="border-1 border-brand-primary-400 my-8"/>
            <li className="flex flex-col md:flex-row gap-10">
              <h3 className="pl-10 text-xl uppercase basis-full">Планировочное решение</h3>
              <p className="basis-full italic">
                - На основании технического задания и обмерного плана выполняется несколько
                планировочных решений. Одно из них дорабатывается и является базой для создания
                объемно-планировочного решения, скетчей и визуализаций. На этом этапе идёт
                консультация с подрядчиками по всем инженерным системам, чтобы использовать
                потенциал каждого квадратного метра и &quot;увязать&quot; все элементы собой в
                пользу функции и красоты.
              </p>
            </li>
            <hr className="border-1 border-brand-primary-400 my-8"/>
            <li className="flex flex-col md:flex-row gap-10">
              <h3 className="pl-10 text-xl uppercase basis-full">Эскизный проект</h3>
              <p className="basis-full italic">
                - Предварительная документация с планами и развёртками стен для составления
                спецификаций по комплектации и строительно-монтажным работам.
              </p>
            </li>
            <hr className="border-1 border-brand-primary-400 my-8"/>
            <li className="flex flex-col md:flex-row gap-10">
              <h3 className="pl-10 text-xl uppercase basis-full">Комплектация</h3>
              <p className="basis-full italic">
                - Подбор мебели, сантехники, оборудования, света и отделочных материалов. Поездки по
                салонам и магазинам.
              </p>
            </li>
            <hr className="border-1 border-brand-primary-400 my-8"/>
            <li className="flex flex-col md:flex-row gap-10">
              <h3 className="pl-10 text-xl uppercase basis-full">Визуализация</h3>
              <p className="basis-full italic">
                - Фотореалистичная картинка показывает все объёмы и раскрывает наше виденье по
                эстетическому и функциональному наполнению пространства. Рабочая документация
                Финальный альбом документации для строителей со всеми согласованными планами,
                развёртками, узлами и спецификациями. Можно начинать строить!
              </p>
            </li>
          </ol>
        </div>
      </section>
      <ReduxProvider>
        <PageLoadedCheck />
      </ReduxProvider>
    </main>
  );
}
