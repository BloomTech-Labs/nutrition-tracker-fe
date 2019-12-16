import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Textfit } from "react-textfit";
import { useToasts } from "react-toast-notifications";
import { ButtonDropdown, DropdownItem, DropdownMenu } from "reactstrap";
import styled from "styled-components";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { getFoodItemForEdit } from "../../../store/actions/foodItemAction";
import Loading from "../../Global/Loading";
import MacroBudgets from "../../Global/MacroBudgets";
import Flywheel from "../../Global/flywheel-menu/Flywheel";
import {
  Col,
  DropdownToggle,
  H2,
  H3,
  H4,
  Input,
  Row
} from "../../Global/styled";
import NutritionInfo from "../../FoodItem/components/NutritionInfo";

//When we hit the endpoint in our backend we need to we can locad the users metrics for the particular food item selected
//then we neec to allow the user to modify the record action and reducers are required.
//we then need to let the user save the record via a put request endpoint that we still need to make

const UpdateFoodItem = props => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const { consumed, currentDate, currentTimeZone } = useSelector(
    state => state.dailyLog
  );
  const { item, got, error } = useSelector(state => state.foodItemsReducer);
  const firebaseID = useSelector(state => state.firebase.auth.uid);

  const [quantity, setQuantity] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropDownSelectionIndex, setDropDownSelectionIndex] = useState(1);

  // to populate date input
  const todayDate = moment.tz(currentTimeZone).format("YYYY-MM-DD");

  // to populate time input
  const todayTime = moment.tz(currentTimeZone).format("HH:mm");

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [dateTimeUTC, setDateTimeUTC] = useState(
    moment
      .tz(`${date} ${time}`, currentTimeZone)
      .utc()
      .format()
  );

  // useEffect(() => {
  //   setDateTimeUTC(moment.tz(`${date} ${time}`, currentTimeZone).utc().format());
  // }, [date, time])

  useEffect(() => {
    dispatch(getFoodItemForEdit(5, 1)); // JOE THIS IS HARD DATA CODED WE CAN NEED CHANGE THIS TO THE PARAMS DATA COMING IN FROM THE CLICK EVENT BUT IN ODRDER TO DO THIS WE NEED TO UPDATE OUR ROUTE TO THIS PAGE TO INCLUDE THE FOOD_LOG_ID NOT THE FOOD_ID AND ALSO HERE WE NEED TO HOOK ONTO THE USERS_ID AND PASS IT TO THE ACTION
    console.log("Here is the item in the updatefooditem.js: ", item);
  }, [props.match.params.foodLogID, props.match.params.userID]);

  useEffect(() => {
    setDate(moment(item.time_consumed_at).format("YYYY-MM-DD")); // Do not need time zone here
    setTime(moment(item.time_consumed_at).format("HH:mm")); // Do not need time zone here
    setQuantity(item.quantity);
    console.log("Here is the quantity:", item.quantity)
  }, [date, time]);

  // useEffect(
  //   () => {
  //     if (got)
  //       addToast("Food Item Updated!", {
  //         appearance: "success",
  //         autoDismiss: true
  //       });
  //     else if (error)
  //       addToast("Error. Try again later.", {
  //         appearance: "error",
  //         autoDismiss: true
  //       });
  //   },
  //   [error, got]
  // )

  const handleToggle = e => {
    setDropdownOpen(prevState => !prevState.dropdownOpen);
  };

  const handleSelect = key => {
    setDropDownSelectionIndex(key);
  };

  const addedMacros = () => {
    const selectionIndex = dropDownSelectionIndex;
    /* ****************************************************** */
    const addedfatGrams = Number(item.fat_g) * quantity;
    const addedCarbGrams = Number(item.carbs_g) * quantity;
    const addedProteinGrams = Number(item.protein_g) * quantity;

    // rounds to nearest hundreth
    return {
      fat: Math.round(100 * addedfatGrams) / 100,
      carbs: Math.round(100 * addedCarbGrams) / 100,
      protein: Math.round(100 * addedProteinGrams) / 100
    };
  };

  const addNewFoodLog = async () => {
    const selectionIndex = dropDownSelectionIndex;
    /* ****************************************************** */
    const food_id = item.id;
    const serving_id = item.serving_id;
    const fatsecret_food_id = props.match.params.fatsecret_food_id;
    const time_consumed_at = dateTimeUTC;
    const time_zone_name = currentTimeZone;
    const time_zone_abbr = getCurrentTimeZoneAbbr();

    dispatch();
    //we add update here
    //   addFoodItem(
    //     {
    //       food_id,
    //       quantity,
    //       serving_id,
    //       fatsecret_food_id,
    //       time_consumed_at,
    //       time_zone_name,
    //       time_zone_abbr
    //     },
    //     firebaseID
    //   )
  };

  const getCurrentTimeZoneAbbr = () => {
    const time_zone_abbr = moment.tz(currentDate, currentTimeZone).format("z"); // output ex. PST

    return time_zone_abbr;
  };

  if (!item) return <Loading />;

  /* ****************************************************** */
  const foodSelection = item;

  return (
    <div>
      <Row>
        <Col
          align="center"
          height="50px"
          style={{ borderBottom: "1px solid lightgrey" }}
        >
          <FoodName>
            <Textfit mode="single" forceSingleModeWidth={false}>
              {foodSelection ? ` Update: ${foodSelection.food_name}` : `Update`}
            </Textfit>
          </FoodName>
        </Col>
      </Row>
      <Row style={{ paddingTop: "20px" }}>
        <Col align="center" height="50px">
          <CurrentCalories>
            Current Cal
            <br />
            <span>{consumed.caloriesConsumed} cal</span>
          </CurrentCalories>
        </Col>
        <Col align="center" height="50px">
          <AddedCalories>
            {""} <br />
            <span>
              {" "}
              +
              {Math.trunc(
                foodSelection && foodSelection.calories_kcal * quantity
              )}{" "}
              cal
            </span>
          </AddedCalories>
        </Col>
        <Col align="center" height="50px">
          <NewCalories>
            New Cal
            <br />
            <span>
              {consumed.caloriesConsumed +
                foodSelection.calories_kcal * quantity}{" "}
              cal
            </span>
          </NewCalories>
        </Col>
      </Row>
      <MacroBudgets macrosAdded={addedMacros()} date={date} />
      <Row
        style={{
          marginTop: "50px",
          paddingTop: "15px",
          borderTop: "1px solid lightgrey"
        }}
      >
        <Col direction="column" align="flex-start">
          <InputLabel>Qty</InputLabel>
          <Input
            type="number"
            name="quantity"
            value={quantity}
            min={1}
            onChange={e => {
              setQuantity(e.target.value);
            }}
          />
        </Col>
        <Col direction="column" align="flex-end">
          <InputLabel>Serving Type</InputLabel>
          <ButtonDropdown
            isOpen={dropdownOpen}
            toggle={handleToggle}
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
              {item[0] && foodSelection.serving_desc}
            </DropdownToggle>
            <DropdownMenu></DropdownMenu>
          </ButtonDropdown>
        </Col>
      </Row>
      <Row style={{ marginBottom: "35px" }}>
        <Col direction="column" align="flex-start">
          <InputLabel>Date</InputLabel>
          <Input
            type="date"
            name="date"
            value={date}
            style={{ textAlign: "left" }}
            onChange={e => setDate(e.target.value)}
            min={1}
          />
        </Col>
        <Col direction="column" align="flex-end">
          <InputLabel>Time</InputLabel>
          <Input
            type="time"
            name="time"
            value={time}
            style={{ textAlign: "left" }}
            onChange={e => setTime(e.target.value)}
            min={1}
          />
        </Col>
      </Row>

      <NutritionInfo foodSelection={foodSelection} quantity={quantity} />
      <Row>
        <Col>
          <Flywheel
            staticInitialButton
            onMainButtonClick={addNewFoodLog}
            maintButtonIcon={faCheck}
            childButtonIcons={[]}
          />
        </Col>
      </Row>
    </div>
  );
};

const DataCol = styled(Col)`
  margin-top: 2rem;
  margin-bottom: 8rem;
  h5 {
    margin-top: 0.4rem;
    font-size: 1.6rem;
  }
  h6 {
    font-size: 1.4rem;
  }
  .gray-box {
    width: 100%;
    height: 1rem;
    background: gray;
    border-bottom: 1px solid black;
  }
`;

const MainData = styled(Col)`
  border-bottom: 1px solid black;
  h5 {
    font-weight: bold;
  }
`;

const SubData = styled(Col)`
  border-bottom: 1px solid black;
  h5 {
    margin-left: 1rem;
  }
`;

const FoodName = styled(H2)`
  text-align: center;
  width: 100%;
  /* font-size: 2rem; */
  span {
    font-weight: 300;
  }
`;

const CurrentCalories = styled(H3)`
  width: 100%;
  text-align: center;

  span {
    font-weight: 300;
  }
`;

const AddedCalories = styled(H3)`
  width: 100%;
  text-align: center;

  span {
    font-weight: 300;
  }
`;

const NewCalories = styled(H3)`
  width: 100%;
  text-align: center;

  span {
    font-weight: 300;
  }
`;

const InputLabel = styled.span`
  font-size: 1.6rem;
`;

export default UpdateFoodItem;