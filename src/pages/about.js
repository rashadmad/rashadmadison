import * as React from "react";

import Seo from "../components/seo";
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
  <Seo
  title="About"
  description="Learn more about Rashad J Madison"
  image="/logo.png"
/>
  return (
    <div className="flex min-h-screen grow flex-col">
      <Nav page="about"></Nav>
      <main className="mx-auto max-w-7xl px-6 lg:px-8">
      <h1 className="my-6 text-xl font-bold text-sky-400 md:text-6xl lg:text-7xl">Meet Rashad</h1>
        <div className="mx-auto mt-20 grid h-full max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                My Values
              </p>
              <p className="mt-6 border-t pt-3 text-lg leading-8 text-gray-600">
                I try my best to live my life by principles. When I am doing
                work for a client is no time to concede these principles With my
                experience in design, testing and developing software I have
                made a major commitment to adhere to these principles.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-sky-400">
                    <svg
                      className="absolute bottom-7 left-0 top-0 mr-5 h-10 w-8 text-sky-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={faShieldHalved} />
                    </svg>
                    Secure: &nbsp;
                  </dt>
                  <dd className="inline">
                    Protecting user data from black hat actors is not only a top
                    priority for me as an engineering but it is a value. People
                    trust you with there data so you can enrich there lives.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-sky-400">
                    <svg
                      className="absolute left-0 top-0 mr-5 h-10 w-8 text-sky-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={faGaugeHigh} />
                    </svg>
                    Efficient: &nbsp;
                  </dt>
                  <dd className="inline">
                    Often the difference of a few seconds can make all of the
                    difference for your application. The same can be said about
                    for your sites bandwidth. 
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-sky-400">
                    <svg
                      className="absolute left-0 top-0 mr-5 h-10 w-8 text-sky-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={faUniversalAccess} />
                    </svg>
                    Accessible: &nbsp;
                  </dt>
                  <dd className="inline">
                    We cant fail the user, who ever that user may be. People who
                    are blind utilize screen readers to utilize software. I was always taught to look out for folks who need a helping hand.
                    I always keep that in mind when developing with ally in mind. Also it avoids lawsuits, thats how I look out for my clients.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://rashad-madison-images.s3.us-east-2.amazonaws.com/profile.jpg"
              alt="Rashad J Madison"
              className="mt-4 rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
        <div className="mb-4 w-full border-b">
        <p className="mt-2 w-full pb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Skills
            </p>
        </div>
        <div className="flex grid-cols-1 flex-col text-pretty sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
          <div>
            <ul className="sm;gap-4 grid grid-cols-3 gap-1 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <li className="max-w-28 rounded-md bg-gray-100 p-4 text-center">
                <FontAwesomeIcon icon={faHtml5} size="3x" />
                <h3 className="mt-2 text-center text-sm">HTML 5</h3>
              </li>
              <li className="max-w-28 rounded-md bg-gray-100 p-4 text-center">
                <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                <h3 className="text-center">CS3</h3>
              </li>
              <li className="max-w-28 rounded-md bg-gray-100 p-4 text-center text-sm">
                <FontAwesomeIcon icon={faJs} size="3x" />
                <h3 className="text-s mt-2 text-center">JavaScript</h3>
              </li>
              <li className="max-w-28 flex-col rounded-md bg-gray-100 p-4">
                <img
                  className="m-auto mb-2 flex size-10 items-center justify-center"
                  src={typeScriptLogo}
                  alt="typescript"
                />
                <h3 className="mt-0 text-center">Typescript</h3>
              </li>
              <li className="max-w-28 rounded-md bg-gray-100 p-4 text-center">
                <FontAwesomeIcon icon={faReact} size="3x" />
                <h3 className="text-center">React.js</h3>
              </li>
              <li className="max-w-28 rounded-md bg-gray-100 p-4 text-center">
                <FontAwesomeIcon icon={faVuejs} size="3x" />
                <h3 className="text-center">Vue.js</h3>
              </li>
              <li className="max-w-28 rounded-md bg-gray-100 p-4 text-center">
                <FontAwesomeIcon icon={faAws} size="3x" />
                <h3 className="text-center">AWS</h3>
              </li>
              <li className="max-w-28 rounded-md bg-gray-100 p-4 text-center">
                <FontAwesomeIcon icon={faJava} size="3x" />
                <h3 className="text-center">Java</h3>
              </li>
              <li className="max-w-28 rounded-md bg-gray-100 p-4 text-center">
                <FontAwesomeIcon icon={faSass} size="3x" />
                <h3 className="text-center">Sass</h3>
              </li>
              <li className="max-w-28 flex-col rounded-md bg-gray-100 p-4">
                <img
                  className="m-auto mb-0 flex size-12 items-center justify-center"
                  src={grafanaLogo}
                  alt="typescript"
                />
                <h3 className="mt-0 text-center">Grafana</h3>
              </li>
              <li className="max-w-28 flex-col rounded-md bg-gray-100 p-4">
                <img
                  className="m-auto mb-0 flex size-12 items-center justify-center"
                  src={gatsbyLogo}
                  alt="typescript"
                />
                <h3 className="mt-0 text-center">Gatsby</h3>
              </li>
              <li className="max-w-28 rounded-md bg-gray-100 p-4 text-center">
                <FontAwesomeIcon icon={faBootstrap} size="3x" />
                <h3 className="text-s mt-2 text-center">Bootstrap</h3>
              </li>
              <li className="max-w-28 rounded-md bg-gray-100 p-4 text-center">
                <FontAwesomeIcon icon={faNodeJs} size="3x" />
                <h3 className="text-center">Node.js</h3>
              </li>
              <li className="max-w-28 flex-col rounded-md bg-gray-100 p-4">
                <img
                  className="m-auto mb-0 flex size-12 items-center justify-center"
                  src={swaggerLogo}
                  alt="swagger"
                />
                <h3 className="mt-0 text-center">Swagger</h3>
              </li>
              <div className="max-w-28 rounded-md bg-gray-100 p-4 text-center">
                <FontAwesomeIcon icon={faFigma} size="3x" />
                <h3 className="text-center">Figma</h3>
              </div>
              <div className="max-w-28 rounded-md bg-gray-100 p-4 text-center">
                <FontAwesomeIcon icon={faSketch} size="3x" />
                <h3 className="text-center">Sketch</h3>
              </div>
            </ul>
          </div>
          <article className="mt-2">
            <p className="text-lg leading-8 text-gray-600">
              My list of skills will continue to grow as it is not only a duty of mine as an engineer, But also a genuine desire for my life.
              I am constantly seeking new challenges and opportunities to learn. 
            </p>
            <blockquote className="mx-4 my-8 max-w-md border-l-4 border-gray-500 py-1 pl-4 italic md:mx-5 md:pl-8">
              <p className="text-lg font-medium">
                Experts do not take their expertise for granted. They are
                continuously on the look out for new knowledge to add to their
                repertoire, and they explicitly seek out and make time for
                opportunities to learn.
              </p>
              <cite className="mt-4 block text-right text-gray-600">
                - Software Design Decoded <italic>66 Ways Experts Think</italic>
              </cite>
            </blockquote>
            <p className="mt-14 text-lg leading-8 text-gray-600">
            I love the experience of being able to do something then over time becoming very strong with it. Learning that thing then looking back and having that feeling of accomplishment. I have different levels of expertise in all of these technologies please refer to my <a href="https://drive.google.com/file/d/1Z8sB4M7QJHiODQFqbDYdYQhzk2lk0KjR/view?usp=sharing">resume</a> here to learn more about my skill set and discuss with me further on a call <a href="tel:7733205797">Click to call</a>
            </p>
          </article>
        </div>
      </main>
      <footer className="bg-gray-800 py-4 text-white">
        <div className="container mx-auto flex items-center justify-center">
          <p>&copy; 2024 Rashad J Madison. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export const Head = () => <Seo title="About" />;

export default aboutPage;
