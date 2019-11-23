import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../Global/styled";
import { Table as BS_Table } from "reactstrap";
import CaloricBudget from "./components/CaloricBudget";
import MacroBudgets from "./components/MacroBudgets";
import theme from "../Global/theme";
import Pagination from "./components/Pagination";

function DailyLog({ height }) {
  return (
    <Container fluid height={height}>
      <CaloricBudget consumed={1280} total={2140} />
      <MacroBudgets
        fatsConsumed={52}
        fatsTotal={124}
        carbsConsumed={20}
        carbsTotal={45}
        protienConsumed={48}
        protienTotal={80}
      />
      <Pagination />
      <Row>
        <Col>
          <Table>
            <tbody>
              <tr>
                <th>8:00AM</th>
                <td>Egg</td>
                <td>medium</td>
                <td>3</td>
              </tr>
              <tr>
                <td style={{ border: "none" }} />
                <td>White Bread</td>
                <td>slice/s</td>
                <td>2</td>
              </tr>
              <tr>
                <td style={{ border: "none" }} />
                <td>Orange Juice</td>
                <td>large glass</td>
                <td>1</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

const Table = styled(BS_Table)``;

export default DailyLog;
