import Question from "@/components/Question/Question";
import InputNumber from "@/components/InputNumber/InputNumber";
import ButtonSubmit from "@/components/ButtonSubmit/ButtonSubmit";
import { useState } from "react";
import PersonalAnswer from "@/components/PersonalAnswer/PersonalAnswer";
import PeriotopiaInfo from "@/components/PeriotopiaInfo/PeriotopiaInfo";

export default function HomePage() {
  // const [formData, setFormData] = useState({
  //   age: "",
  //   firstMenstruation: "",
  //   cyclusLength: "",
  //   menstruationLength: "",
  // });

  // function handleChange(event) {
  //   const formElement = event.target.form;
  //   const formData = new FormData(formElement);
  //   const data = Object.fromEntries(formData);
  //   setFormData(data);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  const [age, setAge] = useState("");
  const [firstMenstruation, setFirstMenstruation] = useState("");
  const [cyclusLength, setCyclusLength] = useState("");
  const [menstruationLength, setMenstruationLength] = useState("");

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handleFirstMenstruationChange(event) {
    setFirstMenstruation(event.target.value);
  }

  function handleCyclusLength(event) {
    setCyclusLength(event.target.value);
  }

  function handleMenstruationLength(event) {
    setMenstruationLength(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(age, firstMenstruation, cyclusLength, menstruationLength);
  };

  return (
    <>
      <h1>Periotopia</h1>
      <form onSubmit={handleSubmit}>
        <Question id="age" type="number" question="Wie alt bist du?" />
        <InputNumber
          id="age"
          name="age"
          min="8"
          max="100"
          // onChange={handleChange}
          // value={formData.age}
          onChange={handleAgeChange}
          value={age}
        />
        <Question
          id="firstMenstruation"
          type="number"
          question="Wie alt warst du bei deiner ersten Menstruation?"
        />
        <InputNumber
          id="firstMenstruation"
          name="firstMenstruation"
          min="7"
          max="99"
          // onChange={handleChange}
          // value={formData.firstMenstruation}
          onChange={handleFirstMenstruationChange}
          value={firstMenstruation}
        />
        <Question
          id="cyclusLength"
          type="cyclusLength"
          question="Wie oft beginnt deine Menstruation?"
        />
        Alle
        <InputNumber
          id="cyclusLength"
          name="age"
          min="1"
          max="60"
          // onChange={handleChange}
          // value={formData.cyclusLength}
          onChange={handleCyclusLength}
          value={cyclusLength}
        />{" "}
        Tage
        <Question
          id="menstruationLength"
          type="number"
          question="Wieviele Tage dauert deine Menstruation?"
        />
        <InputNumber
          id="menstruationLength"
          name="menstruationLength"
          min="1"
          max="15"
          // onChange={handleChange}
          // value={formData.menstruationLength}
          onChange={handleMenstruationLength}
          value={menstruationLength}
        />
        <ButtonSubmit />
      </form>
      <PersonalAnswer personalAnswerText="Du menstruierts" year />
      <PeriotopiaInfo periotopiaInfoText="Auch in Periotopia würdest du menstruieren. Ein paar Dinge wären aber anders..." />
    </>
  );
}
