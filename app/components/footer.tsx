"use client";
import Link from "next/link";
import useWindowSize from "@/lib/window";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


export default function Footer() {
  const path = usePathname();
  const width = useWindowSize();
  const [expand, setExpand] = useState(false);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (typeof window != "undefined") {
      setScroll(window.scrollY);
      window.addEventListener("scroll", (event) => {
        setScroll(window.scrollY);
      });
    }
  }, []);

  useEffect(() => {
    function getDocHeight() {
      if (typeof document != "undefined") {
        var D = document;

        return D.documentElement.scrollHeight - 900;
      }
      return 0;
    }

    if (scroll > getDocHeight() && getDocHeight() >= window.innerHeight) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  }, [scroll]);
  function getDocHeight() {
    if (typeof document != "undefined") {
      var D = document;

      return D.documentElement.scrollHeight - 900;
    }
    return 0;
  }

  return (
    <>

      {width >= 768 && (
        <div
          className={`transition-all duration-[0.8s] ease-in-out fixed bottom-0 w-full  overflow-hidden text-white  ${
            expand
              ? " bg-red-900  h-48 mt-8"
              : "  bg-red-900 h-8 mt-48"
          }`}
          onMouseEnter={() => setExpand(true)}
          onMouseLeave={() => {
            if (scroll < getDocHeight()) {
              setExpand(false);
            }
          }}
        >
          {true && (
            <>
              <div
                className={`flex ${
                  expand ? "opacity-100" : "opacity-0"
                } flex-col-reverse md:flex-row justify-between  md:px-64 sm:px-2 items-center  transition-opacity duration-1000 h-full `}
              >
                <div className="flex flex-row items-center md:space-x-6">
                  <h1>english.matthewguo.com</h1>
                  <span className="md:block hidden  text-[36px]">/</span>

                  <div className="flex md:flex-col flex-row md:space-x-0 space-x-2 mt-8 md:mt-0">
                  <Link className=" hover:underline" href="/home">
                home
              </Link>
              <Link className=" hover:underline" href="/art">
                art
              </Link>
              <Link className=" hover:underline" href="/literature">
                literature
              </Link>
              <Link className=" hover:underline" href="/film">
                film
              </Link>
              <Link className=" hover:underline" href="/sitemap.xml">
                sitemap
              </Link>
                  </div>
                </div>
              </div>

              <div className="fixed bottom-1 left-2 text-[12px] text-black/25">
                Matthew Guo
              </div>
            </>
          )}
        </div>
      )}
      {width < 768 && (
        <div className="mt-48 relative z-50 py-4 h-max md:h-48 bg-red-900 text-white ">
          <div className="flex flex-col justify-between mb-32 px-2  items-center h-full">
          <h1>english.matthewguo.com</h1>
            <div className="w-full h-1 bg-white/50 mt-2 mb-2"></div>
            <div className="flex flex-row  justify-between w-full px-2  mb-8">
              <Link className=" hover:underline" href="/home">
                home
              </Link>
              <Link className=" hover:underline" href="/art">
                art
              </Link>
              <Link className=" hover:underline" href="/literature">
                literature
              </Link>
              <Link className=" hover:underline" href="/film">
                film
              </Link>
              <Link className=" hover:underline" href="/sitemap.xml">
                sitemap
              </Link>
            </div>
          </div>

          <div className="fixed bottom-1 left-2 text-[12px] text-black/25">
            Matthew Guo
          </div>
          
        </div>
      )}


    </>
  );
}