import "./CardMap.scss";
import copyIcon from "../mapsImg/copyIcon.svg";
import linkIcon from "../mapsImg/linkIcon.svg";

const CardMap = ({
    price,
    imgCard,
    colony,
    municipality,
    location,
    soil,
    date,
    invoice,
    proficient,
}) => {
    return (
        <div className="infoMap">
            <img className="imgMain" src={imgCard} />
            <div className="iconLink">
                <img src={linkIcon} />
            </div>

            <div className="code">
                <p>
                    Valor por m2: <span>{price}</span>
                </p>
                <img src={copyIcon} />
            </div>
            <div className="data">
                <p>
                    Colonia: <strong>{colony}</strong>
                </p>
                <p>
                    Municipio: <strong>{municipality}</strong>
                </p>
                <p>
                    Ubicación: <strong>{location}</strong>
                </p>
                <p>
                    Uso de suelo: <strong>{soil}</strong>
                </p>
                <p>
                    Fecha de valuación: <strong>{date}</strong>
                </p>
                <p>
                    Folio de avalúo: <strong>{invoice}</strong>
                </p>
                <p>
                    Perito: <strong>{proficient}</strong>
                </p>
            </div>
        </div>
    );
};

export default CardMap;
