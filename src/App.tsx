import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.scss";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
