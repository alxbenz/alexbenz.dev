import React from "react";

interface LogoProps {
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ isDark = false }) => {
  const colorAStart = !isDark ? "#fbbf24" : "#fde68a";
  const colorAEnd = !isDark ? "#facc15" : "#fef08a";
  const colorBStart = !isDark ? "#4c1d95" : "#c4b5fd";
  const colorBEnd = !isDark ? "#581c87" : "#d8b4fe";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 368 269"
      style={{ transition: "all .3s" }}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{
              stopColor: colorAStart,
              stopOpacity: 0.9,
              transition: "all 1s",
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: colorAEnd,
              stopOpacity: 0.9,
              transition: "all 1s",
            }}
          />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{
              stopColor: colorBStart,
              stopOpacity: 1,
              transition: "all 1s",
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: colorBEnd,
              stopOpacity: 1,
              transition: "all 1s",
            }}
          />
        </linearGradient>
      </defs>

      <path
        d="M320 160h140v100h-20v40h20v100H320V160Zm40 140v60h60v-60h-60Zm60-100h-60v60h60v-60Z"
        fill="url(#grad2)"
        transform="rotate(45 487.488 18.077)"
      />
      <path
        d="M320 160h140v240h-40V300h-60v100h-40V160Zm100 40h-60v60h60v-60Z"
        fill="url(#grad1)"
        transform="rotate(-45 86.36 515.771)"
      />
    </svg>
  );
};
