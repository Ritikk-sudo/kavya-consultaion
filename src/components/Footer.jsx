import React from "react";
import Image from "next/image";
import icon from "../../public/images/icon.jpg";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <footer class=" rounded-lg shadow bg-[#060842] m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            class="flex justify-center items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={icon}
              width={150}
              height={150}
              className="sm:w-72 w-64 pl-4"
              alt="icon"
            ></Image>
          </Link>

          <ul class="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/about" class="hover:underline me-4 md:me-6">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" class="hover:underline me-4 md:me-6">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" class="hover:underline me-4 md:me-6">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" class="hover:text-green-600 me-4 md:me-6">
                <BsWhatsapp size={35} />
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <p className="text-white text-center md:text-end">
            Contact No:{" "}
            <Link className="hover:text-blue-400" href="#">
              +91 9315763060
            </Link>
            <br />
            Email Id:
            <Link className="hover:text-blue-400" href="#">
              kavayaconsultancy@gmail.com
            </Link>
            <br />
            Insta Page:{" "}
            <Link
              className="hover:text-blue-400"
              href="https://www.instagram.com/kavayaplacement?igsh=MXBmc3Ribm9vZWNrdA=="
            >
              @kavaya_placement
            </Link>
          </p>
        </div>

        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link href="/" class="hover:underline">
            KavayaPlacement&Consultancy™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
