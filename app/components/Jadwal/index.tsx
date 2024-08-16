import React from "react";
import {
  FaAddressBook,
  FaPray,
  FaRegCheckCircle,
  FaTrophy,
} from "react-icons/fa";

const JadwalSection = () => {
  return (
    <section className="py-7 bg-[#eee]">
      <div className="flex md:flex-row flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center max-w-sm md:mx-4 my-2 p-6 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center h-[215px]">
          <i className="flex items-center justify-center mb-3 text-white text-3xl">
            <FaAddressBook />
          </i>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Pembukaan
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Pembukaan akan dilaksanakan pada tanggal 12 Oktober 2024
          </p>
        </div>
        <div className="flex flex-col items-center justify-center max-w-sm md:mx-4 my-2 p-6 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center h-[215px]">
          <i className="flex items-center justify-center mb-3 text-white text-3xl">
            <FaPray />
          </i>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Pelaksanaan Lomba
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Pelaksanaan 4 cabang lomba akan dilaksanakan mulai tanggal 12
            Oktober - 20 Oktober 2024
          </p>
        </div>
        <div className="flex flex-col items-center justify-center max-w-sm md:mx-4 my-2 p-6 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center h-[215px]">
          <i className="flex items-center justify-center mb-3 text-white text-3xl">
            <FaRegCheckCircle />
          </i>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Penutupan
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Penutupan dilaksanakan pada tanggal 20 Oktober 2024
          </p>
        </div>
        <div className="flex flex-col items-center justify-center max-w-sm md:mx-4 my-2 p-6 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center h-[215px]">
          <i className="flex items-center justify-center mb-3 text-white text-3xl">
            <FaTrophy />
          </i>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Pengumuman Pemenang
          </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Pengumuman pemenang akan dilaksanakan pada penutupan Computer
            Science Showdown 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default JadwalSection;
