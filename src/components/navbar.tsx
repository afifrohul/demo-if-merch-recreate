"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToogle from "@/components/theme-toogle";
import {
  ShoppingCartIcon,
  LogOut,
  UserRoundPenIcon,
  BanknoteIcon,
  ChevronDownIcon,
  MenuIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function Navbar() {
  const pathname = usePathname();

  const navItems = [{ href: "/products", label: "Products" }];

  return (
    <div className="w-full flex justify-center">
      <nav className="bg-background mx-auto rounded w-full bg-white dark:bg-black/30 backdrop-blur-xs ">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between gap-4 md:gap-8">
            {/* LEFT */}
            <div className="flex items-center gap-4 md:gap-8">
              <Link href={"/"}>
                <div className="flex justify-center items-center gap-2">
                  <div className="border p-1.5 md:p-2 rounded md:rounded-lg bg-black">
                    <Image
                      src={"/logo-white.png"}
                      width={16}
                      height={16}
                      alt="logo"
                      className="w-2 md:w-4"
                    />
                  </div>
                  <p className="text-xs md:text-base font-bold">IF MERCH.</p>
                </div>
              </Link>
              <div className="flex gap-3">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`text-xs lg:text-sm hover:text-primary font-medium ${
                      pathname === item.href ? "text-primary underline" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <Link href={"/login"}>
                  <p className="text-sm hover:underline">Log in</p>
                </Link>
                <Link href={"/register"}>
                  <div className="border px-2 py-1.5 rounded hover:bg-accent duration-200">
                    <p className="text-sm">Register</p>
                  </div>
                </Link>
              </div>
              <ThemeToogle />
              {/* RESPONSIVE MENU */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <MenuIcon />
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <div className="grid flex-1 auto-rows-min gap-6 px-4">
                      <div className="flex flex-col gap-3">
                        <Link href={"/login"}>
                          <p className="text-sm hover:underline">Log in</p>
                        </Link>
                        <Link href={"/register"}>
                          <p className="text-sm hover:underline">Register</p>
                        </Link>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
