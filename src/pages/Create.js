import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateRouter() {
  const navigate = useNavigate();

  const [titleinp, setTitleInp] = useState("");
  const [descinp, setDescInp] = useState("");
  const [imageinp, setImageInp] = useState("");
  const [developinp, setDevelopInp] = useState("");

  const ontitleinp = (e) => {
    setTitleInp(e.target.value);
  };
  const ondescinp = (e) => {
    setDescInp(e.target.value);
  };
  const onimageinp = (e) => {
    setImageInp(e.target.value);
  };
  const ondevelopinp = (e) => {
    setDevelopInp(e.target.value);
  };

  const onCreate = (e) => {
    e.preventDefault();
    console.log(titleinp, descinp, imageinp, developinp);

    axios
      .post("http://localhost:3000/games", {
        title: titleinp.trim(),
        description: descinp.trim(),
        imageURL: imageinp.trim(),
        developer: developinp.trim(),
      })
      .then(function () {
      return navigate(`/`);
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
        className="max-w-2xl mx-auto p-10 text-lg font-semibold rounded-lg border border-violet-500 text-violet-500 shadow-violet-500 shadow-lg"
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
          Image{" "}
          <input
            onChange={onimageinp}
            value={imageinp}
            className="rounded w-full shadow"
          />
        </label>
        <label className="">
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
            value="Submit"
            onClick={onCreate}
            className="px-8 py-1.5 my-8 border-2 text-white bg-violet-500 hover:bg-violet-700 focus:bg-violet-900"
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

export default CreateRouter;
