import React from "react";

const OurStory = () => {
  return (
    <section aria-labelledby="cause-heading" className="my-4">
      <div className="relative bg-gray-800 px-6 py-12 sm:px-12 sm:py-24 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 bg-opacity-70"
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2
            id="cause-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Ladies Corner
          </h2>
          <p className="mt-3 text-xl text-white">
            Discover Fashion at Ladies Corner, where fashion empowers. From
            traditional and modern dresses to timeless accessories, our
            collection is curated for the every woman. Embrace your style with
            us, Discover affordable and quality craftsmanship in every piece
          </p>
          <a
            href="#"
            className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
          >
            Read our story
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
