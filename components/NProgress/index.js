"use client";

import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";

export default function NProgressComponent({ children }) {
  const { start, done, configure } = NProgress;
  configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => {
    start();
  });
  Router.events.on("routeChangeComplete", () => {
    done();
  });
  return children;
}
