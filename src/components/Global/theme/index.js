const theme = {
  color: {
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
    nutri_background: "#F0F0F0",
    nutri_green_light_2: "#94C163",
    nutri_wheat_light_1: "#FFE9AD",
    nutri_wheat_light_1_faded: "rgba(255, 233, 173, 0.2)",
    nutri_blue_light_2: "#8085B1",
    nutri_blue_light_2_faded: "rgba(128, 133, 177, 0.2)",
    nutri_green_medium: "#6B9B36",
    nutri_green_medium_faded: "rgba(107, 155, 54, 0.2)",
    nutri_light_watermelon: "#DE97B1"

  },
  mixin: {
    flex: (direction, justify, align) =>
      `display: flex;
      flex-direction: ${direction ? direction : "row"};
      justify-content: ${justify ? justify : "flex-start"};
      align-items: ${align ? align : "stretch"}`
  }
};

export default theme;
