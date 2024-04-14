import TextSpinner from "@/components/TextSpinner";
import ReduxProvider from "@/components/ReduxProvider";
import PageLoadedCheck from "@/components/PageLoadedCheck";

export const metadata = {
  title: "Chikindin-design: Услуги",
  description: "Услуги, предоставляемые заказчику при разработке индивидуального дизайн-проекта.",
};

export default function Services() {
  return (
    <section className="flex justify-center">
      <TextSpinner text="услуги" radius={150} color={"brand-primary-400"} />
      <div className="max-w-[700px] mx-4 my-8">
        <h2 className="uppercase mb-6">Этапы работ</h2>
        <ol className="services-list">
          <li className="mb-6">
            <h3 className="uppercase pl-10">
              Составление технического задания на проектирование дизайн-проекта
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
              потенциал каждого квадратного метра и &quot;увязать&quot; все элементы собой
              в пользу функции и красоты.
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
              Фотореалистичная картинка показывает все объёмы и раскрывает наше
              виденье по эстетическому и функциональному наполнению
              пространства. Рабочая документация Финальный альбом документации
              для строителей со всеми согласованными планами, развёртками,
              узлами и спецификациями. Можно начинать строить!
            </p>
          </li>
        </ol>
      </div>
      <ReduxProvider>
        <PageLoadedCheck />
      </ReduxProvider>
    </section>
  );
}
