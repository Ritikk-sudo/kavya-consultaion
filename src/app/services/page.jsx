import React from "react";
import Image from "next/image";
import { MdMapsHomeWork } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { MdOutlineShowChart } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { RiHotelBedFill } from "react-icons/ri";
import { FaClinicMedical } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";

function page() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-center text-2xl font-medium title-font mb-2 text-gray-900">
              Our Services
            </h1>
            <div className="h-1 w-full w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <MdMapsHomeWork size={100} />

              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Real Estates
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <FaHeadphones size={100} />

              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                BPO
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <MdOutlineShowChart size={100} />

              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Sales <br />& Marketing
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <FaHandshake size={100} />

              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Human <br /> Resources
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <RiHotelBedFill size={100} />

              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Hotel
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <FaClinicMedical size={100} />

              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Medical
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <FaLaptop size={100} />

              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Technical
              </h2>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <MdPrecisionManufacturing size={100} />

              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Manufacturing <br />& Operations
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
