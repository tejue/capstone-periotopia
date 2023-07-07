import Question from "@/components/Question/Question";
import InputNumber from "@/components/InputNumber/InputNumber";

export default function HomePage() {
  return (
    <>
      <h1>Periotopia</h1>
      <form>
        <Question id="age" type="number" question="Wie alt bist du?" />
        <InputNumber id="age" name="age" min="8" max="100" />
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
        />
        <Question
          id="cyclusLength"
          type="cyclusLength"
          question="Wie oft beginnt deine Menstruation?"
        />
        Alle
        <InputNumber id="cyclusLength" name="age" min="1" max="60" /> Tage
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
        />
      </form>
    </>
  );
}
