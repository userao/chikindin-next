import { useState } from "react";
import Link from "next/link";
import { setLoadingState } from "@/store/loadingStateSlice";
import { useDispatch } from "react-redux";

function BurgerMenu() {
  const [modalShown, setModalShown] = useState(false);
	const dispatch = useDispatch();

	function handleClick() {
    dispatch(setLoadingState("loading"));
    setModalShown(false);
  }

  return (
    <>
      <div
        onClick={() => setModalShown(true)}
        className="h-2/3 aspect-square absolute end-5 flex justify-center items-center border-2 border-brand-primary-400 rounded-md drop-shadow-xl sm:hidden"
      >
        <div className="w-full">
          <div className="border-2 border-brand-primary-400 w-2/3 mx-auto rounded-sm my-[0.3rem]"></div>
          <div className="border-2 border-brand-primary-400 w-2/3 mx-auto rounded-sm my-[0.3rem]"></div>
          <div className="border-2 border-brand-primary-400  w-2/3 mx-auto rounded-sm my-[0.3rem]"></div>
        </div>
      </div>
      {modalShown && (
        <div className="absolute end-2 top-2 drop-shadow-lg rounded-md z-50 bg-white text-xl">
          <button
            onClick={() => setModalShown(false)}
            className="absolute w-9 aspect-square top-4 end-5 text-neutral-400 text-[2rem] leading-6"
          >
            <p>&times;</p>
          </button>
          <div className="px-4 me-[5rem]">
            <ul>
              <li className="hover:text-brand-primary-400 duration-300 py-5">
                <Link href="/about-us" onClick={handleClick}>
                  О нас
                </Link>
              </li>
              <li className="hover:text-brand-primary-400 duration-300 py-5">
                <Link href="/our-work" onClick={handleClick}>
                  Наши работы
                </Link>
              </li>
              <li className="hover:text-brand-primary-400 duration-300 py-5">
                <Link href="/services" onClick={handleClick}>
                  Услуги
                </Link>
              </li>
              <li className="hover:text-brand-primary-400 duration-300 py-5">
                <Link href="/contacts" onClick={handleClick}>
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default BurgerMenu;
