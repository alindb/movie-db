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
            <ProfileImg path={cast.profile_path} alt={cast.name} />
            <div>
              <Link to={`/person/${cast.id}`}>
                <h5>{cast.name}</h5>
              </Link>
              <p>as {cast.character}</p>
            </div>
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
            <ProfileImg path={crew.profile_path} alt={crew.name} />
            <div>
              <Link to={`/person/${crew.id}`}>
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
            {crewExpanded ? "Show less crew" : "Show all crew"}
          </Button>
        )}
      </ul>
    </div>
  );
}
