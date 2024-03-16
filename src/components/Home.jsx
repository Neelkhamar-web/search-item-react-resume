import React, { useContext } from "react";
import { GlobalContext } from "./context/Context";
import RecipeItem from "./RecipeItem";

const Home = () => {
  const { loading, recipeList, setloading } = useContext(GlobalContext);

  return (
    <div>
      <h1 className="font-bold text-2xl truncate text-black">
        search here....first
      </h1>

      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {loading && <p>Loading...</p>}

        {recipeList &&
          recipeList.map((item) => <RecipeItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Home;
