import { useParams, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

export default function DetailRoute() {
  const navigate = useNavigate();
  let params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(
      () =>
        axios
          .get(`http://localhost:3000/games/${params.id}`)
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => console.log(err)),
      1000
    );
  }, []);
  // console.log(data);

  const onDelete = () => {
    axios
      .delete(`http://localhost:3000/games/${params.id}`)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        alert("Iltimos keyinroq urinib ko'rong");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen font-semibold">
      {data.length == 0 ?
      <div className="flex justify-center items-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="indigo"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div> : <div className="w-full md:w-1/2 xl:w-1/3 p-10 border border-blue-700 shadow-lg shadow-blue-300 rounded-lg">
        <div className="bg-white rounded-lg overflow-hidden">
          <img src={data.imageURL} alt="image" className="w-full" />
          <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
            <h1 className="text-2xl">{data.title}</h1>
            <p className="text-base text-body-color leading-relaxed mb-10">
              {data.description}
            </p>
            <div className="flex justify-around text-white">
              <Link
                to={`/games/update/${data.id}`}
                className="
                       inline-block
                       py-2
                       px-7
                       border border-blue-700
                       rounded-full
                       text-base text-body-color
                       font-medium
                       hover:border-primary hover:bg-primary text-blue-700 hover:text-white hover:bg-blue-800 focus:bg-blue-700
                       transition"
              >
                UPDATE
              </Link>
              <button
                onClick={onDelete}
                className="inline-block
                       py-2
                       px-7
                       border border-red-700
                       rounded-full
                       text-base text-body-color
                       font-medium
                       hover:border-primary hover:bg-primary text-red-700 hover:text-white hover:bg-red-800
                       transition"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    }
      
    </div>
  );
}
