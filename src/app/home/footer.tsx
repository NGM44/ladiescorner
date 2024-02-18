import React from "react";
import SharePlatform from "./shareplatform";

const footerNavigation = {
  company: [
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Our Store", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  account: [
    { name: "Account", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Orders", href: "#" },
    { name: "Favorite", href: "#" },
  ],
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer aria-labelledby="footer-heading" className="bg-white">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
              {/* <div>
              <h3 className="text-sm font-medium text-gray-900">Shop</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.shop.map((item) => (
                  <li key={item.name} className="text-sm">
                    <a
                      href={item.href}
                      className="text-gray-500 hover:text-gray-600"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Company</h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Account</h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.account.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row border-t border-gray-200 py-10 justify-between">
          <p className="text-sm text-gray-500">
            Copyright &copy; {year} Ladiescorner.in
          </p>
          <SharePlatform />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
