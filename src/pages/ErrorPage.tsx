import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  // error type?
  // https://github.com/remix-run/react-router/discussions/9628

  return (
    <div className="container">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{isRouteErrorResponse(error) && error?.status}</p>
      <p>
        <i>
          {isRouteErrorResponse(error)
            ? // error is type `ErrorResponse`
              error.error?.message || error.statusText
            : "Unknown error message"}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
