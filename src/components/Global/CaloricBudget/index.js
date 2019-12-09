import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import { Col, H2, Row } from "../../Global/styled";
import theme from "../../Global/theme";

const CaloricBudget = (props) => {
  
  let addedCals = undefined;
  if(props.addedCals) addedCals = Number(props.addedCals);

  console.log("[addedCals]", addedCals);
  
  const {budgets, consumed} = useSelector(state => state.dailyLog);

  const calConsumed = consumed.caloriesConsumed;
  const calTotal = budgets.caloricBudget;

  let percentBudget = Math.round(calConsumed / calTotal * 100);
  if(percentBudget >= 100) {
    percentBudget = 0;
  }

  let percentBudgetWithAdded = Math.round((calConsumed + (addedCals ? addedCals : 0)) / calTotal * 100);
  if(percentBudgetWithAdded >= 100) {
    percentBudgetWithAdded = 100;
  }
  console.log("[percentBudget]         ", percentBudget);
  console.log("[percentBudgetWithAdded]", percentBudgetWithAdded);
  return (
    <Row>
      <Col height="80px" align="center">
        <Total>
          <Consumed percentBudget={percentBudget}>
            <ConsumedCalories>
              {addedCals ? `+ ${addedCals}` : calConsumed} cal
            </ConsumedCalories>
          </Consumed>
          <TotalCalories>
            {calTotal} cal
          </TotalCalories>
          {addedCals && <Added percentBudgetWithAdded={percentBudgetWithAdded}/>}
        </Total>
      </Col>
    </Row>
  );
};

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  height: 50px;
  border-radius: 10px;

  background-color: #d0d4d9;

  z-index: 0;
`;

const Consumed = styled.div`
  display: flex;
  align-items: center;
  
  width: ${props => props.percentBudget};
  
  height: 50px;

  border-right: ${props => props.percentBudget === 0 ? "none" : `1px solid ${theme.color.success}`};
  border-radius: 10px;

  background-color: ${props => props.percentBudget >= 100 ? theme.color.danger : theme.color.success};

  z-index: 2;
`;
// + 7.542579
const Added = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: ${props => `calc(${props.percentBudgetWithAdded}% - 30px)`};
  
  height: 50px;

  border-right: ${props => props.percentBudgetWithAdded === 0 ? "none" : `1px solid #2D923C`};
  border-radius: 10px;

  background-color: ${props => props.percentBudgetWithAdded >= 100 ? theme.color.danger : "#2D923C"};

  z-index: 1;
`;

const ConsumedCalories = styled(H2)`
  position: absolute;
  white-space: nowrap;
  margin-left: 10px;
  color: ${theme.color.light};
`;

const TotalCalories = styled(H2)`
  position: absolute;
  margin-right: 10px;
  left: calc(100% - 140px);

  color: ${theme.color.dark};
  white-space: nowrap;
  z-index: 2;
`;

export default CaloricBudget;