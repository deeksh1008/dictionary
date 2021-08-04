import {
  createMuiTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import category from "../data/category";
import React from "react";
import "./header.css";
const Header = () => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <div className="header">
      <span className="title">Word Hunt</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField id="standard-basic" label="Standard" />
          <TextField
            id="standard-select-language"
            select
            label="Select"
            helperText="Please select your language"
          >
            {category.map((option) => (
              <MenuItem>{option.value}</MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
