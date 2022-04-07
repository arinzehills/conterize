import React from "react";
import GuaranteHero from "../../components/GuaranteHero/GuaranteHero";
import Hero from "../../components/Hero/Hero";

function ContentCreators() {
  const desArr = [
    "You apply and undergo our test where we test your capabilities in your chosen category.",
    "If you scale through our rigorous test process, we will start matching you with client" +
      " requests. Only the top 5% of content creators get accepted.",
    " You chose your working hours and work from anywhere you want as a freelancer on Conterize. ",
    " As we are a monthly subscription service, you are likely to be creating content for the same set of " +
      "clients we match you with. This will save you time and resources on always starting from scratch to" +
      "learn about a new business every single time.",
  ];
  return (
    <>
      <Hero
        subHeadline={false}
        headline="For Content Creators"
        isCenter={true}
        description="Are you a content writer, designer, or Videomaker? We work with top content creators across several categories. 
                      Grow your career by joining our talented team of content experts. "
        buttonLinks={["register", "contact"]}
        buttonLabel={["Apply Here"]}
        showButton={true}
      />
      <GuaranteHero
        descArr={desArr}
        headline="How does it work for Content creators?"
      />
      <Hero
        headline="Ready to get started?"
        subHeadline={false}
        showButton={true}
        buttonLinks={["register", "contact"]}
        buttonLabel={["Apply Here"]}
        isCenter={true}
      />
    </>
  );
}

export default ContentCreators;
