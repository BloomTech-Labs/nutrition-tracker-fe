import React from "react";
import SearchForm from "./searchForm";
import SearchResults from "./searchResults";
import { connect } from "react-redux";
import { getOneFoodItem } from "../../store/actions/foodItemAction";
import { Container, Col, Row } from "../Global/styled";
import { Table } from "reactstrap";
import { TBody } from "../Global/styled/";

import Flywheel from "../Global/flywheel-menu/Flywheel";

import {
  faAppleAlt,
  faUtensils,
  faWeight,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

import moment from "moment-timezone/builds/moment-timezone-with-data";

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

class SearchPage extends React.Component {
  handleGetFoodItem = food_id => {
    this.props.getOneFoodItem(food_id).then(response => {
      if (response) {
        this.props.history.push(`${this.props.path}/view/${food_id}`);
      }
    });
  };

  render() {
    return (
      <Container height={this.props.height} fluid>
        <SearchForm />
        <Row>
          <Col>
            <Table responsive hover size="lg">
              <TBody>
                <SearchResults handleGetFoodItem={this.handleGetFoodItem} />
              </TBody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

// const GlobalContainer

export default connect(null, { getOneFoodItem })(SearchPage);
