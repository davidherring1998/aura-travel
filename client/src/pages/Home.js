import React from "react";
import "../styles/Home.css";
import { useQuery } from "@apollo/client";
import { QUERY_VIEW, QUERY_USER } from "../utils/queries";

const Home = () => {
  const {
    loading: loadingView,
    error: errorView,
    data: dataView,
  } = useQuery(QUERY_VIEW);
  const {
    loading: loadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery(QUERY_USER);
  console.log(dataUser);
  console.log(dataView);
  console.log(errorUser);
  console.log(errorView);
  console.log(loadingUser);
  console.log(loadingView);
  return (
    <body>
      <p>{dataView.view[0].viewText}</p>
    </body>
  );
};

export default Home;
