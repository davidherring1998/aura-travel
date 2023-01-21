import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Calendar from "react-calendar";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Tools from "./components/Tools";
import Navigation from "./components/Tools/Maps/Maps";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <Tools />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navigation" element={<Navigation />} />
          </Routes>
        </div>
        <div className="calendar">
          <h1 className="calendarHeader">Aura Travel Calendar</h1>
          <div className="calendarContainer">
            <Calendar
              className="calendarComps"
              onChange={setDate}
              value={date}
            />
          </div>
          <div className="textCenter">Selected date: {date.toDateString()}</div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
