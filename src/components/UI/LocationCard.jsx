import React from "react";
import { motion } from "framer-motion";
import "../../styles/location.css";

function LocationCard({ item }) {
  return (
    <motion.div whileHover={{ scale: 1.01 }} >
        <div className="loca-img">
        <img  src={item.imgURL} alt="" />
        </div>
        <div className="loca-content border border-dark p-2">
            <span className="loca-title fw-bold">
                {item.title}
            </span>
            <br></br>
            <span>
                {item.date}
            </span>
        </div>
    </motion.div>
  );
}

export default LocationCard;
