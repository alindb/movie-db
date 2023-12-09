import classNames from "classnames";
import { IMG_BASE_URL } from "assets/constants";

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

export default function PosterImg({ path, alt, size = "w92" }: PosterImgProps) {
  return path ? (
    <img
      className={classNames("poster", size)}
      src={`${IMG_BASE_URL}${size}${path}`}
      alt={alt}
    />
  ) : (
    <i className={classNames("poster fa-solid fa-film", size)} />
  );
}
