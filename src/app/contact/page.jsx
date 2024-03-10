import React from "react";
import Link from "next/link";
import { MdContactEmergency } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

function page() {
  return (
    <div className="mb-14 mx-6">
      <h2 className="flex justify-center items-center font-extrabold text-4xl my-6">
        <MdContactEmergency className="mr-4" size={80} />
        Contact Us
      </h2>

      <div className="text-sm md:flex md:flex-col md:w-[60%] md:mx-auto md:text-2xl rounded-xl bg-slate-200 shadow-xl py-4 px-6 md:p-16">
        <h3 className="flex ">
          <FaMobileAlt size={40} />
          <Link className="hover:text-blue-400 ml-6" href="#">
            +91 9315763060
          </Link>
        </h3>

        <h3 className="flex">
          <MdEmail size={40} />
          <Link
            className="hover:text-blue-400 ml-6"
            href="https://mail.google.com/mail/u/0/#inbox?compose=dwRftKVLWZCDqBSSdRkQbthxClcQWWrPwmSqgQDDvfHGSXsMtdsDjJRJQvDcNTGBGwgDMVVsflLGCpXVqjRgFWqgZMVplLHPDScGQRJlrhKtGcXLkzbXvHwstvDzdbppthXDcWwzpgnqcbvmBNctPRtNdDRlRQffkrjDTqJQV"
          >
            kavayaconsultancy@gmail.com
          </Link>
        </h3>
        <h3 className="flex">
          <RiInstagramFill size={40} />
          <Link
            className="hover:text-blue-400 ml-6"
            href="https://www.instagram.com/kavayaplacement/?igsh=MXBmc3Ribm9vZWNrdA%3D%3D"
          >
            {" "}
            @kavaya_placement
          </Link>
        </h3>
        <h3 className="flex">
          <IoLogoWhatsapp size={40} />
          <Link
            className="text-black font-semibold hover:text-blue-400 ml-6"
            href="https://wa.me/c/919315763060"
          >
            Contact Now
          </Link>
        </h3>
      </div>
      <p className="text-center mt-16 md:mx-36">
        Kavaya placement & Consultancy offers a range of services that can help
        individual and organisation a like kavaya placement &consultancy provide
        career counselling and guide to help job seekersto find their ideal
        jobs.
      </p>
    </div>
  );
}

export default page;
