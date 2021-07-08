import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
const Navbar = (props) => {
  const [inputVal, setInputVal] = useState("");
  const classes = useStyles();
  return (
    <Header>
      <div className="container">
        <Menu>
          <Link to="/">
            <Logo>
              <img
                src="https://otvet.imgsmail.ru/download/u_ff4c7143f50fcbfe4b5d5e020e0d1ff2_800.png"
                alt=""
              />
            </Logo>
          </Link>
        </Menu>
      </div>
    </Header>
  );
};

export default Navbar;
const Header = styled.header`
  background: transparent;
  margin-bottom: -80px;
`;
const Menu = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;
