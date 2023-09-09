import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Content = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch('totalContent.json')
    .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
   
    <div>
      {details.map((detail) =>( <div key={detail.id} className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{detail.Heading} </h2>
        <p>{detail.quotes} </p>
        <div className="card-actions justify-end">
         <Link to="/customerInfo"><button className="btn btn-primary">{detail.button}</button></Link> 
        </div>
      </div>
    </div>))}
    </div>
  );
};

export default Content;
