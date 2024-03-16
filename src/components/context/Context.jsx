// context/GlobalState.js
import { data } from "autoprefixer";
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setloading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favourite, setfavourite] = useState([]);
  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      console.log(data?.data?.recipes);

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);

        console.log(recipeList);

        setloading(false);
        setSearchParam("");
      }
    } catch (e) {
      console.log(e);
    }
  }
  function getfavourite(id) {
    console.log("ff", id.id);
    let fav = [...favourite];
    const index = fav.findIndex((item) => item.id === id.id);
    if (index === -1) {
      fav.push(id);
    } else {
      fav.splice(index);
    }

    setfavourite(fav);
  }
  console.log(favourite);
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handlesubmit,
        setloading,
        recipeDetailsData,
        setRecipeDetailsData,
        getfavourite,
        favourite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
