import { Link } from "react-router-dom";
import { Credits as CreditsType } from "../../../typescript/interfaces";
import { useState } from "react";
import classNames from "classnames";
import Button from "react-bootstrap/Button";

const imageBaseUrl = "http://image.tmdb.org/t/p/";

export default function Credits({ credits }: { credits: CreditsType }) {
  const [castExpanded, setCastExpanded] = useState(false);
  const [crewExpanded, setCrewExpanded] = useState(false);

  return (
    <div className="credits">
      <h3>{`Cast (${credits.cast.length})`}</h3>
      <ul
        className={classNames(
          castExpanded ? "expanded" : "collapsed",
          credits.cast.length > 8 && "should-fade"
        )}
      >
        {credits.cast.map((cast) => (
          <li className="cast" key={cast.id}>
            {cast.profile_path ? (
              <img
                src={`${imageBaseUrl}w45${cast.profile_path}`}
                alt={cast.name}
              />
            ) : (
              <i className="fa-solid fa-circle-user no-profile-img" />
            )}
            <div>
              <Link to={`/actor/${cast.id}`}>
                <h5>{cast.name}</h5>
              </Link>
              <p>{cast.character}</p>
            </div>
          </li>
        ))}
        {credits.cast.length > 8 && (
          <Button
            variant="outline-secondary"
            onClick={() => setCastExpanded((prevValue) => !prevValue)}
          >
            {castExpanded ? "Hide cast" : "Show all cast"}
          </Button>
        )}
      </ul>
      <h3>{`Crew (${credits.crew.length})`}</h3>
      <ul
        className={classNames(
          crewExpanded ? "expanded" : "collapsed",
          credits.crew.length > 8 && "should-fade"
        )}
      >
        {credits.crew.map((crew) => (
          <li className="cast" key={`${crew.id}-${crew.job}`}>
            {crew.profile_path ? (
              <img
                src={`${imageBaseUrl}w45${crew.profile_path}`}
                alt={crew.name}
              />
            ) : (
              <i className="fa-solid fa-circle-user no-profile-img" />
            )}
            <div>
              <Link to={`/actor/${crew.id}`}>
                <h5>{crew.name}</h5>
              </Link>
              <p>{crew.job}</p>
            </div>
          </li>
        ))}
        {credits.crew.length > 8 && (
          <Button
            variant="outline-secondary"
            onClick={() => setCrewExpanded((prevValue) => !prevValue)}
          >
            {crewExpanded ? "Hide crew" : "Show all crew"}
          </Button>
        )}
      </ul>
    </div>
  );
}