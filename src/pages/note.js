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
  return (
    <div class="overflow-hidden bg-white py-24 sm:py-32">
      <nav class="fixed z-30 top-0 left-0 right-0 bg-white text-white py-3 px-4 flex items-center justify-between shadow-md">
        <GatsbyLink
          class="text-black ont-bold text-xl tracking-tight appearance-none no-underline"
          to="/"
        >
          Rashad Madison | Software Engineer
        </GatsbyLink>
        <div class="flex items-center">
          <GatsbyLink
            class="text-black text-sm px-4 py-2 leading-none rounded-full hover:white-700 no-underline hover:underline"
            to="/"
          >
            Home
          </GatsbyLink>
          <a class="text-black text-sm px-4 py-2 leading-none rounded-full hover:white-700 underline appearance-none">
            About
          </a>
          <GatsbyLink
            class="text-black text-sm px-4 py-2 leading-none rounded-full hover:white-700 no-underline hover:underline"
            to="/blog"
          >
            Blog
          </GatsbyLink>
        </div>
      </nav>
      <main class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="text-base font-semibold leading-7 text-sky-400">
                Meet Rashad
              </h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                My values
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                I try my best to live my life by principles. When I am doing
                work for a client is no time to concede these principles With my
                experience in design, testing and developing software I have
                made a major commitment to adhere to these principles. Below are
                examples of my highest valued principles and things that you can
                expect from my work.
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
                    for your bandwidth
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
            className="rounded-xl mt-4 shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0"
          />
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
