import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ProfileImg from "components/ProfileImg";
import { getParagraphs } from "utils/string";
import { Person } from "typescript/interfaces";
import "./PersonDetails.scss";
import CreditsAsCrew from "./components/CreditsAsCrew";
import CreditsAsCast from "./components/CreditsAsCast";

const GENDER = {
  0: "Unknown",
  1: "Female",
  2: "Male",
  3: "Non-binary",
};

export default function PersonDetails() {
  const [readMore, setReadMore] = useState(false);

  const { person } = useLoaderData() as { person: Person };

  const biographyRef = useRef<HTMLHeadingElement>(null);

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
        <h2 className="person-name-mobile">{person.name}</h2>
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
        <h2 className="person-name">{person.name}</h2>
        <h4 className="mb-2" ref={biographyRef}>
          Biography
        </h4>
        <div className="biography-container">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="biography-paragraph">
              {paragraph}
            </p>
          ))}
          {biography.length > 2 && (
            <Button
              variant="outline-secondary text-only"
              onClick={() => {
                setReadMore((prevState) => !prevState);
                biographyRef.current?.scrollIntoView();
              }}
            >
              {readMore ? "Show less" : "Read more"}
            </Button>
          )}
        </div>
        <h3 className="mb-3">Credits</h3>
        <CreditsAsCast creditsAsCast={person.movie_credits.cast} />
        <CreditsAsCrew creditsAsCrew={person.movie_credits.crew} />
      </div>
    </div>
  );
}
