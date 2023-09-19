import { useLoaderData, Link } from "react-router-dom";

const Meal = () => {
  const mealData = useLoaderData();

  return (
    <div className="grid grid-cols-4 ">
      {mealData.meals.map((meal) => {
        const { idMeal, strMeal, strArea } = meal;
        return (
          <div key={idMeal} className="gap-10">
            <div className="card w-72 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Name: {strMeal}</h2>
                <p>Location: {strArea}</p>
                <div className="card-actions justify-end">
                  <Link to={`/details/${idMeal}`}>
                    {" "}
                    <button className="btn btn-primary">Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Meal;
