import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { channelContext, userContext } from "../App";

export default function ComponentE() {
  const user = useContext(userContext);
  const channel = useContext(channelContext);

  return (
    <div>
      {" "}
      User is {user} and channel is {channel}
    </div>
  );
}
