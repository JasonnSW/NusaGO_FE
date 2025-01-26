import React from "react";
import PriceCards from "@/features/home/components/PriceCard";
import { Button } from "@/components/ui/button";
import leaf1 from "../../../../public/assets/leaf1.svg";
import leaf2 from "../../../../public/assets/leaf2.svg";
import Image from "next/image";

export default function Pricing() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-neutral-light space-y-12">
      <div className="flex items-center justify-center w-full pt-12 pb-4">
        <h1 className="w-3/5 font-bold text-primary-dark text-3xl sm:text-5xl text-center leading-[150%]">
          DAPATKAN PAKET TERBAIK SESUAI KEBUTUHAN ANDA
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <PriceCards />
      </div>
      <div className="w-full h-auto mb-12">
        <div className="relative max-w-7xl bg-primary-light_hover mx-auto text-center p-24">
          <Image
            src={leaf1}
            alt="leaf1"
            className="absolute top-12 right-36 transform translate-x-1/4 -translate-y-1/4 w-[650px] h-auto hidden md:block"
          />
          <div className="flex items-center justify-center flex-col space-y-4 relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              Siap untuk membangun kota hijau?
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600">
              buat akun atau hubungi kontak tim kami segera
            </p>
            <div className="flex justify-center gap-12 w-full py-4">
              <Button className="sm:w-2/3 md:w-1/5 h-12 text-xl hover:text-white px-6 py-3 rounded-full border-2 hover:bg-[#476d4f] bg-transparent border-gray-500 text-black">
                Sign In
              </Button>
              <Button className="sm:w-2/3 md:w-1/5 h-12 text-xl hover:text-white px-6 py-3 rounded-full border-2 hover:bg-[#476d4f] bg-transparent border-gray-500 text-black">
                Kontak Kami
              </Button>
            </div>
          </div>
          <Image
            src={leaf2}
            alt="leaf2"
            className="absolute -top-4 left-4 transform -translate-x-1/4 -translate-y-1/4 w-[450px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
