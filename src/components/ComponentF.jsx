import React from "react";
import { userContext, channelContext } from "../App";

// consuming the context

export default function ComponentF() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return (
            <channelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    Multiple Context Value: {user} - {channel}{" "}
                  </div>
                );
              }}
            </channelContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
}
