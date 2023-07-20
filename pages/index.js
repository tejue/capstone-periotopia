import NewIndex from "@/components/NewIndex/index";
import ResultCard from "@/components/ResultCard/index";
import { useState } from "react";

export default function HomePage({
  // costsPerYear,
  formatNumber,

  results,
}) {
  console.log("DASBITTEEINMAL", results);
  return (
    <>
      <h1>Periotopia Overview</h1>
      <NewIndex />
      {results.map(({ id, costsPerYear, periotopiaIndex, taxAmount }) => {
        return (
          <ResultCard
            key={id}
            resultID={id}
            formatNumber={formatNumber}
            costsPerYearID={costsPerYear}
            periotopiaIndexID={periotopiaIndex}
            taxAmountID={taxAmount}
          />
        );
      })}
    </>
  );
}
