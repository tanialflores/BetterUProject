import React from "react";

import "./Search.scss";

import Lupa from "../../../assets/icons/lupa.svg";
import { Skeleton } from "primereact/skeleton";

const Search = ({
    placeholder,
    id,
    value,
    classSkeleton,
    className,
    skeleton,
    onBlur,
    onChange,
    onKeyDown,
}) => {
    return !skeleton ? (
        <div className={`Search ${className}`}>
            <div className="Search2">
                <input
                    type="text"
                    id={id}
                    className="search-input"
                    placeholder={placeholder}
                    onBlur={onBlur}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <div className="icon-ctn">
                    <img src={Lupa} alt="" className="icon-lup" />
                </div>
            </div>
        </div>
    ) :(
        <Skeleton width={width || "100%"} className={classSkeleton} height="34px" />
    );
};

export default Search;
