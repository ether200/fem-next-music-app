import useSWR from "swr";
import fetcher from "./fetcher";

/*
    SWR is designed for API calls, it takes a function that returns data as second argument and a key cache
    Whatever returns from the function it will be cached
*/

export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePlaylist = () => {
  const { data, error } = useSWR("/playlist", fetcher);
  return {
    playlists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
