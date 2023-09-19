import { useLoaderData } from "react-router-dom";

const DetailsMeal = () => {
  const data = useLoaderData();

  return (
    <div>
      {data.meals.map((data) => {
        const { strInstructions, idMeal, strArea } = data;
        console.log(data);
        return (
          <div key={idMeal}>
            <h2>id: {idMeal}</h2>
            <h2>area:{strArea}</h2>
            <h2>
              {" "}
              <span className="text-2xl font-bold">Desc</span>:{" "}
              {strInstructions}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default DetailsMeal;
