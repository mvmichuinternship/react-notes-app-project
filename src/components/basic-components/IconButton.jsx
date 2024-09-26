import React from "react";
import cn from "clsx";

function IconButton({ isIcon, title, isDropdown, className, icon, onClick, isRightArrow }) {
  return (
    <div
      className={cn(
        `px-2 py-1 flex gap-x-1 text-center justify-center items-center`,
        className
      )}
      onClick={onClick}
    >
      {isIcon && (
          <img className="w-4" src={icon} alt="icon" />
      )}
      {title && <button >{title}</button>}
      {isDropdown && <img className="w-5" src="image.png" alt="" />}
      {isRightArrow && <img className="w-3 h-1" src="right-arrow.png" alt="" />}

    </div>
  );
}

export default IconButton;
