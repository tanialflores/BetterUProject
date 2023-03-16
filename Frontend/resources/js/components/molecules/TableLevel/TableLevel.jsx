import React from "react";
import "./TableLevel.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Skeleton } from "primereact/skeleton";

const TableLevel = ({
    onRowReorder,
    data,
    columns,
    numberRows,
    header = "",
    skeleton = false,

    paginator = true,
    classTable = "",
    emptyMessage="No se encontraron resultados"
}) => {
    return(
        <div className="t_bot">
        <DataTable
            onRowReorder={onRowReorder}
            value={data}
            responsiveLayout="scroll"
            className={classTable}
            stripedRows
            emptyMessage={emptyMessage}
            header={header}
            rows={numberRows ? parseInt(numberRows) : 11}
            scrollable
            scrollHeight={numberRows > 12 ? "600px" : ""}
        >
            {columns?.map((e) => (
                <Column
                    // sortable
                    rowReorder={e?.reorder}
                    key={e?.id}
                    field={e?.field}
                    header={
                        !skeleton ? (
                            e?.header
                        ) : (
                            <Skeleton width={e.w} height="15px" />
                        )
                    }
                    body={
                        !skeleton ? (
                            e?.body ? (
                                e?.body
                            ) : (
                                ""
                            )
                        ) : (
                            <Skeleton width="80%" height="25px" />
                        )
                    }
                    className={`columnStyle ${e?.bold && "-fw500"}`}
                    style={{
                        minWidth: `${e.w}`,
                        width: `${e.w}`,
                        justifyContent: "center",
                        fontFamily: "Metropolis",
                    }}
                    frozen={e.frozen}
                ></Column>
            ))}
        </DataTable>
    </div>
    );
};

export default TableLevel;