import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = async () => {
  const currentUser = await getCurrentUser();

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
            <SearchBar />
            {/* 2 cart & user menu wrapper */}
            <div
              className="
               flex
               items-center
               gap-8
               md:gap-12
              "
            >
              {/* no of items in a cart */}
              <CartCount />
              {/* user menu */}
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>

      {/* categories */}
      <Categories />
    </div>
  );
};

export default NavBar;
