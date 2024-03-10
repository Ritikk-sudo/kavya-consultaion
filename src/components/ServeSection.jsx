import React from "react";
import { MdMapsHomeWork } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { MdOutlineShowChart } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { RiHotelBedFill } from "react-icons/ri";
import { FaClinicMedical } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";

function ServeSection() {
  return (
    <div className="bg-zinc-800 p-4 ">
      <h2 className="font-bold text-center mt-6 mb-2 text-white text-xl">
        Industry We Serve
      </h2>
      <p className="text-center mb-6 text-white">
        Kavaya placement &consultancy serves in many industries and provided
        best recruitment in Delhi NCR!
      </p>
      <div className="text-center my-6">
        <button className="bg-white text-black my-6 mx-6 py-9 px-28 sm:px-36 rounded-lg">
          <div className="flex justify-center">
            <MdMapsHomeWork size={50} />
          </div>
          <h2 className="text-center">Real ESTATES</h2>
        </button>
        <button className="bg-white text-black my-6 mx-6 py-9 px-28 sm:px-36 rounded-lg">
          <div className="flex justify-center">
            <FaHeadphones size={50} />
          </div>
          <h2 className="text-center">BPO</h2>
        </button>
        <button className="bg-white text-black my-6 mx-6 py-9 px-28 sm:px-36 rounded-lg">
          <div className="flex justify-center">
            <MdOutlineShowChart size={50} />
          </div>
          <h2 className="text-center">Sales and Marketing</h2>
        </button>
        <button className="bg-white text-black my-6 mx-6 py-9 px-28 sm:px-36 rounded-lg">
          <div className="flex justify-center">
            <FaHandshake size={50} />
          </div>
          <h2 className="text-center">Human Resource</h2>
        </button>
        <button className="bg-white text-black my-6 mx-6 py-9 px-28 sm:px-36 rounded-lg">
          <div className="flex justify-center">
            <RiHotelBedFill size={50} />
          </div>
          <h2 className="text-center">Hotel</h2>
        </button>
        <button className="bg-white text-black my-6 mx-6 py-9 px-28 sm:px-36 rounded-lg">
          <div className="flex justify-center">
            <FaClinicMedical size={50} />
          </div>
          <h2 className="text-center">Medical</h2>
        </button>
        <button className="bg-white text-black my-6 mx-6 py-9 px-28 sm:px-36 rounded-lg">
          <div className="flex justify-center">
            <FaLaptop size={50} />
          </div>
          <h2 className="text-center">Technical</h2>
        </button>
        <button className="bg-white text-black my-6 mx-6 py-9 px-28 sm:px-36 rounded-lg">
          <div className="flex justify-center">
            <MdPrecisionManufacturing size={50} />
          </div>
          <h2 className="text-center">Manufacturing & Operations</h2>
        </button>
      </div>
    </div>
  );
}

export default ServeSection;
