import { Skeleton } from "primereact/skeleton";
import React from "react";

import "./TextArea.scss";

const TextArea = ({
    title,
    placeholder,
    id,
    name,
    onChange,
    className,
    skeleton,
    width
}) => {
    return ! skeleton ? (
        <div>
            {title && <p className="title-area">{title}</p>}
            <div className={`container-textarea ${className}`}>
                <textarea
                    className="textarea"
                    placeholder={placeholder}
                    id={id}
                    name={name}
                    onChange={onChange}
                />
            </div>
        </div>
    ): (
        <Skeleton width={width || "100%"} className={className} height="150px" />
    );
};

export default TextArea;
