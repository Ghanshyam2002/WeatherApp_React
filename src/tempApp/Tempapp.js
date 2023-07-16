import React, { useEffect, useState } from "react";
// import "../project_2We/Tempapp.css";
import "../tempApp/Tempapp.css"

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=763d23c0c43a9722d64d619e14789434`;
      const response = await fetch(url);
      const resJson = await response.json();
      //   console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <br />
        {!city ? (
          <p className="error">Data Not Found</p>
        ) : (
          <div className="info">
            <h2 className="location">
              <i className="fa-solid fa-street-view"></i>
              {search}
            </h2>
            <h1 className="temp">{city.temp}°C</h1>
            <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
          </div>
        )}
      </div>

      {/* <div className="wave"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div> */}
    </>
  );
};

export default Tempapp;
