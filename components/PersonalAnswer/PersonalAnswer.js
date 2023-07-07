export default function PersonalAnswer({ personalAnswerText }) {
  const year = Math.round((365 / 28) * 5);
  const today = Math.round((365 / 28) * 5 * (39 - 13));
  const menstruationLife = Math.round((365 / 28) * 5 * (59 - 13));

  return (
    <section>
      <p>{personalAnswerText}</p>
      <p>{year} Tage im Jahr</p>
      <p>davon {today} Tage bis heute</p>
      <p>{menstruationLife} Tage in deinem Menstruations-Leben</p>
    </section>
  );
}
