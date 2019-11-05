import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import { Input } from "./styles";

const InputGroupWithIcon = props => {
  const SVGIcon = props.icon;
  return (
    <InputGroup
      style={{
        marginBottom: "10px"
      }}
    >
      <Input placeholder={props.placeholder} />
      <InputGroupAddon addonType="append">
        <InputGroupText>
          <SVGIcon />
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default InputGroupWithIcon;
