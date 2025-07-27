import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-4">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-primary underline text-base">
        Go back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
