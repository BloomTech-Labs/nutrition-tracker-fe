import React from 'react';
import { connect } from 'react-redux';
import { getOneFoodItem } from '../../actions/foodItemAction';
import { Container, Row, Col, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

class FoodDetails extends React.Component {

  constructor() {
    super();
    this.state = {
      quantity: 1,
      dropdownOpen: false,
      dropDownSelectionKey: ""
    }
  }

  componentWillMount() {
    const { food_id } = this.props.match.params;
    this.props.getOneFoodItem(food_id);
  }

  handleToggle = (e) => {
    this.setState( prevState => {
      return {
        ...prevState,
        dropdownOpen: !prevState.dropdownOpen
      }
    });
  }

  handleSelect = (key) => {
    this.setState( function(prevState) {
      return {
        ...prevState,
        dropDownSelectionKey: key
      }
    });
    // console.log(this.props.item.servings);
  }

  render() {
    return(
      <Container>
        { this.props.got ? (
          <>
            <Row>
              <Col> { this.props.item.food_name } </Col>
              <Col> 33 Cal </Col>
            </Row>
            <Row>
              <Col>
                <Input type="text" name="quantity" value={this.state.quantity} onChange={(e) => { this.setState({ quantity: e.target.value})}}/>
              </Col>
              <Col>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.handleToggle}>
                  <DropdownToggle caret>
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu onChange={ e => console.log(e)}>
                    { this.props.item.servings.serving.map((serving, key) => (
                      <DropdownItem key={key} onClick={ () => this.handleSelect(key)}> {serving.measurement_description} </DropdownItem>
                    )) }
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
            <Row>
              <Col> Fats: { this.state.dropDownSelectionKey && this.props.item.servings.serving[this.state.dropDownSelectionKey].fat * this.state.quantity } { this.state.dropDownSelectionKey && this.props.item.servings.serving[this.state.dropDownSelectionKey].measurement_description } </Col>
            </Row>
          </>
        ) : ( <div> Getting... </div>)}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.foodItemsReducer.item,
    getting: state.foodItemsReducer.getting,
    got: state.foodItemsReducer.got
  };
};

export default connect(mapStateToProps, { getOneFoodItem })(FoodDetails);