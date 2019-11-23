import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input[type="range"] {
    height: 32px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    border-radius: 25px;
    background: #2497e3;
    animate: 0.2s;
  }
  input[type="range"]::-webkit-slider-thumb {
    height: 25px;
    width: 25px;
    border-radius: 25px;
    background: #a1d0ff;
    -webkit-appearance: none;
    margin-top: -10.5px;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 5px;
    background: #2497e3;
    border-radius: 25px;
    animate: 0.2s;
  }
  input[type="range"]::-moz-range-thumb {
    height: 25px;
    width: 25px;
    border-radius: 25px;
    background: #a1d0ff;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 5px;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: #2497e3;
    border-radius: 2px;
  }
  input[type="range"]::-ms-fill-upper {
    background: #2497e3;
    border-radius: 2px;
  }
  input[type="range"]::-ms-thumb {
    margin-top: 1px;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    background: #a1d0ff;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #2497e3;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #2497e3;
  }
  input {
    background: none;
    border: none;
  }
`;
