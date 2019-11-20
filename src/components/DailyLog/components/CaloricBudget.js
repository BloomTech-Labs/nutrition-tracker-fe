import React from 'react'
import styled from "styled-components";
import theme from '../../Global/theme';
import { H2 } from '../../Global/styled';

const CaloricBudget = props => {
  const percentBudget = Math.round(props.consumed/props.total * 100);
  return (
    <Total>
      <Consumed percentBudget={percentBudget}>
        <ConsumedCalories>{props.consumed} cal</ConsumedCalories>
      </Consumed>
      <TotalCalories>{props.total} cal</TotalCalories>
    </Total>
  )
}

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  height: 50px;
  border-radius: 10px;

  background-color: #D0D4D9;
`;

const Consumed = styled.div`
  display: flex;
  align-items: center;
  width: ${props => props.percentBudget}%;

  height: 50px;

  border-right: 1px solid ${theme.color.success};
  border-radius: 10px;

  background-color: ${theme.color.success};
`;

const ConsumedCalories = styled(H2)`
  position: absolute;
  margin-left: 10px;
  color: ${theme.color.light};
`;

const TotalCalories = styled(H2)`
  position: absolute;
  margin-right: 10px;
  left: calc(100% - 130px);

  color: ${theme.color.dark};
  white-space: nowrap;
`;

export default CaloricBudget;
