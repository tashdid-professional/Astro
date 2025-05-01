"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AlignRight, X } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount } = useCart();

  const links = [
    { name: "HOME", path: "/" },
    {
      name: "ABOUT",
      path: "/About",
      submenu: [
        { name: "Company Profile", path: "/About" },
        { name: "Our Products", path: "/About/Products" },
        { name: "Our Services", path: "/About/Services" },
        { name: "Founder's Message", path: "/About/Founder" },
        { name: "Mission,Vission & Values", path: "/About/Vision" },
        { name: "Our Team", path: "/About/Team" },
      ],
    },
    {
      name: "STORES",
      path: "/Stores",
      submenu: [
        { name: "Sirajganj", path: "/Stores" },
        { name: "Panchagarh", path: "/Stores/Panchagarh" },
        { name: "Barishal", path: "/Stores/Barishal" },
      ],
    },
    { name: "FRANCHISE", path: "/Franchise",
      submenu : [
        { name: "Happy Franchisee", path: "/Franchise" },
            { name: "Process of Franchisee", path: "/Franchise/Process" },
            { name: "Benefits of Franchisee", path: "/Franchise/Benefits" },
            { name: "Franchisee Registration", path: "/Franchise/Registration" },
      ]
     },
    {
      name: "MEDIA",
      path: "/Media",
      submenu: [
        { name: "News", path: "/Media" },
        { name: "Image Gallery", path: "/Media/Image" },
        { name: "Video Gallery", path: "/Media/Video" },
        { name: "Blog", path: "/Media/Blog" },
        
      ],
    },
    { name: "CAREER", path: "/Career" },
    { name: "CONTACT", path: "/Contact" },
  ];

  return (
    <header className="bg-[#2b0b3a] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <Image
              src="/images/logo3.png"
              alt="Logo"
              width={200}
              height={200}
            />
          </Link>
          <div className="relative lg:hidden">
              <Link href="/cart">
                <div>
                  <ShoppingCart
                    width={40}
                    height={40}
                    className="relative border p-2 rounded-md "
                  />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  href={link.path}
                  className={`hover:border-b-4 border-white transition duration-200 ${
                    pathname === link.path ||
                    (pathname.startsWith(link.path) && link.path !== "/")
                      ? "font-extrabold border-b-4"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </Link>

                {link.submenu && (
                  <ul className="absolute hidden group-hover:flex flex-col bg-white text-black top-full left-0 mt-1 rounded shadow-lg z-[999] min-w-[160px] gap-2 py-4">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.path}>
                        <Link
                          href={sublink.path}
                          className="px-4 py-2 hover:bg-purple-100 whitespace-nowrap"
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="relative lg:block hidden">
              <Link href="/cart">
                <div>
                  <ShoppingCart
                    width={40}
                    height={40}
                    className="relative border p-2 rounded-md "
                  />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>
            </div>
            
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white"
            >
              {mobileOpen ? <X size={24} /> : <AlignRight size={24} />}
            </button>
          </div>
          
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-44 z-[999] max-h-[100vh] overflow-y-auto" >
            {links.map((link) => (
              <div key={link.path}>
                <Link
                onClick={()=>setMobileOpen(false)}
                  href={link.path}
                  className={`block px-4 py-2 text-white ${
                    pathname === link.path || pathname.startsWith(link.path)
                      ? "font-bold text-red-500"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="ml-4">
                    {link.submenu.map((sublink) => (
                      <Link
                      onClick={()=>setMobileOpen(false)}
                        key={sublink.path}
                        href={sublink.path}
                        className="block px-4 py-1 text-gray-200 text-sm"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
