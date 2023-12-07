import Dropdown from "react-bootstrap/Dropdown";
import { Actor } from "../../../typescript/interfaces";
import { useNavigate } from "react-router-dom";

const imageBaseUrl = "http://image.tmdb.org/t/p/";
const profileSize = "w45";

export default function ActorItem({
  actor,
  preNavigate,
}: {
  actor: Actor;
  preNavigate: () => void;
}) {
  const navigate = useNavigate();

  const onClick = () => {
    preNavigate();
    navigate(`/movie/${actor.id}`);
  };

  return (
    <Dropdown.Item as="button" onClick={onClick} className="list-item-movie">
      {actor.profile_path ? (
        <img
          src={`${imageBaseUrl}${profileSize}${actor.profile_path}`}
          alt={actor.name}
        />
      ) : (
        <i className="fa-solid fa-image-portrait" />
      )}
      <div>
        <span className="title">{actor.name}</span>
        <span>{actor.known_for_department}</span>
      </div>
    </Dropdown.Item>
  );
}
