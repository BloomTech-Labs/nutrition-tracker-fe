import React from "react";
import { connect } from "react-redux";
import { searchFoodItems } from "../../actions/foodItemAction";
import { Route } from "react-router-dom";
import FoodDetails from "./foodDetails";
import SearchPage from "./searchPage";
import WithLoading from '../Global/loading'; // JOE YOU MAY NEED TO DELETE ME 


const FoodDetailsWithLoading = WithLoading(FoodDetails); // JOE YOU NEED TO DELETE ME
const SearchPageWithLoading = WithLoading(SearchPage); // JOE YOU NEED TO DELETE ME

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
          render={props => <SearchPage {...props} />}
        />
    
        <Route
          path={`${path}/view/:food_id`}
          render={props => <FoodDetailsWithLoading isloading = {this.props.getting} {...props}/>}    // JOE YOU CHANGED THE FOODDETAILS COMPONENT TO THE WITH COMPONENT 
      />

      {console.log('here is the getting:', this.props.getting)} {/*DELETE ME TOO JOE*/}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.foodItemsReducer.items,
    getting: state.foodItemsReducer.getting // JOE ADDED THIS TO HOOK FOR HOC
  };
};

export default connect(
  mapStateToProps,
  { searchFoodItems }
)(FoodItem);
