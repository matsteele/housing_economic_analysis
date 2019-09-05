//slide 1
import _1_IntroText from "./slide1/intro_text";
// slide 2
import _2_MajorProblems from "./slide2/major_problems";
import _2_DiscussText from "./slide2/discussText";
import _2_DiscussText2 from "./slide2/discussText2";

// slide 3
import _3_CaseStudyDisplay from "./slide3/case_study_display";
import _3_DiscussText from "./slide3/discussText";

//slide 4
import _4_MetroHousingCosts from "./slide4/metro_housing_costs";

//slide 5
import _5_HousingMarkets from "./slide5/housing_markets";

//slide 6
import _6_Competition from "./slide6/competition";

//slide 7
import _7_WhatsNotDrivingCosts from "./slide7/whats_not_driving_costs";

//slide 8
import _8_SFHOverbuilding from "./slide8/sfh_bubble";


const story = [
  {
    section: "intro",
    start: 0,
    center: 2,
    end: 6,
    theme: "MainIdeasTeal",
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
    end: 12, // make default if nothing set to slide
    theme: "MainIdeasTeal",
    display: {
      component: _2_MajorProblems,
      xCenter: "",
      yCenter: "",
      transition: ["sticky", "bounce"],
      start: 6,
      end: 11
    },
    discuss: [
      {
        text: _2_DiscussText,
        start: 8,
        end: 9
      },
      {
        text: _2_DiscussText2,
        start: 10,
        end: 11
      }
    ]
  },
  {
    section: "case study",
    start: 12,
    center: 15,
    end: 19, // make default if nothing set to slide
    theme: "caseStudyGrey",
    title: [
      {
        text: "houston has grown tremendously",
        start: 12,
        end: 15
      },
      {
        text: "but this growth has been outward",
        start: 15,
        end: 18
      }
    ],
    display: {
      component: _3_CaseStudyDisplay,
      xCenter: "",
      yCenter: "",
      transition: ["sticky", "bounce"],
      start: 12,
      end: 18
    },
    discuss: [
      {
        text: `
          Houston provides an interesting case study. The city has grown tremendously
          over the last century. As a result it recently becoming the 4th largest city
          in the country.
          `,
        start: 12,
        end: 14
      },
      {
        text: `
          Houston now occupies an area that could fit the cities of DC, Chicago,
          Boston, Santa Barbra, Manhattan, and San Francisco within it.
        `,
        start: 14,
        end: 18
      }
    ],
    source: [
      {
        text: "U.S. Census Bureau ",
        start: 12,
        end: 15
      }
    ]
  },
  {
    section: "metro housing costs",
    start: 19,
    center: 24,
    end: 26, // make default if nothing set to slide
    theme: "dataStatsWhite",
    title: [
      {
        text: "housing costs in houston have remained flat",
        start: 20,
        end: 22
      },
      {
        text: "while costs in dense cities have skyrockted",
        start: 22,
        end: 25
      }
    ],
    display: {
      component: _4_MetroHousingCosts,
      transition: ["sticky", "bounce"],
      start: 20,
      end: 25
    },
    discuss: [
      {
        text: `
          Despite its tremendous growth, the costs for housing has remained
          relatively flat in Houston. While housing costs in cities like San
          Franisco and New York have skyrocketed.
        `,
        start: 20,
        end: 23
      },
      {
        text: `
          It’s true that limited regulation has enabled this growth to occur, but
          it’s important to recognize that this growth has been horizontal,
          primarily in the form of single detached housing.
        `,
        start: 23,
        end: 25
      }
    ],
    source: [
      {
        text: "zillow; bureu of labor statistics; the economist",
        start: 20,
        end: 25
      }
    ]
  },
  {
    section: "key market segments",
    start: 26,
    center: 33,
    end: 41, // make default if nothing set to slide
    theme: "MainIdeasTeal",
    display: {
      component: _5_HousingMarkets,
      transition: ["sticky", "bounce"],
      start: 26,
      end: 41
    },
    discuss: [
      {
        text: `
          Houston’s growth illustrates the key division in the residential markets, that between single detached housing and multi-family housing. Single detached housing is driven by supply factors, while multi-family is driven by demand side factors. 
        `,
        start: 26,
        end: 30
      },
      {
        text: `
          In single detached housing markets like Houston, where job growth and demand is as high as other major cities, the market is driven by supply related factors. A developer is motivated by new income growth from new properties than, even if greater supply may mean lower rents overall. This is primarily because the number of developers is many, given that the barriers to entry are so small.  The major barrier in Houston for entering the market as a developer is not regulation, but rather capital. Further, properties are so spread out that the chances of a developer facing a lowered income, and indirectly lowered property values, from properties they are developing is small. 
        `,
        start: 30,
        end: 34
      },
      {
        text: `
          Multi-family developers have a near monopoly on development in urban areas. They have little interest in building new properties if it will mean a lowering of housing values.
          Conventional multi-family real estate analysts are focused on an area’s ‘absorption rate’, the rate at which available homes are sold in a specific market during a given time period. The Conventional assumption is that a developer not enter a market unless there is sufficient absorption of recently built units or low vacancy, but such an analysis assumes that current prices remain the same. If supply were to substantially increase, prices would be brought down. If supply only increases when vacancy is low, then supply only increases with demand and multi-family housing costs are set to only rise.         `,
        start: 34,
        end: 38
      }
    ]
  },
  {
    section: "competition drives price",
    start: 41,
    center: 45,
    end: 45, // make default if nothing set to slide
    theme: "dataStatsWhite",
    display: {
      component: _6_Competition,
      xCenter: "",
      yCenter: "",
      transition: ["sticky", "bounce"],
      start: 41,
      end: 45
    },
    title: [
      {
        text: "competitive markets should drive down prices",
        start: 41,
        end: 43
      },
      {
        text: "but housing costs have only increased",
        start: 43,
        end: 45
      }
    ],
    discuss: [
      {
        text: `
          In most industries, over time, innovation and increased players on the supply-side drives down the price of a good, as competitors have incentives to innovate and supply more at lower costs, in pursuit of more income.
        `,
        start: 41,
        end: 43
      },
      {
        text: `
          Food, like housing, used to take up a fourth of our income, but food costs have decreased to 12% of our income. Clothing and most goods have seen a similar trend over time. But housing has edged upwards, with 50% of renters spending over 30% of their income on housing. 
        `,
        start: 43,
        end: 45
      }
    ],
    source: [
      {
        text: "usda",
        start: 41,
        end: 43
      },
      {
        text: "bureau of economic analysis",
        start: 43,
        end: 44
      },
      {
        text: "census, and acs",
        start: 44,
        end: 45
      }
    ]
  },
  {
    section: "what isn't driving higher costs",
    start: 45,
    center: 55,
    end: 65,
    theme: "dataStatsWhite",
    display: {
      component: _7_WhatsNotDrivingCosts,
      xCenter: "",
      yCenter: "",
      transition: ["sticky", "bounce"],
      start: 41,
      end: 63
    },
    title: [
      {
        text: "competitive markets should drive down prices",
        start: 41,
        end: 43
      },
      {
        text: "but housing costs have only increased",
        start: 43,
        end: 45
      }
    ],
    discuss: [
      {
        text: `
          In most industries, over time, innovation and increased players on the supply-side drives down the price of a good, as competitors have incentives to innovate and supply more at lower costs, in pursuit of more income.
        `,
        start: 41,
        end: 42
      },
      {
        text: `
          Food, like housing, used to take up a fourth of our income, but food costs have decreased to 12% of our income. Clothing and most goods have seen a similar trend over time. But housing has edged upwards, with 50% of renters spending over 30% of their income on housing. 
        `,
        start: 42,
        end: 43
      },
      {
        text: `
          Real estate markets in urban spaces are decreasingly competitive. Across the US, how much money you need to have to play in the real estate market has exponentially increased. But for those in the game, profits are soaring. 
        `,
        start: 43,
        end: 45
      }
    ],
    source: [
      {
        text: "usda",
        start: 41,
        end: 43
      },
      {
        text: "bureau of economic analysis",
        start: 43,
        end: 44
      },
      {
        text: "census, and acs",
        start: 44,
        end: 45
      }
    ]
  },
  {
    section: "2007 housing bubble",
    start: 63,
    center: 75,
    end: 85,
    theme: "dataStatsWhite",
    display: {
      component: _8_SFHOverbuilding,
      xCenter: "",
      yCenter: "",
      transition: ["sticky", "bounce"],
      start: 53,
      end: 65
    },
    source: [
      {
        text: "Commercial Mortgage Alert, CRE Finance council",
        start: 53,
        end: 65
      }
    ]
  }
];

export default story;
