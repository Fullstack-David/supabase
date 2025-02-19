import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Conatct() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <h1 className="p-5 font-bold text-center text-[3rem]">Conatct Page</h1>
      </main>
      <Footer />
    </div>
  );
}
