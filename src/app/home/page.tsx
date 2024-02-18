"use client";
import { useState } from "react";
import HorizontalCategory from "../component/horizontalProducts";
import Category from "./category";
import SharePlatform from "./shareplatform";
import OurStory from "./ourstory";
import PromotionalWidget from "../component/promotionalWidget";
import Footer from "./footer";
import OurFavorite from "./ourFavorite";

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        <HorizontalCategory />
        <Category />
        <OurStory />
        <OurFavorite />
        <PromotionalWidget />
      </main>
    </div>
  );
}
