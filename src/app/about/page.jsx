import React from "react";
import img from "../../../public/images/about-img.jpg";
import Image from "next/image";

function page() {
  return (
    <div className="mb-16">
      <h2 className="font-bold text-2xl text-center mt-11 mb-6">
        Company Overview
      </h2>
      <p className="text-center mx-8 mb-8 md:mx-64">
        Kavaya Placement & Consultancy was founded in 2023. By Laxmi and Deepti
        and our managing director mrs Sushma Bhatia our vision to generate
        employment in Pan India. We provide to all type of manpowr service like
        BPO services, Hotel services, Sales and Marketing.
      </p>
      <Image
        src={img}
        alt="about-img"
        className="mx-auto w-[90%] sm:w-[50%]"
        width={500}
        height={500}
        objectFit="cover"
        objectPosition="center"
      />
      <h2 className="font-bold text-2xl text-center mt-11 mb-2">Our Mission</h2>
      <p className="text-center mx-8 mb-8 md:mx-64">
        We aim to create a bridge between the deserving candidates and the
        organisation that are looking for talented resources.
      </p>
    </div>
  );
}

export default page;
