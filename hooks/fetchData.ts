import useSWR from 'swr'

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useGetScore() {
  const { data, error } = useSWR('/api/score', fetcher);

  return {
    score: data,
    isLoading: !error && !data,
    isError: error
  };
}

