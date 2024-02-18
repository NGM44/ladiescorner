import { useEffect } from "react";

const categories = [
  {
    name: "Accessories",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
  },
  {
    name: "Saree",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Tops",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg",
  },
  {
    name: "T-Shirts",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg",
  },
  {
    name: "Leggins",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg",
  },
  {
    name: "Bra & Slips",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg",
  },
  {
    name: "Panties",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg",
  },
];

export default function HorizontalCategory() {
  return (
    <section aria-labelledby="category-circular" className="">
      <div className="bg-yellow-50">
        <div className="xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="flow-root">
            <div className="">
              <div className="relative box-content h-32 py-1 pt-4 overflow-x-auto xl:overflow-visible">
                <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {categories.map((category) => (
                    <div key={category.name} className="justify-center">
                      <a
                        href={category.href}
                        className="relative flex h-24 w-24 flex-col overflow-hidden rounded-full p-6 hover:opacity-75"
                      >
                        <span aria-hidden="true" className="absolute inset-0">
                          <img
                            src={category.imageSrc}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                        />
                      </a>
                      <p className="w-full pt-1 mt-auto mx-auto text-center text-sm font-bold text-gray-500 whitespace-nowrap">
                        {category.name}
                      </p>
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
