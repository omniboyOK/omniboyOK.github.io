import React from "react";
import { icons } from "../utils/iconLoader";

interface IconButtonProps {
  iconName?: keyof typeof icons;
  onClick?: () => void;
  label?: string;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  onClick,
  label,
  className = "",
}) => {
  const IconComponent = iconName ? icons[iconName] : null;

  return (
    <button className={`icon-button ${className}`} onClick={onClick}>
      <div className="icon-button-container">
        <div className="icon-container">
      {/*     <img
            src={IconComponent}
            alt="Button background"
            className="button-background"
            width={40}
            height={40}
          /> */}
        </div>
        {/*  {IconComponent && (
          <div className="icon-container">
            <IconComponent />
          </div>
        )} */}
        {label && <div className="button-label">{label}</div>}
      </div>
    </button>
  );
};

export default IconButton;
