import {
  mdiChevronRightCircleOutline,
  mdiDeleteCircleOutline,
  mdiBrush,
  mdiBrushOff,
  mdiWater,
  mdiCurrencyUsd,
  mdiHandWash,
  mdiCursorDefaultClickOutline,
  mdiChevronDoubleRight,
  mdiChevronDoubleLeft,
  mdiGestureTap,
} from "@mdi/js";

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
  if (icon === "money") {
    pathData = mdiCurrencyUsd;
  }
  if (icon === "wash") {
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
      rotation={rest.rotation}
      {...rest}
    >
      <path d={pathData} fill={color} width={size} />
    </svg>
  );
}
