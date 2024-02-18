"use state";
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { LanguageIcon } from "@heroicons/react/24/solid";

const solutions = [
  { name: "Kannada", href: "#" },
  { name: "English", href: "#" },
];

export default function LanguageSelector() {
  const currentLanguage = "Kannada";
  const [language, setLanguage] = useState("Kannada");
  
  useEffect(() => {
    if (language !== currentLanguage) window.location.reload();
  }, [language]);

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex ml-4 lg:ml-6 items-center gap-x-1 text-base font-semibold leading-6 text-gray-400">
        {language === "Kannada" ? <div>EN</div> : <div>ಕ</div>}
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
          <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            {solutions.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setLanguage(item.name);
                }}
                className="block p-2 hover:text-indigo-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
