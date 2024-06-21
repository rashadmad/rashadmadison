import React from "react";
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
    <li key={id} className="min-h-60 max-h-svh ">
      <div className="flex justify-center px-3 py-3">
        <div className=" bg-slate-100 rounded-b-lg max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="rounded-t-lg h-[200px] w-full max-h-64 border-solid border-4 border-slate-100 ..."
            src={img}
            alt={imgAlt}
          />
          <div className="px-6 py-2">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            {tech.map((item, index) => (
              <span
                key={index}
                className="m-2 inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 text-xs"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="px-6 py-2 min-h-60 max-h-60" >
            <p className="text-gray-700 text-base h-15 text-pretty h-screen height: 100vh inline-block align-middle">{description}</p>
          </div>
          <div className="px-6 py-4 flex justify-end content-end">
          <a href={live} target="_blank">
            <button className="button drop-shadow-md m-2 bg-sky-400 hover:bg-sky-600 text-white font-bold rounded py-2 px-4">
                <FontAwesomeIcon icon={faComputerMouse} /> Try 
            </button>
          </a>
          <a href={source} target="_blank">
            <button className="button drop-shadow-md m-2 bg-sky-400 hover:bg-sky-600 text-white font-bold rounded py-2 px-4">
                <FontAwesomeIcon icon={faCodeBranch} /> Repo
            </button>
          </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PortfolioCard;
