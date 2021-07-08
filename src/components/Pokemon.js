import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GetPokemon } from "../redux/action";
import Loading from "./Loading";
const Pokemon = (props) => {
  const state = useSelector((state) => state.singlePokemon);
  const dispatch = useDispatch();
  const name = props.match.params.pokemon;
  console.log(state);
  const ShowData = () => {
    if (state.isLoading) {
      <div>
        {/* <Loading /> */}
        loading ...
      </div>;
    }
    if (state.data[name]) {
      const pockData = state.data[name];
      return (
        <div className="single_item">
          <div className="weigth">
            NAME: <span>{pockData.name}</span>{" "}
          </div>
          <div className="weigth">
            WEIGHT: <span>{pockData.weight}</span>{" "}
          </div>
          <div className="weigth">
            HEIGHT: <span>{pockData.height}</span>{" "}
          </div>
          <h1>SPRITES</h1>
          <div className="image_group">
            <img src={pockData.sprites.back_default} alt="" />
            <img src={pockData.sprites.back_female} alt="" />
            <img src={pockData.sprites.back_shiny} alt="" />
            <img src={pockData.sprites.back_shiny_female} alt="" />
            <img src={pockData.sprites.front_default} alt="" />
            <img src={pockData.sprites.front_female} alt="" />
            <img src={pockData.sprites.front_shiny} alt="" />
            <img src={pockData.sprites.front_shiny_female} alt="" />
          </div>
          <h1>STATUS</h1>
          <div className="status_group">
            {pockData.stats.map((item) => {
              return (
                <div>
                  <span> {item.stat.name}</span>: {item.base_stat}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    if (state.errorMessage) {
      return <h1>{state.errorMessage}</h1>;
    }
  };

  useEffect(() => {
    dispatch(GetPokemon(name));
  }, []);
  return (
    <Wrapper>
      <div className="container">
        <h1 className="title">{name}</h1>
        {ShowData()}
      </div>
    </Wrapper>
  );
};

export default Pokemon;
const Wrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://lastfm.freetls.fastly.net/i/u/ar0/ddd4bab0853c453ec517976f0ac2523b.jpg");
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 130px 0 50px;
  color: #fff;
  .image_group {
    padding: 20px;
    background: #fff;
    img {
    }
  }
  .title {
    text-transform: capitalize;
    font-weight: 800;
    color: #fff;
    background: green;
    padding: 10px;
    text-align: center;
  }
  .status_group {
    div {
      font-size: 20px;
      span {
        font-weight: 800;
        background: green;

        color: #fff;
      }
    }
  }
  .single_item {
    .weigth {
      font-weight: 800;
      margin: 20px 0;
      span {
        background: green;
        padding: 5px;
      }
    }
  }
`;
