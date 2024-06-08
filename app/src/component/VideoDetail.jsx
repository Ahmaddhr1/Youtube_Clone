import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchVdDetails } from "../utils/fetchfromapi";

const VideoDetail = () => {
  const { id } = useParams();
  useEffect(() => {
    fetchVdDetails("videos?part=contentDetails&id=" + id).then((data) => {
      console.log(data);
    }).catch((err) => { 
      alert("Error fetching"+err.message);
    })
  }, []);
  return <div>VideoDetail</div>;
};

export default VideoDetail;
