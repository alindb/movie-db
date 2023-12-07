import classNames from "classnames";
import { imageBaseUrl } from "../../config";

type ProfileImgSize = "w45" | "w185" | "w342" | "h632" | "original";

interface ProfileImgProps {
  path: string;
  alt: string;
  size?: ProfileImgSize;
}

export function ProfileImg({ path, alt, size = "w45" }: ProfileImgProps) {
  return path ? (
    <img
      className={classNames("profile", size)}
      src={`${imageBaseUrl}${size}${path}`}
      alt={alt}
    />
  ) : (
    <i className={classNames("profile fa-solid fa-user", size)} />
  );
}
