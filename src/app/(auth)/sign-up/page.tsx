import React from "react";
import SignUpForm from "@/features/auth/components/form/SignUpForm";

export default function SignUp() {
  return (
    <div className="flex h-screen gap-x-4 md:gap-x-0">
      <div
        className="w-1/2 h-full p-12 flex flex-col justify-between"
        style={{
          backgroundImage: "url('/assets/SignUpBackground.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative flex flex-col justify-end items-start text-white h-full px-2 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl w-auto md:w-1/2 leading-tight font-normal">
            Analisis Wilayahmu
          </h1>
          <p className="sm:text-lg md:text-xl lg:text-3xl mt-4 max-w-2xl leading-12">
            Ketahui tutupan lahan, indeks vegetasi serta estimasi jejak karbon
            dalam satu waktu
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full bg-white space-y-2">
        <SignUpForm />
      </div>
    </div>
  );
}
