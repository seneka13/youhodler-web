import { useQuery } from "@tanstack/react-query";
import { fetchRatesData } from "../api";

interface RateItem {
  name: string;
  ask: number;
  bid: number;
  diff24h: number;
  rate: number;
}

export const useGetRatesData = ({
  searhTerm,
}: {
  searhTerm: string;
}): {
  data: RateItem[];
  isLoading: boolean;
  isError: boolean;
} => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["rates"],
    queryFn: fetchRatesData,
  });

  const usdRates = data?.usd || {};

  let ratesData = Object.entries(usdRates).map(([key, value]) => ({
    name: key.toUpperCase(),
    ask: value?.ask || 0,
    bid: value?.bid,
    diff24h: value?.diff24h,
    rate: value?.rate,
  }));

  if (searhTerm) {
    const filter = searhTerm.toUpperCase();
    ratesData = ratesData.filter((item) => item.name.includes(filter));
  }

  return {
    data: ratesData,
    isLoading,
    isError,
  };
};
