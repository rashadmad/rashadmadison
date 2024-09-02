import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faComputerMouse
} from "@fortawesome/free-solid-svg-icons";

const PortfolioCard = ({
  id,
  title,
  img,
  imgAlt,
  live,
  source,
  description,
  tech,
}) => {
  return (
    <li key={id} className="max-h-svh min-h-60">
      <div className="flex justify-center p-3">
        <div className="max-w-sm overflow-hidden rounded rounded-b-lg bg-slate-100 shadow-lg">
          <img
            className="... h-[200px] max-h-64 w-full rounded-t-lg border-4 border-solid border-slate-100"
            src={img}
            alt={imgAlt}
          />
          <div className="px-6 py-2">
            <h2 className="mb-2 text-xl font-bold">{title}</h2>
            {tech.map((item, index) => (
              <span
                key={index}
                className="m-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="max-h-60 min-h-60 px-6 py-2">
            <p className="h-15 inline-block h-screen text-pretty align-middle text-base text-gray-700">
              {description}
            </p>
          </div>
          <div className="flex content-end justify-end px-6 py-4">
            <a href={live} target="_blank" rel="noreferrer">
              <button className="button m-2 rounded bg-sky-400 px-4 py-2 font-bold text-white drop-shadow-md hover:bg-sky-600">
                <FontAwesomeIcon icon={faComputerMouse} /> Try
              </button>
            </a>
            <a href={source} target="_blank" rel="noreferrer">
              <button className="button m-2 rounded bg-sky-400 px-4 py-2 font-bold text-white drop-shadow-md hover:bg-sky-600">
                <FontAwesomeIcon icon={faCodeBranch} /> Repo
              </button>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

PortfolioCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PortfolioCard;
