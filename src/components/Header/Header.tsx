import Navbar from "react-bootstrap/Navbar";
import Search from "components/Search";
import "./Header.scss";

export default function Header() {
  return (
    <Navbar>
      <i className="fa-solid fa-film" />
      <h2>Movie DB</h2>
      <h2 className="mobile">MDB</h2>
      <i className="fa-solid fa-magnifying-glass" />
      <Search />
    </Navbar>
  );
}
