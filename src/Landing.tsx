import * as React from "react";
import { Link, useCurrentRoute } from "react-navi";

export const Landing: React.FC<{}> = () => {
  const { data } = useCurrentRoute();

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};
