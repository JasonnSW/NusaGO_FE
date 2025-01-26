import Image from "next/image";
import React from "react";
import LogInBackground from "../../../../public/assets/LogInBackground.svg";
import SignInForm from "@/features/auth/components/form/SignInForm";
export default function SignIn() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#D9EAD3] font-geist-arial">
      <div className="flex flex-row bg-white rounded-xl w-3/6 md:w-auto h-auto shadow-lg">
        <div className="relative md:w-1/2 p-6 hidden md:block">
          <Image
            src={LogInBackground}
            alt="Background"
            className="rounded-lg w-full h-full object-cover"
            priority
            loading="eager"
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-white font-bold text-xl md:text-2xl max-w-xs">
              Capai Kota Hijau Impian dengan Nusago
            </h2>
          </div>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
