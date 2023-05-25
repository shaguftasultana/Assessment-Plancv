import { roomsData } from "./index";

export const initialState = {
  roomData: roomsData,
  hoveredPath: null,
  roomPath: null,
  formModal: false,
  roomId: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ROOM_DATA":
      const newData = action.payload;
      const updatedData = state.roomData.map((room) => {
        if (room.path === state.roomId) {
          return { ...room, ...newData };
        } else {
          return room;
        }
      });
      return { ...state, roomData: updatedData };
    case "SET_HOVERED_PATH":
      return { ...state, hoveredPath: action.payload };
    case "SET_ROOM_PATH":
      return { ...state, roomPath: action.payload };
    case "SET_FORM_MODAL":
      return { ...state, formModal: action.payload };
    case "SET_ROOM_ID":
      return { ...state, roomId: action.payload };
    default:
      return state;
  }
};
