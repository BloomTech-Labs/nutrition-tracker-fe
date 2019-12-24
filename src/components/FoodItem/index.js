import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { searchFoodItems } from "../../store/actions/foodItemAction";
import WithLoading from "../Global/loading/withLoading";
import { Container } from "../Global/styled";
import FoodDetails from "./foodDetails";
import SearchPage from "./searchPage";

class FoodItem extends React.Component {

  render() {
    const { path } = this.props.match;
    return (
      <Container height={this.props.height}>
        <Route
          path={`${path}/search`}
          exact
          render={props => <SearchPage {...props} path={path} />}
        />

        <Route
          path={`${path}/view/:food_id`}
          render={props => (
            <FoodDetails isLoading={this.props.isFetching} {...props} />
          )}
        />
      </Container>
    );
  }
}

export default FoodItem;


