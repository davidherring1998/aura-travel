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
import Tools from "./pages/AuraTools/AuraTools";
import Maps from "./components/Tools/Maps/Maps";
import Signup from "../src/pages/Signup";
import Login from "../src/pages/Login";

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/navigation" element={<Maps />} />
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
