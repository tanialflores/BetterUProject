import React, { useEffect, useState } from 'react'


//Styles
import "./ModalCupuos.scss"

const ModalCupuos = ({setValue, setValueInput}) => {

    const coupon = [
        {
            id: 1,
            title: "free all in the world",
            data: "21/03/2022",
            code: "fleexito2023"
        },
        {
            id: 2,
            title: "Bebída de cortesía",
            data: "21/03/2022",
            code: "fleexito2023"
        },
        {
            id: 3,
            title: "Bebída de cortesía",
            data: "21/03/2022",
            code: "fleexito2023"
        },
        {
            id: 4,
            title: "Bebída de cortesía",
            data: "21/03/2022",
            code: "fleexito2023"
        },
        {
            id: 5,
            title: "Bebída de cortesía",
            data: "21/03/2022",
            code: "fleexito2023"
        },
        {
            id: 6,
            title: "Bebída de cortesía",
            data: "21/03/2022",
            code: "fleexito2023"
        },
        {
            id: 7,
            title: "Bebída de cortesía",
            data: "21/03/2022",
            code: "fleexito2023"
        },
        {
            id: 8,
            title: "Bebída de cortesía",
            data: "21/03/2022",
            code: "fleexito2023"
        },
        {
            id: 9,
            title: "Bebída de cortesía",
            data: "21/03/2022",
            code: "fleexito2023"
        },
        {
            id: 10,
            title: "Bebída de cortesía",
            data: "21/03/2022",
            code: "fleexito2023"
        },

    ]

    const [findCupous, setFindCupous] = useState(coupon)
    const [findInput, setFindInput] = useState("")

    useEffect(() => {
        const copyItem = [...coupon]
        const array = copyItem.filter((item) => item.title.toLowerCase().includes(findInput.toLowerCase()))
    
        if(array.length === 0 || findInput === ""){
            return setFindCupous(coupon)
        }

        return setFindCupous(array)
    
    }, [findInput])

    const selectCoupos = (id, title) => {
        setFindInput(title)
    }
    
    const handleSelect = () => {
        setValueInput(findInput)
        setValue(false)
    }

  return (
    <div className='ModalCupuos'>
        <div className="card-modal">
            <label className="cloes" onClick={() => setValue(false)}>x</label>
            <label className="title-w">Cupónes</label>
            <div className="cnt-input">
                <input type="text" placeholder='Ingresa cupón' className='input-m' value={findInput} onChange={(e) => setFindInput(e.target.value)}/>
                <div className='btn-valid' onClick={() => handleSelect()}>Validar</div>
            </div>
            <div className='cnt-all'>
                <div className="cnt-listCupos">
                    {findCupous.map((item, idx) => (
                        <div className='coupon-outside' key={idx} onClick={() => selectCoupos(item.id, item.title)}>
                            <div className="coupon-inside">
                                <label className="secct1">{item.title}</label>
                                <label className="secct2">Vence el{" "}{item.data}</label>
                                <label className="secct3">{item.code}</label>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </div>
  )
}

export default ModalCupuos