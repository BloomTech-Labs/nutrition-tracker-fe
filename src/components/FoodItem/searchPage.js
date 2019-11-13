import React from "react";
import SearchForm from "./searchForm";
import SearchResults from "./searchResults";
import { connect } from "react-redux";
import { getOneFoodItem } from "../../store/actions/foodItemAction";
import { Table, Container, Col, Row } from "reactstrap";
import { TBody } from "../Global/styled/";
import styled from "styled-components";

class SearchPage extends React.Component {
  handleClick = () => {
    this.props.history.push(`${this.props.path}/`);
  };

  handleGetFoodItem = food_id => {
    this.props.getOneFoodItem(food_id).then(response => {
      if (response) {
        this.props.history.push(`${this.props.path}/view/${food_id}`);
      }
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <SearchForm />
          </Col>
        </Row>
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

export default connect(null, { getOneFoodItem })(SearchPage);
