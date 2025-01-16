import useCachedSWR from "./useCachedSWR";

const getOrdinalSuffix = (num: number): string => {
  const j = num % 10,
    k = num % 100;
  if (j === 1 && k !== 11) {
    return `${num}st`;
  }
  if (j === 2 && k !== 12) {
    return `${num}nd`;
  }
  if (j === 3 && k !== 13) {
    return `${num}rd`;
  }
  return `${num}th`;
};

function VisitorCounter() {
  const { data, error } = useCachedSWR(
    import.meta.env.VITE_NEXT_PUBLIC_API_URL!
  );

  if (error) return <div>Failed to load visitor count</div>;
  if (!data) return <div>Calculating how many people have visited...</div>;

  const visitorMessage = `You are the ${getOrdinalSuffix(data)} visitor!`;

  return (
    <div>
      <h1>{visitorMessage}</h1>
    </div>
  );
}

export default VisitorCounter;
