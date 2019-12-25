import React, { useEffect } from "react";

import { Col, Row } from "../../../Global/styled";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { getBiannualMacroProgress } from "../../../../store/actions/macroProgress";

import BiannualCarbs from "../charts/BiannualCarbs";
import BiannualFats from "../charts/BiannualFats";
import BiannualProtein from "../charts/BiannualProtein";

export default function BiannualMacros() {
  const dispatch = useDispatch();

  const user_id = useSelector(state => state.firebase.auth.uid);

  const fats = useSelector(state => state.macroProgress.biannual_fats);
  const carbs = useSelector(state => state.macroProgress.biannual_carbs);
  const protein = useSelector(state => state.macroProgress.biannual_protein);

  useEffect(() => {
    dispatch(getBiannualMacroProgress(user_id));
  }, [dispatch, getBiannualMacroProgress, user_id]);

  return (
    <MacroWrapper>
      {console.log("CARBS", carbs)}
      {console.log("FATS", fats)}
      {console.log("PROTEIN", protein)}
      <Row>
        <Col>
          <BiannualCarbs carbs={carbs} />
        </Col>
      </Row>
      <Row>
        <Col>
          <BiannualFats fats={fats} />
        </Col>
      </Row>
      <Row>
        <Col>
          <BiannualProtein protein={protein} />
        </Col>
      </Row>
    </MacroWrapper>
  );
}

const MacroWrapper = styled.div`
  margin-bottom: 8rem;
`;
