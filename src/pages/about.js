import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link as GatsbyLink } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import typeScriptLogo from "../images/typescript.svg";
import grafanaLogo from "../images/grafana.svg";
import swaggerLogo from "../images/swagger.svg";
import gatsbyLogo from "../images/gatsby.svg";
import Nav from "../components/nav"

import {
  faUniversalAccess,
  faGaugeHigh,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faSass,
  faAws,
  faVuejs,
  faJava,
  faNodeJs,
  faBootstrap,
  faFigma,
  faSketch,
} from "@fortawesome/free-brands-svg-icons";

const aboutPage = ({ data }) => {
  return (
    <div className="flex-grow flex flex-col min-h-screen">
      <Nav page="about"></Nav>
      <main class="mx-auto max-w-7xl px-6 lg:px-8">
      <h1>Meet Rashad</h1>
        <div class="mx-auto mt-20 grid max-w-2xl grid-cols-1 h-full gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                My Values
              </p>
              <p class="border-t pt-3 mt-6 text-lg leading-8 text-gray-600">
                I try my best to live my life by principles. When I am doing
                work for a client is no time to concede these principles With my
                experience in design, testing and developing software I have
                made a major commitment to adhere to these principles.
              </p>
              <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div class="relative pl-9">
                  <dt class="inline font-semibold text-sky-400">
                    <svg
                      class="mr-5 absolute left-0 top-0 bottom-7 h-10 w-8 text-sky-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={faShieldHalved} />
                    </svg>
                    Secure: &nbsp;
                  </dt>
                  <dd class="inline">
                    Protecting user data from black hat actors is not only a top
                    priority for me as an engineering but it is a value. People
                    trust you with there data so you can enrich there lives.
                  </dd>
                </div>
                <div class="relative pl-9">
                  <dt class="inline font-semibold text-sky-400">
                    <svg
                      class="mr-5 absolute left-0 top-0 h-10 w-8 text-sky-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={faGaugeHigh} />
                    </svg>
                    Efficient: &nbsp;
                  </dt>
                  <dd class="inline">
                    Often the difference of a few seconds can make all of the
                    difference for your application. The same can be said about
                    for your sites bandwidth. 
                  </dd>
                </div>
                <div class="relative pl-9">
                  <dt class="inline font-semibold text-sky-400">
                    <svg
                      class="mr-5 absolute left-0 top-0 h-10 w-8 text-sky-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={faUniversalAccess} />
                    </svg>
                    Accessible: &nbsp;
                  </dt>
                  <dd class="inline">
                    We cant fail the user, who ever that user may be. People who
                    are blind utilize screen readers to utilize software. I was always taught to look out for folks who need a helping hand.
                    I always keep that in mind when developing with ally in mind. Also it avoids lawsuits, thats how I look out for my clients.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <img
              src="https://rashad-madison-images.s3.us-east-2.amazonaws.com/profile.jpg"
              alt="Rashad J Madison"
              className="rounded-xl mt-4 shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
        <div className="w-full border-b mb-4">
        <p class="w-full pb-5 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Skills
            </p>
        </div>
        <div class="flex flex-col text-pretty sm:grid grid-cols-1 sm:gap-x-8 sm:gap-y-6 sm:grid-cols-2">
          <div>
            <ul class="grid grid-cols-3 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm;gap-4 p-4">
              <li class="bg-gray-100 p-4 text-center max-w-28 rounded-md">
                <FontAwesomeIcon icon={faHtml5} size="3x" />
                <h3 class="text-center mt-2 text-sm">HTML 5</h3>
              </li>
              <li class="bg-gray-100 p-4 text-center max-w-28 rounded-md">
                <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                <h3 class="text-center">CS3</h3>
              </li>
              <li class="bg-gray-100 p-4 text-center max-w-28 text-sm rounded-md">
                <FontAwesomeIcon icon={faJs} size="3x" />
                <h3 class="text-center text-s mt-2">JavaScript</h3>
              </li>
              <li class="flex-col bg-gray-100 p-4 max-w-28 rounded-md">
                <img
                  class="flex items-center justify-center size-10 mb-2 m-auto"
                  src={typeScriptLogo}
                  alt="typescript"
                />
                <h3 class="mt-0 text-center">Typescript</h3>
              </li>
              <li class="bg-gray-100 p-4 text-center rounded-md max-w-28">
                <FontAwesomeIcon icon={faReact} size="3x" />
                <h3 class="text-center">React.js</h3>
              </li>
              <li class="bg-gray-100 p-4 text-center max-w-28 rounded-md">
                <FontAwesomeIcon icon={faVuejs} size="3x" />
                <h3 class="text-center">Vue.js</h3>
              </li>
              <li class="bg-gray-100 p-4 text-center max-w-28 rounded-md">
                <FontAwesomeIcon icon={faAws} size="3x" />
                <h3 class="text-center">AWS</h3>
              </li>
              <li class="bg-gray-100 p-4 text-center max-w-28 rounded-md">
                <FontAwesomeIcon icon={faJava} size="3x" />
                <h3 class="text-center">Java</h3>
              </li>
              <li class="bg-gray-100 p-4 text-center max-w-28 rounded-md">
                <FontAwesomeIcon icon={faSass} size="3x" />
                <h3 class="text-center">Sass</h3>
              </li>
              <li class="flex-col bg-gray-100 p-4 max-w-28 rounded-md">
                <img
                  class="flex items-center justify-center size-12 mb-0 m-auto"
                  src={grafanaLogo}
                  alt="typescript"
                />
                <h3 class="mt-0 text-center">Grafana</h3>
              </li>
              <li class="flex-col bg-gray-100 p-4 max-w-28 rounded-md">
                <img
                  class="flex items-center justify-center size-12 mb-0 m-auto"
                  src={gatsbyLogo}
                  alt="typescript"
                />
                <h3 class="mt-0 text-center">Gatsby</h3>
              </li>
              <li class="bg-gray-100 p-4 text-center max-w-28 rounded-md">
                <FontAwesomeIcon icon={faBootstrap} size="3x" />
                <h3 class="text-center text-s mt-2">Bootstrap</h3>
              </li>
              <li class="bg-gray-100 p-4 text-center max-w-28 rounded-md">
                <FontAwesomeIcon icon={faNodeJs} size="3x" />
                <h3 class="text-center">Node.js</h3>
              </li>
              <li class="flex-col bg-gray-100 p-4 max-w-28 rounded-md">
                <img
                  class="flex items-center justify-center size-12 mb-0 m-auto"
                  src={swaggerLogo}
                  alt="swagger"
                />
                <h3 class="mt-0 text-center">Swagger</h3>
              </li>
              <div class="bg-gray-100 p-4 text-center max-w-28 rounded-md">
                <FontAwesomeIcon icon={faFigma} size="3x" />
                <h3 class="text-center">Figma</h3>
              </div>
              <div class="bg-gray-100 p-4 text-center max-w-28 rounded-md">
                <FontAwesomeIcon icon={faSketch} size="3x" />
                <h3 class="text-center">Sketch</h3>
              </div>
            </ul>
          </div>
          <article className="mt-2">
            <p class="text-lg leading-8 text-gray-600">
              My list of skills will continue to grow as it is not only a duty of mine as an engineer, But also a genuine desire for my life.
              I am constantly seeking new challenges and opportunities to learn. 
            </p>
            <blockquote class="border-l-4 border-gray-500 italic my-8 pl-4 md:pl-8 py-1 mx-4 md:mx-5 max-w-md">
              <p class="text-lg font-medium">
                Experts do not take their expertise for granted. They are
                continuously on the look out for new knowledge to add to their
                repertoire, and they explicitly seek out and make time for
                opportunities to learn.
              </p>
              <cite class="block text-right mt-4 text-gray-600">
                - Software Design Decoded <italic>66 Ways Experts Think</italic>
              </cite>
            </blockquote>
            <p class="mt-14 text-lg leading-8 text-gray-600">
            I love the experience of being able to do something then over time becoming very strong with it. Learning that thing then looking back and having that feeling of accomplishment. I have different levels of expertise in all of these technologies please refer to my <a href="https://drive.google.com/file/d/1Z8sB4M7QJHiODQFqbDYdYQhzk2lk0KjR/view?usp=sharing">resume</a> here to learn more about my skill set and discuss with me further on a call <a href="tel:7733205797">Click to call</a>
            </p>
          </article>
        </div>
      </main>
      <footer class="bg-gray-800 text-white py-4">
        <div class="container mx-auto flex items-center justify-center">
          <p>&copy; 2024 Rashad J Madison. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export const Head = () => <Seo title="About" />;

export default aboutPage;
