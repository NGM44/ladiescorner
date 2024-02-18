import { useEffect } from "react";

const categories = [
  {
    name: "XS",
    selected: false,
  },
  {
    name: "S",
    selected: true,
  },
  {
    name: "M",
    selected: false,
  },
  {
    name: "L",
    selected: false,
  },
  {
    name: "XL",
    selected: false,
  },
  {
    name: "XXL",
    selected: false,
  },
];

export default function SizeFilter() {
  return (
    <section aria-labelledby="category-circular" className="">
      <div className="bg-white">
        <div className="xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="flow-root">
            <div className="">
              <div className="relative box-content h-14 py-1 pt-4 overflow-x-auto xl:overflow-visible">
                <div className="flex justify-between px-4 sm:px-6 lg:px-8 xl:gap-x-4 xl:space-x-0 xl:px-0">
                  {categories.map((category) => (
                    <div key={category.name} className="justify-center">
                      <a
                        className={`relative ${
                          !category.selected ? "bg-gray-400" : "bg-green-600"
                        } flex h-12 w-12 flex-col overflow-hidden rounded-full p-6 hover:opacity-75`}
                      >
                        <span aria-hidden="true" className="absolute inset-0">
                          <p className="w-full pt-2 mt-auto mx-auto my-auto text-center text-lg font-extrabold text-white whitespace-nowrap">
                            {category.name}
                          </p>
                        </span>
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-400 opacity-50"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
