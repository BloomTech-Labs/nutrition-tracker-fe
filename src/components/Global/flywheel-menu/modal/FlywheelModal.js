import React from "react";
import { connect } from "react-redux";
import { recordUserWeight } from "../../../../store/actions/flywheelAction";
// import Recipe from "./Recipe";
import DefaultView from "./DefaultView";
import RecordWeight from "./RecordWeight";

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
    const weight_kg = lbsToKgs(this.state.weight)

    const payload = await this.props.recordUserWeight(this.props.firebaseID, weight_kg);
    return payload;
  };

  handleClose = () => {
    this.setState({
      weight: null
    });
  };

  render() {
    if (this.props.segue === "Recipe") {
      return ( <div></div>
        // <Recipe
        //   isEnabled={this.props.isEnabled}
        //   handleToggleClickProp={this.props.handleToggleClickProp}
        // />
      );
    } else if (this.props.segue === "Weight") {
      return (
        <RecordWeight
          isEnabled={this.props.isEnabled}
          handleToggleClickProp={this.props.handleToggleClickProp}
          weight={this.state.weight}
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

function lbsToKgs(lbs) {
  const weight_kg = lbs * 0.45359237;
  return weight_kg;
}

const mapStateToProps = state => {
  return {
    adding: state.adding,
    firebaseID: state.firebase.auth.uid
  };
};

export default connect(mapStateToProps, { recordUserWeight })(PopModal);

/***********************FlywheelModal Component Use*********************/
 /*
    1) We are conditionally rendering which bootstrap dependant child modal gets displayed by checking the "segue" prop that is passed in.
    The segue value is the string "name" that was provided in the Flywheel child object and can be used to style and provide specific fucntionality for different modals. 
    !Important, Spelling and Case must match segues value.
 
 */