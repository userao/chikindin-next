import getBackendRoute from "@/utils/getBackendRoute";
import { useEffect, useState } from "react";
import delete_icon from "public/svg/delete_icon.svg";
import edit_icon from "public/svg/edit_icon.svg";
import Image from "next/image";
import DeleteItemModal from "./DeleteItemModal";
import EditItemModal from "./EditItemModal";

export default function ItemsTable({ type }) {
  const projectsRoute = `${getBackendRoute()}/api/${type}`;
  const [items, setItems] = useState([]);
  const [modalComponent, setModalComponent] = useState(null);

  useEffect(() => {
    (async function () {
      fetch(projectsRoute)
        .then((res) => res.json())
        .then(setItems);
    })();
  }, [type]);

  function handleClose() {
    setModalComponent(null);
  }

  return (
    <div className="flex flex-col w-3/4 xl:w-1/2 mx-auto">
      {modalComponent}
      {items.length > 0 &&
        items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex border border-x-0 justify-between"
            >
              <p className="my-4">{item.name ?? item.title}</p>
              <div className="flex gap-2 items-center mx-2">
                <button
                  className="w-5 h-5"
                  onClick={() => {
                    setModalComponent(
                      <EditItemModal
                        type={type}
                        handleClose={handleClose}
                        itemId={item.id}
                      />
                    );
                  }}
                >
                  <Image src={edit_icon} alt="edit button icon" />
                </button>
                <button
                  className="w-5 h-5"
                  onClick={() => {
                    setModalComponent(
                      <DeleteItemModal
                        type={type}
                        handleClose={handleClose}
                        itemId={item.id}
                        setItems={setItems}
                        items={items}
                      />
                    );
                  }}
                >
                  <Image src={delete_icon} alt="delete button icon" />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
