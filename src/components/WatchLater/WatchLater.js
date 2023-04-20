import React from "react";
import { useSelector } from "react-redux";

const WatchLater = () => {
  const query = useSelector((store) => store.watch.items);
  console.log("query " + query);
  return <div>video</div>;
};

export default WatchLater;
