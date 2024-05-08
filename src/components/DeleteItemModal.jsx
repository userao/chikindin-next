import getBackendRoute from "@/utils/getBackendRoute";

export default function DeleteItemModal({
  type,
  itemId,
  handleClose,
  items,
  setItems,
}) {
  const backendRoute = getBackendRoute();
  function deleteItem() {
    fetch(`${backendRoute}/api/${type}/${itemId}`, {
      method: "DELETE",
    }).then(() => {
      const newItems = items.filter((item) => item.id !== itemId);
      setItems(newItems);
      handleClose();
    });
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-card-hover">
      <div className="w-80 bg-white rounded-xl">
        <div className="p-4">
          <p className="text-center">Точно удалить?</p>
          <div className="flex justify-between gap-4 mt-6">
            <button
              onClick={deleteItem}
              type="submit"
              className="border-green-700 border-2 rounded-md p-2 w-[8rem] hover:bg-green-700 hover:text-white duration-300"
            >
              Да
            </button>
            <button
              onClick={handleClose}
              className="border-red-700 border-2 rounded-md p-2 w-[8rem] hover:bg-red-700 hover:text-white duration-300"
            >
              Нет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
