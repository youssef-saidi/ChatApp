import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../app/slices/conversationSlice";
import Contact from "../components/Contact";
import Cache from "../Storage/Storage";

const Contacts = () => {
  const dispatch = useDispatch();

  const [Search, setSearch] = useState("");
  const users = useSelector((state) => state.conversation.users);
  console.log(users)
  const userContact =users!="]" && users.map((item, key) => {
    if (item.IdUser != Cache.get("userId")) {
      return <Contact index={key} userInfo={item} />;
    }
  });

  const handleSearch = () => {
    if (Search != "") {

      return axios
        .post(`http://localhost:22551/ChatApp-war/Recherche?Search=${Search}`)
        .then((response) => {
        
          if (response.data) {
            dispatch(setUser(response.data));


            //     return navigate("/");
          } else {
            //   errors = { ...errors, error: "Your Username Or password is Incorrect" };
            return console.log("Your Username Or password is Incorrect");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return axios
        .post(
          `http://localhost:22551/ChatApp-war/GetFriends?id=${Cache.get("userId")}`
        )
        .then((response) => {

          if (response.data) {
            dispatch(setUser(response.data));


            //     return navigate("/");
          } else {
            //   errors = { ...errors, error: "Your Username Or password is Incorrect" };
            return console.log("no friends");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="h-full pt-2  rounded-tl-4xl pt-6">
      <div className="relative px-4 pb-3">
        <input
          placeholder="Search..."
          className="border border-slate-500 rounded w-full h-11 pl-3 pr-9"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          className="absolute top-3 right-8 w-6 h-6 cursor-pointer"
          src="/images/searchIcon.png"
          alt=""
          srcSet=""
          onClick={handleSearch}
        />
      </div>
      <div className="divide-y overflow-y-scroll h-full pb-32 md:pb-28 px-2">
        {userContact}
      </div>
    </div>
  );
};
export default Contacts;
