import React from "react";
import GuaranteHero from "../../components/GuaranteHero/GuaranteHero";
import Hero from "../../components/Hero/Hero";
import Pricing from "../../components/Pricing/Pricing";
import Pricingcontact from "./Pricingcontact";

const data = [
  {
    heading: "Starter",
    desc: [
      "4,000 words of high quality content writing per month",
      "Original Research Included ",
      "Royalty Free images",
      "5 Social media graphic design per month",
      "Guaranteed Quality Assurance",
      "100% Money Back Guaranteed",
    ],
    progress: 33,
    // stopColor: ["var(--red)", "var(--light-orange)"],
    stopColor1: "var(--dark-blue)",
    stopColor2: "var(--red)",
  },
  {
    heading: "Scale (Most Popular)",
    desc: [
      "10,000 words of content per month",
      "Original Research Included",
      "Royalty Free images",
      "10 Social media graphic design monthly",
      "1 Free Explainer Video for your business monthly",
      "Guaranted Quality Assurance",
      "100% Money Back Guaranteed",
    ],
    progress: 66,
    // stopColor: ["var(--dark-blue)", "var(--light-red)"],
    stopColor1: "var(--light-orange)",
    stopColor2: "var(--dark-orange)",
  },
  {
    heading: "Explore",
    desc: [
      "20,000 words of content per month",
      "Original Research Included ",
      "Monthly Content publishing on your blog",
      "Royalty Free images",
      "20 Social media graphic design per month",
      "3 Free high quality Explainer videos per month",
      "Guaranteed Quality Assurance",
      "100% Money Back Guaranteed",
    ],
    progress: 100,
    stopColor1: "var(red)",
    stopColor2: "var(--dark-blue)",
  },
];
function Pricingpage() {
  return (
    <>
      <Hero
        isCenter={true}
        showImg={false}
        headline="Flexible content automation pricing for Startups!"
      />
      <Pricing headline="Pricing" data={data} isPricing={true} height="600px" />
      <Pricingcontact />
    </>
  );
}

export default Pricingpage;
