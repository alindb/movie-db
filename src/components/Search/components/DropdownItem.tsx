import Dropdown from "react-bootstrap/Dropdown";
import ActorItem from "./ActorItem";
import MovieItem from "./MovieItem";
import { Person, Movie } from "../../../typescript/interfaces";

const isMovie = (item: Movie | Person | null): item is Movie => {
  if (!item) return false;
  if ((item as Movie).media_type === "movie") return true;
  return false;
};

const isActor = (item: Movie | Person | null): item is Person => {
  if (!item) return false;
  if ((item as Person).media_type === "person") return true;
  return false;
};

export default function DropdownItem({
  item,
  preNavigate,
}: {
  item: Person | Movie | null;
  preNavigate: () => void;
}) {
  if (isActor(item)) {
    return <ActorItem actor={item} preNavigate={preNavigate} />;
  }
  if (isMovie(item)) {
    return <MovieItem movie={item} preNavigate={preNavigate} />;
  }
  return <Dropdown.Item>No results</Dropdown.Item>;
}
