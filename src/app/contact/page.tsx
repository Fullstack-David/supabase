import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Conatct() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="header">
          <h1 className="p-5 font-bold text-center text-[3rem]">Anmäla</h1>
        </div>
        <div>
          <form action="form">
            <input type="text" placeholder="Namn" />
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
