import React from "react";
import { connect } from "react-redux";
import { searchFoodItems } from "../../store/actions/foodItemAction";
import {
  Col,
  Row,
  InputGroupAddon,
  Form,
  InputGroup,
  InputGroupText
} from "reactstrap";
import { Input } from "../Global/styled";
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
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={["fas", "search"]} size="1x" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              value={this.state.searchTerm}
              onChange={this.handleSearch}
              type="text"
              name="search_term"
              id="search_term"
              placeholder="Search food item"
              bsSize="lg"
            />
          </InputGroup>
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
