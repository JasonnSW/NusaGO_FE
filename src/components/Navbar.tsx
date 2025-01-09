import Image from "next/image";
import React from "react";
import logo from "../../public/assets/Logo.svg";
import NavLink from "./NavLink";
import { Links } from "@/data/Link";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-x-8 items-center h-auto bg-transparant text-white absolute top-4 left-32 shadow-sm font-geist-arial z-50">
      <div className="flex flex-row">
        <Image src={logo} alt="logo" className="bg-transparant size-20" />
        <h1 className="text-4xl font-bold col flex items-center">NUSAGO</h1>
      </div>
      <NavLink links={Links} />
      <div className="flex items-center justify-between gap-x-5">
        <Link href="#" className="font-geist-arial  font-bold text-xl">
          Contact Us
        </Link>
        <div className="font-bold text-xl">|</div>
        <Link href="#" className="font-geist-arialfont-bold text-xl">
          Log in
        </Link>
        <Link
          href="/SignUp"
          className="px-4 py-2 flex items-center bg-primary-primary rounded-full hover:bg-primary-light hover:text-primary-normal_hover text-xl font-bold ml-F4"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
