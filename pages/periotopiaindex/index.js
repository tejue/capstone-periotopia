import NewIndex from "@/components/NewIndex/index";
import ResultCard from "@/components/ResultCard/index";

export default function PeriotopiaIndexPage({
  collectedOverviewResults,
  handleDeleteResultCard,
  formatNumber,
  formatTime,
  handleIndexTitleChange,
}) {
  return (
    <>
      <h1>Periotopia Overview</h1>
      <NewIndex />
      {collectedOverviewResults.map(
        ({
          id,
          menstruationDaysPerYear,
          costsPerYear,
          taxAmount,
          timePerYear,
          access,
          periotopiaIndexFinancials,
          periotopiaIndexHygiene,
          indexTitle,
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
              accessID={access}
              handleDeleteResultCard={handleDeleteResultCard}
              menstruationDaysPerYearID={menstruationDaysPerYear}
              timePerYearID={timePerYear}
              indexTitleID={indexTitle}
              handleIndexTitleChange={handleIndexTitleChange}
            />
          );
        }
      )}
    </>
  );
}
