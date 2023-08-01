import {
  mdiChevronRightCircleOutline,
  mdiDeleteCircleOutline,
  mdiBrush,
  mdiBrushOff,
  mdiWater,
  mdiHandWash,
  mdiCurrencyEur,
  mdiChevronDoubleRight,
  mdiChevronDoubleLeft,
  mdiGestureTap,
} from "@mdi/js";

export default function IconSVG({ icon, color = "#ffffff", size, ...rest }) {
  let pathData = "";

  if (icon === "openCloseSymbol") {
    pathData = mdiChevronRightCircleOutline;
  }
  if (icon === "trashcan") {
    pathData = mdiDeleteCircleOutline;
  }
  if (icon === "brush") {
    pathData = mdiBrush;
  }
  if (icon === "brushoff") {
    pathData = mdiBrushOff;
  }
  if (icon === "drop") {
    pathData = mdiWater;
  }
  if (icon === "money") {
    pathData = mdiCurrencyEur;
  }
  if (icon === "handwash") {
    pathData = mdiHandWash;
  }
  if (icon === "click") {
    pathData = mdiGestureTap;
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
      {...rest}
      alt={icon}
      aria-label={`icon of a ${icon}`}
    >
      <path d={pathData} fill={color} width={size} />
    </svg>
  );
}
