import { Link } from "react-router-dom";


function Card({ title, body, link,  id, imgURL }) {
  return (
    <Link to={`/Detail/${id}`}>
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg max-w-sm">
        <img src={imgURL} />
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          {title}
        </h5>
        <p className="text-gray-700 text-base mb-4">{body}</p>
        <Link to={`/Detail/${id}`} 
        className="bg-yellow-500 text-white font-semibold hover:bg-yellow-600 text-xs py-2.5 px-6 rounded">Read More</Link>
        <link />
      </div>
    </div>
    </Link>
  );
}

export default Card;
