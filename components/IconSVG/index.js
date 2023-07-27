import { mdiChevronRightCircle } from "@mdi/js";
import { mdiAlphaXCircle } from "@mdi/js";
import { mdiBrush } from "@mdi/js";
import { mdiBrushOff } from "@mdi/js";
import { mdiWater } from "@mdi/js";
import { mdiPiggyBank } from "@mdi/js";
import { mdiPaperRoll } from "@mdi/js";
import { mdiCursorDefaultClickOutline } from "@mdi/js";

export default function IconSVG({ icon, color = "#ffffff", size, ...rest }) {
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
  if (icon === "click") {
    pathData = mdiCursorDefaultClickOutline;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      rotation={rest.rotation}
      //xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d={pathData} fill={color} width={size} />
    </svg>
  );
}

// const paths = {
//   circle: {
//     viewbox: "0 0 24 24",
//     path: "M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M8.6,16.6L13.2,12L8.6,7.4L10,6L16,12L10,18L8.6,16.6Z",
//   },
//   x: {
//     viewbox: "0 0 24 24",
//     path: "M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z",
//   },
//   brush: {
//     viewbox: "0 0 24 24",
//     path: "M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z",
//   },

//   brushoff: {
//     viewbox: "0 0 24 24",
//     path: "M20.8 22.7L12.4 14.3L11.8 15L9 12.2L9.7 11.5L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M7 14C5.3 14 4 15.3 4 17C4 18.3 2.8 19 2 19C2.9 20.2 4.5 21 6 21C8.2 21 10 19.2 10 17C10 15.3 8.7 14 7 14M20.7 6C21.1 5.6 21.1 5 20.7 4.6L19.4 3.3C19 2.9 18.4 2.9 18 3.3L12.2 9L15 11.8L20.7 6Z",
//   },

//   water: {
//     viewbox: "0 0 24 24",
//     path: "M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z",
//   },

//   piggy: {
//     viewbox: "0 0 24 24",
//     path: "M19.83 7.5L17.56 5.23C17.63 4.81 17.74 4.42 17.88 4.08C17.96 3.9 18 3.71 18 3.5C18 2.67 17.33 2 16.5 2C14.86 2 13.41 2.79 12.5 4H7.5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10V19H12V21H17.5L19.18 15.41L22 14.47V7.5H19.83M13 9H8V7H13V9M16 11C15.45 11 15 10.55 15 10S15.45 9 16 9C16.55 9 17 9.45 17 10S16.55 11 16 11Z",
//   },

//   paper: {
//     viewbox: "0 0 24 24",
//     path: "M9 3C5.69 3 3.14 5.69 3 9V21H12V13.46C13.1 14.45 14.5 15 16 15C19.31 15 22 12.31 22 9C22 5.69 19.31 3 16 3H9M16 5C18.21 5 20 6.79 20 9C20 11.21 18.21 13 16 13C13.79 13 12 11.21 12 9C12 6.79 13.79 5 16 5M16 7.25C15.03 7.25 14.25 8.03 14.25 9C14.25 9.97 15.03 10.75 16 10.75C16.97 10.75 17.75 9.97 17.75 9C17.75 8.03 16.97 7.25 16 7.25M4 12H5V13H4V12M6 12H7V13H6V12M8 12H9V13H8V12M10 12H11V13H10V12Z",
//   },
// };

// export default function IconSVG({
//   variant = "cupcake",
//   size = 50,
//   color = "currentColor",
// }) {
//   return (
//     <svg
//       viewBox={paths[variant].viewbox}
//       fill={color}
//       width={size}
//       height={size}
//     >
//       <title>{variant}</title>
//       <path d={paths[variant].path} />
//     </svg>
//   );
// }
