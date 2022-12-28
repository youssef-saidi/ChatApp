import React, { useRef, useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import MsgEntred from "../components/MsgEntred";
import { useDispatch, useSelector } from "react-redux";
import SentMessage from "../components/SentMessage";
import axios from "axios";
import Cache from "../Storage/Storage";
import { setUser } from "../app/slices/conversationSlice";

const Conversation = () => {
  const [apparence, setapparence] = useState(false);
  const [websocket, setwebSocket] = useState();
  const dispatch = useDispatch();

  const [emoji, setemoji] = useState(false);
  const userInfo = useSelector(
    (state) => state.conversation.activeConversation
  );

  const message = useRef();
  const [data, setdata] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    message.current.value = message.current.value + emojiObject.emoji;
  };

  const fetchData = () => {
    let room = 0;
    let user2 = 0;
    if (userInfo.room != undefined) {
      room = userInfo.room;
    }
    if (userInfo.IdUser != undefined) {
      user2 = userInfo.IdUser;
    }
    console.log(`http://localhost:22551/ChatApp-war/GetConversation?id=${room}&user1=${Cache.get(
      "userId"
    )}&user2=${user2}`)
    return axios
      .post(
        `http://localhost:22551/ChatApp-war/GetConversation?id=${room}&user1=${Cache.get(
          "userId"
        )}&user2=${user2}`
      )
      .then((response) => {
        if (response.data === "]") {
          if (userInfo.room == undefined) {
            window.location.reload(false);
          }
        }
        if (
          response.data != null &&
          response.data != "]" &&
          response.data != ""
        ) {
          return setdata(response.data);
        } else {
          setdata(null);
        }
      })
      .catch((error) => {
        setdata(null);

        console.log(error);
      });
  };
fetchData();
  // ----------------------------------badel lahnee ----------------------------------
  useEffect(() => {
    console.log("----------------------------------------------------------------------")

console.log(userInfo.room)
    var webSocket = new WebSocket(
      "ws://localhost:22551/ChatApp-war/chat/" + userInfo.room
    );
    setwebSocket(webSocket);
    webSocket.onerror = function (event) {
      onError(event);
    };

    webSocket.onopen = function (event) {
      fetchData();

      onOpen(event);
    };

    webSocket.onmessage = function (event) {
      fetchData();

      onMessage(event);
    };
    function onMessage(event) {
      console.log("Received message: " + JSON.parse(event.data));
    }

    function onOpen(event) {
      console.log("Connection established");
    }

    function onError(event) {
      alert(event.data);
    }
  }, [userInfo.room]);
// ----------------------------------------------------------------


  const handleSubmit = (e) => {
    e.preventDefault();
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    var msg =
      '{"message":"' +
      message.current.value +
      '", "sender":"' +
      Cache.get("userId") +
      '", "convId":"' +
      userInfo.room +
      '", "received":"' +
      today.toUTCString() +
      '"}';
    websocket.send(msg);
    message.current.value = "";
  };

  return (
    <div className=" h-full py-4 relative z-10" onClick={fetchData}>
      <div className="mx-4 flex flex-row items-center z-50 place-content-between rounded-lg sticky top-0 border-b py-2 bg-white">
        <div className="flex flex-row items-center ">
          <img
            className="w-5 h-5 ml-3 md:hidden"
            src="/image/flecheRetour.png"
            alt=""
          />
          <img
            className="w-12 h-12 m-2 rounded-full"
            src="/images/noImage.jpg"
            alt=""
          />
          <h1 className="text-lg font-semibold text-neutral-900">
            {userInfo.userName}
          </h1>
        </div>
        <div className="flex flex-col z-50">
          <div
            onClick={() => {
              setapparence(!apparence);
            }}
            className="flex flex-row items-center justify-center mr-8 py-2 px-2 hover:bg-neutral-700 rounded-3xl cursor-pointer"
          >
            {/* <h3 className='text-md font-semibold'>Settings</h3> */}
            <img className="w-5 h-5" src="/images/settings.png" alt="" />
          </div>
        </div>
      </div>
      <div className="px-4 overflow-y-scroll h-screen md:h-full w-full   md:mb-32 pt-2 md:pb-52">
        {fetchData}
        {data != null && data != "" && data != "]" ? (
          data.map((dt) =>
            dt.sender != Cache.get("userId") ? (
              <MsgEntred info={userInfo} message={dt} />
            ) : (
              <SentMessage message={dt} />
            )
          )
        ) : (
          <span className="h-full w-full flex justify-center items-center text-2xl font-semibold font-cookie  text-white">
            NO message
          </span>
        )}
        {/* <MsgEntred info={userInfo} message={dataEntred} /> */}
        {/* <SentMessage message={dataEntred} /> */}
      </div>
      <form
        onSubmit={handleSubmit}
        className="sticky bottom-0 h-16 flex flex-row items-center bg-gradient  px-4"
      >
        <div className="flex flex-row  w-full">
          <input
            ref={message}
            className="w-full focus:outline-none focus:ring focus:ring-sky-500 bg-white py-2 pl-5 rounded-full h-11"
            type="text"
          />
          <div className="relative">
            <img
              onClick={() => {
                setemoji(!emoji);
              }}
              className="w-8 h-8 mx-5 mt-1 cursor-pointer relative top-1"
              src="/images/smile.png"
              alt=""
            />
            {emoji && (
              <div className="absolute right-0 bottom-12">
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </div>
        </div>
        <button className="hover:bg-neutral-100 p-2 rounded-full">
          <img className="w-8 h-8" src="/images/sendIcon.png" alt="" />
        </button>
      </form>
    </div>
  );
};
export default Conversation;
