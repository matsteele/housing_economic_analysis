//slide 1
import _1_IntroText from "./slide1/intro_text";
// slide 2
import _2_MajorProblems from "./slide2/major_problems";
import _2_DiscussText from"./slide2/discussText"
// import IntroBackgroundPath from "./src/components/narrative/slide1/basemap_background"

const story = [
  {
    section: "intro",
    start: 0,
    center: 1,
    end: 6,
    theme: "MainIdeasTeal",
    discuss: {
      text: "FillerForNowRemove",
      start: 0,
      end: 5
    },
    display: {
      component: _1_IntroText,
      xCenter: "",
      yCenter: "",
      transition: ["sticky", "bounce"],
      start: 0,
      end: 3
    },
    background: {
      image: "./src/components/narrative/slide1/background.svg",
      xCenter: "19%",
      yCenter: "43%",
      transition: ["sticky", "bounce"],
      start: 0,
      end: 5
    }
  },
  {
    section: "overview",
    start: 6,
    center: 8,
    end: 10, // make default if nothing set to slide
    theme: "MainIdeasTeal",
    display: {
      component: _2_MajorProblems,
      xCenter: "",
      yCenter: "",
      transition: ["sticky", "bounce"],
      start: 7,
      end: 9
    },
    discuss: {
      text: _2_DiscussText,
      start: 7,
      end: 9
    }
  },
  {
    section: "case study",
    start: 10,
    center: 14,
    end: 16, // make default if nothing set to slide
    theme: "caseStudyGrey",
    title: [
      {
        text: "houston has grown tremendously",
        start: 10,
        end: 12
      },
      {
        text: "but this growth has been outward",
        start: 12,
        end: 15
      }
    ],
    display: {
      component: _2_MajorProblems,
      xCenter: "",
      yCenter: "",
      transition: ["sticky", "bounce"],
      start: 10,
      end: 15
    },
    discuss: {
      text: _2_DiscussText,
      start: 10,
      end: 15
    }
  },
  {
    section: "metro housing costs",
    start: 16,
    center: 18,
    end: 25, // make default if nothing set to slide
    theme: "MainIdeasTeal",
    display: {
      component: _1_IntroText,
      xCenter: "",
      yCenter: "",
      transition: ["sticky", "bounce"],
      start: 7,
      end: 10
    },
    discuss: {
      text: _2_DiscussText,
      start: 7,
      end: 10
    }
  },
  {
    section: "2_overview",
    start: 25,
    center: 28,
    end: 30, // make default if nothing set to slide
    theme: "MainIdeasTeal",
    display: {
      component: _1_IntroText,
      xCenter: "",
      yCenter: "",
      transition: ["sticky", "bounce"],
      start: 7,
      end: 10
    },
    discuss: {
      text: _2_DiscussText,
      start: 7,
      end: 10
    }
  },
  {
    section: "2_overview",
    start: 30,
    center: 34,
    end: 38, // make default if nothing set to slide
    theme: "MainIdeasTeal",
    display: {
      component: _1_IntroText,
      xCenter: "",
      yCenter: "",
      transition: ["sticky", "bounce"],
      start: 7,
      end: 10
    },
    discuss: {
      text: _2_DiscussText,
      start: 7,
      end: 10
    }
  },
  {
    section: "2_overview",
    start: 38,
    center: 40,
    end: 42, // make default if nothing set to slide
    theme: "MainIdeasTeal",
    display: {
      component: _1_IntroText,
      xCenter: "",
      yCenter: "",
      transition: ["sticky", "bounce"],
      start: 7,
      end: 10
    },
    discuss: {
      text: _2_DiscussText,
      start: 7,
      end: 10
    }
  }
];

export default story;
