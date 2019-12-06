import React from "react";
import SearchForm from "./searchForm";
import SearchResults from "./searchResults";
import { connect } from "react-redux";
import { getOneFoodItem } from "../../store/actions/foodItemAction";
import { Container, Col, Row } from "reactstrap";
// import { TBody } from "../Global/styled/";

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
      <Container height={this.props.height}>
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
      </Container>
    );
  }
}

// const GlobalContainer

export default connect(null, { getOneFoodItem })(SearchPage);
