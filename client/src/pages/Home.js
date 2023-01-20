import React, { useState } from "react";
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


  if (loadingUser && loadingView) {
    return <p>Loading</p>;
  }


  return (
    <body>
      <div>
        {dataView?.view?.map((view, index) => {
          return (
            <p className="singleViews" key={index}>
              {view.viewText}
            </p>
          );
        })}
      </div>
    </body>
  );
};

export default Home;
