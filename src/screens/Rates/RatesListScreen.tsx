import { useState, useTransition } from "react";
import { useGetRatesData } from "../../hooks";
import { RateTile } from "./components";
import { Loader } from "../../components";

export const RatesListScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [isPending, startTransition] = useTransition();

  const { data, isError, isLoading } = useGetRatesData({
    searhTerm: searchText,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearchText(e.target.value);
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <span className="text-red-500 text-3xl">Error loading data</span>
      </div>
    );
  }

  return (
    <div className="flex-grow bg-white pb-20">
      <h1 className="text-3xl p-5">Cryptocurrency rates:</h1>
      <div className="flex justify-end px-5 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                     text-sm text-gray-800"
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {isPending ? (
          <span className="text-gray-500 text-lg font-light">Searching</span>
        ) : (
          //don't wanna use hook useMemo for such low count of data
          data.map((tile) => <RateTile tile={tile} key={tile.name} />)
        )}
      </div>
    </div>
  );
};
