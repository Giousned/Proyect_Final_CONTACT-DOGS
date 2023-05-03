import React from "react";
import "./public-profile.css";
import { useNavigate } from "react-router-dom";

const PublicProfile = (props) => {
  const navigate = useNavigate();
  return (
    <div className="public-profile">
      <img
        src="https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg" //{props.userImage}
        className="card-img-top"
        alt="..." //{prop.userImage + props.UserName}
      />
      <div className="card-body">
        <h5 className="nombre">Claudia (aqui meto el props.userName)</h5>
        <h6 className="Localizacion">Sevilla (aqui el props.userLocation)</h6>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => navigate("/more-About")}
        >
          Más información
        </button>
      </div>
    </div>
  );
};
export default PublicProfile;