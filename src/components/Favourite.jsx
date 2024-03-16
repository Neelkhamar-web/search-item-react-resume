import React, { useContext } from "react";
import { GlobalContext } from "./context/Context";
import RecipeItem from "./RecipeItem";

const Favourite = () => {
  const { favourite } = useContext(GlobalContext);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favourite &&
        favourite.map((item) => <RecipeItem key={item.id} item={item} />)}
    </div>
  );
};

export default Favourite;
