const theme = {
  // basic bootstrap colors
  primary: "#217aff",
  secondary: "#6c757c",
  success: "#34a745",
  danger: "#dc3545",
  warning: "#fbc10a",
  info: "#31a2b8",
  light: "#f8f9fa",
  dark: "#343a40",
  white: "#ffffff",
  flex: (direction, justify, align) =>
    `display: flex;
    flex-direction: ${direction ? direction : "row"};
    justify-content: ${justify ? justify : "flex-start"};
    align-items: ${align ? align : "stretch"}`
};

export default theme;
