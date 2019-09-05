import React, { useState, useEffect, useContext } from "react";

import AbsoluteElements from "../elements";
import { store } from "utils/store";


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrollTop: 0, screenWidths: 0 };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrollTop = window.scrollY;
    const screenHeights = Math.round(window.scrollY / window.outerHeight);
    this.setState({
      scrollTop,
      screenHeights
    });
  }

  render() {
    var N = 100;
    const longArray = Array.apply(null, { length: N }).map(Number.call, Number);
    return (
      <>
        <ScrollableContainer>
          {longArray.map(valu => {
            return (
              <FillerDiv key={valu}>
                scroll height {valu} {this.state.screenWidths}{" "}
                {this.state.scrollTop}
              </FillerDiv>
            );
          })}
        </ScrollableContainer>
        <AbsoluteElements />
      </>
    );
  }
}

Layout.contextType = store;

export default Layout;

//styles
import styled from "@emotion/styled";
import styleUtils from "utils/styles";

const ScrollableContainer: any = styled.div({
  color: "white",
  width: "100%",
  overflow: "scroll",
  flexDirection: "column",
  alignItems: "flex-start",
  position: "absolute"
});

const FillerDiv: any = styled.div({
  width: "100%",
  height: window.innerHeight,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
