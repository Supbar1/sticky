import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import NotFound from "./components/navigation/navbar/NotFound";
import Community from "./components/community/Community";
import Products from "./components/products/Products";
import Main from "./components/main/Main";
import Navbar from "./components/navigation/navbar/Navbar";
import "./style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login";
import ShoppingCartProvider from "./components/products/ShopContext";
import Footer from "./components/navigation/footer/Footer";

const Scroll = styled.div`
  height: 100vh;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 100vw;
    width: 15px;
    height: 15px;
    background: var(--clr-accent-300);
  }
`;

// const fetchRandomData = async () => {
//   return axios
//     .get("https:/randomuser.me/api")
//     .then(({ data }) => {
//       const user = data.results.name;
//       console.log(user);
//       return data;
//       // return JSON.stringify(data, null, 2);
//       // return setRandomUserData(data);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };
// const getFullUserName = (userInfo) => {
//   const {
//     name: { first, last },
//   } = userInfo;
//   console.log(first);
//   return `${first} ${last}`;
// };
// const App = () => {
//   const [randomUserData, setRandomUserData] = useState("");
//   const [userInfos, setUserInfos] = useState([]);

//   useEffect(() => {
//     fetchRandomData().then((randomData) => {
//       setRandomUserData(JSON.stringify(randomData, null, 2) || "No user Data");
//       setUserInfos(randomData.results);
//     });
//   }, []);
//   return (
//     <React.Fragment>
//       <pre>
//         <button onClick={() => console.log(userInfos)}>
//           Fetch random data
//         </button>{" "}
//         {userInfos.map((userInfo, index) => (
//           <>
//             <p key={index}>{getFullUserName(userInfo)}</p>
//             <img src={userInfo.picture.thumbnail} alt="sorry" />
//           </>
//         ))}
//       </pre>

/* {randomUserData} */
const App = () => (
  <React.Fragment>
    <ShoppingCartProvider>
      <ToastContainer />
      <Scroll>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Scroll>
    </ShoppingCartProvider>
  </React.Fragment>
);

export default App;
