import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  getOneFoodItem,
  addFoodItem
} from "../../store/actions/foodItemAction";

import { ButtonDropdown, DropdownItem, DropdownMenu, Card } from "reactstrap";
import { Input, H2, Row, Col, DropdownToggle } from "../Global/styled";
import formatDecimal from "../Global/helpers/formatDecimals";
import Flywheel from "../Global/flywheel-menu/Flywheel";
import moment from "moment";
import Loading from "../Global/Loading";

import {
  faAppleAlt,
  faUtensils,
  faWeight,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import MacroBudgets from "../Global/MacroBudgets";
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
      dropDownSelectionKey: 0
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

  addedMacros() {
    return {
      fat: Math.ceil(
        Number(this.props.item[this.state.dropDownSelectionKey].fat_g) *
          this.state.quantity
      ),
      carbs: Math.ceil(
        Number(this.props.item[this.state.dropDownSelectionKey].carbs_g) *
          this.state.quantity
      ),
      protein: Math.ceil(
        Number(this.props.item[this.state.dropDownSelectionKey].protein_g) *
          this.state.quantity
      )
    };
  }

  render() {
    console.log("[this.props.item]", this.props.item);
    if (!this.props.item[0]) return <Loading />;
    return (
      <div>
        <Row>
          <Col align="center" height="50px">
            <FoodName>
              {this.props.item[this.state.dropDownSelectionKey] &&
                this.props.item[this.state.dropDownSelectionKey].food_name}
            </FoodName>
          </Col>
          <Col align="center" justify="flex-end" height="50px">
            <Calories>
              {Math.trunc(
                this.props.item[this.state.dropDownSelectionKey] &&
                  this.props.item[this.state.dropDownSelectionKey]
                    .calories_kcal * this.state.quantity
              )}{" "}
              cal
            </Calories>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              type="number"
              name="quantity"
              value={this.state.quantity}
              min={1}
              onChange={e => {
                this.setState({ quantity: e.target.value });
              }}
            />
          </Col>
          <Col>
            <ButtonDropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.handleToggle}
              style={{ width: "100%" }}
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
                {this.props.item[0] &&
                  this.props.item[this.state.dropDownSelectionKey].serving_desc}
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
        <MacroBudgets
          macrosAdded={this.addedMacros()}
        />
        <Row>
          <Col direction="column">
            {/* Total Fat */}
            <MainData justify="space-between" align="flex-end">
              <h3>Total Fat</h3>
              <h5>
                {this.props.item[this.state.dropDownSelectionKey].fat} grams
              </h5>
            </MainData>
            {/* Saturated Fat */}
            <SubData justify="space-between" align="flex-end">
              <h3>Saturated Fat</h3>
              <h5>
                {this.props.item[this.state.dropDownSelectionKey].fat} grams
              </h5>
            </SubData>
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
      </div>
    );
  }
}

const MainData = styled(Col)`
  border-bottom: 1px solid black;
`;

const SubData = styled(Col)`
  border-bottom: 1px solid black;
  h3 {
    font-weight: normal;
  }
`;

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

// {
//   {THIS WHOLE TABLE WILL BE REMOVED AND DISPLAYED IN GLOBAL DATAWHEEL} */
// }
// {
//   {this.state.dropDownSelectionKey !== false && (
//               <TBody borderless responsive>
//                 <tr>
//                   <h3 scope="row"> Fats </h3>
//                   <td>
//                     {formatDecimal(
//                       this.props.item[this.state.dropDownSelectionKey].fat *
//                         this.state.quantity
//                     )}
//                     {
//                       this.props.item[this.state.dropDownSelectionKey]
//                         .metric_serving_unit
//                     }
//                   </td>
//                 </tr>
//                 <tr>
//                   <th scope="row"> Cholesterol </th>
//                   <td>
//                     {formatDecimal(
//                       this.props.item[this.state.dropDownSelectionKey]
//                         .cholesterol * this.state.quantity
//                     )}
//                     {
//                       this.props.item[this.state.dropDownSelectionKey]
//                         .metric_serving_unit
//                     }
//                   </td>
//                 </tr>
//                 <tr>
//                   <th scope="row"> Sodium </th>
//                   <td>
//                     {formatDecimal(
//                       this.props.item[this.state.dropDownSelectionKey].sodium *
//                         this.state.quantity
//                     )}
//                     {
//                       this.props.item[this.state.dropDownSelectionKey]
//                         .metric_serving_unit
//                     }
//                   </td>
//                 </tr>
//               </TBody>
//             )}
// }
