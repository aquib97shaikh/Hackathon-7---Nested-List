import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const [city, setCity] = useState(0);
  const [state, setState] = useState(0);
  const town = states[state].cities[city].towns.map((town, tid) => (
    <div id={"town" + (tid + 1)} key={town.name + tid}>
      {town}
    </div>
  ));
  console.log(town);
  return (
    <div id="main">
      {states.map((st, id) => (
        <div
          className="state"
          id={"state" + (id + 1)}
          key={st.name + id}
          onClick={() => (state === id ? setState(-1) : setState(id))}
        >
          <h1>{st.name}</h1>
          {id === state
            ? states[state].cities.map((ci, cityId) => (
                <div
                  className="city"
                  id={"city" + (cityId + 1)}
                  key={ci.name + cityId}
                  onClick={() => (city === id ? setCity(-1) : setCity(cityId))}
                >
                  {ci.name}
                  {city === cityId
                    ? states[state].cities[city].towns.map((town, tid) => (
                        <div
                          className="town"
                          id={"town" + (tid + 1)}
                          key={town.name}
                        >
                          {town.name}
                        </div>
                      ))
                    : null}
                </div>
              ))
            : null}
        </div>
      ))}
    </div>
  );
}

export default App;
