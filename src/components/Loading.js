import React, { useState } from "react";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
const Loading = () => {
  const state = useSelector((state) => state.singlePokemon);
  const loading = state.isLoading;
  let [color, setColor] = useState("#ffffff");
  const override = {
    display: "block",
    margin: "0 auto",
    borderCcolor: " red",
  };
  return (
    <div>
      {/* <ClipLoader color={color} loading={loading} style={override} size={150} /> */}
      LOADING...
    </div>
  );
};

export default Loading;
