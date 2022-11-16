import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

function UpdateRoute() {
  const [titleinp, setTitleInp] = useState("");
  const [descinp, setDescInp] = useState("");
  const [relaseinp, setRelaseInp] = useState("");
  const [imageinp, setImageInp] = useState("");
  const [developinp, setDevelopInp] = useState("");

  const navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/games/${params.id}`)
      .then((res) => {
        setTitleInp(res.data.title);
        setDescInp(res.data.description);
        setRelaseInp(res.data.relaseinp);
        setImageInp(res.data.imageURL);
        setDevelopInp(res.data.developer);
        // setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(data);

  const ontitleinp = (e) => {
    setTitleInp(e.target.value);
  };
  const ondescinp = (e) => {
    setDescInp(e.target.value);
  };
  const onrelaseinp = (e) => {
    setRelaseInp(e.target.value);
  };
  const onimageinp = (e) => {
    setImageInp(e.target.value);
  };
  const ondevelopinp = (e) => {
    setDevelopInp(e.target.value);
  };

  const onCreate = (e) => {
    e.preventDefault();
    console.log(titleinp, descinp, relaseinp, imageinp, developinp);

    axios
      .put(`http://localhost:3000/games/${params.id}`, {
        title: titleinp.trim(),
        description: descinp.trim(),
        "release-date": relaseinp.trim(),
        imageURL: imageinp.trim(),
        developer: developinp.trim(),
      })
      .then(function () {
        return navigate(`/Detail/${params.id}`);
      })
      .catch(function () {
        toast(
          "Error while making the request,please try again or contact the customer support"
        );
      });
  };

  return (
    <div className="h-screen flex items-center">
      <form
        onSubmit={onCreate}
        className="max-w-2xl mx-auto p-10 text-lg font-semibold border text-green-600 border-green-500 shadow-green-500 rounded-lg shadow-lg"
      >
        <label>
          Title{" "}
          <input
            onChange={ontitleinp}
            value={titleinp}
            className="rounded w-full shadow"
          />
        </label>
        <label>
          Description{" "}
          <input
            onChange={ondescinp}
            value={descinp}
            className="rounded w-full shadow"
          />
        </label>
        <label>
          Release-date{" "}
          <input
            onChange={onrelaseinp}
            value={relaseinp}
            className="rounded w-full shadow"
          />
        </label>
        <label>
          Image{" "}
          <input
            onChange={onimageinp}
            value={imageinp}
            className="rounded w-full shadow"
          />
        </label>
        <label>
          Developer{" "}
          <input
            onChange={ondevelopinp}
            value={developinp}
            className="rounded w-full shadow"
          />
        </label>
        <label>
          <input
            type="submit"
            value="UPDATE"
            onClick={onCreate}
            className="px-8 py-1.5 my-8 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:bg-green-800"
          />
        </label>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default UpdateRoute;
