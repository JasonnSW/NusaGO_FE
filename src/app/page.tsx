import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/background.svg')",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="absolute bottom-20 left-32 text-white">
          <p className="text-3xl mt-4">
            Solusi Terbaik dalam Pemantauan Wilayah dengan Rangka
          </p>
          <h1 className="text-6xl font-bold">PEMBANGUNAN KOTA HIJAU</h1>
        </div>
      </div>
    </>
  );
}
