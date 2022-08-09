import { Link } from "react-router-dom";

export const Hive = (props) => {
  let hiveId = props.hive._id;

  return (
    <div className="hive">
      <div className="hive-img">
        <img src="/pictures/hive2.jpg" alt="hive" />
      </div>
      <div className="hive-info">
        <h1>{props.hive.number}</h1>
        <p>
          <span>Location: </span>
          {props.hive.location}
        </p>
        <p>
          <span>Owner: </span>
          {props.hive._ownerId?.username}
        </p>
      </div>

      <Link to={`/hives/details/${hiveId}`} className="btn-details">
        Details
      </Link>
    </div>
  );
};
