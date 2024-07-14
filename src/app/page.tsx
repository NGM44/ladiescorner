import React from "react";
import Image from "next/image";
import {
  Menu,
  ShoppingBag,
  Scissors,
  Sparkles,
  ChevronRight,
  Phone,
  CircleArrowRight,
  MapPin,
} from "lucide-react";

const LadiesCornerShop = () => {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-pink-100 via-pink-50 to-white min-h-screen relative">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
        
            <h1 className="text-3xl font-extrabold tracking-tight">
              Ladies Corner
            </h1>
            <Menu className="md:hidden w-6 h-6" />
            <nav className="hidden md:flex space-x-6">
              {["Home", "Clothing", "Tailoring", "Stationery", "Cosmetics"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-pink-200 transition duration-300 ease-in-out"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-pink-200 to-pink-100">
    
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-pink-700">
            Welcome to Vijaylaxmi Ladies Corner
          </h2>
          <p className="text-xl mb-10 text-gray-700 max-w-2xl mx-auto">
            Your ultimate destination for affordable fashion, beauty, and
            personal style. Discover the perfect blend of elegance and comfort.
          </p>
          <a
            href="https://chat.whatsapp.com/GUjoodzr5Dk9AuzWCmcBOi"
            className="bg-[#07a942] animate-pulse hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            <span>Join Our WhatsApp Group</span>
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-pink-100 sm:block hidden">
        <div className="container mx-auto">
          <div className="bg-white p-4 m-8 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <Image
              src={"/banner.jpeg"}
              alt={"banner"}
              className="w-full h-80 rounded-lg mb-6"
            />
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 bg-gradient-to-b from-pink-100 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-pink-700">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <ImageCard
              src="/garments.png"
              alt="Ladies Garments"
              title="Ladies Garments"
            />
            <ImageCard
              src="/image.png"
              alt="Beautiful Saree"
              title="Elegant Sarees"
            />
           

            <ImageCard
              src="/tshirts.png"
              alt="TShirts"
              title="Trendy T-Shirt"
            />
            <ImageCard
              src="/leggins.png"
              alt="Leggins"
              title="Colorful Leggins"
            />
             <ImageCard
              src="/tailoring.png"
              alt="Expert Tailor"
              title="Expert Tailor"
            />
            <ImageCard src="/cosmo.png" alt="Make up set" title="Make up set" />

            <ImageCard
              src="/access.png"
              alt="Daily Accessories"
              title="Daily Accessories"
            />
            <ImageCard
              src="/stationary.png"
              alt="Stationery Items"
              title="Unique Stationery"
            />
           
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-pink-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-pink-700">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <ServiceCard
              icon={<ShoppingBag className="w-16 h-16 text-pink-500" />}
              title="Fashion Boutique"
              description="Discover our curated collection of trendy garments and exquisite sarees."
            />
            <ServiceCard
              icon={<Scissors className="w-16 h-16 text-pink-500" />}
              title="Expert Tailoring"
              description="Experience perfect fits with our skilled alterations and custom-made outfits."
            />
            <ServiceCard
              icon={<Sparkles className="w-16 h-16 text-pink-500" />}
              title="Beauty & Lifestyle"
              description="Enhance your style with our selection of stationery and quality cosmetics."
            />
          </div>
        </div>
      </section>

      {/* Floating Call Button */}
      <FloatingDirectionButton />
      <FloatingCallButton phoneNumber="tel:9902668366" />
    </div>
  );
};

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: any;
  title: any;
  description: any;
}) => (
  <div className="bg-white p-8 rounded-xl shadow-lg text-center transition duration-300 ease-in-out transform hover:scale-105">
    <div className="flex justify-center mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold mb-4 text-pink-600">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ImageCard = ({ src, alt, title }: { src: any; alt: any; title: any }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
    <img
      src={src}
      alt={alt}
      className="w-full h-80 object-cover rounded-lg mb-6"
    />
    <h3 className="text-xl font-semibold text-center text-pink-600">{title}</h3>
  </div>
);

const FloatingCallButton = ({ phoneNumber }: { phoneNumber: any }) => (
  <a
    href={phoneNumber}
    className="fixed  bottom-24 right-6 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out transform hover:scale-110 z-50"
    aria-label="Call us"
  >
    <div className="flex flex-row">
      <Phone className="w-5 h-5" />
      <p className="text-sm ml-2">Call</p>
    </div>
  </a>
);
const FloatingDirectionButton = () => (
  <a
    href={"https://maps.app.goo.gl/y7UknYPM2B23gkow8"}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-purple-500 hover:bg-purple-600 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out transform hover:scale-110 z-50"
    aria-label="Get directions"
  >
    <div className="flex flex-row">
      <MapPin className="w-6 h-6" />
      <p className="text-sm ml-2">Location</p>
    </div>
  </a>
);

export default LadiesCornerShop;
