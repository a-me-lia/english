"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {isElementOverDarkBackground} from "@/lib/background"

const navItems = {
  "/home": {
    name: "home",
    id: "0",
  },
  "/art": {
    name: "art",
    id: "1",
  },
  "/literature": {
    name: "literature",
    id: "2",
  },
  "/film": {
    name: "film",
    id: "3",
  },
};

export default function Navbar() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/art")) {
    pathname = "/art";
  }
  if (pathname.includes("/literature")) {
    pathname = "/literature";
  }
  if (pathname.includes("/film")) {
    pathname = "/film";
  }

  let path = usePathname();
  path = path.slice(1);
  let pathitems = path.split("/");
  let level = pathitems.length;
  
  isElementOverDarkBackground("navv")


  return (
    <nav className="flex flex-col text-[18px] font tracking-tighter rounded-2xl ">
    {/* <div className="fixed top-0 left-0 w-full h-28 bg-white opacity-40 z-10"></div> */}
      <div className="md:mx-auto md:w-[742px] shadow-md ring-offset-2 ring-offset-dark mx-4 h-max  flex flex-col fixed right-0 top-0 left-0 z-50 md:mt-8 mt-10 p-4  rounded-2xl bg-black/30 " id="navv">
        <div className="flex flex-row ">
          <div className="flex flex-row items-baseline -mr-6 ">
            <Link href={"/"} className="md:block hidden  text-white/40" id="matthewguo.com">
              matthewguo.com&nbsp; / &nbsp;
            </Link>

            {Object.entries(navItems).map(([path, { name, id }]) => {
              const isActive = path === pathname;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`pr-6 ${
                    isActive ? "text-white" : "text-white/40"
                  } transition-colors duration-1000`}
                >
                  <p id={id}>{name}</p>
                </Link>
              );
            })}
          </div>

          <h2 className=" md:block hidden text-neutral-900">
            {level >= 2 && (
              <Link
                className=" hover:text-neutral-500 transition-colors duration-200"
                href={`/${pathitems[0]}${pathitems[0] != "" ? "/" : ""}${
                  pathitems[1]
                }`}
              >
                &nbsp; /&nbsp; {pathitems[1]}&nbsp;
              </Link>
            )}
            {level == 3 && (
              <Link
                className=" hover:text-neutral-500 transition-colors duration-200"
                href={`/${pathitems[0]}${pathitems[0] != "" ? "/" : ""}${
                  pathitems[1]
                }/${pathitems[2]}`}
              >
                {" "}
                /&nbsp; {pathitems[2]}
              </Link>
            )}
          </h2>
        </div>

        <div className="md:hidden bg-gray-200 h-[1px] mt-2 "></div>

        <div className=" md:hidden h-4 mt-2 mb-2 text-[14px] text-neutral-900 flex flex-row">
          <Link href={"/home"} className="mr-1  hover:text-neutral-400">
            matthewguo.com{" "}
          </Link>

          <Link
            className="mr-1 hover:text-neutral-300"
            href={`/${pathitems[0]}`}
          >
            {" "}
            / {pathitems[0]}
          </Link>

          {level >= 2 && (
            <Link
              className="mr-1  hover:text-neutral-300"
              href={`/${pathitems[0]}${pathitems[0] != "" ? "/" : ""}${
                pathitems[1]
              }`}
            >
              {" "}
              / {pathitems[1]}
            </Link>
          )}
          {level == 3 && (
            <Link
              className=" hover:text-neutral-300"
              href={`/${pathitems[0]}${pathitems[0] != "" ? "/" : ""}${
                pathitems[1]
              }/${pathitems[2]}`}
            >
              {" "}
              / {pathitems[2]}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}