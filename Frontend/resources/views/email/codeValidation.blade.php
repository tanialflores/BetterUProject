<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Metrophobic&display=swap" rel="stylesheet">


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@700&family=Open+Sans:wght@300;400;500;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">


    <title>Email</title>
</head>
<body style="height: 1003px;">
    <center>
        <div style='width: 760px; height: 719px; display: flex;'>
             <table style='display:flex; width: 751px; height: 723px;border-radius: 5px; margin-top: 2px;'>
                <tr  style='display:flex;
                            justify-content: center;
                            align-items: center;
                            margin-bottom:20px;
                            width: 750px;
                            height: 298px;
                            background-image: url("{{asset('images/horizonte.svg')}}");
                            background-repeat: no-repeat;
                            background-size: cover;'
                >
                    <div style='position: absolute;
                                background: linear-gradient(0deg, #ffffff 5%, rgba(255, 255, 255, 0) 100% );
                                width: 750px;
                                height: 305px;'
                    >
                        <td colspan="3" style='display:flex; z-index: 1;'>
                            <div class="center">
                                <img src="{{asset('images/logob.png')}}" style=' width: 160px; height: 148.12px'/>
                            </div>
                        </td>
                    </div>
                </tr>

                <tr style='display:flex; margin-bottom:10px; margin-top: 43px'>
                    <td>

                        <div  style='height: 31px;
                        margin-left: 74px;
                        font-size: 18.4px;
                        font-family: "Jost";
                        font-weight: bold;'>¡Bienvenido alkimista!</div>

                    </td>
                </tr>
                <tr style='display:flex;
                        justify-content: center;
                        height: 210px;'>
                    <td>
                       <div style='display: flex;
                       height: 300px;
                       justify-content: center;
                       margin-right: 55px;'>
                                <div style='width: 546px;
                                height: 198px;
                                font-family: "Metropolis";
                                font-size: 14.72px;
                                color: #000000;
                                text-decoration: none solid rgb(0, 0, 0);
                                text-align: justify;'>
                                    Hola <b>Carlos Mauricio</b>
                                    <br />
                                    <span>
                                    Ya casi formas parte de nuestra comunidad, para completar el registro solo tienes que ingresar el siguiente código en nuestra web:
                                    </span>
                                    <p class="code" style='margin: 22px 0 48px 0;
                                    font-size: 23px;
                                    font-family: "Metropolis";
                                    color: #df1683;
                                    margin-top: 40px;
                                    font-weight: 700;
                                    cursor: pointer;'>05254</p>
                                </div>
                        </div>
                    </td>
                </tr>

                <tr style='display:flex; justify-content:center;'>
                    <td>
                        <div style='margin-left: -1px;
                        display:flex;
                        width: 100%;
                        justify-content:center;'>
                                <div style='width: 750px;
                                display:grid;
                                grid-template-columns: repeat(2,1fr);
                                height: 126px;
                                border-radius: 5px;
                                background-image: linear-gradient(120deg, #3a8dde 3%, #8331a7 47%, #df1683 100% );'>
                                    <div>
                                        <div class="footer-logo-info" style='margin-top: 30px;'>
                                            <p class="footer-logo-text" style=" font-weight: 700; margin-left: 32px; font-family: 'Metropolis';
                                            font-size: 14px;
                                            color: #ffffff;
                                            text-decoration: none solid rgb(255, 255, 255);">Departamento comercial</p>
                                            <p class="footer-logo-text" style="margin-left: 32px; font-family: 'Metropolis';
                                            font-size: 14px;
                                            color: #ffffff;
                                            text-decoration: none solid rgb(255, 255, 255);">soporteparaalkimistas@mail.com</p>
                                        </div>
                                    </div>
                                    <div  style='display: flex;
                                            flex-direction: column;
                                            align-content: center;
                                            justify-content: flex-start;
                                            align-items: flex-end;
                                            margin-top: 21px;
                                            margin-right: 32.2px;'>
                                        <div  style='display:flex;
                                                justify-content: center;
                                                align-items: center;
                                                flex-direction: column;
                                                gap: 10px;'>
                                            <img src="{{asset('images/logo.png')}}"  style=' width: 57px; height: 41.4px;'/>
                                            <div>
                                                <img src="{{asset('images/facebook.svg')}}" style='width: 22px;height: 22px;background: transparent;'/>
                                                <img src="{{asset('images/instagram.svg')}}" style='width: 22px;height: 22px;background: transparent;'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </td>
                </tr>
            </table>
        </div>
    </center>
</body>
</html>
