import React from 'react'
import AuthHeader from '../../../../components/organisms/AuthHeader/AuthHeader'


//Styles 🦚
import "./RateExperience.scss"

//Assets
import Zas9 from "../../../../assets/Auth/zas9.png";
import ReactStars from '../../../../components/atoms/ReactStars/ReactStars';
import TextArea from '../../../../components/atoms/TeaxtArea/TextArea';
import Button from '../../../../components/atoms/Button/Button';
import AuthFooter from '../../../../components/atoms/AuthFooter/AuthFooter';
import { Skeleton } from 'primereact/skeleton';

const RateExperienceSkeleton = () => {
  return (
    <>
      
            <div className="AuthView">
                <div className="RateExperience">
                    <div className="bg-vg">
                      <div className="bg-white1"></div>
                    </div>
                    <div className="cardBodyrate">
                        <div className="bg-cardWhite-rate">
                            <div className="imgTarget">
                                <div className="cnt-des">
                                    <div className="cnt-img">
                                        <Skeleton width='100%' height='100%'/>
                                    </div>
                                    <Skeleton width='150px' height='15px'/>
                                </div>
                                <div className="cnt-rate">
                                    <Skeleton width='100px' height='10px'/>
                                    <div style={{display: "flex", gap: 10}}>
                                        {[...Array(5)].map((_, i) => (
                                            <Skeleton width='42px' height='42px'/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="textArea-l">
                                <Skeleton width='622px' height='178px'/>
                                <div className="cnt-btns">
                                    <Skeleton width='100%' height='40px'/>
                                    <Skeleton width='100%' height='40px'/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <AuthFooter />
            </div>
    </>
  )
}

export default RateExperienceSkeleton