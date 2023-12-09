import Navbar from "react-bootstrap/Navbar";
import Search from "components/Search";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar>
      <Link to="/">
        <i className="fa-solid fa-film" />
        <h2>Movie DB</h2>
        <h2 className="mobile">MDB</h2>
      </Link>
      <i className="fa-solid fa-magnifying-glass" />
      <Search />
    </Navbar>
  );
}
