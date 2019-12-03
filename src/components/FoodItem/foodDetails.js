import React from "react";
import { connect } from "react-redux";
import { getOneFoodItem } from "../../store/actions/foodItemAction";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Table
} from "reactstrap";
import { DropdownToggle } from "../Global/styled";
import { Doughnut } from "react-chartjs-2";
import { Input } from "../Global/styled";
import { TBody } from "../Global/styled/";
import formatDecimal from "../Global/helpers/formatDecimals";

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

  render() {
    return (
      <Container>
        <>
          <Row>
            <Col> Kale </Col>
            <Col> 33 Cal </Col>
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
                <Table borderless responsive>
                  <TBody>
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
                </Table>
              )}
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

export default connect(mapStateToProps, { getOneFoodItem })(FoodDetails);
