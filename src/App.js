import React from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./features/Home/Home";
import Countries from "./features/Countries/Countries";
import NotFound from "./features/NotFound/NotFound";
import CountryDetail from "./features/CountryDetail/CountryDetail";
import Navbar from './shared/navigation/Navbar';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      	<Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/countries" component={Countries} />
          <Route exact path="/countries/:code" component={CountryDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
