import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex p-8 justify-end gap-10 bg-[#007bff] text-white">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
