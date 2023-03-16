import "./Select.scss";

import { Dropdown } from "primereact/dropdown";
import { Skeleton } from "primereact/skeleton";

export default function ({
    value,
    id,
    onChange,
    options,
    optionLabel='text',
    classNameSkeleton,
    showSelectall,
    selectionlimit,
    selectall,
    placeholder,
    width,
    skeleton = false,
    className,
    title,
    classNameSelect
}) {
    return !skeleton ? (
        <div className={`Select ${className}`}>
            {title && <p className="title-Select">{title}</p>}
            <div className="SelectWrapper">
                <div className="box-shadow">
                    <Dropdown
                        id={id}
                        className={`Select ${classNameSelect}`}
                        value={value}
                        placeholder={placeholder}
                        selectall={selectall}
                        showselectall={showSelectall}
                        selectionlimit={selectionlimit}
                        options={options}
                        optionLabel={optionLabel}
                        onChange={onChange}
                        filter
                        // filterTemplate={filterTemplate}
                        emptyFilterMessage="Sin resultados"
                    />
                </div>
            </div>
        </div>
    ) : (
        <Skeleton width={width || "100%"} className={classNameSkeleton} height="48px" />
    );
}
