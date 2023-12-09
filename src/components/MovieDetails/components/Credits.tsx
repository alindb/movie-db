import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Button from "react-bootstrap/Button";
import ProfileImg from "components/ProfileImg";
import { Credits as CreditsType } from "typescript/interfaces";

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
            <Link to={`/person/${cast.id}`}>
              <ProfileImg path={cast.profile_path} alt={cast.name} />
              <div className="cast-text-container">
                <h5>{cast.name}</h5>
                <p>as {cast.character}</p>
              </div>
            </Link>
          </li>
        ))}
        {credits.cast.length > 8 && (
          <Button
            variant="outline-secondary"
            onClick={() => setCastExpanded((prevValue) => !prevValue)}
          >
            {castExpanded ? "Show less cast" : "Show all cast"}
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
            <Link to={`/person/${crew.id}`}>
              <ProfileImg path={crew.profile_path} alt={crew.name} />
              <div className="cast-text-container">
                <h5>{crew.name}</h5>
                <p>{crew.job}</p>
              </div>
            </Link>
          </li>
        ))}
        {credits.crew.length > 8 && (
          <Button
            variant="outline-secondary"
            onClick={() => setCrewExpanded((prevValue) => !prevValue)}
          >
            {crewExpanded ? "Show less crew" : "Show all crew"}
          </Button>
        )}
      </ul>
    </div>
  );
}
