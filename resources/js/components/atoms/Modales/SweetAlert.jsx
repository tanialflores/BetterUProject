import React, { useState } from 'react';
import './SweetAlert.scss'
import Close from './icons/close.png'
import Question from './icons/questi.png'
import Success_png from './icons/succes.png'

import Swal from "sweetalert2";

export const InvalidAction = (time = 3000, title="Guardando") => {
    return new Promise(resolve => {
        Swal.fire({
            html: `
                <div class="InvalidAction">
                    <img class="cnt-img-g" src={../../../../..${Close}}/>
                    <div class="container-invalidAction">
                        <h1 class="title-inv">${title}</h1>
                        <p class="fw-light">Solo es posible cancelar en un lapso de 24h después de realizar el pedido</p>
                    </div>
                </div>  
                `,
            showConfirmButton: false,
            timer: time,

            willClose: () => {
                resolve(true)
            }
        });
    })
}

export const Success = (time = 3000, title="Guardando", description="Guardado") => {
    return new Promise(resolve => {
        Swal.fire({
            html: `
                <div class="Succes-s">
                    <img class="cnt-img-g" src={../../../../..${Success_png}}/>
                    <div class="container-invalidAction">
                        <h1 class="title-inv">${title}</h1>
                        <p class="fw-light">${description}</p>
                    </div>
                </div>  
                `,
            showConfirmButton: false,
            timer: time,

            willClose: () => {
                resolve(true)
            }
        });
    })
}

export const SuccesSimple = (time = 3000, title="Guardando") => {
    return new Promise(resolve => {
        Swal.fire({
            html: `
                <div class="Succes-s">
                    <img class="cnt-img-g" src={../../../../..${Success_png}}/>
                    <div class="container-invalidAction">
                        <h1 class="title-inv">${title}</h1>
                    </div>
                </div>  
                `,
            showConfirmButton: false,
            timer: time,

            willClose: () => {
                resolve(true)
            }
        });
    })
}



//<p class="fw-light">Tu pedido será cancelada y recibiras un reembolso a tu monedero alkimia de "$500.00"</p>
export const Affirmations = (title="Guardando", description="Guardar") => {
    return new Promise(resolve => {
        Swal.fire({
            html: `
                <div class="Affirmations">
                    <img class="cnt-img-g" src={../../../../..${Question}}/>
                    <div class="container-invalidAction">
                        <h1 class="title-inv">${title}</h1>
                        <p class="fw-light">${description}</p>
                    </div>
                </div>  
                `,
                showCancelButton: true,
                confirmButtonColor: '#df1683',
                cancelButtonColor: '#edebeb',
                confirmButtonText: 'Continuar',
                cancelButtonText: 'Cancelar',
                customClass: {
                    confirmButton: 'btn-confirm-class',
                    cancelButton: 'btn-cancel-class'
                },
        }).then((result) => {
            if(result.isConfirmed){
               resolve(true)
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                resolve(false)
            }
        })
    })
}