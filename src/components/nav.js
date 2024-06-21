import React from "react";
import { Link as GatsbyLink } from "gatsby";

const regularButton = "text-black text-sm px-4 py-2 leading-none rounded-full hover:white-700 appearance-none decoration-orange-600 no-underline";
const activeButton = "text-slate-400 text-sm px-4 py-2 leading-none rounded-full hover:white-700 appearance-none no-underline";

const Nav = ({ page }) => {
  return (
    <nav className="z-20 fixed w-full text-center md:z-30 md:top-0 md:left-0 md:right-0 bg-white md:text-white py-3 md:px-4 md:flex items-center justify-between shadow-md">
      <a
        className="md:block md:text-black md:text-xl md:tracking-tight md:no-underline md:appearance-none hidden"
        href="/"
      >
        Rashad Madison | Software Engineer
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
      </div>
    </nav>
  );
};

export default Nav;