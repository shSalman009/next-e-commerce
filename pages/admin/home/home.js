import React from "react";
import Chart from "./chart";

import Widget from "./widget";

export default function Home() {
  return (
    <div className="p-5">
      <Widget />
      <Chart aspect={3 / 1} />
    </div>
  );
}
