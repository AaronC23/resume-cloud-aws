import useSWR from "swr";

const fetcher = (url: string | URL | Request) =>
  fetch(url).then((r) => r.json());

export default function Counter() {
  const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_URL!, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>View count is... {data.viewCount}</h1>
    </div>
  );
}
