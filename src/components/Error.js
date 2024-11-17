import React from "react";
import { useRouteError } from "react-router";

export const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!! Something went wrong</h1>
      <h4>
        {err.status} : {err.statusText}
      </h4>
    </div>
  );
};
