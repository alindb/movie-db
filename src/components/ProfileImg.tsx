import classNames from "classnames";
import { IMG_BASE_URL } from "assets/constants";

type ProfileImgSize = "w45" | "w185" | "w342" | "h632" | "original";

interface ProfileImgProps {
  path: string;
  alt: string;
  size?: ProfileImgSize;
}

export default function ProfileImg({
  path,
  alt,
  size = "w45",
}: ProfileImgProps) {
  return path ? (
    <img
      className={classNames("profile", size)}
      src={`${IMG_BASE_URL}${size}${path}`}
      alt={alt}
    />
  ) : (
    <i className={classNames("profile fa-solid fa-user", size)} />
  );
}
