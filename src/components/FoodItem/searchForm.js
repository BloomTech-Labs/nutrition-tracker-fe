import React from "react";
import { connect } from "react-redux";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { searchFoodItems } from "../../store/actions/foodItemAction";
import { Input } from "../Global/styled";

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
      <Form style={{marginTop: "10px"}}>
        <Row form>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={["fas", "search"]} size="2x" />
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

export default connect(null, { searchFoodItems })(SearchForm);

export { SearchForm };
