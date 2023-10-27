import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  return (
    <div
      className="
        sticky
        top-0
        w-full
        bg-slate-200
        z-30
        shadow-sm
     "
    >
      <div
        className="
         py-4
         border-b[1px]
       "
      >
        {/* wrap contents inside a container */}
        <Container>
          <div
            className="
             flex
             items-center
             gap-3
             justify-between
             md:gap-0
           "
          >
            {/*1 logo */}
            <Link
              href="/"
              className={`${redressed.className} font-bold text-2xl`}
            >
              E-Shop
            </Link>
            {/* search input 2 */}
            <div className="hidden md:block">search bar</div>
            {/* 2 cart & user menu wrapper */}
            <div
              className="
               flex
               items-center
               gap-8
               md:gap-12
              "
            >
              <div>Cart Count</div>
              <div>user menu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
