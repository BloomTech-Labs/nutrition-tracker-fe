import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { TBody } from "../Global/styled/";

class SearchResults extends React.Component {
  render() {
    return this.props.items ? (
      <TBody>
        {this.props.items.map((foodItem, key) => {
          return (
            <tr
              id="search_results"
              key={key}
              onClick={() => this.props.handleGetFoodItem(foodItem.food_id)}
            >
              <th scope="row"> {foodItem.food_name} </th>
              <td>{foodItem.standard_amount}</td>
              <td>{foodItem.calories} cal</td>
            </tr>
          );
        })}
      </TBody>
    ) : (
      <TBody />
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.foodItemsReducer.items
  };
};

export { SearchResults };
export default connect(mapStateToProps, {})(SearchResults);
