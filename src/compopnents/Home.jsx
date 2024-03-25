import { useLoaderData } from "react-router-dom";

export default function Home() {
  const products = useLoaderData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5 mx-3">
      {products.map((item) => {
        return (
          <div key={item.id} className="shadow p-2  rounded flex flex-col justify-between">
            <div className="flex justify-center items-center">
              <img className="w-46 h-32 rounded" src={item.image} alt="" />
            </div>
            <div className="">
              <h1 className="text-xl font-bold">{item.title}</h1>
              <h2 className="font-semibold">Price: ${item.price}</h2>
              <h4 className="font-semibold">Category: {item.category}</h4>
              <button className="bg-green-500 text-white font-semibold py-1 mt-3 rounded w-full">
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
