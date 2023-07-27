import { mdiChevronRightCircleOutline } from "@mdi/js";
import { mdiDeleteCircleOutline } from "@mdi/js";
import { mdiBrush } from "@mdi/js";
import { mdiBrushOff } from "@mdi/js";
import { mdiWater } from "@mdi/js";
import { mdiPiggyBank } from "@mdi/js";
import { mdiPaperRoll } from "@mdi/js";
import { mdiCursorDefaultClickOutline } from "@mdi/js";
import { mdiChevronDoubleRight } from "@mdi/js";
import { mdiChevronDoubleLeft } from "@mdi/js";

export default function IconSVG({ icon, color = "#ffffff", size, ...rest }) {
  let pathData = "";

  if (icon === "circle") {
    pathData = mdiChevronRightCircleOutline;
  }
  if (icon === "x") {
    pathData = mdiDeleteCircleOutline;
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
  if (icon === "click") {
    pathData = mdiCursorDefaultClickOutline;
  }
  if (icon === "next") {
    pathData = mdiChevronDoubleRight;
  }
  if (icon === "prev") {
    pathData = mdiChevronDoubleLeft;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      rotation={rest.rotation}
      {...rest}
    >
      <path d={pathData} fill={color} width={size} />
    </svg>
  );
}
