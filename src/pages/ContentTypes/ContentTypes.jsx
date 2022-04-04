import React from "react";
import GuaranteHero from "../../components/GuaranteHero/GuaranteHero";
import Hero from "../../components/Hero/Hero";

const welcomeData = {
  // subHeadline: "Conterize",
  description:
    "Help your business handle content creation on the most crucial aspect" +
    " of content your business need to keep scaling and increase your bottom line.",
  showButton: true,
  show2Button: true,
  buttonLabel: ["Get Started", "Speak to us"],
  img: "../../images/studio3.svg",
  //   imgStart: "start",
  isCenter: true,
  showImg: true,
  //   smallImage: "images/twocircle.png",
};
const blogData = {
  subHeadline: "",
  headline: "Blog Articles",
  description:
    "Scale your business with high quality bog articles. Our highly" +
    " vetted writers are waiting to deliver you the best content to " +
    "improve your brand visibility, help you build authority and drive" +
    " new actions on your website. ",
  imgStart: "",
  img: "../../images/studio2.svg",
  showImg: true,
  showButton: true,
  buttonLabel: ["Get Started"],
};
const pageCopyData = {
  headline: "Landing Page Copy",
  description:
    "Need to create new pages on your website or improve on the existing" +
    " content on your web pages? Conterize has you covered. Our page content " +
    "writers are looking forward to help you improve your website with " +
    " high converting copywriting to drive actions on your website.",
  imgStart: "start",
  img: "../../images/studio.png",
  showImg: true,
  showButton: true,
  buttonLabel: ["Get Started"],
};
const emailCopiesData = {
  headline: "Email Copies and Newsletters",
  description:
    "We all know email marketing still remain critical in retaining " +
    "customers and converting new business. Let Conterize email copies " +
    "and newsletter experts take care of your email content needs." +
    " No need to think of what to write to engage your email list and drive conversion," +
    "Just tell us the audience you " +
    "are writing to and what your goals are, we will handle the rest. ",
  imgStart: "",
  img: "../../images/studio.png",
  showImg: true,
  showButton: true,
  buttonLabel: ["Get Started"],
};
const ebooksData = {
  headline: "Ebooks",
  description:
    "Need an Ebook for your business as a lead magnet or to improve your authority?" +
    "No problem. You can request Ebooks to be written as part of your monthly content limit." +
    "Our writers are awaiting for your request to begin project right away.",
  imgStart: "start",
  img: "../../images/studio2.svg",
  showImg: true,
  showButton: true,
  buttonLabel: ["Get Started"],
};
const socailMediaData = {
  headline: "Social Media Graphics",
  description:
    "Whether you need graphic for your Instagram, Facebook or Twitter " +
    "or you need a Facebook cover photo design, our social media graphic expert got you covered. Just tell us your aim and design concept or send a sample and" +
    " our social media graphic experts will take care of it at scale. ",
  imgStart: "",
  img: "../../images/studio2.svg",
  showImg: true,
  showButton: true,
  buttonLabel: ["Get Started"],
};
const promoData = {
  headline: "Promo/Explainer Videos ",
  description:
    "Need promo videos or explainer videos for your marketing, ads " +
    " or to update your startup social media profiles? No problem, " +
    "we will handle this for you at scale. This is available only on " +
    "our higher plan and you can also request" +
    " for a custom package if you need only videos for your startup.",
  imgStart: "",
  img: "../../images/hunt.svg",
  showImg: true,
  showButton: true,
  buttonLabel: ["Get Started"],
};
const desArr = [
  "You apply and undergo our test where we test your capabilities in your chosen category.",
  "If you scale through our rigorous test process, we will start matching you with client" +
    " requests. Only the top 5% of content creators get accepted.",
  " You chose your working hours and work from anywhere you want as a freelancer on Conterize. ",
  " As we are a monthly subscription service, you are likely to be creating content for the same set of " +
    "clients we match you with. This will save you time and resources on always starting from scratch to" +
    "learn about a new business every single time.",
];
function ContentTypes() {
  return (
    <>
      <div className="content_type_section">
        <Hero isCenter={true} {...welcomeData} />
        <Hero {...blogData} />
        <Hero {...pageCopyData} />
        <Hero {...emailCopiesData} />
        <Hero {...ebooksData} />
        <Hero {...socailMediaData} />
        <Hero {...promoData} />
        <Hero
          subHeadline={false}
          headline="For Content Creators"
          isCenter={true}
          description="Are you a content writer, designer, or Videomaker? We work with top content creators across several categories. 
                      Grow your career by joining our talented team of content experts. "
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
          buttonLabel={["Apply Here"]}
          isCenter={true}
        />
      </div>
    </>
  );
}

export default ContentTypes;
