export default function EditItemModal({ type, itemId, handleClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-card-hover">
      <div className="w-80 bg-white rounded-xl">
        <div className="p-4">
          <p className="text-center">edit</p>
          <div className="flex justify-between gap-4 mt-6">
            <button
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
