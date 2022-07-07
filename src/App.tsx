import React from "react";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import LaunchList from "./components/LaunchList";

const client = new ApolloClient({
  uri: "https://spacexdata.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div>Hello</div>
        <LaunchList />
      </div>
    </ApolloProvider>
  );
}

export default App;
