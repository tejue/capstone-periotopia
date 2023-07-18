import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [generalInfo, setGeneralInfo] = useState({
    age: "",
    firstMenstruation: "",
    cyclusLength: "",
    menstruationLength: "",
  });

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

  const [financials, setFinancials] = useState({
    product: "",
    packageCosts: "",
    taxAmount: "",
    taxes: "",
    packageContent: "",
    changeProduct: "",
  });

  function handleFinancials(data) {
    setFinancials(data);
  }

  function formatNumber(number) {
    if (Math.abs(number) % 1 !== 0) {
      return number.toLocaleString("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
    return Math.trunc(number).toLocaleString("de-DE");
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
      />
    </>
  );
}
