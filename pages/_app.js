import GlobalStyle from "../styles";
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

  const [hygiene, setHygiene] = useLocalStorageState("hygiene", {
    defaultValue: {
      access: "",
      minutes: "",
    },
  });

  const [collectedOverviewResults, setCollectedOverviewResults] =
    useLocalStorageState("collectedOverviewResults", {
      defaultValue: [],
    });

  const {
    product,
    packageCosts,
    taxAmount,
    taxes,
    packageContent,
    changeProduct,
  } = financials;

  const { access, minutes } = hygiene;

  function handleGeneralInfo(data) {
    setGeneralInfo({
      ...data,
    });
  }

  function handleFinancials(data) {
    setFinancials(data);
  }

  function handleHygiene(data) {
    setHygiene(data);
  }

  const menstruationDaysPerYear = Math.round(
    (365 / generalInfo.cyclusLength) * generalInfo.menstruationLength
  );

  function costsPerYearCalc() {
    if (product === "tampon" || product === "pad") {
      return (
        (packageCosts / packageContent) *
        (changeProduct * generalInfo.menstruationLength) *
        menstruationDaysPerYear
      );
    } else if (product === "cup" || product === "disc") {
      return packageCosts / 5 / (packageContent / packageContent);
    } else if (product === "schlueppi") {
      return (
        (packageCosts / packageContent / 2) *
        (changeProduct * generalInfo.menstruationLength)
      );
    } else return NaN;
  }
  const costsPerYear = costsPerYearCalc();

  function minutesPerYearCalc() {
    if (access === "yes") {
      return menstruationDaysPerYear * changeProduct * minutes * 2;
    }
    if (access === "no") {
      return menstruationDaysPerYear * changeProduct * 31 * 2;
    } else return NaN;
  }
  const minutesPerYear = minutesPerYearCalc();

  function calculateTime(minutes) {
    const days = Math.floor(minutes / (60 * 24));
    const remainingMinutes = minutes % (60 * 24);
    const hours = Math.floor(remainingMinutes / 60);
    const minutesValue = remainingMinutes % 60;
    return { days, hours, minutes: minutesValue };
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

  function formatTime(time) {
    const { days, hours, minutes } = time;
    let formattedTime = "";

    if (days > 0) formattedTime += `${days} Tag${days !== 1 ? "e" : ""}`;
    if (hours > 0)
      formattedTime += `${
        formattedTime ? (minutes > 0 ? ", " : " und ") : ""
      }${hours} Stunde${hours !== 1 ? "n" : ""}`;
    if (minutes > 0)
      formattedTime += `${formattedTime ? " und " : ""}${minutes} Minute${
        minutes !== 1 ? "n" : ""
      }`;

    return formattedTime;
  }
  const timePerYear = calculateTime(minutesPerYear);

  function periotopiaIndexFinancialsCalc() {
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
  const periotopiaIndexFinancials = periotopiaIndexFinancialsCalc();

  function periotopiaIndexHygieneCalc() {
    if (minutes === "1") {
      return "100%";
    }
    if (minutes === "15") {
      return "66%";
    }
    if (minutes === "30") {
      return "33%";
    } else {
      return "0%";
    }
  }
  const periotopiaIndexHygiene = periotopiaIndexHygieneCalc();

  function handleAddResult(newResult) {
    newResult = { ...newResult, id: uid() };
    setCollectedOverviewResults([
      ...collectedOverviewResults,
      {
        ...newResult,
        menstruationDaysPerYear: menstruationDaysPerYear,
        costsPerYear: costsPerYear,
        taxAmount: taxAmount,
        timePerYear: timePerYear,
        access: access,
        periotopiaIndexFinancials: periotopiaIndexFinancials,
        periotopiaIndexHygiene: periotopiaIndexHygiene,
      },
    ]);
  }
  function handleDeleteResultCard(id) {
    setCollectedOverviewResults(
      collectedOverviewResults.filter(
        (collectedOverviewResult) => collectedOverviewResult.id !== id
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        generalInfo={generalInfo}
        handleGeneralInfo={handleGeneralInfo}
        menstruationDaysPerYear={menstruationDaysPerYear}
        financials={financials}
        handleFinancials={handleFinancials}
        costsPerYear={costsPerYear}
        hygiene={hygiene}
        handleHygiene={handleHygiene}
        minutesPerYear={minutesPerYear}
        calculateTime={calculateTime}
        timePerYear={timePerYear}
        collectedOverviewResults={collectedOverviewResults}
        handleAddResult={handleAddResult}
        handleDeleteResultCard={handleDeleteResultCard}
        formatNumber={formatNumber}
        formatTime={formatTime}
        periotopiaIndexFinancials={periotopiaIndexFinancials}
        periotopiaIndexHygiene={periotopiaIndexHygiene}
      />
    </>
  );
}
