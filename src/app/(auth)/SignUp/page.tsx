import Image from "next/image";
import React from "react";
import Logo from "../../../../public/assets/LogoGreen.svg";

export default function SignUp() {
  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 h-full p-12"
        style={{
          backgroundImage: "url('/assets/SignUpBackground.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white absolute bottom-16 left-8">
          <h1 className="text-4xl font-bold px-2">Analisis Wilayahmu</h1>
          <p className="text-lg mt-4">
            Ketahui tutupan lahan, indeks vegetasi serta estimasi jejak karbon
            dalam satu waktu.
          </p>
        </div>
      </div>

      <div className="w-1/2 h-full bg-white">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex items-center justify-center gap-x-2">
            <Image src={Logo} alt="Logo" className="" />{" "}
            <h1 className="font-geist-arial font-bold text-2xl text-primary-primary">NUSAGO</h1>
          </div>
          <h2 className="text-2xl font-bold mb-6 text-primary-">Create your account</h2>
          <form className="w-full max-w-sm space-y-2">
            <Input label="Nama Lengkap" placeholder="Richard" />
            <Input
              label="Nama Instansi"
              placeholder="Berikan nama instansi anda"
            />
            <Input
              label="Email"
              placeholder="Richard@workmail.com"
              type="email"
            />
            <Input label="Username" placeholder="Buat Username anda" />
            <Input
              label="Password"
              placeholder="Buat Password anda"
              type="password"
            />
            <div className="flex items-center my-4">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms">
                Saya setuju dengan{" "}
                <a href="#" className="text-primary-primary">
                  Syarat dan Ketentuan
                </a>{" "}
                yang berlaku
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-primary text-white py-2 rounded-md hover:bg-[#E3E8EC] hover:text-[#A6B6C2]"
            >
              Buat Akun
            </button>
          </form>
          <p className="mt-4">
            Sudah memiliki akun?{" "}
            <a href="#" className="text-primary-primary">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-[#3B3B3B]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-md focus:outline-none "
      />
    </div>
  );
}
