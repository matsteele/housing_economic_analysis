import React, { useContext, useState, useEffect } from "react";
import { store } from "utils/store";

import { css, jsx } from "@emotion/core";
import { ShiftOutHOC } from "../../elements/element_base";
import styleUtils from "utils/styles";
import styled from "@emotion/styled";

import SingleFamilyIcon from "./housing_types_01";
import MultiFamilyIcon from "./housing_types_02";

export default function MajorProblems() {
  const screenWidths = window.scrollY / window.outerHeight;

  return (
    <>
      <ContainerDiv>
        <UpperDiv>two distinct housing markets</UpperDiv>
        <TextInFocus>
          <BaseDiv fontSize={screenWidths > 29 ? "20px" : "45px"}>
            <ShiftOutHOC startingSlide={27} endingSlide={40} height="25%">
              <BaseDiv>
                <SingleFamilyIcon height={screenWidths > 29 ? 50 : 150} />
                <strong>single-family </strong>
                <br />
                <br />
                <br />
              </BaseDiv>
            </ShiftOutHOC>
          </BaseDiv>

          <BaseDiv>
            <ShiftOutHOC startingSlide={30} endingSlide={40} height="25%">
              <BaseDiv fontSize={screenWidths > 31 ? "20px" : "45px"}>
                <br />
                <br />
                <br />
                <MultiFamilyIcon height={screenWidths > 31 ? 50 : 150} />
                <strong>multi-family</strong>
              </BaseDiv>
            </ShiftOutHOC>
          </BaseDiv>
        </TextInFocus>
        <ShiftOutHOC startingSlide={28} endingSlide={40}>
          <StyledSVG>
            <image
              height="100%"
              width="100%"
              href={
                "./src/components/narrative/slide5/supply_demand_progression_01.svg"
              }
            />
          </StyledSVG>
        </ShiftOutHOC>
        <ShiftOutHOC startingSlide={29} endingSlide={40}>
          <StyledSVG>
            <image
              height="100%"
              width="100%"
              opacity={screenWidths > 31 ? 0.3 : 1}
              href={
                "./src/components/narrative/slide5/supply_demand_progression_02.svg"
              }
            />
            <text
              opacity={screenWidths > 31 ? 0 : 1}
              fill="white"
              x="220"
              y="120"
            >
              SUPPLY DRIVEN
            </text>
          </StyledSVG>
        </ShiftOutHOC>
        <ShiftOutHOC startingSlide={31} endingSlide={40}>
          <StyledSVG>
            <image
              height="100%"
              width="100%"
              opacity={screenWidths > 33 ? 0.3 : 1}
              href={
                "./src/components/narrative/slide5/supply_demand_progression_03.svg"
              }
            />
            <text
              opacity={screenWidths > 33 ? 0 : 1}
              fill="white"
              x="220"
              y="120"
            >
              DEMAND DRIVEN
            </text>
          </StyledSVG>
        </ShiftOutHOC>
        <ShiftOutHOC startingSlide={32} endingSlide={36}>
          <StyledSVG>
            <image
              height="100%"
              width="100%"
              href={
                "./src/components/narrative/slide5/supply_demand_progression_04.svg"
              }
            />
            <text
              opacity={screenWidths > 34 ? 0 : 1}
              fill="white"
              x="220"
              y="120"
            >
              IF SUPPLY SHIFTS RIGHT
            </text>
          </StyledSVG>
        </ShiftOutHOC>
        <ShiftOutHOC startingSlide={34} endingSlide={36}>
          <StyledSVG>
            <image
              height="100%"
              width="100%"
              href={
                "./src/components/narrative/slide5/supply_demand_progression_05.svg"
              }
            />
            <text fill="white" x="220" y="120">
              PRICE SHIFTS DOWN
            </text>
          </StyledSVG>
        </ShiftOutHOC>
        <ShiftOutHOC startingSlide={36} endingSlide={40}>
          <StyledSVG>
            <image
              height="100%"
              width="100%"
              href={
                "./src/components/narrative/slide5/supply_demand_progression_06.svg"
              }
            />
            <text
              opacity={screenWidths > 38 ? 0 : 1}
              fill="white"
              x="220"
              y="120"
            >
              IF DEMAND SHIFTS RIGHT
            </text>
          </StyledSVG>
        </ShiftOutHOC>
        <ShiftOutHOC startingSlide={38} endingSlide={40}>
          <StyledSVG>
            <image
              height="100%"
              width="100%"
              href={
                "./src/components/narrative/slide5/supply_demand_progression_07.svg"
              }
            />
            <text fill="white" x="220" y="120">
              PRICE SHIFTS UP
            </text>
          </StyledSVG>
        </ShiftOutHOC>
      </ContainerDiv>
    </>
  );
}

const BaseDiv: any = styled.div(props => ({
  color: "white",
  lineHeight: 1,
  height: "100%",
  flexDirection: "row",
  // transition: "all 1000ms linear",
  display: "flex",
  alignItems: "center",
  fontSize: props.fontSize
}));

const UpperDiv: any = styled(BaseDiv)({
  height: "70%",
  fontSize: "60px"
});

const TextInFocus: any = styled(BaseDiv)({
  marginLeft: "15%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "normal",
  height: "100%"
});

const ContainerDiv: any = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  height: "100%"
});

export const StyledSVG: any = styled.svg({
  overflow: "visible !important",
  height: "100%",
  width: "45%",
  marginTop: "300px"
});
