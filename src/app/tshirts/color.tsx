import { CheckIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const colors = [
  {
    color: "#000000",
    selected: true,
  },
  {
    color: "#C0C0C0",
    selected: false,
  },
  {
    color: "#808080",
    selected: true,
  },
  {
    color: "#FFFFFF",
    selected: false,
  },
  {
    color: "#800000",
    selected: true,
  },
  {
    color: "#FF0000",
    selected: false,
  },

  {
    color: "#800080",
    selected: false,
  },
  {
    color: "#FF00FF",
    selected: false,
  },
  {
    color: "#008000",
    selected: false,
  },
  {
    color: "#00FF00",
    selected: false,
  },
  {
    color: "#808000",
    selected: false,
  },
  {
    color: "#FFFF00",
    selected: false,
  },
  {
    color: "#000080",
    selected: false,
  },
  {
    color: "#0000FF",
    selected: false,
  },
  {
    color: "#00FFFF",
    selected: false,
  },
  {
    color: "#008080",
    selected: false,
  },
];

export default function ColorFilter() {
  return (
    <section aria-labelledby="category-circular" className="">
      <div className="bg-white">
        <div className="xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="flow-root">
            <div className="">
              <div className="relative box-content h-14 py-1 pt-4 overflow-x-auto xl:overflow-visible">
                <div className="flex gap-4 px-4 sm:px-6 lg:px-8 xl:gap-x-4 xl:space-x-0 xl:px-0">
                  {colors.map((color) => {
                    const bg = `bg-[${color.color}]`;
                    return (
                      <div key={color.color} className={`justify-center ${
                        !color.selected
                          ? ""
                          : "border-b-2 pb-2 border-green-500"
                      }`}>
                        <a
                          className={`relative ${bg} ${
                            !color.selected
                              ? "border border-gray-400"
                              : "border-2 p-1 border-green-500"
                          } flex h-12 w-12 flex-col overflow-hidden rounded-full p-6 hover:opacity-75`}
                        >
                          <span aria-hidden="true" className="absolute inset-0">
                            {!color.selected ? (
                              <p></p>
                            ) : (
                              <CheckIcon className="w-8 h-auto font-extrabold pt-2 mt-auto mx-auto my-auto text-center text-lg text-green-500 whitespace-nowrap" />
                            )}
                          </span>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
