import * as React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Banner from "../components/Banner";
import Data from "../data/data";
import PortfolioCard from "../components/PortfolioCard";
import Seo from "../components/seo";
import logo from "../images/color_logo.svg";
import gif from "../images/ArrowAnimation.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as GatsbyLink } from "gatsby";
import Nav from "../components/nav";
import { faFile, faBook } from "@fortawesome/free-solid-svg-icons";
import { graphql } from 'gatsby'

const IndexPage = () => {
  return (
    <div className="flex min-h-screen grow flex-col">
      <Banner
        firstItem="Hire me!"
        secondItem="Open to software engineering opportunities"
        buttonText="Get in touch"
      />
      <Nav page="home" />
      <div className="gradient-background h-screen bg-gray-900 py-20">
        <div className="container sticky mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex h-screen items-center justify-center">
            <div className="md:w-1/2 lg:w-2/3">
              <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                Rashad Madison <br className="hidden md:block" />
                <span className="text-sky-400">Software Engineer</span>
              </h1>
              <p className="mb-8 text-lg text-gray-50 md:text-xl lg:text-2xl">
                Welcome to my site, here you can find examples of my work, a
                blog discussing my works in progress, and general info about me.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://drive.google.com/file/d/1Z8sB4M7QJHiODQFqbDYdYQhzk2lk0KjR/view?usp=sharing"
                  target="_blank"
                  className="rounded-md bg-sky-400 px-6 py-3 font-bold text-white no-underline hover:bg-sky-600" 
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFile} /> Resume
                </a>
                <GatsbyLink
                  to="/blog"
                  className="rounded-md bg-gray-700 px-6 py-3 font-bold text-white no-underline hover:bg-gray-600"
                >
                  <FontAwesomeIcon icon={faBook} /> Blog
                </GatsbyLink>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 lg:w-1/3">
              <img className="w-full min-w-3.5" src={logo} alt="Hero Image" />
            </div>
            <div className="absolute mb-4 bottom-12 left-1/2 transform -translate-x-1/2">
              <img src={gif} alt="Animated GIF" className="py-0" />
            </div>
          </div>
        </div>
      </div>
      <div id="portfolio" className="grow bg-white py-24 sm:py-32">
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
          <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 place-content-center gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {Data.map((data) => (
              <PortfolioCard
                key={data.id} // Add key prop here
                id={data.id}
                title={data.title}
                live={data.live}
                source={data.source}
                description={data.description}
                img={data.img}
                tech={data.tech}
              />
            ))}
          </ul>
        </div>
      </div>
      <footer className="bg-gray-800 py-4 text-white">
        <div className="container mx-auto flex items-center justify-center">
          <p>&copy; 2024 Rashad J Madison. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export const Head = ({ data }) => (
  <Seo
    title="Home"
    description="Welcome to my Gatsby site!"
    image="/profileimage.png" // Ensure this path is correct
    url={data.site.siteMetadata.siteUrl}
  />
);
export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

IndexPage.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  tech: PropTypes.string,
  live: PropTypes.string,
  source: PropTypes.string,
};

export default IndexPage;
