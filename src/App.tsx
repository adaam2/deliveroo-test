import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import * as rm from "typed-rest-client";

import Home from "pages/Home";
import Neighbourhood from 'objects/neighbourhood';

const client : rm.RestClient = new rm.RestClient('client', '/api');

const retrieveNeighbourhood = async () : Promise<Neighbourhood> => {
  const response: rm.IRestResponse<Neighbourhood> = await client.get<Neighbourhood>('/neighbourhoods.json');

  console.log(response.statusCode);

  if (response.result) {
    return response.result;
  }

  throw new Error("Could not load neighbourhood");
}

const App = () => (
  <Switch>
    <Route exact path="/" render={async () => {
      const neighbourhood : Neighbourhood = await retrieveNeighbourhood();

      console.log(neighbourhood.title);

      return <Home neighbourhood={neighbourhood} />
    }} />
  </Switch>
);

export default App;
