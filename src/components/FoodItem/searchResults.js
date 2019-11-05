import React from 'react';
import { getOneFoodItem } from '../../actions/foodItemAction';
import { connect } from 'react-redux';

class SearchResults extends React.Component {
  render(){
    return(
      this.props.items.map(foodItem => {
        return(
          <tr onClick={e => this.props.getOneFoodItem(foodItem.food_id)}>
            <th scope="row"> { foodItem.food_name } </th>
            <td>{ foodItem.standard_amount }</td>
            <td>{ foodItem.calories }</td>
          </tr>
        )
      })
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.foodItemsReducer.items
  }
}

export default connect(mapStateToProps, { getOneFoodItem })(SearchResults);