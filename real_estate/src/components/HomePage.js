import React, { useRef, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const HomePage = () => {
const [block, setBlock] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const address = useRef(null);
  const handleQuery = () => {
    console.log(address.current.value)
    // axios
    //   .get(
    //     `https://data.gov.sg/api/action/datastore_search?resource_id=482bfa14-2977-4035-9c61-c85f871daf4e&q=${address.current.value}`
    //   )
    //   .then(function (res) {
    //     console.log(res.data.result.records);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function () {});

    axios
      .get(
        `https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&q=${address.current.value}`
      )
      .then(function (res) {
        console.log(res.data.result.records);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});

  };
  return (
    <NavBar>
      <div>
        <h1>Properties Search</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            ref={address}
            onChange={handleQuery}
            required
          ></input>
          <button>Search</button>
        </form>
      </div>
    </NavBar>
  );
};

export default HomePage;
