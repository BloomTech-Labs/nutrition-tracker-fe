import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { searchFoodItems } from "../../store/actions/foodItemAction";
import { Container } from "../Global/styled";
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
      <Container height={this.props.height} fluid>
        <Route
          path={`${path}/search`}
          exact
          render={props => <SearchPage {...props} path={path} />}
        />

        <Route
          path={`${path}/view/:fatsecret_food_id`}
          render={props => (
            <FoodDetails
              isLoading={this.props.isFetching}
              {...props}
            />
          )}
        />
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
