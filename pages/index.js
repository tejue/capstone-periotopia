import NewIndex from "@/components/NewIndex/index";
import ResultCard from "@/components/ResultCard/index";

export default function HomePage({
  formatNumber,
  results,
  handleDeleteResultCard,
}) {
  return (
    <>
      <h1>Periotopia Overview</h1>
      <NewIndex />
      {results.map(({ id, costsPerYear, periotopiaIndex, taxAmount }) => {
        return (
          <ResultCard
            key={id}
            id={id}
            formatNumber={formatNumber}
            costsPerYearID={costsPerYear}
            periotopiaIndexID={periotopiaIndex}
            taxAmountID={taxAmount}
            handleDeleteResultCard={handleDeleteResultCard}
          />
        );
      })}
    </>
  );
}
