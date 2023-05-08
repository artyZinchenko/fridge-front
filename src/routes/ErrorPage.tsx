import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id='error-page'>
      <h1>Ooops!</h1>
      <p>Sorry, unexpected error occured</p>
      {error instanceof Error && <i>{error.message}</i>}
    </div>
  );
};

export default ErrorPage;
