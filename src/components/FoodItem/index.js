import React from 'react';
import { connect } from 'react-redux';
import { searchFoodItems } from '../../actions/foodItemAction'
import { Col, Row, Table, Form, FormGroup, Label, Input } from 'reactstrap';
import SearchForm from './searchForm';
import SearchResults from './searchResults';

class FoodItem extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return(
      <>
        <SearchForm/>
        <Table responsive>
          <thead>
          <tr>
            <th>Name</th>
            <th>Serving</th>
            <th>Calories</th>
          </tr>
          </thead>
          <tbody>
            <SearchResults/>
          </tbody>
        </Table>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.foodItemsReducer.items
  }
}

export default connect(mapStateToProps, { searchFoodItems })(FoodItem);