import React from "react";
import { connect } from "react-redux";
import { searchFoodItems } from "../../actions/foodItemAction";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <Col md={6}>
            <FormGroup>
              <FontAwesomeIcon icon={["fas", "search"]} size="1x" />
              <Input
                value={this.state.searchTerm}
                onChange={this.handleSearch}
                type="text"
                name="search_term"
                id="search_term"
                placeholder="Search food item"
                bsSize="lg"
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default connect(
  null,
  { searchFoodItems }
)(SearchForm);
