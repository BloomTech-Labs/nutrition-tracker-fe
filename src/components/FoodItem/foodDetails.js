import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  getOneFoodItem,
  addFoodItem
} from "../../store/actions/foodItemAction";

import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu
} from "reactstrap";
import { DropdownToggle, Row, Col } from "../Global/styled";
import { TBody, Input, H2 } from "../Global/styled/";
import formatDecimal from "../Global/helpers/formatDecimals";
import Flywheel from "../Global/flywheel-menu/Flywheel";
import moment from "moment";

import {
  faAppleAlt,
  faUtensils,
  faWeight,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import DataWheel from "../Global/DataWheel";
let childButtonIcons = [
  {
    icon: faAppleAlt,
    name: "Food",
    isaLink: true,
    linkPath: "/food-item/search"
  },
  { icon: faUtensils, name: "Recipe", isaLink: false },
  { icon: faWeight, name: "Weight", isaLink: false }
];

class FoodDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
      dropdownOpen: false,
      dropDownSelectionKey: false
    };
  }

  componentWillMount() {
    const { food_id } = this.props.match.params;
    const firebaseID = this.props.firebaseID;
    this.props.getOneFoodItem(food_id);
  }

  handleToggle = e => {
    this.setState(prevState => {
      return {
        ...prevState,
        dropdownOpen: !prevState.dropdownOpen
      };
    });
  };

  handleSelect = key => {
    this.setState(function(prevState) {
      return {
        ...prevState,
        dropDownSelectionKey: key
      };
    });
  };

  handleOnMainButtonClick = () => {
    if (!this.state.dropDownSelectionKey) {
      return false;
    }
    const currentTimeZone = moment.tz.guess(); // this gives you the time-zone_name, ex. America/Los_Angeles
    const today = moment.tz(currentTimeZone).format("YYYY-MM-DD"); // this give you the current date (localized to the user's timezone)
    const tzAbbreviation = moment.tz(today, currentTimeZone).format("z"); // this gives you the time_zone_abbr, ex. PST
    console.log(this.props.match.params);
    const { food_id } = this.props.match.params;
    const { quantity } = this.state;
    const { serving_id } = this.props.item[this.state.dropDownSelectionKey];
    const time_consumed_at = today,
      time_zone_abbr = tzAbbreviation,
      time_zone_name = currentTimeZone;
    this.props.addFoodItem({
      fatsecret_food_id: food_id,
      food_id: this.props.item.id,
      quantity,
      serving_id,
      time_consumed_at,
      time_zone_abbr,
      time_zone_name
    });
  };

  render() {
    console.log("[this.props.item]", this.props.item);
    return (
      <>
        <Row>
          <Col align="center" height="50px">
            <FoodName>
              {this.props.item[0].food_name}
            </FoodName>
          </Col>
          <Col align="center" justify="flex-end" height="50px">
            <Calories>
              {Math.trunc(this.props.item[0].calories_kcal)} cal
            </Calories>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              type="text"
              name="quantity"
              value={this.state.quantity}
              onChange={e => {
                this.setState({ quantity: e.target.value });
              }}
            />
          </Col>
          <Col>
            <ButtonDropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.handleToggle}
              style={{width: "100%"}}
            >
              <DropdownToggle
                caret
                style={{
                  textAlign: "right",
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "#CED4DA"
                }}
              >
                {this.state.dropDownSelectionKey !== false
                  ? this.props.item[this.state.dropDownSelectionKey]
                      .serving_desc
                  : this.props.item[0].serving_desc}
              </DropdownToggle>
              <DropdownMenu>
                {this.props.item.map((serving, key) =>
                  <DropdownItem
                    key={key}
                    onClick={() => this.handleSelect(key)}
                  >
                    {serving.serving_desc}
                  </DropdownItem>
                )}
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
        </Row>
        <Row noGutters>
          <Col direction="column" justify="center" align="center" xs={4}>
            <DataWheel macroName="Fats" />
          </Col>
          <Col direction="column" justify="center" align="center" xs={4}>
            <DataWheel macroName="Carbs" />
          </Col>
          <Col direction="column" justify="center" align="center" xs={4}>
            <DataWheel macroName="Protein" />
          </Col>
        </Row>
        <Row>
          <Col>
            {/* {THIS WHOLE TABLE WILL BE REMOVED AND DISPLAYED IN GLOBAL DATAWHEEL} */}
            {this.state.dropDownSelectionKey !== false &&
              <TBody borderless responsive>
                <tr>
                  <th scope="row"> Fats </th>
                  <td>
                    {formatDecimal(
                      this.props.item[this.state.dropDownSelectionKey].fat *
                        this.state.quantity
                    )}
                    {
                      this.props.item[this.state.dropDownSelectionKey]
                        .metric_serving_unit
                    }
                  </td>
                </tr>
                <tr>
                  <th scope="row"> Cholesterol </th>
                  <td>
                    {formatDecimal(
                      this.props.item[this.state.dropDownSelectionKey]
                        .cholesterol * this.state.quantity
                    )}
                    {
                      this.props.item[this.state.dropDownSelectionKey]
                        .metric_serving_unit
                    }
                  </td>
                </tr>
                <tr>
                  <th scope="row"> Sodium </th>
                  <td>
                    {formatDecimal(
                      this.props.item[this.state.dropDownSelectionKey].sodium *
                        this.state.quantity
                    )}
                    {
                      this.props.item[this.state.dropDownSelectionKey]
                        .metric_serving_unit
                    }
                  </td>
                </tr>
              </TBody>}
          </Col>
        </Row>
        <Row>
          <Col>
            <Flywheel
              staticInitialButton
              onMainButtonClick={this.handleOnMainButtonClick}
              maintButtonIcon={faCheck}
              childButtonIcons={childButtonIcons}
            />
          </Col>
        </Row>
      </>
    );
  }
}

const FoodName = styled(H2)`
  text-align: left;
`;

const Calories = styled(H2)`
  text-align: right;
`;

const mapStateToProps = state => {
  return {
    item: state.foodItemsReducer.item,
    getting: state.foodItemsReducer.getting,
    got: state.foodItemsReducer.got,
    budgets: state.dailyLog.budgets,
    consumed: state.dailyLog.consumed,
    firebaseID: state.firebase.auth.uid
  };
};

export default connect(mapStateToProps, { getOneFoodItem, addFoodItem })(
  FoodDetails
);
