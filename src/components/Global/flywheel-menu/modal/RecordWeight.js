import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useToasts } from "react-toast-notifications";
import { ScaleSVG } from "../../icons";

const RecordWeight = props => {
  const { addToast } = useToasts();

  const recordWeightWithToast = async () => {
    const result = await props.handleRecordWeight();
    !result.payload.error
      ? addToast("Weight Updated!", {
          appearance: "success",
          autoDismiss: true
        })
      : addToast("Weight could not be update. Try again later.", {
          appearance: "error",
          autoDismiss: true
        });
  };

  return (
    <>
      <Modal
        size="xl"
        show={props.isEnabled}
        centered
        onHide={() => {
          return props.handleClose(), props.handleToggleClickProp();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "2rem" }}>Record Weight</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row}>
              <Col>
                <InputGroup size="lg">
                  <FormControl
                    placeholder="Weight (lbs)"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-lg"
                    type="number"
                    value={props.weight || ""}
                    onChange={e => props.handleInputChange(e)}
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="inputGroup-sizing-lg">
                      <ScaleSVG
                        width="22"
                        height="19"
                        viewBox="0 0 22 19"
                        padding="0 0 0 0"
                      />
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Col>

              {/* <Col sm="10">
                {" "}
                <Form.Control
                  placeholder="Enter your weight..."
                  type="text"
                  value={props.weight || ""}
                  onChange={e => props.handleInputChange(e)}
                />
              </Col>
              <Col sm="2">
                {" "}
                <FontAwesomeIcon
                  size="2x"
                  icon={faWeight}
                  className="faComponent"
                  color={faIconColor}
                />{" "}
              </Col> */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              return props.handleClose(), props.handleToggleClickProp();
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              return props.handleToggleClickProp(), props.handleClose(), recordWeightWithToast();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RecordWeight;
