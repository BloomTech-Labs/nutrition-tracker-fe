import React from "react";
import SearchForm from "./searchForm";
import SearchResults from "./searchResults";
import { connect } from "react-redux";
import { getOneFoodItem } from "../../store/actions/foodItemAction";
import { Col, Row } from "reactstrap";

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

export default connect(null, { getOneFoodItem })(SearchPage);
