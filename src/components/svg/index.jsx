import * as React from "react";

function SvgBuilding(props) {
  const { mouseEnter, mouseLeave, hoveredPath, roomClick } = props;

  return (
    <div className="w-full">
      <svg
        viewBox="129.686 147.924 272.298 133.143"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#d8d8d8" stroke="#000">
          <path
            id="room1"
            d="M129.686 147.924H401.98400000000004V281.067H129.686z"
            style={{ stroke: hoveredPath === "room1" ? "yellow" : "grey" }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={roomClick}
          />

          <path
            id="room2"
            d="M137.417 155.654H202.26999999999998V202.254H137.417z"
            style={{ stroke: hoveredPath === "room2" ? "yellow" : "grey" }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={roomClick}
          />
          <path
            id="room3"
            d="M208.068 155.44H315.44100000000003V202.899H208.068z"
            style={{ stroke: hoveredPath === "room3" ? "yellow" : "grey" }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={roomClick}
          />
          <path
            id="room4"
            d="M326.179 154.795H393.17999999999995V274.19399999999996H326.179z"
            style={{ stroke: hoveredPath === "room4" ? "yellow" : "grey" }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={roomClick}
          />
          <path
            id="room5"
            d="M136.987 212.133H319.52099999999996V274.409H136.987z"
            style={{ stroke: hoveredPath === "room5" ? "yellow" : "grey" }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={roomClick}
          />
        </g>
      </svg>
    </div>
  );
}

export default SvgBuilding;
