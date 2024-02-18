import React from "react";

import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid";

// Define TypeScript interface for the product prop
interface Product {
  id: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  color: string;
  size?: string; // Optional since size may not always be present
  price: string;
  href: string;
  inStock: boolean;
  leadTime?: string; // Optional, assuming it's only needed when out of stock
}

interface ProductItemProps {
  product: Product;
  productIdx: number; // Assuming this is provided as a prop
}

const ProductItem: React.FC<ProductItemProps> = ({ product, productIdx }) => {
  return (
    <li key={product.id} className="flex py-6 sm:py-10">
      <div className="flex-shrink-0">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
        />
      </div>

      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div>
          <div className="flex justify-between sm:grid sm:grid-cols-2">
            <div className="pr-6">
              <h3 className="text-sm">
                <a
                  href={product.href}
                  className="font-medium text-gray-700 hover:text-gray-800"
                >
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              {product.size ? (
                <p className="mt-1 text-sm text-gray-500">{product.size}</p>
              ) : null}
            </div>

            <p className="text-right text-sm font-medium text-gray-900">
              {product.price}
            </p>
          </div>

          <div className="mt-4 flex items-center sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
            <label htmlFor={`quantity-${productIdx}`} className="sr-only">
              Quantity, {product.name}
            </label>
            <select
              id={`quantity-${productIdx}`}
              name={`quantity-${productIdx}`}
              className="block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
            </select>

            <button
              type="button"
              className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
            >
              <span>Remove</span>
            </button>
          </div>
        </div>

        <p className="mt-4 flex space-x-2 text-sm text-gray-700">
          {product.inStock ? (
            <CheckIcon
              className="h-5 w-5 flex-shrink-0 text-green-500"
              aria-hidden="true"
            />
          ) : (
            <ClockIcon
              className="h-5 w-5 flex-shrink-0 text-gray-300"
              aria-hidden="true"
            />
          )}

          <span>
            {product.inStock ? "In stock" : `Ships in ${product.leadTime}`}
          </span>
        </p>
      </div>
    </li>
  );
};

export default ProductItem;
