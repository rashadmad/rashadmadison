import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import * as React from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const BlogCard = ({ title, index, slug, img, imgAlt, headLine, source }) => {
  return (
    <li
      key={index}
      className="m-4 mx-auto h-[150px] max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl"
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
          <div className="text-sm font-semibold uppercase tracking-wide text-sky-400">
            {title}
          </div>
          <Link
            to={slug}
            target="_blank"
            className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
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

// Define prop types
BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  headLine: PropTypes.string.isRequired,
  source: PropTypes.string, // Since 'source' is defined but not used, consider removing it or using it
};

export default BlogCard;
