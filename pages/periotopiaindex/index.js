import NewIndex from "@/components/NewIndex/index";
import ResultCard from "@/components/ResultCard/index";
import styled from "styled-components";

export default function PeriotopiaIndexPage({
  collectedOverviewResults,
  handleDeleteResultCard,
  formatNumber,
  formatTime,
  handleIndexTitleChange,
}) {
  return (
    <>
      <PageHeader>Periotopia-Index</PageHeader>
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

const PageHeader = styled.h1`
  text-align: center;
`;
