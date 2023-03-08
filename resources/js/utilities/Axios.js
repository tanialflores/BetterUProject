import axios from "axios";
import Swal from 'sweetalert2'


export const postAxiosGuest = async (url, resThen, resErr, form) => {
    const server = process.env.MIX_APP_URL_API
    return axios.post(`${server}${url}`, form).then((res) => { resThen(res) }).catch((error) => { resErr(error) })
};

export const postAxios = async (url, resThen, resErr, form) => {
    const server = process.env.MIX_APP_URL_API
    const authToken = localStorage.getItem('authToken')
    const token = {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
    }
    return await axios.post(`${server}${url}`, form, { headers: token }).then((res) => { resThen(res) }).catch((error) => { resErr(error) })
};

export const postAxiosmulti = async (url, resThen, resErr, form) => {
    const server = process.env.MIX_APP_URL_API
    const authToken = localStorage.getItem('authToken')
    const token = {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'multipart/form-data'
    }
    return await axios.post(`${server}${url}`, form, { headers: token }).then((res) => { resThen(res) }).catch((error) => { resErr(error) })
};

// getAxiosGuest("api/home", setHome(), errorHome())
export const getAxiosGuest = async (url, resThen, resErr) => {
    const server = process.env.MIX_APP_URL_API
    return axios.get(`${server}${url}`).then((res) => { resThen(res) }).catch((error) => { resErr(error) })
};

export const getAxios = async (url, resThen, resErr) => {
    const server = process.env.MIX_APP_URL_API
    const authToken = localStorage.getItem('authToken')
    const token = {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
    }
    return await axios.get(`${server}${url}`, { headers: token }).then((res) => { resThen(res) }).catch((error) => { resErr(error) })
};

export const errorResponse = (res) => {
    if(typeof res.response.data.data) {
        Swal.fire({
            icon: 'warning',
            title: 'Ocurrió un error',
            html: res.response.data.data,
            showConfirmButton: true,
        })
    } else {
        if(res.response.data.status == 401){
            Swal.fire({
                icon: 'warning',
                title: 'Ocurrió un error',
                html: res.response.data.data+"<br> se cerrará su sesión",
                showConfirmButton: true,
            }).then(()=>{
                window.location.href = "/"
                localStorage.clear()
            })
        }else{
            Swal.fire({
                icon: 'warning',
                title: 'Ocurrió un error',
                html: res.response.data.data,
                showConfirmButton: true,
            })
        }

    }
}
