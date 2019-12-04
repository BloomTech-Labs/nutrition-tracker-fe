import React from "react";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";

// the props below control the the styles and display of
// both the top and bottom nav
const withNavigation = ({
  pageTitle = "",
  titleColor = "white",
  iconColor = "white",
  topNavColor = "black",
  displayTop = true,
  displayBottom = true
}) => Content => theRest => {
  
  // sets the height of the Content equal to the
  // defference between the total viewport height
  // and the height taken from the nav bars
  const contentHeight =
    // if both nav bars are shown
    displayTop && displayBottom
      ? "calc(100vh - (100px))"
      : // if only one nav bar is shown
        (!displayTop && displayBottom) || (displayTop && !displayBottom)
        ? "calc(100vh - (50px))"
        : // if neither nav bar is shown
          "100vh";

  return (
    <div>
      <TopNav
        pageTitle={pageTitle}
        titleColor={titleColor}
        iconColor={iconColor}
        topNavColor={topNavColor}
        buttonColor={topNavColor}
        displayNav={displayTop}
      />
      <Content height={contentHeight} {...theRest} />
      <BottomNav displayNav={displayBottom} />
    </div>
  );
};

export default withNavigation;
