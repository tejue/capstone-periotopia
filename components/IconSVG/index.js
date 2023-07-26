import { mdiChevronRightCircle } from "@mdi/js";
import { mdiAlphaXCircle } from "@mdi/js";
import { mdiBrush } from "@mdi/js";
import { mdiBrushOff } from "@mdi/js";
import { mdiWater } from "@mdi/js";
import { mdiPiggyBank } from "@mdi/js";
import { mdiPaperRoll } from "@mdi/js";

export default function IconSVG({ icon, color = "#fb9f26", ...rest }) {
  let pathData = "";

  if (icon === "circle") {
    pathData = mdiChevronRightCircle;
  }
  if (icon === "x") {
    pathData = mdiAlphaXCircle;
  }
  if (icon === "brush") {
    pathData = mdiBrush;
  }
  if (icon === "brushoff") {
    pathData = mdiBrushOff;
  }
  if (icon === "water") {
    pathData = mdiWater;
  }
  if (icon === "piggy") {
    pathData = mdiPiggyBank;
  }
  if (icon === "paper") {
    pathData = mdiPaperRoll;
  }

  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d={pathData} fill={color} />
    </svg>
  );
}
