import React from "react";
import { connect } from "react-redux";
import { searchFoodItems } from "../../actions/foodItemAction";
import { Route } from "react-router-dom";
import FoodDetails from "./foodDetails";
import SearchPage from "./searchPage";

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
      <>
        <Route
          path={`${path}/search`}
          exact
          render={props => (
            <SearchPage {...props} path={path} />
          )}
        />

        <Route
          path={`${path}/view/:food_id`}
          render={props => (
          <FoodDetails {...props} />
        )}/>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.foodItemsReducer.items
  };
};

export default connect(
  mapStateToProps,
  { searchFoodItems }
)(FoodItem);
