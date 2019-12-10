import React from "react";
import { connect } from "react-redux";
import { searchFoodItems } from "../../store/actions/foodItemAction";
import { Container } from "../Global/styled";
import { Route } from "react-router-dom";
import FoodDetails from "./foodDetails";
import SearchPage from "./searchPage";
import WithLoading from "../Global/loading/withLoading";

const FoodDetailsWithLoading = WithLoading(FoodDetails);

class FoodItem extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
  }

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
            <FoodDetailsWithLoading
              isLoading={this.props.isFetching}
              {...props}
            />
          )}
        />

        {console.log("here is the getting:", this.props.getting)}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.foodItemsReducer.items,
    getting: state.foodItemsReducer.getting
  };
};

export default connect(mapStateToProps, { searchFoodItems })(FoodItem);
