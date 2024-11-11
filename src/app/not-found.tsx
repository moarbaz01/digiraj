import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[999] flex flex-col items-center text-center px-6 justify-center bg-gray-100 text-gray-700">
      <h1 className="text-6xl font-bold text-primary-dark mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>

      <Link href="/">
        <p className="bg-primary-dark text-white px-6 py-3 rounded-md shadow hover:bg-primtext-primary-dark transition">
          Go Back Home
        </p>
      </Link>
    </div>
  );
};

export default NotFound;
