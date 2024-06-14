import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchfromapi";

const VideoDetail = () => {
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI("videos?part=contentDetails&id=" + id).then((data) => {
      console.log(data.items);
    }).catch((err) => { 
      alert("Error fetching"+err.message);
    })
  }, []);
  return <div>VideoDetail</div>;
};

export default VideoDetail;
