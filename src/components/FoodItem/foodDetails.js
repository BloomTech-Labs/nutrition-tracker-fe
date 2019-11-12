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
        {this.props.got ? (
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
                    {this.state.dropDownSelectionKey
                      ? this.props.item[this.state.dropDownSelectionKey]
                          .measurement_description
                      : "Select"}
                  </DropdownToggle>
                  <DropdownMenu>
                    {this.props.item.map((serving, key) => (
                      <DropdownItem
                        key={key}
                        onClick={() => this.handleSelect(key)}
                      >
                        {" "}
                        {serving.measurement_description}{" "}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
            <Row>
              <Col>
                <Doughnut
                  data={{
                    datasets: [
                      {
                        data: [10, 20, 30]
                      }
                    ],
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: ["Red", "Yellow", "Blue"],
                    backgroundColor: "rgba(255, 371, 0)"
                  }}
                />
              </Col>
              <Col>
                {this.state.dropDownSelectionKey && (
                  <Table borderless responsive>
                    <tbody>
                      <tr>
                        <th scope="row"> Fats </th>
                        <td>
                          {this.props.item[this.state.dropDownSelectionKey]
                            .fat * this.state.quantity}
                          {
                            this.props.item[this.state.dropDownSelectionKey]
                              .metric_serving_unit
                          }
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"> Cholesterol </th>
                        <td>
                          {this.props.item[this.state.dropDownSelectionKey]
                            .cholesterol * this.state.quantity}
                          {
                            this.props.item[this.state.dropDownSelectionKey]
                              .metric_serving_unit
                          }
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"> Sodium </th>
                        <td>
                          {this.props.item[this.state.dropDownSelectionKey]
                            .sodium * this.state.quantity}
                          {
                            this.props.item[this.state.dropDownSelectionKey]
                              .metric_serving_unit
                          }
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                )}
              </Col>
            </Row>
          </>
        ) : (
          <div> Getting... </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.foodItemsReducer.item,
    getting: state.foodItemsReducer.getting,
    got: state.foodItemsReducer.got
  };
};

export default connect(mapStateToProps, { getOneFoodItem })(FoodDetails);
