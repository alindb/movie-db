import classNames from "classnames";
import { imageBaseUrl } from "../../config";

type PosterSize =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original";

interface PosterImgProps {
  path: string;
  alt: string;
  size?: PosterSize;
}

export function PosterImg({ path, alt, size = "w92" }: PosterImgProps) {
  return path ? (
    <img
      className={classNames("poster", size)}
      src={`${imageBaseUrl}${size}${path}`}
      alt={alt}
    />
  ) : (
    <i className={classNames("poster fa-solid fa-film", size)} />
  );
}
