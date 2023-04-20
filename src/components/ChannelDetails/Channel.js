import React, { useEffect, useState } from "react";
import { SUSCRIBE_DATA_API } from "../../utils/constants";

const Channel = () => {
  const [subscribe, setSubscribe] = useState([]);
  useEffect(() => {
    getSub();
  }, []);
  console.log(subscribe);
  async function getSub() {
    const response = await fetch(SUSCRIBE_DATA_API);
    const data = await response.json();
    console.log(data);
    setSubscribe(data);
  }
  return <div>SubscriptionData</div>;
};

export default Channel;
