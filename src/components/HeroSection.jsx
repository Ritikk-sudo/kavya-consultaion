import React from "react";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="mt-9 mx-2 mb-6">
      <h2 className="font-extrabold text-xl md:text-2xl mb-4 text-center">
        Good Life Begins With A Good Company
      </h2>
      <p className="text-center mx-6 md:mx-64">
        Kavaya placement & Consultancy provided best recruitment in Delhi NCR we
        are just a bridge between the company and the candidates. We provide
        man-power services and carrier counselling and guide to help jobseeker to
        find best job.
      </p>
      <div className="flex items-center justify-center ">
        <button className="text-center my-8 font-bold p-2 rounded-md bg-yellow-500 hover:bg-yellow-300">
          <Link href="/contact">Contact Now</Link>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
