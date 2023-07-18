import NewIndex from "@/components/NewIndex/index";
import ResultCard from "@/components/ResultCard/index";

export default function HomePage({ costsPerYear, formatNumber }) {
  return (
    <>
      <h1>Periotopia Overview</h1>
      <ResultCard formatNumber={formatNumber} costsPerYear={costsPerYear} />
      <NewIndex />
    </>
  );
}
