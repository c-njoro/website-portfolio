import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const [ham, setHam] = useState("unclicked");
  const [menuClass, setMenuClass] = useState("hide");
  const router = useRouter();

  const openMenu = () => {
    const nav: HTMLElement | null = document.getElementById("nav");
    const menu: HTMLElement | null = document.getElementById("menu");
    if (ham == "unclicked") {
      setHam("clicked");
      setMenuClass("menu-show");
      nav?.classList.add("give-black-bg");
      menu?.classList.add("give-black-bg");
    } else {
      setHam("unclicked");
      setMenuClass("hide");
      nav?.classList.remove("give-black-bg");
      menu?.classList.remove("give-black-bg");
    }
  };

  //a use effect to listen when page changes to close the menu automatically
  useEffect(() => {
    const handleRouteChange = () => {
      const nav: HTMLElement | null = document.getElementById("nav");
      const menu: HTMLElement | null = document.getElementById("menu");
      setHam("unclicked");
      setMenuClass("hide");
      nav?.classList.remove("give-black-bg");
      menu?.classList.remove("give-black-bg");
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <div className=" w-screen h-max flex flex-col">
      <div
        className="w-screen sm:h-[calc(15vh)] h-[calc(10vh)]   flex flex-row justify-between items-center px-12"
        id="nav"
      >
        <p className=" font-body font-semibold text-5xl text-blue-300">C.</p>
        <div className={`${ham}`} onClick={openMenu}></div>
      </div>

      <div className={`${menuClass}`}>
        <div
          className="w-screen sm:h-[calc(85vh)] h-[calc(90vh)]  grid lg:grid-cols-2 grid-cols-1 text-white "
          id="menu"
        >
          <div className="w-full h-full flex flex-col justify-center items-center gap-8 relative">
            <Link
              className="font-body font-semibold text-xl tracking-wide hover:text-orange-300 hover:translate-x-3 hover:cursor-pointer"
              href="/"
            >
              Homepage
            </Link>
            <Link
              className="font-body font-semibold text-xl tracking-wide hover:text-orange-300 hover:translate-x-3 hover:cursor-pointer"
              href="/services"
            >
              Portfolio
            </Link>
            <Link
              className="font-body font-semibold text-xl tracking-wide hover:text-orange-300 hover:translate-x-3 hover:cursor-pointer"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="font-body font-semibold text-xl tracking-wide hover:text-orange-300 hover:translate-x-3 hover:cursor-pointer"
              href="/services"
            >
              Newsletter
            </Link>
            <Link
              className="font-body font-semibold text-xl tracking-wide hover:text-orange-300 hover:translate-x-3 hover:cursor-pointer"
              href="/services"
            >
              Other Pages
            </Link>
          </div>

          <div className="w-full h-full hidden lg:grid grid-cols-2 p-24 pt-32">
            <div className="w-full h-full flex flex-col justify-start items-start gap-1">
              <h1 className="font-bold font-body tracking-wide mb-2">
                Projects
              </h1>
              <p className="font-heading tracking-wide font-extralight text-sm">
                Websites
              </p>
              <p className="font-heading tracking-wide font-extralight text-sm">
                Web Apps
              </p>
              <p className="font-heading tracking-wide font-extralight text-sm">
                Mobile Apps
              </p>
              <p className="font-heading tracking-wide font-extralight text-sm">
                Stand alone app
              </p>
              <p className="font-heading tracking-wide font-extralight text-sm">
                Shopify Web
              </p>
              <p className="font-heading tracking-wide font-extralight text-sm">
                Ussd codes
              </p>
            </div>

            <div className="w-full h-full flex flex-col justify-start items-start gap-1">
              <h1 className="font-bold font-body tracking-wide mb-2">
                Useful Links
              </h1>
              <p className="font-heading tracking-wide font-extralight text-sm">
                Privacy policy
              </p>
              <p className="font-heading tracking-wide font-extralight text-sm">
                Terms and Conditions
              </p>
              <p className="font-heading tracking-wide font-extralight text-sm">
                Cookie Policy
              </p>
              <p className="font-heading tracking-wide font-extralight text-sm">
                Careers
              </p>
            </div>

            <div className="w-full h-full flex flex-col justify-start items-start gap-1">
              <h1 className="font-bold font-body tracking-wide mb-2">Kenya</h1>
              <p className="font-heading tracking-wide font-extralight text-sm">
                Nairobi
              </p>
              <p className="font-heading tracking-wide font-extralight text-sm">
                Donholm, Savannah
              </p>
              <p className="font-heading tracking-wide font-extralight text-sm">
                mwanikic314@gmail.com
              </p>
              <p className="font-heading tracking-wide font-extralight text-sm">
                +254720128694
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
