import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchPosts } from "../redux/action";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import ReactPaginate from "react-paginate";
import ButtonGroup from "@material-ui/core/ButtonGroup";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
const PokemonList = (props) => {
  const [inputVal, setInputVal] = useState("");
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const ShowData = () => {
    if (lists.data) {
      return (
        <ListContent>
          <form style={{ margin: "0 auto", textAlign: "center" }}>
            <TextField
              style={{ width: "60%", marginRight: "50px" }}
              style={{ background: "#fff" }}
              id="filled-secondary"
              variant="outlined"
              color="secondary"
              placeholder="Search for pokemons"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <ButtonGroup disableElevation variant="contained" color="primary">
              <Button
                onClick={() => props.history.push(`/pokemon/${inputVal}`)}
              >
                Search
              </Button>
            </ButtonGroup>
          </form>
          {lists.data.map((item, id) => {
            return (
              <div className="single_item" key={id}>
                <div className="group">
                  <h3>{item.name}</h3>
                  <Link to={`/pokemon/${item.name}`}>VIEW</Link>
                </div>
              </div>
            );
          })}
        </ListContent>
      );
    }
    if (lists.loading) {
      return <h1>LOADING...</h1>;
    }
    if (lists.errorMessage) {
      return <h1>{lists.errorMessage}</h1>;
    }
    return <h1>Unable to Fecth Data</h1>;
  };
  const FetchData = (page) => {
    dispatch(fetchPosts(page));
  };
  useEffect(() => {
    FetchData(1);
  }, []);
  return (
    <List>
      <h1>
        DATA FETCHING WITH REDUX THUNK in{" "}
        <a target="_blank" href="https://pokeapi.co/">
          pokeapi.co
        </a>
      </h1>
      <div className="container">
        {ShowData()}
        {lists.data && (
          <ReactPaginate
            pageCount={Math.ceil(lists.count / 15)}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={(data) => FetchData(data.selected + 1)}
            activeClassName={"active_paginate"}
          />
        )}
      </div>
    </List>
  );
};

export default PokemonList;
const List = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://wallpapercave.com/wp/wp7308740.jpg");
  min-height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -80px;
  padding: 130px 0 50px;
  color: #fff;
  .active_paginate {
    background: red;
  }
  ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
    max-width: 90vh;
    margin: 0 auto;
    padding-left: 0px;
    li {
      list-style: none;
      padding: 10px;
      border: 2px solid red;
      cursor: pointer;
    }
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    a {
      color: red;
    }
  }
  .single_item {
    padding: 10px 20px;
    border: 2px solid #fff;
    background: rgba(0, 34, 67, 0.5);
    transition: all 0.3s ease-in-out;
    margin: 20px 0;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
    h3 {
    }
    .group {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    a {
      /* text-decoration: none; */
      color: #fff;
      font-weight: 800;
    }
  }
`;
const ListContent = styled.div``;
