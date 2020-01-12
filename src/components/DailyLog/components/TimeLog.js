import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useHistory } from "react-router-dom";
import { Table as BS_Table } from "reactstrap";
import styled from "styled-components";
import { Col, H4, Row } from "../../Global/styled";

const TimeLog = ({ dailyLog }) => {
  let history = useHistory();

  return (
    <div>
      {dailyLog.length === 0 && (
        <Row>
          <Col height="225px" justify="center" align="center">
            <H4>Search for a food item to begin logging!</H4>
          </Col>
        </Row>
      )}
      {dailyLog &&
        dailyLog.map((interval, i) => (
          <Row key={i}>
            <Col>
              <Table>
                <tbody>
                  {interval.map((log, i) => (
                    <OverlayTrigger
                      key={i}
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip(log.foodName)}
                      trigger={"hover"}
                    >
                      <tr
                        key={i}
                        onClick={() => {
                          history.push(`/update-food-item/${log.foodLogID}`);
                        }}
                      >
                        {log.firstGroupLog ? (
                          log.hasTimeZoneDifference ? (
                            <TimeHeader twoTimeZones>
                              {log.intervalStartHere}
                              <br />
                              <span>{log.intervalStartThere}</span>
                            </TimeHeader>
                          ) : (
                            <TimeHeader>{log.intervalStart}</TimeHeader>
                          )
                        ) : (
                          <TimeHeader />
                        )}
                        <FoodName className="food-name">
                          {log.foodName}
                        </FoodName>
                        <ServingName className="serving">
                          {log.servingDescription}
                        </ServingName>
                        <Quantity className="quantity">
                          {Math.trunc(log.quantity)}
                        </Quantity>
                      </tr>
                    </OverlayTrigger>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        ))}
    </div>
  );
};

const renderTooltip = props => {
  return <Tooltip>{`Edit ${props}`}</Tooltip>;
};

const Table = styled(BS_Table)`
  font-size: 1.2rem;
  margin: 0;

  tr {
    &:hover {
      background-color: lightgray;
    }
  }
  th {
    border: none;
  }
  td {
    vertical-align: middle;
  }
`;

const TimeHeader = styled.th`
  font-size: 1.4rem;
  text-align: left;
  border: none;
  width: 25%;

  white-space: nowrap;

  span {
    font-weight: lighter;
    font-style: italic;
    font-size: 1.2rem;
  }
`;

const FoodName = styled.td`
  text-align: left;
  font-size: 1.4rem;
`;

const ServingName = styled.td`
  text-align: right;
  font-size: 1.4rem;
`;

const Quantity = styled.td`
  text-align: right;
  width: 10%;
`;

export default TimeLog;
