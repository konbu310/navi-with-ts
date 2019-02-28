import * as React from "react";
import * as ReactDOM from "react-dom";
import { Suspense } from "react";
import { mount, route } from "navi";
import { Router, View } from "react-navi";
import * as Styled from "styled-components";
import { Landing } from "./Landing";
import { api } from "./api";

const routes = mount({
  "/": route({
    title: "Programming Language",
    getData: () => api.fetchAll(),
    view: <Landing />,
  }),
});

ReactDOM.render(
  <Router routes={routes}>
    <Suspense fallback={<h1>Now Loading...</h1>}>
      <View />
    </Suspense>
  </Router>,
  document.getElementById("root")
);
