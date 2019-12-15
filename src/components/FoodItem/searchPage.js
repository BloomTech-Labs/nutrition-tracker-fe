import React from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import { getOneFoodItem } from "../../store/actions/foodItemAction";
import SearchForm from "./searchForm";
import SearchResults from "./searchResults";

class SearchPage extends React.Component {

  handleGetFoodItem = fatsecret_food_id => {
    this.props.getOneFoodItem(fatsecret_food_id).then(response => {
      if (response) {
        this.props.history.push(`${this.props.path}/view/${fatsecret_food_id}`);
      }
    });
  };

  render() {
    return (
      <>
        <Row>
          <Col>
            <SearchForm />
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <TBody responsive hover size="lg"> */}
            <SearchResults handleGetFoodItem={this.handleGetFoodItem} />
            {/* </TBody> */}
          </Col>
        </Row>
      </>
    );
  }
}

export { SearchPage };
export default connect(null, { getOneFoodItem })(SearchPage);
