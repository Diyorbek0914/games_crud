import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

function ListRoute() {
  // 4 etap Context-ni ishlatish
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  //1. state yaratish, keladigan data uchun
  const [data, setData] = useState([]);

  //2. useEffect ichida axios get qilish
  useEffect(() => {
    axios
      .get("http://localhost:3000/games")
      .then(function (response) {
        //3. muvaffaqiyatli bolganda kelgan malumotni state-ga biriktirish
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="m-10 space-y-8 font-semibold">
      <h1 className="text-2xl text-green-800">List route {currentUser.name}</h1>
      <div className="flex space-x-5 text-white font-semibold">
        <Link
          className="bg-teal-500 hover:bg-teal-600 py-2 px-5"
          to="/games/create"
        >
          Create
        </Link>
      </div>
      <div className="grid grid-cols-4">
        {/*4. State ichida elementlarning har biri uchun map orqali component render qilish */}
        {data.map((game) => {
          return (
            <Card
              title={game.title}
              body={game.description}
              id={game.id}
              imgURL={game.imageURL}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListRoute;
