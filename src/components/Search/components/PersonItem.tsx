import Dropdown from "react-bootstrap/Dropdown";
import { Person } from "../../../typescript/interfaces";
import { useNavigate } from "react-router-dom";
import { ProfileImg } from "../../ProfileImg";

export default function PersonItem({
  person,
  preNavigate,
}: {
  person: Person;
  preNavigate: () => void;
}) {
  const navigate = useNavigate();

  const onClick = () => {
    preNavigate();
    navigate(`/person/${person.id}`);
  };

  return (
    <Dropdown.Item as="button" onClick={onClick} className="list-item-movie">
      <ProfileImg path={person.profile_path} alt={person.name} />
      <div>
        <span className="title">{person.name}</span>
        <span>{person.known_for_department}</span>
      </div>
    </Dropdown.Item>
  );
}
