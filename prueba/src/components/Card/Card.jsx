import { useGetPokemonIdQuery } from "../../redux/features/api/pokemonApi";
import { useState } from "react";

export const Card = (id) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const { data = [], isLoading } = useGetPokemonIdQuery(id);
  console.log(data);
  if (isLoading)
    return (
      <div className="text-4xl font-semibold animate-pulse">Loading...</div>
    );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.pokemon_species.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(data.pokemon_species.length / itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 w-full">
      <div className="mb-4 p-5 w-10/12 flex justify-center">
        <h1 className="text-3xl font-bold text-gray-900 m-3 p-2">
          Nombre: {data.name.toUpperCase()}
        </h1>
        <h2 className="text-sm font-medium text-gray-600 uppercase m-3 p-2">
          Region: {data.main_region.name.toUpperCase()}
        </h2>
      </div>
      <ul className="p-4 shadow-md shadow-white border border-black rounded-3xl w-56">
        {currentItems.map((pok, index) => (
          <li key={index} className="bg-gray-50 w-fit rounded-md shadow-sm ">
            <span className="text-gray-900 font-medium">
              Especie: {pok.name.toUpperCase()}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex gap-x-2 justify-center mt-5">
        <button
          className="bg-gray-500 text-white p-2 font-bold text-2xl rounded-md mx-3"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className="bg-gray-500 text-white p-2 rounded-md m-3 font-bold text-2xl"
          onClick={handleNextPage}
          disabled={currentPage === pageNumbers.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};
