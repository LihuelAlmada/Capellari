"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/products/all",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Cart",
    href: "/cart",
  },
  {
    label: "Login",
    href: "/login",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full bg-gray-600">
      <div className="container m-auto py-6 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src="/logoElectrodomesticosCapellari.png"
            alt="Logo"
            width={200}
            height={50}
          />
        </Link>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4">
          Home Appliances Capellari
        </p>
        <nav className="flex justify-between gap-2">
          {links.map((link) => {
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`${
                  pathname === link.href && "font-bold"
                } text-base text-slate-100 p-3`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
