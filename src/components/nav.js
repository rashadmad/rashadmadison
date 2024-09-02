import React from "react";
import { Link as GatsbyLink } from "gatsby";
import logo from "../images/color_logo.svg";

const regularButton = "text-black text-sm px-4 py-2 leading-none rounded-full hover:white-700 appearance-none decoration-orange-600 no-underline";
const activeButton = "text-slate-400 text-sm px-4 py-2 leading-none rounded-full hover:white-700 appearance-none no-underline";

const Nav = ({ page }) => {
  return (
    <nav className="z-20 w-full items-center justify-between bg-white py-3 text-center shadow-md md:inset-x-0 md:top-0 md:z-30 md:flex md:px-4 md:text-white">
      <a
        className="hidden md:block md:appearance-none md:text-xl md:tracking-tight md:text-black md:no-underline"
        href="/"
      >
        <img className="m-2 inline w-10" src={logo} alt="logo" />Rashad Madison | Software Engineer
      </a>
      <div className="text-center">
        <GatsbyLink
          className={page === "home" ? activeButton : regularButton}
          href="/"
        >
          Home
        </GatsbyLink>
        {page === "home" && (
          <GatsbyLink
            className={page === "portfolio" ? activeButton : regularButton}
            to="#portfolio"
          >
            Portfolio
          </GatsbyLink>
        )}
        <GatsbyLink
          className={page === "about" ? activeButton : regularButton}
          to="/about"
        >
          About
        </GatsbyLink>
        <GatsbyLink
          className={page === "blog" ? activeButton : regularButton}
          to="/blog"
        >
          Blog
        </GatsbyLink>
        <GatsbyLink
          className={page === "login" ? activeButton : regularButton}
          to="/loginPage"
        >
          Sign In
        </GatsbyLink>
      </div>
    </nav>
  );
};

export default Nav;