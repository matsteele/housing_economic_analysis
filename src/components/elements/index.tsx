import React, { useContext, useState, useEffect } from "react";
import Title from "./title";
import Source from "./source";
import Discuss from "./discuss";
import Divider from "./divider";
import Display from "./display";
import Background from "./background";
import { store } from "utils/store";
import story from "../narrative/story";
import { animateScroll as scroll } from "react-scroll";

const AbsoluteElements = props => {
  const { state, dispatch } = useContext(store);
  const currentSlideNumber = state.currentSlideNumber;
  const currentSlide = story[currentSlideNumber];

  // useEffect(() => {scroll.scrollTo(2 * window.innerHeight)}, []);

  useEffect(() => {
    const screenWidths = window.scrollY / window.outerHeight;
    if (screenWidths > currentSlide.end) {
      const nextSlideNumber = currentSlideNumber + 1;
      dispatch({
        type: "SET_SLIDE_NUMBER",
        payload: nextSlideNumber
      });
    } else if (screenWidths < currentSlide.start) {
      const nextSlideNumber = currentSlideNumber - 1;
      dispatch({
        type: "SET_SLIDE_NUMBER",
        payload: nextSlideNumber
      });
    }
  }, [window.scrollY]);

  return (
    <AbsoluteElementsContainer>
      <p>slide for animation</p>
      <Background />
      <Title />
      <Display />
      <Discuss />
      <Divider />
      <Source />
    </AbsoluteElementsContainer>
  );
};

export default AbsoluteElements;

import styled from "@emotion/styled";
import styleUtils from "utils/styles";

export const AbsoluteElementsContainer: any = styled.div({
  position: "relative",
  border: "1px solid grey",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%"
});
