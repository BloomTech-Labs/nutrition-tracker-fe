import React from "react";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";

const withNavigation = ({
  pageTitle = "",
  titleColor = "white",
  iconColor = "white",
  topNavColor = "black",
  displayTop = true,
  displayBottom = true
}) => Content => theRest => {
  return (
    <div>
      <TopNav
        pageTitle={pageTitle}
        titleColor={titleColor}
        iconColor={iconColor}
        topNavColor={topNavColor}
        buttonColor={topNavColor}
        display={displayTop}
      />
      <Content {...theRest} />
      <BottomNav display={displayBottom} />
    </div>
  );
};

export default withNavigation; 
