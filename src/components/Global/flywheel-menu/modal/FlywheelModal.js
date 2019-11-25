import React from "react";
import RecordWeight from "./RecordWeight";
import Recipe from "./Recipe";
import DefaultView from "./DefaultView";
import { connect } from "react-redux";
import { recordUserWeight } from "../../../../actions/flywheelAction";

class PopModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: null
    };
  }

  handleInputChange = e => {
    this.setState({
      weight: e.target.value
    });
  }

  handleSaveRecipe = e => {
    //need to handle save for RC2 Recipes.
  };

  handleRecordWeight = async () => {
    const newRecord = {
      weight_kg: this.state.weight
    };

    const payload = await this.props.recordUserWeight(newRecord);
    return payload;
  };

  handleClose = () => {
    this.setState({
      weight: null
    });
  };

  render() {
    if (this.props.segue === "Recipe") {
      return (
        <Recipe
          isEnabled={this.props.isEnabled}
          handleToggleClickProp={this.props.handleToggleClickProp}
        />
      );
    } else if (this.props.segue === "Weight") {
      return (
        <RecordWeight
          handleToggleClickProp={this.props.handleToggleClickProp}
          weight={this.state.weight}
          isEnabled={this.props.isEnabled}
          handleRecordWeight={this.handleRecordWeight}
          handleInputChange={this.handleInputChange}
          handleClose={this.handleClose}
        />
      );
    } else if (this.props.segue === "" || this.props.segue === null) {
      return (
        <DefaultView
          isEnabled={this.props.isEnabled}
          handleToggleClickProp={this.props.handleToggleClickProp}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    adding: state.adding
  };
};

export default connect(mapStateToProps, { recordUserWeight })(PopModal);
