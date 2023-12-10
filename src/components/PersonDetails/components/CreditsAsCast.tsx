import { useMemo, useRef, useState } from "react";
import Credit from "./Credit";
import { CastCredit } from "typescript/interfaces";
import { Button } from "react-bootstrap";
import { sortOnReleaseDate } from "utils/sort";

interface CreditsAsCastProps {
  creditsAsCast: CastCredit[];
}

export default function CreditsAsCast({ creditsAsCast }: CreditsAsCastProps) {
  const castRef = useRef<HTMLHeadingElement>(null);

  const [expanded, setExpanded] = useState(false);

  const releasedMovies = useMemo(
    () =>
      creditsAsCast
        .filter((credit) => credit.release_date)
        .sort(sortOnReleaseDate),
    [creditsAsCast]
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
        ref={castRef}
      >{`Actor (${releasedMovies.length})`}</h4>
      <ul className="person-movies card-container">
        {credits.map((movie) => (
          <Credit key={`${movie.id}-${movie.character}`} movie={movie} />
        ))}
      </ul>
      {releasedMovies.length > 5 && (
        <Button
          variant="outline-secondary text-only"
          onClick={() => {
            setExpanded((prevState) => !prevState);
            castRef.current?.scrollIntoView();
          }}
        >
          {expanded ? "Show less" : "Show all"}
        </Button>
      )}
    </div>
  );
}
