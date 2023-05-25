import React from "react";
import "./App.css";
import InfoBox from "./components/info";
import SvgBuilding from "./components/svg";
import InfoModal from "./components/modal";
import { initialState, reducer } from "./components/constrain/reducer";

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleEnter = (event) => {
    dispatch({ type: "SET_ROOM_ID", payload: event.target.id });
    dispatch({ type: "SET_HOVERED_PATH", payload: null });
    dispatch({ type: "SET_ROOM_PATH", payload: null });
    dispatch({ type: "SET_FORM_MODAL", payload: true });
  };

  const handleMouseEnter = (event) => {
    dispatch({ type: "SET_HOVERED_PATH", payload: event.target.id });
    dispatch({ type: "SET_ROOM_PATH", payload: event.target.id });
  };

  const handleMouseLeave = () => {
    dispatch({ type: "SET_HOVERED_PATH", payload: null });
    dispatch({ type: "SET_ROOM_PATH", payload: null });
  };

  const closeModal = () => {
    dispatch({ type: "SET_FORM_MODAL", payload: false });
  };

  const updateRoomData = (newData) => {
    dispatch({ type: "SET_ROOM_DATA", payload: newData });
  };

  return (
    <>
      {state.formModal && (
        <InfoModal
          roomId={state.roomId}
          close={closeModal}
          roomData={state.roomData}
          updateData={updateRoomData}
        />
      )}

      <div className="flex max-h-[100vh] min-h[100vh] h-[100vh] gap-3 p-4">
        <SvgBuilding
          roomClick={handleEnter}
          mouseEnter={handleMouseEnter}
          mouseLeave={handleMouseLeave}
          hoveredPath={state.hoveredPath}
        />
        <div className="w-[40%]">
          {state.roomPath &&
            state.roomData.map((room, i) => {
              if (room.path === state.roomPath)
                return <InfoBox key={i} data={room} />;
              else return [];
            })}
        </div>
      </div>
    </>
  );
}

export default App;
