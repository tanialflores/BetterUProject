import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AuthFooter from '../../../../components/atoms/AuthFooter/AuthFooter'
import Back from '../../../../components/atoms/Back/Back'
import CalendarInput from '../../../../components/molecules/CalendarInput/CalendarInput'
import AuthHeader from '../../../../components/organisms/AuthHeader/AuthHeader'

//Styles
import "./Reschedule.scss"

//Assets
import Left from './icon/leftpor.svg'
import Rigth from './icon/rigthpor.svg'
import Cuponesclub from './icon/cuponesclub.png'
import Button from '../../../../components/atoms/Button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import ModalCupuos from './ModalCupuos/ModalCupuos'
import { errorResponse, getAxiosGuest, postAxiosGuest } from '../../../../utilities/Axios'

const Reschedule = () => {
    const [watchCoupon, setWatchCoupon] = useState(false)
    const { id, type } = useParams()
    const [valueInput, setValueInput] = useState("")

    const navigate = useNavigate()
    const [date, setDate] = useState((new Date()).toLocaleDateString('en-GB').replaceAll("/","-"))
    const [count, setCount] = useState(0);
    const [schedule, setSchedule] = useState([])
    const [maxSpace, setMaxSpace] = useState(0)
    const [timeSelected, setTimeSelected] = useState()
    const [changeInput, setChangeInput] = useState(false)

    const [validated1, useValidated1] = useState(false)
    const [validated2, useValidated2] = useState(false)
    const [validated3, useValidated3] = useState(false)
    const [validated4, useValidated4] = useState(false)

    const incrementCount = () => {
        if(count < maxSpace){
            setCount(prevCount => prevCount + 1);
        }
    };

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const getSchedule = async() =>{
        
        const formData = new FormData()
        formData.append("uuid", id)
        formData.append("date", date)
        const resThen = (res) =>{
            setSchedule(res.data.data.scheduleds)
            setMaxSpace(res.data.data.occupancy)
            setCount(0)
            setSateSelected()
            setTimeSelected()
        }
        postAxiosGuest("api/v1/mobile/experiences/schedule", resThen, errorResponse, formData)
        
    }

    const sendData = async() =>{
        if(timeSelected && date && count>0 && $("#is_checked").is(":checked")){
            localStorage.setItem('date', date)
            localStorage.setItem('time_start', timeSelected.timeStart)
            localStorage.setItem('time_end', timeSelected.timeEnd)
            localStorage.setItem('person_capacity', count)
            localStorage.setItem('is_checked', $("#is_checked").is(":checked") )
        }else{
            if(!date){
                useValidated1(true)
                console.log("ted1")
            }
            if(!timeSelected){
                useValidated2(true)
                console.log("ted2")
            }
            if(!count>0){
                useValidated3(true)
                console.log("ted3")
            }
            if(!$("#is_checked").is(":checked")){
                useValidated4(true)
                console.log("ted4")
            }
        }
    }
    console.log("$().is()",$("#is_checked").is(":checked"))
    if(date && validated1){
        useValidated1(false)
    }
    if(timeSelected && validated2){
        useValidated2(false)
    }
    if(count>0 && validated3){
        useValidated3(false)
    }
    if($("#is_checked").is(":checked") && validated4){
        useValidated4(false)
    }

    useEffect(() => {
        const parentElement = document.querySelector('.p-datepicker-group');
        const newElement = document.createElement('div');
        newElement.innerText = 'Selecciona una fecha';
        newElement.classList.add("p-pickText")

        // insertar el nuevo elemento en la segunda posición
        parentElement.insertBefore(newElement, parentElement.children[1]);
    }, []);
    
    useEffect(() => {
        if(date){
            getSchedule()
        }
    }, [date]);

    return (
        <>
          
            <div className='AuthView'>
                <div className='Reschedule'>
                    <div className="bg-vg">
                        <div className="bg-white1"></div>
                    </div>
                    <div className='secctTitle'>
                        <div className='btn-retuen'><Back onClick={() => navigate(`/purchases`)} /></div>
                        Reservar
                    </div>
                    <div className='Block-Parent'>
                        <div className="card-white">
                            <div className="cnt-seccts">
                                <div className="secct1">
                                    {validated1 && <div className='colorRed'>Selecciona una fecha</div>}
                                    <CalendarInput className={"secct1-calendar"} onChange={(e)=>{setDate((new Date(e)).toLocaleDateString('en-GB').replaceAll("/","-"))}}/>
                                </div>
                                <div className="secct2">
                                    <div className="secct2-a">
                                        {validated2 ? <span className='colorRed'>Horarios disponibles</span>: "Horarios disponibles"}
                                        {schedule?.length > 0 
                                            ?
                                            <div className='dateCont'>
                                                {schedule.map((time)=>{
                                                    return(<div className={`blueDate ${timeSelected && timeSelected!=time && "noBlue"}`} onClick={()=>{setTimeSelected(time)}}>{time.timeStart} - {time.timeEnd}</div>)
                                                })}
                                                {/* <div className={`blueDate ${timeSelected && timeSelected!=2 && "noBlue"}`} onClick={()=>{setTimeSelected(2)}}>23:00 - 02:00</div> */}
                                            </div>
                                            :
                                            <label className="pick-2">Debes seleccionar una fecha</label>
                                        }
                                    </div>
                                    <div className="secct2-b">
                                        {validated3 ? <span className='colorRed'>Cupo para:</span>: "Cupo para:"}
                                        <div className="count-coup">
                                            <button className='btn-count' onClick={decrementCount}>
                                                <img src={Left} alt="" />
                                            </button>
                                            <label className="count-num">{count}</label>
                                            <button className='btn-count' onClick={incrementCount}>
                                                <img src={Rigth} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="secct2-c">
                                        <div className="card-coupo" onClick={() => setWatchCoupon(true)}>
                                            <div className='cnt-cop'>
                                                <img src={Cuponesclub} alt="" className='cop-p' />
                                            </div>
                                            Cupón de club alkimia:
                                            <label className="nameCop">{valueInput}</label>
                                        </div>
                                        {validated4 && <div className='colorRed'>Debes de aceptar los terminos y condiciones</div>}
                                        <div className="cnt-check">
                                            <input type="checkbox" id="is_checked" className="input-check" onClick={()=>{setChangeInput(!changeInput)}}/>
                                            <div className='cnt-text'>
                                                Esta experiencia está ligada a cambios climaticos.
                                                He leído y aceptado los <span className='term-cod'>Términos y condiciones</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="secct2-d">
                                        <Button className={"white"} btnTitle="Cancelar" onClick={() => navigate("/purchases")} />
                                        <Button className={"degradado"} btnTitle="Reservar" onClick={()=>{sendData()}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {watchCoupon && <ModalCupuos setValue={setWatchCoupon} setValueInput={setValueInput} />}
                <AuthFooter />
            </div>
        </>
    )
}

export default Reschedule