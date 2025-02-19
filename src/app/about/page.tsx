import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <h1 className="p-5 font-bold text-[3rem] text-center">About Page</h1>
      </main>
      <Footer />
    </div>
  );
}
