import React from "react";
import { userContext } from "../App";

// consuming the context

export default function ComponentF() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return <div>User from Context {user}</div>;
        }}
      </userContext.Consumer>
    </div>
  );
}
