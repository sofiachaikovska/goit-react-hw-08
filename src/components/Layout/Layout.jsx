import css from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import { Suspense } from "react";

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};

export default Layout;
