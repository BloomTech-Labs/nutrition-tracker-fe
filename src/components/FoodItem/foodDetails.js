import React from "react";
import { connect } from "react-redux";
import {
  getOneFoodItem,
  addFoodItem
} from "../../store/actions/foodItemAction";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu
} from "reactstrap";
import { DropdownToggle } from "../Global/styled";
import { Doughnut } from "react-chartjs-2";
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
    return (
      <Container>
        <>
          <Row>
            <Col>
              <H2>{this.props.item[0].food_name}</H2>
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
              <Dropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.handleToggle}
              >
                <DropdownToggle caret>
                  {this.state.dropDownSelectionKey !== false
                    ? this.props.item[this.state.dropDownSelectionKey]
                        .serving_desc
                    : "Select"}
                </DropdownToggle>
                <DropdownMenu>
                  {this.props.item.map((serving, key) => (
                    <DropdownItem
                      key={key}
                      onClick={() => this.handleSelect(key)}
                    >
                      {serving.serving_desc}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Doughnut
                data={dataGenerator([1, 2, 3, 4], "red,green,blue,orange")}
              />
            </Col>
            <Col xs={4}>
              <Doughnut
                data={dataGenerator([3, 2, 3, 4], "red,green,blue,orange")}
              />
            </Col>
            <Col xs={4}>
              <Doughnut
                data={dataGenerator([11, 2, 9, 4], "red,green,blue,orange")}
              />
            </Col>
            <Col>
              {this.state.dropDownSelectionKey !== false && (
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
                        this.props.item[this.state.dropDownSelectionKey]
                          .sodium * this.state.quantity
                      )}
                      {
                        this.props.item[this.state.dropDownSelectionKey]
                          .metric_serving_unit
                      }
                    </td>
                  </tr>
                </TBody>
              )}
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
      </Container>
    );
  }
}

// Turns the input strings into a charts.js dataset
function dataGenerator(data, color) {
  const dataset = {
    // labels: color.split(","),
    datasets: [
      {
        backgroundColor: color.split(","),
        data: data
      }
    ]
  };
  return dataset;
}

const mapStateToProps = state => {
  return {
    item: state.foodItemsReducer.item,
    getting: state.foodItemsReducer.getting,
    got: state.foodItemsReducer.got
  };
};

export default connect(mapStateToProps, { getOneFoodItem, addFoodItem })(
  FoodDetails
);
