import { ProgressBar } from "primereact/progressbar";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Back from "../../../../components/atoms/Back/Back";
import AuthHeader from "../../../../components/organisms/AuthHeader/AuthHeader";
import "./Levels.scss";
import level from "../../../../assets/icons/level.png";
import IconChange from "../../../../assets/icons/IconChange.svg";
import CardLevel from "../../../../components/organisms/CardLevel/CardLevel";
import TableLevel from "../../../../components/molecules/TableLevel/TableLevel";
import level1 from "../../../../assets/icons/level1.png";
import level2 from "../../../../assets/icons/level2.png";
import level3 from "../../../../assets/icons/level3.png";
import level4 from "../../../../assets/icons/level4.png";
import level5 from "../../../../assets/icons/level5.png";
import level6 from "../../../../assets/icons/level6.png";
import level7 from "../../../../assets/icons/level7.png";
import Icono from "../../../../components/molecules/TableLevel/Icono/Icono";
import IconTable from "../../../../assets/icons/IconTable.svg";
import AuthFooter from "../../../../components/atoms/AuthFooter/AuthFooter";

const Levels = () => {
    const navigate = useNavigate();
    const [OpenOption, setOpenOption] = useState(true);
    const data = [
        {
            id: 1,
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.",
            points: "22 de 30 puntos"
        }
    ];
    const dataTmp = [
        {
            id: 1,
            icono: level1,
            level: "Nivel 1",
            requeriments: "Comprar 3 experiencias",
        },
        {
            id: 2,
            icono: level2,
            level: "Nivel 2",
            requeriments: "Comprar 3 experiencias",
        },
        {
            id: 3,
            icono: level3,
            level: "Nivel 3",
            requeriments: "Comprar 3 experiencias",
        },
        {
            id: 4,
            icono: level4,
            level: "Nivel 4",
            requeriments: "Comprar 3 experiencias",
        },
        {
            id: 5,
            icono: level5,
            level: "Nivel 5",
            requeriments: "Comprar 3 experiencias",
        },
        {
            id: 6,
            icono: level6,
            level: "Nivel 6",
            requeriments: "Comprar 3 experiencias",
        },
        {
            id: 7,
            icono: level7,
            level: "Nivel 7",
            requeriments: "Comprar 3 experiencias",
        },
    ];

    const columns = [
        {
            id: 1,
            field: "icono",
            header: "Icono",
            w: "162px",
            body: Icono,
        },
        {
            id: 2,
            field: "level",
            header: "Nivel",
            w: "187px",
        },
        {
            id: 3,
            field: "requeriments",
            header: "Requerimientos",
            w: "187px",
        },
    ];

    return(
        <>
        <AuthHeader/>
        <div className="AuthView">
            <div className="Levels">
                <div className="backColor">
                    <div className="backWhite"></div>
                </div>
                <div className="TitleLevel">
                    <Back
                    className="Return" onClick={()=> navigate("/profile")}/>
                    <p>Mi nivel</p>
                </div>
                <div className="ContainerLevel">
                {data.map((item)=>(
                    <>
                    
                    <div className="CardLevel">
                        <div className="ImageLevel">
                            <img src={level} className="Level"></img>
                        </div>
                        <div className="Level">
                            <div className="TextLevel">Nivel 1</div>
                        </div>
                        <div className="Details">
                            <div className="TitleDetails">Detalles:</div>
                            <div className="TextDetails">{item.details}</div>
                        </div>
                        <div className="LineWhite"></div>
                        <div className="ProgressBar">
                            <div className="TextPoints">{item.points}</div>
                            <ProgressBar
                                value={66.66}
                                className="barra"
                                showValue={false}
                            />
                        </div>
                    </div>
                    <div className="TitleLevels">
                        <div className="TextLevels">Niveles</div>
                        <div className="ButtonChange" onClick={() => setOpenOption(!OpenOption)}>
                            <img src={OpenOption ? IconChange : IconTable}></img>
                        </div>
                    </div>

                    {OpenOption ? 
                        <div className="ContainerCards">
                            <CardLevel/>
                        </div> 
                    :
                    <div className="ContainerTable">
                        <div className="TitleTable">Tabla de niveles</div>
                        <TableLevel
                        data={dataTmp}
                        columns={columns}
                        numberRows={7}
                        />
                    </div>
                    }
                    </>
                ))}
                </div>
            </div>
            <AuthFooter/>
        </div>
        </>
    );
};

export default Levels; 