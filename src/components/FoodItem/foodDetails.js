import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import { Textfit } from "react-textfit";
import { ButtonDropdown, DropdownItem, DropdownMenu } from "reactstrap";
import styled from "styled-components";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  addFoodItem,
  getOneFoodItem
} from "../../store/actions/foodItemAction";
import CaloricBudget from "../Global/CaloricBudget";
import Loading from "../Global/Loading";
import MacroBudgets from "../Global/MacroBudgets";
import Flywheel from "../Global/flywheel-menu/Flywheel";
import { Col, DropdownToggle, H2, Input, Row } from "../Global/styled";
import NutritionInfo from "./components/NutritionInfo";

class FoodDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
      dropdownOpen: false,
      dropDownSelectionIndex: 0
    };
  }

  componentWillMount() {
    console.log("[this.props.match.params]", this.props.match.params);
    const { fatsecret_food_id } = this.props.match.params;
    this.props.getOneFoodItem(fatsecret_food_id);
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
        dropDownSelectionIndex: key
      };
    });
  };

  addedMacros() {
    const foodItem = this.props.item;
    const selectionIndex = this.state.dropDownSelectionIndex;
    const quantity = this.state.quantity;
    /* ****************************************************** */
    const addedfatGrams = Number(foodItem[selectionIndex].fat_g) * quantity;
    const addedCarbGrams = Number(foodItem[selectionIndex].carbs_g) * quantity;
    const addedProteinGrams =
      Number(foodItem[selectionIndex].protein_g) * quantity;

    // rounds to nearest hundreth
    return {
      fat: Math.round(100 * addedfatGrams) / 100,
      carbs: Math.round(100 * addedCarbGrams) / 100,
      protein: Math.round(100 * addedProteinGrams) / 100
    };
  }

  addNewFoodLog = () => {
    const foodItem = this.props.item;
    const selectionIndex = this.state.dropDownSelectionIndex;
    /* ****************************************************** */
    const currentDate = this.props.currentDate;
    const food_id = foodItem[selectionIndex].id;
    const quantity = this.state.quantity;
    const serving_id = foodItem[selectionIndex].serving_id;
    const fatsecret_food_id = this.props.match.params.fatsecret_food_id;
    const { time_zone_name, time_zone_abbr } = this.getCurrentTimeZone();
    const firebaseID = this.props.firebaseID;

    this.props.addFoodItem(
      {
        food_id,
        quantity,
        serving_id,
        fatsecret_food_id,
        time_zone_name,
        time_zone_abbr
      },
      firebaseID, currentDate
    );

    this.props.history.push("/food-item/search");    
  };

  getCurrentTimeZone() {
    // output ex. America/Los_Angeles
    const time_zone_name = moment.tz.guess();
    // output ex. "2019-11-24"
    const todaysDate = moment.tz(time_zone_name).format("YYYY-MM-DD");
    // output ex. PST
    const time_zone_abbr = moment.tz(todaysDate, time_zone_name).format("z"); // output ex. PST

    return { time_zone_name, time_zone_abbr };
  }

  render() {
    if (!this.props.item[0]) return <Loading />;

    const foodItem = this.props.item;
    const dropDownSelectionIndex = this.state.dropDownSelectionIndex;
    /* ****************************************************** */
    const quantity = this.state.quantity;
    const foodSelection = foodItem[dropDownSelectionIndex];

    return (
      <>
        <Row>
          <Col align="center" height="50px">
            <FoodName>
              <Textfit>
                {foodSelection && foodSelection.food_name}
              </Textfit>
            </FoodName>
          </Col>
        </Row>
        <CaloricBudget addedCals={foodSelection.calories_kcal * quantity}/>
        <MacroBudgets macrosAdded={this.addedMacros()} />
        <Row style={{marginTop: "30px", marginBottom: "10px"}}>
          <Col direction="column" align="flex-start">
            <InputLabel>Qty</InputLabel>
            <Input
              type="number"
              name="quantity"
              value={quantity}
              min={1}
              onChange={e => {
                this.setState({ quantity: e.target.value });
              }}
            />
          </Col>
          <Col direction="column" align="flex-end">
            <InputLabel>Serving Type</InputLabel>
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
                {this.props.item[0] && foodSelection.serving_desc}
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
        <NutritionInfo foodSelection={foodSelection} quantity={quantity} />
        <Row>
          <Col>
            <Flywheel
              staticInitialButton
              onMainButtonClick={this.addNewFoodLog}
              maintButtonIcon={faCheck}
              childButtonIcons={[]}
            />
          </Col>
        </Row>
      </>
    );
  }
}

const FoodName = styled(H2)`
  text-align: center;
  width: 100%;
  /* font-size: 2rem; */
`;

const Calories = styled(H2)`
  text-align: right;
`;

const InputLabel = styled.span`
  font-size: 1.6rem;
`;

const mapStateToProps = state => {
  return {
    item: state.foodItemsReducer.item,
    getting: state.foodItemsReducer.getting,
    got: state.foodItemsReducer.got,
    budgets: state.dailyLog.budgets,
    consumed: state.dailyLog.consumed,
    currentDate: state.dailyLog.currentDate,
    currentTimeZone: state.dailyLog.currentTimeZone,
    firebaseID: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps, { getOneFoodItem, addFoodItem })(
  FoodDetails
);

// {
//   {THIS WHOLE TABLE WILL BE REMOVED AND DISPLAYED IN GLOBAL DATAWHEEL} */
// }
// {
//   {this.state.dropDownSelectionIndex !== false && (
//               <TBody borderless responsive>
//                 <tr>
//                   <h3 scope="row"> Fats </h3>
//                   <td>
//                     {formatDecimal(
//                       foodSelection.fat *
//                         quantity
//                     )}
//                     {
//                       foodSelection
//                         .metric_serving_unit
//                     }
//                   </td>
//                 </tr>
//                 <tr>
//                   <th scope="row"> Cholesterol </th>
//                   <td>
//                     {formatDecimal(
//                       foodSelection
//                         .cholesterol * quantity
//                     )}
//                     {
//                       foodSelection
//                         .metric_serving_unit
//                     }
//                   </td>
//                 </tr>
//                 <tr>
//                   <th scope="row"> Sodium </th>
//                   <td>
//                     {formatDecimal(
//                       foodSelection.sodium *
//                         quantity
//                     )}
//                     {
//                       foodSelection
//                         .metric_serving_unit
//                     }
//                   </td>
//                 </tr>
//               </TBody>
//             )}
// }
