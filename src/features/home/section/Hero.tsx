import React from "react";

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/background.svg')",
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-start text-white px-4">
        <div className="absolute bottom-20 left-36">
          <p className="text-xl md:text-2xl lg:text-3xl mb-4">
            Solusi Terbaik dalam Pemantauan Wilayah dengan Rangka
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            PEMBANGUNAN KOTA HIJAU
          </h1>
        </div>
      </div>
    </div>
  );
}
