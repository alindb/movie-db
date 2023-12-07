import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let message;
  if (isRouteErrorResponse(error)) {
    message = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="error-page">
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{message}</i>
      </p>
    </div>
  );
}
