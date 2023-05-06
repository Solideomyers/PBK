import { useState } from "react";
import { useGetAllPokemonsQuery } from "./redux/features/api/pokemonApi";
import { Card } from "./components/Card/Card";

function App() {
  const [id, setId] = useState();
  const [showCard, setShowCard] = useState(false);
  const { data = [], isLoading } = useGetAllPokemonsQuery();

  const handleClick = (genId) => {
    if (genId !== id) {
      setId(genId);
      setShowCard(true);
    } else {
      setShowCard(!showCard);
    }
  };

  if (isLoading)
    return (
      <div className="text-4xl font-semibold animate-pulse">Loading...</div>
    );

  return (
    <div className="p-4 flex justify-center flex-wrap items-center w-full h-full">
      {data &&
        data.results.map((gen, index) => (
          <div
            key={index}
            className="border border-black gap-x-px p-2 m-2 rounded-3xl shadow-sm shadow-black hover:shadow-white w-fit inline-block"
          >
            <h1 className="w-full font-bold p-2">{gen.name.toUpperCase()}</h1>
            <button
              className="w-full"
              onClick={() => handleClick(gen.name)}
              value={gen.name}
              type="submit"
            >
              GoDetail
            </button>
          </div>
        ))}
      {showCard && id && <Card id={id} />}
    </div>
  );
}

export default App;
