import { Skeleton } from "primereact/skeleton";
import React from "react";

import "./Input.scss"

const Input = ({ title, type, placeholder, id, name, onChange, skeleton, width, className, classNameSkeleton, value }) => {
  return !skeleton ? (
    <div className={className}>
      <p className="title">{title}</p>
      <div className="container-input">
        <input
          type={type}
          className="input"
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  ):(
    <Skeleton width={width || "100%"} className={classNameSkeleton} height="48px" />
  )
};

export default Input;
