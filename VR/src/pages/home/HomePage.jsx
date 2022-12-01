import React from "react";
import {
  Advantages,
  ExploreProduct,
  Hero,
  NewExperience,
  Reviews,
  Video,
} from "../../components";

export const HomePage = () => {
  return (
    <>
        <Hero />
        <NewExperience />
        <Video />
        <Reviews />
        <Advantages />
        <ExploreProduct />
    </>
  );
};
