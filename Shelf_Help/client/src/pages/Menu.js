import React from "react";
import Calendar from "../components/Calendar";
import MealEntryCard from "../components/MealEntryCard";
// import PostList from "../components/PostList";
// import { UserProfileContext } from "../providers/UserProfileProvider";


// very similar to CommentList.js file in Tabloid as far as getting the menu items individually. 
const Menu = () => {
  // const [menues, setMenues] = useState([]);
  // const { getToken } = useContext(UserProfileContext);

  //get all menu entries
  // useEffect(() => {
  //   getToken().then((token) =>
  //     fetch("/api/post", {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((menues) => {
  //         setMenues(menues);
  //       })
  //   );
  // }, []);

  return (
    <>
    <h3>Your Menu</h3>
    <div className="row justify-content-center">
      <div className="col-lg-1 col-md-4 col-xs-12"></div>
      <div className="col-lg-10 col-xs-12">
        <Calendar />
      </div>
      <div className="col-lg-1 col-xs-12"></div>
      
    </div>
    </>
  );
};

export default Menu;