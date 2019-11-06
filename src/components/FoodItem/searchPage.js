import React from "react";
import SearchForm from "./searchForm";
import SearchResults from "./searchResults";
import { connect } from "react-redux";
import { getOneFoodItem } from "../../actions/foodItemAction";
import { Table } from 'reactstrap';

class SearchPage extends React.Component {
  componentWillMount = () => {
    console.log(this.props.match);
  };

  handleClick = () => {
    this.props.history.push(`${this.props.path}/`);
  };

  handleGetFoodItem = food_id => {
    this.props.getOneFoodItem(food_id).then(response => {
      if(response) {
        this.props.history.push(`${this.props.path}/view/${food_id}`)
      }
    });
  };

  render() {
    const { path } = this.props.match;
    return (
      <>
        <SearchForm />
        <Table responsive>
          <tbody>
            <SearchResults handleGetFoodItem={this.handleGetFoodItem} />
          </tbody>
        </Table>
      </>
    );
  }
}

export default connect(
  null,
  { getOneFoodItem }
)(SearchPage);
