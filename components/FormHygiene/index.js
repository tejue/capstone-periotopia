import Questionnaire from "../Questionnaire";

export default function FormHygiene() {
  const minutesToSanitary = [
    { value: "1", content: "1" },
    { value: "15", content: "15" },
    { value: "30", content: "30" },
    { value: "31", content: "mehr als 30" },
  ];

  const minutes = [
    { formId: "Radio Option 1", value: "2", checked: "2", content: "1" },
    { formId: "Radio Option 2", value: "15", checked: "15", content: "2" },
    { formId: "Radio Option 3", value: "30", checked: "30", content: "3" },
  ];

  return (
    <>
      {/* <Questionnaire
        formID="test"
        question="Wieviele Minuten brauchst du etwa zu dem Ort, an dem du deine Menstruationshygiene furchführen kannst?"
        type="number"
        // value={numericValue}
        // onChange={handleNumberChange}
        min={0}
        max={100}
      /> */}
      <Questionnaire
      // type="select"
      // formId="minutes"
      // question="Wieviele Minuten brauchst du etwa zu dem Ort, an dem du deine Menstruationshygiene furchführen kannst?"
      // name="minutes"

      // value="minutes"
      // value={currentValue.minutes}
      // onChange={(event) => handleUserInput(event, "minutes")}

      // options={minutesToSanitary}
      // placeholder="bitte wähle aus"

      // options={selectOptions}
      // value={selectedOption}
      // onChange={handleSelectChange}
      // className="my-select"
      />
      Minuten
      <Questionnaire
        type="radio"
        question="Wieviele Minuten brauchst du etwa zu dem Ort, an dem du deine Menstruationshygiene furchführen kannst?"
        name="minutes"
        options={minutes}
        // onChange=
        // options={radioOptions}
        // value={radioValue}
        // onChange={handleRadioChange}
      />
    </>
  );
}
