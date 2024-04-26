"use client";

import { useState } from "react";
import ItemsTable from "@/components/ItemsTable";
import AddItemModal from "@/components/AddItemModal";

export default function Admin() {
  const [table, setTable] = useState("projects");
  const [addItemModal, setAddItemModal] = useState(null);

  function handleClose() {
    setAddItemModal(null);
  }

  return (
    <main className="m-6 min-h-screen">
      {addItemModal && <AddItemModal item={table} handleClose={handleClose} />}
      <ul className="mb-6 flex gap-6 w-1/5 mx-auto justify-center">
        <li
          className={`cursor-pointer underline ${
            table === "projects" ? "text-brand-primary-400" : null
          }`}
          onClick={() => setTable("projects")}>
          Проекты
        </li>
        <li
          className={`cursor-pointer underline ${
            table === "questions" ? "text-brand-primary-400" : null
          }`}
          onClick={() => setTable("questions")}>
          Вопросы
        </li>
      </ul>
      <button
        onClick={() => setAddItemModal(table)}
        className="block border-brand-primary-400 border-2 rounded-md p-2 mb-6 w-[8rem] mx-auto hover:bg-brand-primary-400 hover:text-white duration-300">
        Добавить
      </button>
      {table.length > 0 && <ItemsTable type={table} />}
    </main>
  );
}
