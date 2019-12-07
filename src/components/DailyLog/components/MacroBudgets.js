import React from "react";
import { Row, Col} from "../../Global/styled";
import DataWheel from "../../Global/DataWheel";

const MacroBudgets = props => {
  const {
    fatsConsumed,
    fatsTotal,
    carbsConsumed,
    carbsTotal,
    protienConsumed,
    protienTotal
  } = props;

  const percentFatTotal = Math.round(
    props.fatsConsumed / props.fatsTotal * 100
  );
  const percentCarbTotal = Math.round(
    props.carbsConsumed / props.carbsTotal * 100
  );
  const percentProteinTotal = Math.round(
    props.protienConsumed / props.protienTotal * 100
  );

  const uiColors = {
    fat: {
      dataColors: "#FFE9AD, #FFE9AD33",
      borderColor: "#E4D099",
      hoverBorderColor: "#D5C28F",
      hoverBackgroundColor: "#FED872"
    },
    carbs: {
      dataColors: "#A1BFDF, #A1BFDF33",
      borderColor: "#829BB6",
      hoverBorderColor: "#778EA6",
      hoverBackgroundColor: "#5F98E5"
    },
    protein: {
      dataColors: "#F5C6CB, #F5C6CB33",
      borderColor: "#BC9599",
      hoverBorderColor: "#A68588",
      hoverBackgroundColor: "#FD7888"
    }
  };

  return (
    <Row noGutters>
      {/* Fat Budgets */}
      <Col direction="column" justify="center" align="center" xs={4}>
        <DataWheel 
          macroName="Fats"
          total={fatsTotal}
          consumed={fatsConsumed}
          percentTotal={percentFatTotal}
          dataColors={uiColors.fat.dataColors}
          borderColor={uiColors.fat.borderColor}
          hoverBorderColor={uiColors.fat.hoverBorderColor}
          hoverBackgroundColor={uiColors.fat.hoverBackgroundColor}
        />
      </Col>
      {/* Carb Budgets */}
      <Col direction="column" justify="center" align="center" xs={4}>
        <DataWheel 
          macroName="Carbs"
          total={carbsTotal}
          consumed={carbsConsumed}
          percentTotal={percentCarbTotal}
          dataColors={uiColors.carbs.dataColors}
          borderColor={uiColors.carbs.borderColor}
          hoverBorderColor={uiColors.carbs.hoverBorderColor}
          hoverBackgroundColor={uiColors.carbs.hoverBackgroundColor}
        />
      </Col>
      {/* Protein Budgets */}
      <Col direction="column" justify="center" align="center" xs={4}>
        <DataWheel 
          macroName="Protien"
          total={protienTotal}
          consumed={protienConsumed}
          percentTotal={percentProteinTotal}
          dataColors={uiColors.protein.dataColors}
          borderColor={uiColors.protein.borderColor}
          hoverBorderColor={uiColors.protein.hoverBorderColor}
          hoverBackgroundColor={uiColors.protein.hoverBackgroundColor}
        />
      </Col>
    </Row>
  );
};

export default MacroBudgets;
