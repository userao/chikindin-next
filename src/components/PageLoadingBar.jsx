"use client";

import React, { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";

function PageLoadingBar() {
  const ref = useRef(null);
  const loadingState = useSelector((state) => state.loadingState.loadingState);

  useEffect(() => {
    const barEl = ref.current;

    if (loadingState === "loading") {
      barEl.continuousStart();
    } else {
      barEl.complete();
    }
  }, [loadingState]);

  return <LoadingBar color={"hsl(230, 100%, 50%)"} ref={ref} />;
}

export default PageLoadingBar;
