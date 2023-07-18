import NewIndex from "@/components/NewIndex/index";
import ResultCard from "@/components/ResultCard/index";

export default function HomePage({
  costsPerYear,
  formatNumber,
  periotopiaIndex,
  taxAmount,
}) {
  return (
    <>
      <h1>Periotopia Overview</h1>
      <NewIndex />
      <ResultCard
        formatNumber={formatNumber}
        costsPerYear={costsPerYear}
        periotopiaIndex={periotopiaIndex}
        taxAmount={taxAmount}
      />
    </>
  );
}
