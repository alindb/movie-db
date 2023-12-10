import { useMemo, useRef, useState } from "react";
import Credit from "./Credit";
import { sortOnReleaseDate } from "utils/sort";
import { CrewCredit } from "typescript/interfaces";
import { Button } from "react-bootstrap";

interface CreditsAsCrewProps {
  creditsAsCrew: CrewCredit[];
}

export default function CreditsAsCrew({ creditsAsCrew }: CreditsAsCrewProps) {
  const crewRef = useRef<HTMLHeadingElement>(null);

  const [expanded, setExpanded] = useState(false);

  const releasedMovies = useMemo(
    () =>
      creditsAsCrew
        .filter((credit) => credit.release_date)
        .sort(sortOnReleaseDate),
    [creditsAsCrew]
  );

  const credits =
    expanded || releasedMovies.length <= 5
      ? releasedMovies
      : releasedMovies.sort(sortOnReleaseDate).slice(0, 5);

  if (releasedMovies.length === 0) return null;

  return (
    <div className="credits-container">
      <h4
        className="mb-2"
        ref={crewRef}
      >{`Crew (${releasedMovies.length})`}</h4>
      <ul className="person-movies card-container">
        {credits.map((movie) => (
          <Credit key={`${movie.id}-${movie.job}`} movie={movie} />
        ))}
      </ul>
      {releasedMovies.length > 5 && (
        <Button
          variant="outline-secondary text-only"
          onClick={() => {
            setExpanded((prevState) => !prevState);
            crewRef.current?.scrollIntoView();
          }}
        >
          {expanded ? "Show less" : "Show all"}
        </Button>
      )}
    </div>
  );
}
