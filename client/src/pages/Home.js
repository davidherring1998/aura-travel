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

  if (loadingUser && loadingView) {
    return <p>Loading</p>;
  }

  return (
    <body>
      <form></form>
      <div>
        {/* {dataView?.view?.map((view, index) => {
          return (
            <div className="singleViews" key={index}>
              {view.viewText}
            </div>
          );
        })} */}
        {dataUser?.user?.map((user, index) => {
          return (
            <div className="singleViews" key={index}>
              <h2>-{user.userName}</h2>
              {user.views.map((view, i) => {
                return <p key={i}>{view.viewText}</p>;
              })}
            </div>
          );
        })}
      </div>
    </body>
  );
};

export default Home;
