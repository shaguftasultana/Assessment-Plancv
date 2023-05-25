import React from "react";

const InfoModal = ({ close, roomId, roomData, updateData }) => {
  const [roomNumber, setRoomNumber] = React.useState("");
  const [roomUsage, setRoomUsage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    roomData?.forEach((room) => {
      if (room.path === roomId)
        updateData({
          ...room,
          usage: roomUsage,
          roomNo: roomNumber,
        });
      close();
    });
  };

  return (
    <div className="fixed w-full h-[100vh]  bg-[#0c0c0c7a] z-100 flex items-center justify-center">
      <div className="bg-white p-8 text-black w-[50%] m-auto flex flex-col gap-4 rounded-lg">
        <h1 className="text-black text-2xl">DETAILS FORM</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Room Number
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-1"
              required
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Room Usage
            </label>

            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-1"
              required
              value={roomUsage}
              onChange={(e) => setRoomUsage(e.target.value)}
            />
          </div>
          <div className="flex gap-2 justify-end">
            <button
              onClick={close}
              type="button"
              className="text-white bg-gray-500 hover:bg-gray-700 font-medium rounded-lg text-sm p-2  w-[7rem]"
            >
              Close
            </button>
            <button
              type="submit"
              className="text-white bg-gray-500 hover:bg-gray-700 font-medium rounded-lg text-sm py-2 px-4 w-[7rem]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfoModal;
