import { useRouteError } from 'react-router-dom';

interface MyErrorType {
  statusText?: string;
  message?: string;
}

export default function Error() {
  const error = useRouteError() as MyErrorType | undefined;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-red-600">Oops!</h1>
        <p className="mb-2 text-lg text-gray-800">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="italic text-gray-600">
          {error?.statusText || error?.message}
        </p>
      </div>
    </div>
  );
}
