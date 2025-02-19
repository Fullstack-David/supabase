import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#101828] text-white p-10 text-center">
      <Link href="/footer">© 2025 Your Company, Inc. All rights reserved.</Link>
      <div className="flex justify-center gap-5 mt-4">
        <a
          href="https://www.instagram.com/p/CsD9Sz4oNLv/?img_index=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="w-6 h-6" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6" />
        </a>
        <a href="https://x.com/?mx=2">
          <FaTwitter className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
