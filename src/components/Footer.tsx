import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/LogoGreen.svg";

export default function Footer() {
  return (
    <footer className="bg-neutral-light py-12 w-full">
      <div className="max-w-7xl sm:px-12 px-0 mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-6 text-gray-700">
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 items-center justify-start">
            <Image src={Logo} alt="Logo" width={25} height={25} />
            <h3 className="text-2xl font-bold text-primary-primary">NUSAGO</h3>
          </div>
          <ul className="space-y-2 font-normal text-lg pt-4">
            <li>Sign Up</li>
            <li>Langganan</li>
            <li>Contact Us</li>
            <li>Portofolio</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-primary-dark mb-4">
            PRODUCTS
          </h3>
          <ul className="space-y-2 font-normal text-lg">
            <li>Peta Hijau</li>
            <li>Coming soon</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-primary-dark mb-4">SOSIAL</h3>
          <ul className="space-y-2 font-normal text-lg">
            <li>Instagram</li>
            <li>X</li>
            <li>Facebook</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-primary-dark mb-4">ALAMAT</h3>
          <p className="font-normal text-lg">Lowokwaru, Malang, Indonesia</p>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-center col-span-2 md:col-span-1">
          <Image src={Logo} alt="Logo" width={50} height={25} />
          <h3 className="text-2xl font-bold text-primary-primary ml-2">
            NUSAGO
          </h3>
        </div>
        <div className="max-w-7xl mx-auto text-center text-lg text-gray-500">
          <p>&copy;2024 Copyright Nusago Privacy Policy</p>
    
        </div>
      </div>
    </footer>
  )
}
