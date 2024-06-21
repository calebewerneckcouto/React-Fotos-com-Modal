import { useState } from "react";
import { Photo } from "@/types/Photo";

type Props = {
  photo: Photo;
  onClick: () => void;
}

export const PhotItem = ({ photo, onClick }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const containerStyle = {
    cursor: "pointer",
    opacity: isHovered ? "1" : "0.8",
    transition: "opacity 0.3s"
  };

  const imageStyle = {
    borderRadius: "15px"
  };

  return (
    <div 
      onClick={onClick} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={containerStyle}
    >
      <img 
        src={`/assets/${photo.url}`} 
        alt="" 
        style={imageStyle} 
      />
    </div>
  );
}
