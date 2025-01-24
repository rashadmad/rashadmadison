import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link as GatsbyLink } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversalAccess,
  faGaugeHigh,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const aboutPage = () => {
  <Seo
  title={frontmatter.title}
  description={frontmatter.description}
/>
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <nav className="fixed inset-x-0 top-0 z-30 flex items-center justify-between bg-white px-4 py-3 text-white shadow-md">
        <GatsbyLink
          class="ont-bold appearance-none text-xl tracking-tight text-black no-underline"
          to="/"
        >
          Rashad Madison | Software Engineer
        </GatsbyLink>
        <div className="flex items-center">
          <GatsbyLink
            class="hover:white-700 rounded-full px-4 py-2 text-sm leading-none text-black no-underline hover:underline"
            to="/"
          >
            Home
          </GatsbyLink>
          <a className="hover:white-700 appearance-none rounded-full px-4 py-2 text-sm leading-none text-black underline">
            About
          </a>
          <GatsbyLink
            class="hover:white-700 rounded-full px-4 py-2 text-sm leading-none text-black no-underline hover:underline"
            to="/blog"
          >
            Blog
          </GatsbyLink>
        </div>
      </nav>
      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-sky-400">
                Meet Rashad
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                My values
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                I try my best to live my life by principles. When I am doing
                work for a client is no time to concede these principles With my
                experience in design, testing and developing software I have
                made a major commitment to adhere to these principles. Below are
                examples of my highest valued principles and things that you can
                expect from my work.
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
                    for your bandwidth
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
                    We cant fail the user, who ever that user may be. Poeople
                    who are blind utlize screen readers to get to your data.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src="https://rashad-madison-images.s3.us-east-2.amazonaws.com/profile.jpg"
            alt="Rashad J Madison"
            className="mt-4 rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0"
          />
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
