import { Outlet } from "react-router-dom";
import Header from "components/Header";
import { useScrollToTop } from "hooks/useScrollToTop";
import "./App.scss";

export default function App() {
  useScrollToTop();

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
