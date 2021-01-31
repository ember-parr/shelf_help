import React, { useEffect, useState, useContext } from "react";
// import PostList from "../components/PostList";
import { UserProfileContext } from "../providers/UserProfileProvider";

const Menu = () => {
  const [menues, setMenues] = useState([]);
  const { getToken } = useContext(UserProfileContext);

  //get all menu entries
  useEffect(() => {
    getToken().then((token) =>
      fetch("/api/post", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((menues) => {
          setMenues(menues);
        })
    );
  }, []);

  return (
    <>
    <h3>Your Menu</h3>
    <div className="row">
      <div className="col-lg-2 col-xs-12"></div>
      <div className="col-lg-10 col-xs-12">
        {/* <MenuList menues={Menues} /> */}
      </div>
    </div>
    </>
  );
};

export default Menu;