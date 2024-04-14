"use client";

import { setLoadingState } from "@/store/loadingStateSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function PageLoadedCheck() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoadingState("loaded"));
    }, 500);
  }, [dispatch]);

  return <div></div>;
}

export default PageLoadedCheck;
