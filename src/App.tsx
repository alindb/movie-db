import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.scss";
import { useScrollToTop } from "./hooks/useScrollToTop";

export default function App() {
  useScrollToTop();

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
