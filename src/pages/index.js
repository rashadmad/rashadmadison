import * as React from "react";
import Banner from "../components/Banner";
import Data from "../data/data";
import PortfolioCard from "../components/PortfolioCard";
import Seo from "../components/seo";
import logo from "../images/color_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as GatsbyLink } from "gatsby";
import Nav from "../components/nav"

import { faFile, faBook } from "@fortawesome/free-solid-svg-icons";



const IndexPage = ({ id, index, title, description, img, imgAlt, tech, live, source }) => {
  return (
      <div className="flex-grow flex flex-col min-h-screen">
        <Banner
          firstItem="Hire me!"
          secondItem="Open to software engineering opportunities"
          buttonText="Get in touch"
        ></Banner>
        <Nav page="home"></Nav>
        <div className="border-b border-gray-200"></div>
        <div className="bg-gray-900 py-20 h-screen gradient-background">
          <div className="container max-w-7xl mx-auto px-6 md:px-12 sticky">
            <div className="flex items-center justify-center h-screen">
              <div className="mt-15 md:w-1/2 lg:w-2/3">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                  Rashad Madison <br className="hidden md:block" />
                  <span className="text-sky-400">Software Engineer</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-50 mb-8">
                  Welcome to my site, here you can find examples of my work, A
                  blog discussing my works in progress and general info about
                  me.
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://drive.google.com/file/d/1Z8sB4M7QJHiODQFqbDYdYQhzk2lk0KjR/view?usp=sharing"
                    target="_blank"
                    className="no-underline bg-sky-400 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-md"
                  >
                    <FontAwesomeIcon icon={faFile} /> Resume
                  </a>
                  <GatsbyLink
                    to="/blog"
                    className="no-underline bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md"
                  >
                    <FontAwesomeIcon icon={faBook} /> Blog
                  </GatsbyLink>
                </div>
              </div>
              <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                <img className="w-full min-w-3.5" src={logo} alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
        <div id="portfolio" className="bg-white py-24 sm:py-32 flex-grow">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Portfolio
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Take a look at my work. Most of my work is created in Vanilla
                JavaScript. At the moment I am taking the time to update
                everything with frontend frameworks.
              </p>
            </div>
            <ul className="place-content-center mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {Data.map((data) => (
                <PortfolioCard
                  id={data.id}
                  title={data.title}
                  live={data.live}
                  source={data.source}
                  description={data.description}
                  img={data.img}
                  tech={data.tech}
                ></PortfolioCard>
              ))}
            </ul>
          </div>
        </div>
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex items-center justify-center">
            <p>&copy; 2024 Rashad J Madison. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
};

export function Head() {
  return (
    <>
      <html lang="en" className="scroll-smooth" />
      <Seo title="Home" />
    </>
  )
}

export default IndexPage;
