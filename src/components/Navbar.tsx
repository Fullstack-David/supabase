import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex p-8 justify-end gap-10 bg-[#007bff] text-white">
      <Link href="/" className="hover:scale-110 duration-300 ease-in ">
        Home
      </Link>
      <Link href="/about" className="hover:scale-110 duration-300 ease-in ">
        About
      </Link>
      <Link href="/register" className="hover:scale-110 duration-300 ease-in ">
        Register
      </Link>
      <Link href="/login" className="hover:scale-110 duration-300 ease-in  ">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
