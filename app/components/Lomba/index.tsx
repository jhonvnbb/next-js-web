import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const LombaSection = () => {
  return (
    <section className="bg-gray-800 p-6">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white py-7">Lomba</h1>
          <p className="text-[#eee]">
            Dalam Computer Science Showdown 2024 ini terdapat beberapa cabang
            lomba yang dapat diikuti:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7 w-full">
          <div className="border-y-2 p-10 border-gray-700">
            <i className="text-5xl text-white mb-3">
              <FaInstagram />
            </i>
            <h5 className="mt-7 mb-2 text-2xl font-bold text-white">LCT</h5>
            <p className="mb-3 text-xl text-gray-500 dark:text-gray-400">
              Lomba Cepat Tepat ini dapat diikuti oleh jenjang SMA sederajat
            </p>
            <Link
              href="#"
              className="inline-flex font-medium items-center text-blue-600 hover:underline"
            >
              Read More !
            </Link>
          </div>
          <div className="border-y-2 p-10 border-gray-700">
            <i className="text-5xl text-white mb-3">
              <FaInstagram />
            </i>
            <h5 className="mt-7 mb-2 text-2xl font-bold text-white">CPC</h5>
            <p className="mb-3 text-xl text-gray-500 dark:text-gray-400">
              Competitive Programming Competition ini dapat diikuti oleh umum
            </p>
            <Link
              href="#"
              className="inline-flex font-medium items-center text-blue-600 hover:underline"
            >
              Read More !
            </Link>
          </div>
          <div className="border-y-2 p-10 border-gray-700">
            <i className="text-5xl text-white mb-3">
              <FaInstagram />
            </i>
            <h5 className="mt-7 mb-2 text-2xl font-bold text-white">FUTSAL</h5>
            <p className="mb-3 text-xl text-gray-500 dark:text-gray-400">
              Cabang lomba futsal ini dapat diikuti oleh jenjang SMA sederajat
            </p>
            <Link
              href="#"
              className="inline-flex font-medium items-center text-blue-600 hover:underline"
            >
              Read More !
            </Link>
          </div>
          <div className="border-y-2 p-10 border-gray-700">
            <i className="text-5xl text-white mb-3">
              <FaInstagram />
            </i>
            <h5 className="mt-7 mb-2 text-2xl font-bold text-white">Mobile Legend</h5>
            <p className="mb-3 text-xl text-gray-500 dark:text-gray-400">
              Cabang lomba mobile legend ini dapat diikuti oleh umum
            </p>
            <Link
              href="#"
              className="inline-flex font-medium items-center text-blue-600 hover:underline"
            >
              Read More !
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LombaSection;
