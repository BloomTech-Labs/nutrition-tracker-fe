import React from "react";
import { connect } from "react-redux";
import { searchFoodItems } from "../../actions/foodItemAction";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
  }

  handleSearch = e => {
    let input_value = e.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        searchTerm: input_value
      };
    });
    this.props.searchFoodItems(input_value);
  };

  render() {
    return (
      <Form>
        <Row form>
          <Col xs={1}>
            <FontAwesomeIcon icon={["fas", "search"]} size="1x" />
          </Col>
          <Col xs={11}>
            <Input
              value={this.state.searchTerm}
              onChange={this.handleSearch}
              type="text"
              name="search_term"
              id="search_term"
              placeholder="Search food item"
              bsSize="lg"
            />
          </Col>
        </Row>
      </Form>
    );
  }
}

const GraySearchBar = styled(Col)`
  background-color: grey;
  && {
    margin-right: -5px;
  }
`;

export default connect(
  null,
  { searchFoodItems }
)(SearchForm);
