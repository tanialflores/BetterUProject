import React, { useState } from "react";
import $ from "jquery";

//Assets ✔
import pencilWhite from "../../../assets/icons/lapiz.svg";

//Styles 👌
import "./ChargeImg.scss";

const ChargeImg = ({
    defaultImg,
    edit = false,
    width,
    height,
    borderRadius,
    className,
    activeCard = false,
    activePencil = false,
    classNameBgPencil,
    classNameWidthPencil,
    id="uploadImageS1",
    name="uploadImageS1",
    setBackgroundimg
    
}) => {
    //necesary for it word
    const [imgSave, setImgSave] = useState(false);
    const [imgLogo, setImgLogo] = useState(false);
    const [img, setImg] = useState("");

    function changeFileLogo() {
        var fileInput = document.getElementById(id);

        var filePath = fileInput.value;
        if (filePath === "") {
            setImgSave(false);
            return false;
        }
        var allowedExtensions = /(.png|.jpg|.jpeg)$/i;
        if (!allowedExtensions.exec(filePath)) {
            fileInput.value = "";
            return false;
        } else {
            if (fileInput.files && fileInput.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    setImgLogo(fileInput.files[0]);
                    setImgSave(URL.createObjectURL(fileInput.files[0]));
                    setBackgroundimg(URL.createObjectURL(fileInput.files[0]))
                };
                reader.readAsDataURL(fileInput.files[0]);
            }
        }
    }

    function activateInput() {
        $("input[name='"+name+"']").trigger("click");
    }

    return (
        <>
            <div>
                <input
                    type="file"
                    id={id}
                    name={name}
                    style={{ display: "none" }}
                    onChange={(e) => {
                        changeFileLogo();
                    }}
                />

                <div
                    className={`profile ${className}`}
                    style={{
                        backgroundImage: `url(${
                            imgSave ? imgSave : defaultImg
                        })`,
                        backgroundPosition: "center",
                        backgroundSize: imgSave
                            ? "cover"
                            : edit
                            ? "cover"
                            : "auto",
                        backgroundRepeat: "no-repeat",
                    }}
                    onClick={activeCard == true ? activateInput :null}
                >
                    {
                        activePencil && (
                            <div className={`profile-pencil ${classNameBgPencil}`} onClick={activateInput}>
                                <img
                                    src={pencilWhite}
                                    alt="pencil"
                                    className={classNameWidthPencil}
                                    
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default ChargeImg;