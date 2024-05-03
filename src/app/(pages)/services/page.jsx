import TextSpinner from "@/components/TextSpinner";
import ReduxProvider from "@/components/ReduxProvider";
import PageLoadedCheck from "@/components/PageLoadedCheck";

export const metadata = {
  title: "Chikindin-design: Услуги",
  description:
    "Услуги, предоставляемые заказчику при разработке индивидуального дизайн-проекта.",
};

export default function Services() {
  return (
    <main>
      <TextSpinner text="услуги" radius={150} color={"brand-primary-400"} />
      <section className="flex flex-col items-center">
        <h2 className="uppercase my-6">Пакеты услуг</h2>
        <div className="flex gap-10 mx-6 flex-wrap justify-center">
          <div className="w-[19rem] relative">
            <h3 className="uppercase">
              Пакет{" "}
              <span className="text-brand-primary-400 text-2xl relative -bottom-[2.5px]">
                C
              </span>
            </h3>
            <ul className="list-services pl-4">
              <li className="py-2">Обмерный план</li>
              <li className="py-2">Планировочное решение</li>
              <li className="py-2">Альбом технического задания</li>
              <li className="py-2">План осветительных приборов</li>
              <li className="py-2 pb-8">План электрики</li>
            </ul>
            <p className="text-right absolute w-full bottom-0">
              1800 р/м<span style={{ fontVariantPosition: "super" }}>2</span>
            </p>
          </div>
          <div className="w-[19rem] relative">
            <h3 className="uppercase">
              Пакет{" "}
              <span className="text-brand-primary-400 text-2xl relative -bottom-[2.5px]">
                H
              </span>
            </h3>
            <ul className="list-services pl-4">
              <li className="py-2">Обмерный план</li>
              <li className="py-2">Планировочное решение</li>
              <li className="py-2">Альбом технического задания</li>
              <li className="py-2">Концептуальный мудборд</li>
              <li className="py-2 pb-8">Проектная документация</li>
            </ul>
            <p className="text-right absolute w-full bottom-0">
              2000 р/м<span style={{ fontVariantPosition: "super" }}>2</span>
            </p>
          </div>
          <div className="w-[19rem] relative">
            <h3 className="uppercase">
              Пакет{" "}
              <span className="text-brand-primary-400 text-2xl relative -bottom-[2.5px]">
                CH
              </span>
            </h3>
            <ul className="list-services pl-4">
              <li className="py-2">Обмерный план</li>
              <li className="py-2">Планировочное решение</li>
              <li className="py-2">Альбом технического задания</li>
              <li className="py-2">Визуализация</li>
              <li className="py-2">Проектная документация</li>
              <li className="py-2 pb-8">Базовый подбор материалов</li>
            </ul>
            <p className="text-right absolute w-full bottom-0">
              2500 р/м<span style={{ fontVariantPosition: "super" }}>2</span>
            </p>
          </div>
          <div className="w-[19rem] relative">
            <h3 className="uppercase">
              Пакет{" "}
              <span className="text-brand-primary-400 text-2xl relative -bottom-[2.5px]">
                CH<span className="text-[0.6rem]">de luxe</span>
              </span>
            </h3>
            <ul className="list-services pl-4">
              <li className="py-2">Обмерный план</li>
              <li className="py-2">Планировочное решение</li>
              <li className="py-2">Альбом технического задания</li>
              <li className="py-2">Визуализация</li>
              <li className="py-2">Проектная документация</li>
              <li className="py-2">Полная комплектация</li>
              <li className="py-2 pb-8">1 месяц авторского надзора</li>
            </ul>
            <p className="text-right absolute w-full bottom-0">
              3000 р/м<span style={{ fontVariantPosition: "super" }}>2</span>
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="max-w-[700px] mx-4 my-8">
          <h2 className="uppercase my-6">Этапы работ</h2>
          <ol className="list-services-numbered">
            <li className="mb-6">
              <h3 className="uppercase pl-10">
                Составление технического задания на проектирование
                дизайн-проекта
              </h3>
              <p className="lowercase">
                Формирование всех запросов и пожеланий на проектирование вашего
                пространства.
              </p>
            </li>
            <li className="mb-6">
              <h3 className="uppercase pl-10 mb-2">Планировочное решение</h3>
              <p className="lowercase">
                На основании технического задания и обмерного плана выполняется
                несколько планировочных решений. Одно из них дорабатывается и
                является базой для создания объемно-планировочного решения,
                скетчей и визуализаций. На этом этапе идёт консультация с
                подрядчиками по всем инженерным системам, чтобы использовать
                потенциал каждого квадратного метра и &quot;увязать&quot; все
                элементы собой в пользу функции и красоты.
              </p>
            </li>
            <li className="mb-6">
              <h3 className="uppercase pl-10 mb-2">Эскизный проект</h3>
              <p className="lowercase">
                Предварительная документация с планами и развёртками стен для
                составления спецификаций по комплектации и строительно-монтажным
                работам.
              </p>
            </li>
            <li className="mb-6">
              <h3 className="uppercase pl-10 mb-2">Комплектация</h3>
              <p className="lowercase">
                Подбор мебели, сантехники, оборудования, света и отделочных
                материалов. Поездки по салонам и магазинам.
              </p>
            </li>
            <li className="mb-6">
              <h3 className="uppercase pl-10 mb-2">Визуализация</h3>
              <p className="lowercase">
                Фотореалистичная картинка показывает все объёмы и раскрывает
                наше виденье по эстетическому и функциональному наполнению
                пространства. Рабочая документация Финальный альбом документации
                для строителей со всеми согласованными планами, развёртками,
                узлами и спецификациями. Можно начинать строить!
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
