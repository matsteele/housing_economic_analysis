import React, { useContext, useState, useEffect } from "react";
import { StyledSVG } from ".";
import story from "../../narrative/story";
import { store } from "utils/store";
import styleUtils from "utils/styles";
import styled from "@emotion/styled";
import { jsx } from "@emotion/core";

import {
  animateScroll as scroll,
} from "react-scroll";


export default function PresentationLegend() {
  const [circles, setCircles] = useState("");
  const [hoveredSectionStart, sethoveredSectionStart] = useState("none");
  const { state } = useContext(store);
  const currentSlide = story[state.currentSlideNumber];

  let backgroundColorBasedOnTheme;
  switch (currentSlide.theme) {
    case "MainIdeasTeal":
      backgroundColorBasedOnTheme = styleUtils.brightTeal;
      break;
    case "caseStudyGrey":
      backgroundColorBasedOnTheme = styleUtils.darkGray;
      break;
  }

  const handleClick = e => {
    scroll.scrollTo((e.target.id) * window.innerHeight);
  };

  const handleMouseIn = e => {
    e.target.style.r = "15";
    sethoveredSectionStart(e.target.id);
  };

  const handleMouseOut = e => {
    e.target.style.r = "8";
    sethoveredSectionStart("");
  };

  const createCircles = () => {
    return (
      <StyledSVG
        fill="none"
        stroke="white"
        strokeLinecap="round"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
      >
        {story.map(function(item, i) {
          const transitionDistance = 40;
          const isSectionCircleHovered = hoveredSectionStart === item.center.toString()
          const LegendItem =
            item.section === currentSlide.section ? (
              <LegendCircleWhenClicked
                key={`${item.section} ${i}`}
                yPosition={transitionDistance * i - 15}
                stroke="white"
              />
            ) : (
              <>
                <g
                  onMouseEnter={e => handleMouseIn(e)}
                  onMouseLeave={e => handleMouseOut(e)}
                  onClick={e => handleClick(e)}
                >
                  <circle
                    css={{
                      transition: "all 1000ms linear",
                    }}
                    id={item.center}
                    key={`${item.section} ${i}`}
                    cx="39"
                    cy={transitionDistance * i}
                    r="8"
                    fill="white"
                    opacity={isSectionCircleHovered ? "1" : ".5"}
                  />
                  {isSectionCircleHovered ? (
                    <LegendCircleWhenClicked
                      yPosition={transitionDistance * i - 15}
                      stroke={backgroundColorBasedOnTheme}
                    />
                  ) : (
                    ""
                  )}
                </g>
              </>
            );

          return LegendItem;
        })}
      </StyledSVG>
    );
  };

  useEffect(() => {
    const circles = createCircles();
    setCircles(circles);
  }, [currentSlide, hoveredSectionStart]);
  return (
    <>
      <SectionTitle />
      <SectionTitle background={backgroundColorBasedOnTheme}>
        {currentSlide.section}
      </SectionTitle>
      <SectionTitle />
      {circles}
    </>
  );
}

const SectionTitle: any = styled.div(props => ({
  height: "10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "2em",
  background: props.background ? props.background : "",
  transition: "background-color 1000ms linear"
}));

const LegendCircleWhenClicked = props => (
  <svg
    width="30"
    height="30"
    x="24"
    y={props.yPosition}
    viewBox="0 0 320 320"
    stroke={props.stroke}
    strokeLinecap="round"
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path id="r1">
        <animate
          id="p1"
          attributeName="d"
          values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
          dur="6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          values="0;4;4;4;0"
          dur="6s"
          repeatCount="indefinite"
          begin="p1.begin"
        />
      </path>
      <path id="r2">
        <animate
          attributeName="d"
          values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
          dur="6s"
          repeatCount="indefinite"
          begin="p1.begin+1s"
        />
        <animate
          attributeName="stroke-width"
          values="0;4;4;4;0"
          dur="6s"
          repeatCount="indefinite"
          begin="p1.begin+1s"
        />
      </path>
      <path id="r3">
        <animate
          attributeName="d"
          values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
          dur="6s"
          repeatCount="indefinite"
          begin="p1.begin+2s"
        />
        <animate
          attributeName="stroke-width"
          values="0;4;4;4;0"
          dur="6s"
          repeatCount="indefinite"
          begin="p1.begin+2s"
        />
      </path>
      <path id="r4">
        <animate
          id="p1"
          attributeName="d"
          values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
          dur="6s"
          repeatCount="indefinite"
          begin="p1.begin+3s"
        />
        <animate
          attributeName="stroke-width"
          values="0;4;4;4;0"
          dur="6s"
          repeatCount="indefinite"
          begin="p1.begin+3s"
        />
      </path>
      <path id="r5">
        <animate
          attributeName="d"
          values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
          dur="6s"
          repeatCount="indefinite"
          begin="p1.begin+4s"
        />
        <animate
          attributeName="stroke-width"
          values="0;4;4;4;0"
          dur="6s"
          repeatCount="indefinite"
          begin="p1.begin+4s"
        />
      </path>
      <path id="r6">
        <animate
          attributeName="d"
          values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
          dur="6s"
          repeatCount="indefinite"
          begin="p1.begin+5s"
        />
        <animate
          attributeName="stroke-width"
          values="0;4;4;4;0"
          dur="6s"
          repeatCount="indefinite"
          begin="p1.begin+5s"
        />
      </path>
    </defs>
    <use href="#r1" />
    <use href="#r1" transform="rotate(60 160 160)" />
    <use href="#r1" transform="rotate(120 160 160)" />
    <use href="#r1" transform="rotate(180 160 160)" />
    <use href="#r1" transform="rotate(240 160 160)" />
    <use href="#r1" transform="rotate(300 160 160)" />
    <use href="#r2" transform="rotate(30 160 160)" />
    <use href="#r2" transform="rotate(90 160 160)" />
    <use href="#r2" transform="rotate(150 160 160)" />
    <use href="#r2" transform="rotate(210 160 160)" />
    <use href="#r2" transform="rotate(270 160 160)" />
    <use href="#r2" transform="rotate(330 160 160)" />
    <use href="#r3" />
    <use href="#r3" transform="rotate(60 160 160)" />
    <use href="#r3" transform="rotate(120 160 160)" />
    <use href="#r3" transform="rotate(180 160 160)" />
    <use href="#r3" transform="rotate(240 160 160)" />
    <use href="#r3" transform="rotate(300 160 160)" />
    <use href="#r4" transform="rotate(30 160 160)" />
    <use href="#r4" transform="rotate(90 160 160)" />
    <use href="#r4" transform="rotate(150 160 160)" />
    <use href="#r4" transform="rotate(210 160 160)" />
    <use href="#r4" transform="rotate(270 160 160)" />
    <use href="#r4" transform="rotate(330 160 160)" />
    <use href="#r5" />
    <use href="#r5" transform="rotate(60 160 160)" />
    <use href="#r5" transform="rotate(120 160 160)" />
    <use href="#r5" transform="rotate(180 160 160)" />
    <use href="#r5" transform="rotate(240 160 160)" />
    <use href="#r5" transform="rotate(300 160 160)" />
    <use href="#r6" transform="rotate(30 160 160)" />
    <use href="#r6" transform="rotate(90 160 160)" />
    <use href="#r6" transform="rotate(150 160 160)" />
    <use href="#r6" transform="rotate(210 160 160)" />
    <use href="#r6" transform="rotate(270 160 160)" />
    <use href="#r6" transform="rotate(330 160 160)" />
  </svg>
);
