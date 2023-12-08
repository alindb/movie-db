import { useLoaderData } from "react-router-dom";
import { Person } from "../../typescript/interfaces";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getParagraphs } from "../../utils/string";
import { ProfileImg } from "../ProfileImg";
import "./PersonDetails.scss";
import Credit from "./components/Credit";
import { sortOnReleaseDate } from "../../utils/sort";

const GENDER = {
  0: "Unknown",
  1: "Female",
  2: "Male",
  3: "Non-binary",
};

export function PersonDetails() {
  const [readMore, setReadMore] = useState(false);

  const { person } = useLoaderData() as { person: Person };

  const getAge = (person: Person): number => {
    const ageDiffMs = Date.now() - new Date(person.birthday).getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const biography = person.biography
    ? getParagraphs(person.biography)
    : [`Could not find a biography for ${person.name}.`];
  const paragraphs = readMore ? biography : biography.slice(0, 2);

  useEffect(() => {
    document.title = `Movie DB | ${person.name}`;
  }, [person]);

  return (
    <div className="person-details">
      <div className="person-details-column">
        <ProfileImg path={person.profile_path} alt={person.name} size="w342" />
        <h4 className="personal-info-header">Personal Info</h4>
        <h5>Known For</h5>
        <p className="personal-info">{person.known_for_department}</p>
        <h5>Gender</h5>
        <p className="personal-info">{GENDER[person.gender]}</p>
        <h5>Birthday</h5>
        <p className="personal-info">{`${person.birthday} (${getAge(
          person
        )} years old)`}</p>
        <h5>Place of Birth</h5>
        <p className="personal-info">{person.place_of_birth}</p>
      </div>
      <div className="person-details-column">
        <h2>{person.name}</h2>
        <h5>Biography</h5>
        <div className="biography-container">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="biography-paragraph">
              {paragraph}
            </p>
          ))}
          {biography.length > 2 && (
            <Button
              variant="outline-secondary text-only"
              onClick={() => setReadMore((prevState) => !prevState)}
            >
              {readMore ? "Show less" : "Read more"}
            </Button>
          )}
        </div>
        <h3 className="mb-3">Credits</h3>
        <h4 className="mb-2">{`Actor (${person.movie_credits.cast.length})`}</h4>
        <div className="person-movies">
          {person.movie_credits.cast.sort(sortOnReleaseDate).map((movie) => (
            <Credit movie={movie} />
          ))}
        </div>
        <h4 className="mb-2">{`Crew (${person.movie_credits.crew.length})`}</h4>
        <div className="person-movies">
          {person.movie_credits.crew.sort(sortOnReleaseDate).map((movie) => (
            <Credit movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
