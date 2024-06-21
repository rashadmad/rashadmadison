import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import * as React from "react";

import { faEye } from "@fortawesome/free-solid-svg-icons";

const BlogCard = ({ title, index, slug, img, imgAlt, headLine, source }) => {
  return (
    <li
      key={index}
      className="h-[150px] max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4"
    >
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-[12px] w-full object-cover md:h-full md:w-48"
            src={img}
            alt={imgAlt}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-sky-400 font-semibold">
            {title}
          </div>
          <Link
            to={slug}
            target="_blank"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            <FontAwesomeIcon icon={faEye} /> Read
          </Link>
          <p className="mt-2 text-slate-500">{headLine}</p>
        </div>
        <div></div>
        <div className="bg-current">asdf</div>
      </div>
    </li>
  );
};

export default BlogCard;
