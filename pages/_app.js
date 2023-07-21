import GlobalStyle from "../styles";
// import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [generalInfo, setGeneralInfo] = useLocalStorageState("generalInfo", {
    defaultValue: {
      age: "",
      firstMenstruation: "",
      cyclusLength: "",
      menstruationLength: "",
    },
  });

  const [financials, setFinancials] = useLocalStorageState("financials", {
    defaultValue: [
      {
        product: "",
        packageCosts: "",
        taxAmount: "",
        taxes: "",
        packageContent: "",
        changeProduct: "",
      },
    ],
  });

  const [results, setResults] = useLocalStorageState("results", {
    defaultValue: [],
  });

  //-----keeping for training sessions during coding-----
  // const [generalInfo, setGeneralInfo] = useState({
  //   age: "",
  //   firstMenstruation: "",
  //   cyclusLength: "",
  //   menstruationLength: "",
  // });

  //-----keeping for training sessions during coding-----
  // const [financials, setFinancials] = useState({
  //   product: "",
  //   packageCosts: "",
  //   taxAmount: "",
  //   taxes: "",
  //   packageContent: "",
  //   changeProduct: "",
  // });

  const { age, firstMenstruation, cyclusLength, menstruationLength } =
    generalInfo;

  function handleGeneralInfo(data) {
    setGeneralInfo({
      ...data,
    });
  }

  const menstruationDaysPerYear = Math.round(
    (365 / cyclusLength) * menstruationLength
  );

  const {
    product,
    packageCosts,
    taxAmount,
    taxes,
    packageContent,
    changeProduct,
  } = financials;

  function handleFinancials(data) {
    setFinancials(data);
  }

  function costsPerYearCalc() {
    if (product === "tampon" || product === "pad") {
      return (
        (packageCosts / packageContent) *
        (changeProduct * menstruationLength) *
        menstruationDaysPerYear
      );
    } else if (product === "cup" || product === "disc") {
      return packageCosts / 5 / (packageContent / packageContent);
    } else if (product === "schlueppi") {
      return (
        (packageCosts / packageContent / 2) *
        (changeProduct * menstruationLength)
      );
    } else return NaN;
  }

  const costsPerYear = costsPerYearCalc();

  function formatNumber(number) {
    if (Math.abs(number) % 1 !== 0) {
      return number.toLocaleString("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
    return Math.trunc(number).toLocaleString("de-DE");
  }

  function periotopiaIndexCalc() {
    if (packageCosts === "0") {
      return "100%";
    } else if (packageCosts > "0" && taxAmount === "none") {
      return "66%";
    } else if (packageCosts > "0" && taxAmount === "partial") {
      return "33%";
    } else {
      return "0%";
    }
  }

  const periotopiaIndex = periotopiaIndexCalc();

  function handleAddResult(newResult) {
    newResult = { ...newResult, id: uid() };
    setResults([
      ...results,
      {
        ...newResult,
        costsPerYear: costsPerYear,
        periotopiaIndex: periotopiaIndex,
        taxAmount: taxAmount,
      },
    ]);
  }

  function handleDeleteResultCard(id) {
    setResults(results.filter((result) => result.id !== id));
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        handleGeneralInfo={handleGeneralInfo}
        generalInfo={generalInfo}
        handleFinancials={handleFinancials}
        financials={financials}
        formatNumber={formatNumber}
        menstruationDaysPerYear={menstruationDaysPerYear}
        costsPerYear={costsPerYear}
        periotopiaIndex={periotopiaIndex}
        results={results}
        handleAddResult={handleAddResult}
        handleDeleteResultCard={handleDeleteResultCard}
      />
    </>
  );
}
