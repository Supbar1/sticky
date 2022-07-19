import { useEffect, useState } from "react";
import axios from "axios";

const api = "https://jsonplaceholder.typicode.com/users";

function Photos() {
  const [data, setData] = useState("");
  const Api = async () => {
    const { data } = await axios.get(api);
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    Api();
    console.log("hajku");
  }, []);

  return <></>;
}

export default Photos;
