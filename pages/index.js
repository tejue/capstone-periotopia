import NewIndex from "@/components/NewIndex/index";
import ResultCard from "@/components/ResultCard/index";

export default function HomePage({
  results,
  handleDeleteResultCard,
  formatNumber,
  formatTime,
}) {
  return (
    <>
      <h1>Periotopia Overview</h1>
      <NewIndex />
      {results.map(
        ({
          id,
          costsPerYear,
          periotopiaIndexFinancials,
          periotopiaIndexHygiene,
          taxAmount,
          menstruationDaysPerYear,
          timePerYear,
        }) => {
          return (
            <ResultCard
              key={id}
              id={id}
              formatNumber={formatNumber}
              formatTime={formatTime}
              costsPerYearID={costsPerYear}
              periotopiaIndexHygieneID={periotopiaIndexHygiene}
              periotopiaIndexFinancialsID={periotopiaIndexFinancials}
              taxAmountID={taxAmount}
              handleDeleteResultCard={handleDeleteResultCard}
              menstruationDaysPerYearID={menstruationDaysPerYear}
              timePerYearID={timePerYear}
            />
          );
        }
      )}
    </>
  );
}
