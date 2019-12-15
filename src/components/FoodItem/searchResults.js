import React from "react";
import { connect } from "react-redux";
import { TBody } from "../Global/styled/";

class SearchResults extends React.Component {
  render() {
    return this.props.items ? (
      <TBody responsive hover size="lg">
        <tbody>
        {this.props.items.map((foodItem, key) => {
          return (
            <tr
              id="search_results"
              key={key}
              onClick={() => this.props.handleGetFoodItem(foodItem.food_id)}
            >
              <th scope="row" style={{textAlign: "left"}}> {foodItem.food_name} </th>
              <td style={{whiteSpace: "nowrap"}}>{foodItem.standard_amount}</td>
              <td style={{whiteSpace: "nowrap"}}>{foodItem.calories} cal</td>
            </tr>
          );
        })}
        </tbody>
      </TBody>
    ) : (
      <TBody /> // TODO: If this breaks, we may need <tbody></tbody> here
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
