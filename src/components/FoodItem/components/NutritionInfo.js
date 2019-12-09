import React from "react";
import styled from "styled-components";
import { Col, Row } from "../../Global/styled";

const NutritionInfo = props => {
  const foodSelection = props.foodSelection;
  const quantity = props.quantity;

  const formatDecimal = (number) => {
    return Math.round(100 * number) / 100;
  }

  return (
    <Row style={{marginBottom: "8rem", borderTop: "1px solid black" }}>
      <DataCol direction="column">
        {/* Total Fat */}
        <MainData justify="space-between" align="flex-end">
          <h5>Total Fat</h5>
          <h6>
            {foodSelection.fat_g ? formatDecimal(foodSelection.fat_g * quantity) : 0}
            g
          </h6>
        </MainData>
        {/* Saturated Fat */}
        <SubData justify="space-between" align="flex-end">
          <h5>Saturated Fat</h5>
          <h6>
            {foodSelection.saturated_fat_g
              ? formatDecimal(foodSelection.saturated_fat_g * quantity)
              : 0}
            g
          </h6>
        </SubData>
        {/* Trans Fat */}
        <SubData justify="space-between" align="flex-end">
          <h5>Trans Fat</h5>
          <h6>
            {foodSelection.trans_fat_g
              ? formatDecimal(foodSelection.trans_fat_g * quantity)
              : 0}
            g
          </h6>
        </SubData>
        {/* Polyunsaturated Fat */}
        <SubData justify="space-between" align="flex-end">
          <h5>Polyunsaturated Fat</h5>
          <h6>
            {foodSelection.polyunsaturated_fat_g
              ? formatDecimal(foodSelection.polyunsaturated_fat_g * quantity)
              : 0}
            g
          </h6>
        </SubData>
        {/* Monounsaturated Fat */}
        <SubData justify="space-between" align="flex-end">
          <h5>Monounsaturated Fat</h5>
          <h6>
            {foodSelection.monounsaturated_fat_g
              ? formatDecimal(foodSelection.monounsaturated_fat_g * quantity)
              : 0}
            g
          </h6>
        </SubData>
        {/* Cholesterol */}
        <MainData justify="space-between" align="flex-end">
          <h5>Cholesterol</h5>
          <h6>
            {foodSelection.cholesterol_mg
              ? formatDecimal(foodSelection.cholesterol_mg * quantity)
              : 0}
            mg
          </h6>
        </MainData>
        {/* Sodium */}
        <MainData justify="space-between" align="flex-end">
          <h5>Sodium</h5>
          <h6>
            {foodSelection.sodium_mg ? formatDecimal(foodSelection.sodium_mg * quantity) : 0}
            mg
          </h6>
        </MainData>
        {/* Total Carbohydrate */}
        <MainData justify="space-between" align="flex-end">
          <h5>Total Carbohydrate</h5>
          <h6>
            {foodSelection.carbs_g ? formatDecimal(foodSelection.carbs_g * quantity) : 0}
            g
          </h6>
        </MainData>
        {/* Dietary Fiber */}
        <SubData justify="space-between" align="flex-end">
          <h5>Dietary Fiber</h5>
          <h6>
            {foodSelection.fiber_g ? formatDecimal(foodSelection.fiber_g * quantity) : 0}
            g
          </h6>
        </SubData>
        {/* Sugar */}
        <SubData justify="space-between" align="flex-end">
          <h5>Sugar</h5>
          <h6>
            {foodSelection.sugar_g ? formatDecimal(foodSelection.sugar_g * quantity) : 0}
            g
          </h6>
        </SubData>
        {/* Protein */}
        <MainData justify="space-between" align="flex-end">
          <h5>Protein</h5>
          <h6>
            {foodSelection.protein_g ? formatDecimal(foodSelection.protein_g * quantity) : 0}
            g
          </h6>
        </MainData>
        <div className="gray-box" />
        {/* Vitamin D */}
        <MainData justify="space-between" align="flex-end">
          <h5>Vitamin D</h5>
          <h6>
            {foodSelection.vitamin_d_daily_pct
              ? formatDecimal(foodSelection.vitamin_d_daily_pct * quantity)
              : 0}
            %
          </h6>
        </MainData>
        {/* Calcium */}
        <MainData justify="space-between" align="flex-end">
          <h5>Calcium</h5>
          <h6>
            {foodSelection.calcium_daily_pct
              ? formatDecimal(foodSelection.calcium_daily_pct * quantity)
              : 0}
            %
          </h6>
        </MainData>
        {/* Iron */}
        <MainData justify="space-between" align="flex-end">
          <h5>Iron</h5>
          <h6>
            {foodSelection.iron_daily_pct
              ? formatDecimal(foodSelection.iron_daily_pct * quantity)
              : 0}
            %
          </h6>
        </MainData>
        {/* Potassium */}
        <MainData justify="space-between" align="flex-end">
          <h5>Potassium</h5>
          <h6>
            {foodSelection.potassium_mg
              ? formatDecimal(foodSelection.potassium_mg * quantity)
              : 0}
            mg
          </h6>
        </MainData>
        {/* Vitamin A */}
        <MainData justify="space-between" align="flex-end">
          <h5>Vitamin A</h5>
          <h6>
            {foodSelection.vitamin_a_daily_pct
              ? formatDecimal(foodSelection.vitamin_a_daily_pct * quantity)
              : 0}
            %
          </h6>
        </MainData>
        {/* Vitamin C */}
        <MainData justify="space-between" align="flex-end">
          <h5>Vitamin C</h5>
          <h6>
            {foodSelection.vitamin_c_daily_pct
              ? formatDecimal(foodSelection.vitamin_c_daily_pct * quantity)
              : 0}
            %
          </h6>
        </MainData>
      </DataCol>
    </Row>
  );
};

const DataCol = styled(Col)`
  /* margin-top: 2rem; */
  /* margin-bottom: 4rem; */
  h5 {
    margin-top: 0.4rem;
    font-size: 1.6rem;
  }
  h6 {
    font-size: 1.4rem;
  }
  .gray-box {
    width: 100%;
    height: 1rem;
    background: gray;
    border-bottom: 1px solid black;
  }
`;

const MainData = styled(Col)`
  border-bottom: 1px solid black;
  h5 {
    font-weight: bold;
  }
`;

const SubData = styled(Col)`
  border-bottom: 1px solid black;
  h5 {
    margin-left: 1rem;
  }
`;

export default NutritionInfo;
