import { CheckboxWithLabel } from "@/components/CheckBoxWithLabel";
import { InputWithLabel } from "@/components/InputWithLabel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../../public/assets/LogoGreen.svg";
import React from "react";

export default function SignUpForm() {
  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4 font-geist-arial">
      <div className="flex items-center justify-center gap-x-2">
        <Image src={Logo} alt="Logo" className="w-16 h-24" />{" "}
        <h1 className="font-geist-arial font-bold text-2xl text-primary-primary">
          NUSAGO
        </h1>
      </div>
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-6 text-[#474747]">
        Create your account
      </h2>
      <div className="container flex flex-col items-center justify-center">
        <form className="w-full px-4 max-w-md space-y-4">
          <InputWithLabel label="Nama Lengkap" placeholder="Richard" />
          <InputWithLabel
            label="Nama Instansi"
            placeholder="Berikan nama instansi anda"
          />
          <InputWithLabel
            label="Email"
            placeholder="Richard@workmail.com"
            type="email"
          />
          <InputWithLabel label="Username" placeholder="Buat Username anda" />
          <InputWithLabel
            label="Password"
            placeholder="Buat Password anda"
            type="password"
          />
          <div className="flex items-center my-2">
            <CheckboxWithLabel
              id="terms"
              label="Saya setuju dengan"
              termsText="Syarat dan Ketentuan"
              suffixText="yang berlaku"
              className="text-primary-primary"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary-primary text-white py-2 rounded-md hover:bg-[#E3E8EC] hover:text-primary-primary"
          >
            Buat Akun
          </Button>
        </form>
        <p className="mt-2 flex justify-center">
          Sudah memiliki akun?&nbsp;
          <Link href="/sign-in" className="text-primary-primary">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
