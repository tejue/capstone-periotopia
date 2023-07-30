import { useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Answer from "../../components/Answer";
import NavButton from "../../components/NavButton";
import IconSVG from "../../components/IconSVG";
import FormField from "@/components/FormField";
import PeriotopiaInfo from "@/components/PeriotopiaInfo";
import ShowAnswerButton from "@/components/ShowAnswerButton";

export default function GeneralInfoPage({}) {
  const router = useRouter();

  const optionsIntro = [
    { formFieldId: "introYes", value: "yes", content: "ja" },
    {
      formFieldId: "introNo",
      value: "no",
      content: "nein",
    },
  ];

  const [currentValue, setCurrentValue] = useState({
    intro: "",
  });

  function handleUserInput(event, fieldName) {
    setCurrentValue((prevState) => ({
      ...prevState,
      [fieldName]: event.target.value,
    }));
  }

  function handleNextPage() {
    router.push("/aboutyou");
  }

  return (
    <>
      <Header>
        <IconSVG
          icon="water"
          color={`var(--tertier-highlight-color)`}
          size={60}
        />
      </Header>
      <FormField
        question="Menstruierst du"
        type="radio"
        name="intro"
        options={optionsIntro}
        checked={currentValue.intro}
        onChange={(event) => handleUserInput(event, "intro")}
      />

      {currentValue.intro === "yes" && (
        <PeriotopiaInfo periotopiaInfoText="Schön, dass du da bist! Hier kannst du herausfinden, welche Auswirkungen verschiedene Aspekte des Themas Menstruationsgesundheit auf deine eigene Lebensrealität haben, was anders sein könnte und wie es in Periotopia wäre. Falls du dir mal unsicher bei den Antworten bist, kannst du mit den einzelnen Buttons allgemeine Durchschnittswerte verwenden. Viel Spaß." />
      )}
      {currentValue.intro === "no" && (
        <PeriotopiaInfo periotopiaInfoText="Schön, dass du da bist! Falls du es dich fragts: ja, auch du kannst schauen, was in Periotopia anders wäre. Falls du dir mal unsicher bist bei den Antworten bist, kannst du natürlich immer eine dir nahstehende, menstruierende Person fragen. Du hast aber auch die Möglichkeit, mit den einzelnen Buttons allgemeine Durchschnittswerte verwenden. Viel Spaß." />
      )}
      <></>
      {currentValue.intro !== "" && (
        <ShowAnswerButton type="button" onClick={handleNextPage} />
      )}
    </>
  );
}
