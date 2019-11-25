import React from "react";
import { Link } from "react-router-dom";
import FlywheelModal from "./modal/FlywheelModal";
import { Motion, StaggeredMotion, spring } from "react-motion";
import range from "lodash.range";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleAlt,
  faUtensils,
  faWeight,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

//Styles

const MainButton = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background-color: #28a745;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  border: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 9999;
`;

const ChildButton = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: rgba(170, 215, 210, 0.934) 0px 0px 50px 12px;
  z-index: 9999;
  display: none;
`;

const Title = styled.h6`
  color: black;
  position: fixed;
  top: -32px;
`;

const faMBIconColor = "white";

const faChildIconColor = "#007bff";

// Components

//var icon = {
// icon: null,
//  name: "",
//  isaLink: Boolean,
//  linkPath: ""
//};

let childButtonIcons = [
  {
    icon: faAppleAlt,
    name: "Food",
    isaLink: true,
    linkPath: "/login"
  },
  { icon: faUtensils, name: "Recipe", isaLink: false },
  { icon: faWeight, name: "Weight", isaLink: false }
];

// Diameter of the main button in pixels
const MAIN_BUTTON_DIAM = 75;
const CHILD_BUTTON_DIAM = 48;

// The number of child buttons that fly out from the main button
const NUM_CHILDREN = childButtonIcons.length;

//should be between 0 and 0.5 (its maximum value is difference between scale in finalChildButtonStyles a
// nd initialChildButtonStyles)
const OFFSET = 0.05;

const SPRING_CONFIG = { stiffness: 500, damping: 15 };

// How far away from the main button does the child buttons go
const FLY_OUT_RADIUS = 130,
  SEPARATION_ANGLE = 40, //degrees
  FAN_ANGLE = (NUM_CHILDREN - 3) * SEPARATION_ANGLE, //degrees //NEED TO ADJUST HERE WHEN ADDING OR DELETING ICONS
  BASE_ANGLE = (180 - FAN_ANGLE) / 2; // degrees

// Utility functions

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function finalChildDeltaPositions(index) {
  let angle = BASE_ANGLE + index * SEPARATION_ANGLE;
  return {
    deltaX: FLY_OUT_RADIUS * Math.cos(toRadians(angle)) - CHILD_BUTTON_DIAM / 2,
    deltaY: FLY_OUT_RADIUS * Math.sin(toRadians(angle)) + CHILD_BUTTON_DIAM / 2
  };
}

class Flywheel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      childButtons: [],
      M: { x: 0, y: 0 },
      m_btn_h: 0,
      m_btn_w: 0,
      isEnabled: false,
      segue: ""
    };

    // Bind this to the functions
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.addOverlay = this.addOverlay.bind(this);
  }

  updateMainBtnPosition(MBE) {
    const M = MBE.getBoundingClientRect(); //Gets the MAIN BUTTON's position realtive to the clients screen
    this.setState({
      M: { x: M.x + this.state.m_btn_w, y: M.y + this.state.m_btn_h }
    });
  }

  checkIfNum = str => {
    const stringArray = Array.from(str);
    const returnedNum = stringArray.map(e => {
      if (
        e === "0" ||
        e === "1" ||
        e === "2" ||
        e === "3" ||
        e === "4" ||
        e === "5" ||
        e === "6" ||
        e === "7" ||
        e === "8" ||
        e === "9"
      ) {
        return e;
      }
    });

    const joined = returnedNum.join("");

    return Number(joined);
  };

  getHalfMainBtnSize = (mbeH, mbeW) => {
    this.setState({
      m_btn_h: mbeH / 2 + 8,
      m_btn_w: mbeW / 2 + 8
    });
  };

  onLoad = async () => {
    const MAIN_BTN_ELE = document.querySelector(".main-button");

    await this.getHalfMainBtnSize(
      this.checkIfNum(MAIN_BTN_ELE.style.height),
      this.checkIfNum(MAIN_BTN_ELE.style.width)
    );

    window.addEventListener("click", this.closeMenu);
    window.addEventListener("resize", () =>
      this.updateMainBtnPosition(MAIN_BTN_ELE)
    );

    let childButtons = [];

    this.updateMainBtnPosition(MAIN_BTN_ELE);
    this.setState({ childButtons: childButtons.slice(0) });
  };

  componentDidMount() {
    this.onLoad();
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.closeMenu);
    window.removeEventListener("resize", () => {
      this.updateMainBtnPosition();
    });
  }

  mainButtonStyles() {
    return {
      width: MAIN_BUTTON_DIAM,
      height: MAIN_BUTTON_DIAM
    };
  }

  initialChildButtonStyles() {
    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(this.state.M.y - CHILD_BUTTON_DIAM / 2, SPRING_CONFIG),
      left: spring(this.state.M.x - CHILD_BUTTON_DIAM / 2, SPRING_CONFIG),
      rotate: spring(-180, SPRING_CONFIG),
      scale: spring(0.5, SPRING_CONFIG)
    };
  }

  initialChildButtonStylesInit() {
    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: this.state.M.y - CHILD_BUTTON_DIAM / 2,
      left: this.state.M.x - CHILD_BUTTON_DIAM / 2,
      rotate: -180,
      scale: 0.5
    };
  }

  finalChildButtonStylesInit(childIndex) {
    let { deltaX, deltaY } = finalChildDeltaPositions(childIndex);
    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: this.state.M.y - deltaY,
      left: this.state.M.x + deltaX,
      rotate: 0,
      scale: 1
    };
  }

  finalChildButtonStyles(childIndex) {
    let { deltaX, deltaY } = finalChildDeltaPositions(childIndex);
    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(this.state.M.y - deltaY, SPRING_CONFIG),
      left: spring(this.state.M.x + deltaX, SPRING_CONFIG),
      rotate: spring(0, SPRING_CONFIG),
      scale: spring(1, SPRING_CONFIG)
    };
  }

  addOverlay(e) {
    const overlay = document.createElement("div");
    overlay.setAttribute("id", "overlay");
    document.body.appendChild(overlay);
    const overlayElement = document.getElementById("overlay");

    overlay.addEventListener("click", e => {
      this.toggleMenu(e);
    });

    if (!this.state.isOpen) {
      //toggle on
      overlayElement.style.display = "block";
    } else {
      //toggle off
      overlayElement.style.display = "none";
      document.body.removeChild(overlayElement);
      overlayElement.removeEventListener("click", e => {
        this.toggleMenu(e);
      });
    }
  }

  toggleMenu(e) {
    // this.addOverlay();   //turn this on if you are only using aboslute links or router links. Otherwise leave off as this will duplicate the default overlay provided by boostraps modal
    e.stopPropagation();
    let { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  closeMenu() {
    this.setState({ isOpen: false });
  }

  renderChildButtons() {
    const { isOpen } = this.state;
    const targetButtonStylesInitObject = range(NUM_CHILDREN).map(i => {
      return isOpen
        ? this.finalChildButtonStylesInit(i)
        : this.initialChildButtonStylesInit();
    });

    //StaggeredMotion now takes an Array of object
    const targetButtonStylesInit = Object.keys(
      targetButtonStylesInitObject
    ).map(key => targetButtonStylesInitObject[key]);

    const targetButtonStyles = range(NUM_CHILDREN).map(i => {
      return isOpen
        ? this.finalChildButtonStyles(i)
        : this.initialChildButtonStyles();
    });

    const scaleMin = this.initialChildButtonStyles().scale.val;
    const scaleMax = this.finalChildButtonStyles(0).scale.val;

    //This function returns target styles for each child button in current animation frame
    //according to actual styles in previous animation frame.
    //Each button could have one of two target styles
    // - defined in initialChildButtonStyles (for collapsed buttons)
    // - defined in finalChildButtonStyles (for expanded buttons)
    // To decide which target style should be applied function uses css 'scale' property
    // for previous button in previous animation frame.
    // When 'scale' for previous button passes some 'border' which is a simple combination one of
    // two 'scale' values and some OFFSET the target style for next button should be changed.
    //
    // For example let's set the OFFSET for 0.3 - it this case border's value for closed buttons will be 0.8.
    //
    // All buttons are closed
    //                INITIAL-BUTTON-SCALE-(0.5)-----------BORDER-(0.8)------FINAL-BUTTON-SCALE-(1)
    //                |------------------------------------------|--------------------------------|
    // BUTTON NO 1    o------------------------------------------|---------------------------------
    // BUTTON NO 2    o------------------------------------------|---------------------------------
    //
    // When user clicks on menu button no 1 changes its target style according to finalChildButtonStyles method
    // and starts growing up. In this frame this button doesn't pass the border so target style for button no 2
    // stays as it was in previous animation frame
    // BUTTON NO 1    -----------------------------------o-------|---------------------------------
    // BUTTON NO 2    o------------------------------------------|---------------------------------
    //
    //
    //
    // (...few frames later)
    // In previous frame button no 1 passes the border so target style for button no 2 could be changed.
    // BUTTON NO 1    -------------------------------------------|-o-------------------------------
    // BUTTON NO 2    -----o-------------------------------------|---------------------------------
    //
    //
    // All buttons are expanded - in this case border value is 0.7 (OFFSET = 0.3)
    //                INITIAL-BUTTON-SCALE-(0.5)---BORDER-(0.7)--------------FINAL-BUTTON-SCALE-(1)
    //                |------------------------------|--------------------------------------------|
    // BUTTON NO 1    -------------------------------|--------------------------------------------O
    // BUTTON NO 2    -------------------------------|--------------------------------------------O
    //
    // When user clicks on menu button no 1 changes its target style according to initialChildButtonStyles method
    // and starts shrinking down. In this frame this button doesn't pass the border so target style for button no 2
    // stays as it was defined in finalChildButtonStyles method
    // BUTTON NO 1    -------------------------------|------------------------------------O--------
    // BUTTON NO 2    -------------------------------|--------------------------------------------O
    //
    //
    //
    // (...few frames later)
    // In previous frame button no 1 passes the border so target style for button no 2 could be changed
    // and this button starts to animate to its default state.
    // BUTTON NO 1    -----------------------------o-|---------------------------------------------
    // BUTTON NO 2    -------------------------------|------------------------------------O--------

    let calculateStylesForNextFrame = prevFrameStyles => {
      prevFrameStyles = isOpen ? prevFrameStyles : prevFrameStyles.reverse();

      let nextFrameTargetStyles = prevFrameStyles.map(
        (buttonStyleInPreviousFrame, i) => {
          //animation always starts from first button
          if (i === 0) {
            return targetButtonStyles[i];
          }

          const prevButtonScale = prevFrameStyles[i - 1].scale;
          const shouldApplyTargetStyle = () => {
            if (isOpen) {
              return prevButtonScale >= scaleMin + OFFSET;
            } else {
              return prevButtonScale <= scaleMax - OFFSET;
            }
          };

          return shouldApplyTargetStyle()
            ? targetButtonStyles[i]
            : buttonStyleInPreviousFrame;
        }
      );

      return isOpen ? nextFrameTargetStyles : nextFrameTargetStyles.reverse();
    };

    return (
      <StaggeredMotion
        defaultStyles={targetButtonStylesInit}
        styles={calculateStylesForNextFrame}
      >
        {interpolatedStyles => (
          <div>
            {interpolatedStyles.map(
              ({ height, left, rotate, scale, top, width }, index) =>
                childButtonIcons[index].isaLink ? (
                  <Link to={childButtonIcons[index].linkPath}>
                    {" "}
                    <ChildButton
                      key={index}
                      style={{
                        left,
                        height,
                        top,
                        transform: `rotate(${rotate}deg) scale(${scale})`,
                        width,
                        display: isOpen ? `flex` : `none`
                      }}
                    >
                      <Title>{childButtonIcons[index].name}</Title>
                      <FontAwesomeIcon
                        icon={childButtonIcons[index].icon}
                        size="2x"
                        color={faChildIconColor}
                      />
                    </ChildButton>
                  </Link>
                ) : (
                  <ChildButton
                    key={index}
                    style={{
                      left,
                      height,
                      top,
                      transform: `rotate(${rotate}deg) scale(${scale})`,
                      width,
                      display: isOpen ? `flex` : `none`
                    }}
                  >
                    <Title>{childButtonIcons[index].name}</Title>
                    <FontAwesomeIcon
                      icon={childButtonIcons[index].icon}
                      size="2x"
                      color={faChildIconColor}
                      onClick={() => {
                        return (
                          this.setState({
                            segue: childButtonIcons[index].name
                          }),
                          this.handleToggleClick()
                        );
                      }}
                    />
                  </ChildButton>
                )
            )}
          </div>
        )}
      </StaggeredMotion>
    );
  }

  //Modal setup func
  handleToggleClick = e => {
    this.setState({ isEnabled: !this.state.isEnabled });
  };

  render() {
    let { isOpen } = this.state;
    let mainButtonRotation = isOpen
      ? { rotate: spring(0, { stiffness: 500, damping: 30 }) }
      : { rotate: spring(-135, { stiffness: 500, damping: 30 }) };
    return (
      <>
        <div>
          {this.renderChildButtons()}
          <Motion style={mainButtonRotation}>
            {({ rotate }) => (
              <MainButton
                className="main-button"
                style={{
                  ...this.mainButtonStyles(),
                  transform: `rotate(${rotate}deg)`
                }}
                onClick={this.toggleMenu}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  size="3x"
                  color={faMBIconColor}
                />
              </MainButton>
            )}
          </Motion>
        </div>

        <FlywheelModal
          isEnabled={this.state.isEnabled}
          handleToggleClickProp={this.handleToggleClick}
          segue={this.state.segue}
          weight={this.state.weight}
        />
      </>
    );
  }
}

export default Flywheel;

// Here is the medium article to help alog with designing: https://medium.com/@nashvail/a-gentle-introduction-to-react-motion-dc50dd9f2459
