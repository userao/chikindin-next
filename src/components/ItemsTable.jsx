import getBackendRoute from "@/utils/getBackendRoute";
import { useEffect, useState } from "react";
import delete_icon from "public/svg/delete_icon.svg"
import edit_icon from "public/svg/edit_icon.svg"
import Image from "next/image";

export default function ItemsTable({ type }) {
  const projectsRoute = `${getBackendRoute()}/api/${type}`;
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async function () {
      fetch(projectsRoute)
        .then((res) => res.json())
        .then(setItems);
    })();
  }, [type]);

  return (
    <div className="flex flex-col w-3/4 xl:w-1/2 mx-auto">
      {items.length > 0 &&
        items.map((item) => {
          return (
            <div key={item.id} className="flex border border-x-0 justify-between" >
              <p className="my-4">
                {item.name ?? item.title}
              </p>
              <div className="flex gap-2 items-center mx-2">
                <button className="w-5 h-5">
                  <Image src={edit_icon} alt="edit button icon" />
                </button>
                <button className="w-5 h-5">
                  <Image src={delete_icon} alt="delete button icon" />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
