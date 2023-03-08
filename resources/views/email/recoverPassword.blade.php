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
    <title>Email</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Metrophobic&display=swap');
        body
        {
            height: 1003px;
            font-family: "Jost";
            
        }
        table{
            display:flex;
            width: 751px;
            height: 723px;
            border-radius: 5px;
            margin-top: 2px;
        }
        /* .email
        {
            width: 760px;
            height: 719px;
            display: flex;
        } */
        /* .header-container
        {
            display:flex;
            justify-content: center;
            align-items: center;
            margin-bottom:20px;
            width: 750px;
            height: 298px;
            background-image: url("{{asset('images/horizonte.svg')}}");
            background-repeat: no-repeat;
            background-size: cover;
            
            
​
        } */
        /* .shade{
            position: absolute;
            background: linear-gradient(0deg, #ffffff 5%, rgba(255, 255, 255, 0) 100% );
            width: 750px;
            height: 305px;
        } */
        /* .header
        {
            display:flex;
            z-index: 1;
        } */
        /* .img-container
        {
            display: flex;
        }
        .background
        {
            margin:35px 0 5px 24px; 
            width: 245px;
            height: 50px;
        } */
        /* .logo{
            width: 160px;
            height: 148.12px
        } */
        
        /* .content
        {
            display: flex;
​
            
        } */
        /* .nombre
        {
            display:flex;
            margin-bottom:10px;
            margin-top: 43px
        } */
        /* .title
        {
            height: 31px;
            margin-left: 74px;
            font-size: 18.4px;
            font-family: "Jost";
            font-weight: bold;
        } */
      
        /* .text-content-box
        {
            display:flex;
            justify-content: center;
            height: 210px;
        } */
        /* .text-content-container
        {
           display: flex;
           height: 300px;
           justify-content: center;
           margin-right: 55px;
        } */
        /* .text-content
        {
            width: 546px;
            height: 198px;
            font-family: "Metropolis";
            font-size: 14.72px;
            color: #000000;
            text-align: justify;
        } */
        /* .code{
            margin: 22px 0 48px 0;
            font-size: 23px;
            font-family: "Metropolis";
            color: #df1683;
            margin-top: 40px;
            font-weight: 700;
            cursor: pointer;
        } */
        /* .attent{
            padding-top: 18px;
        }
        .dir
        {
            font-family: "Metropolis";
            font-size: 14px;
            color: #00c4b3;
            text-decoration: none solid rgb(0, 196, 179);
            text-align: justify;
        } */
        /* .footer
        {
            margin-left: -1px;
            display:flex;
            width: 100%;
            justify-content:center;
        } */
        /* .footer-logo
        {
            
            width: 750px;
            display:grid;
            grid-template-columns: repeat(2,1fr);
            height: 126px;
            border-radius: 5px;
            background-image: linear-gradient(120deg, #3a8dde 3%, #8331a7 47%, #df1683 100% );
        } */
        /* .footer-logo-info{
            margin-top: 30px;
        } */
        /* .footer-logo-text
        {
            margin-left: 32px;
            font-family: "Metropolis";
            font-size: 14px;
            color: #ffffff;
            text-decoration: none solid rgb(255, 255, 255);
            
        } */
        /* .footer-text
        {
            font-family: "Poppins";
            font-size: 20px;
            color: white;
            margin-bottom: 5px;
​
        } */
        /* .footer-logo-icons{
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: flex-start;
            align-items: flex-end;
            margin-top: 21px;
            margin-right: 32.2px;
        } */
        /* .footer-icons
        {
            display: flex;
            
        } */
        /* .icons
        {
            display:flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
​
        } */
        /* .iconP{
            width: 57px;
            height: 41.4px;
        }
        .icon{
            width: 22px;
            height: 22px;
            background: transparent;
        } */
        /* .footer-container
        {
            display:flex;
            justify-content:center;
        } */
        /* .footer-logo-img{
            display:flex;
            justify-content: end;
            margin-right: 30px;
            margin-top: 3px
            
​
        }
        .bar-container
        {
            display:flex;
            margin-left: -2px;
            width: 754px;
            height: 23px;
            background-color: black;
​
        }
        .bar
        {
            display:flex;
        } */
    </style>
</head>
<body>
    <center>
        <div class="email" style="width: 760px; height: 719px; display: flex;">
             <table class="table">
                <tr class="header-container" style="font-family: Jost; display: flex; justify-content: center; align-items: center; margin-bottom: 20px; width: 750px; height: 298px; background-image: url({{asset('images/horizonte.svg')}}); background-repeat: no-repeat; background-size: cover;"> 
                    <div class="shade" style="position: absolute; background: linear-gradient(0deg, #ffffff 5%, rgba(255, 255, 255, 0) 100% ); width: 750px; height: 305px;">
                        <td colspan="3" class="header" style="display:flex;  z-index: 1;">
                            <div class="center">
                                <img src="{{asset('images/logob.png')}}"  class="logo" style="width: 160px; height: 148.12px"/>
                            </div>
                        </td>
                    </div>
                </tr>
                
                <tr class="nombre" style="display:flex; margin-bottom:10px;  margin-top: 43px">
                    <td> 
                        <div class="title" style="height: 31px; margin-left: 74px; font-size: 18.4px; font-family: Jost; font-weight: bold;">Hola, Carlos Mauricio</div>    
                    </td>
                </tr>
                <tr class="text-content-box" style="display:flex; justify-content: center; height: 210px;">
                    <td>
                       <div class="text-content-container" style="display: flex; height: 300px; justify-content: center; margin-right: 55px;">
                            <div class="text-content" style="width: 546px; height: 198px; font-family: Metropolis; font-size: 14.72px; color: #000000; text-align: justify;">
                                <span>Hemos reenviado tu código de verificaión. Continua con el proceso de recuperación de cuenta ingresando el siguinte código:</span>
                                <p class="code" style=" margin: 22px 0 48px 0; font-size: 23px; font-family: Metropolis; color: #df1683; margin-top: 40px; font-weight: 700; cursor: pointer;">05254</p>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="footer-container" style=" display:flex; justify-content:center;">
                    <td>
                        <div class="footer" style="margin-left: -1px; display:flex; width: 100%; justify-content:center;">
                            <div class="footer-logo" style=" width: 750px; display:grid; grid-template-columns: repeat(2,1fr); height: 126px; border-radius: 5px; background-image: linear-gradient(120deg, #3a8dde 3%, #8331a7 47%, #df1683 100% );">
                                <div>
                                    <div class="footer-logo-info" style="margin-top: 30px;">
                                        <p class="footer-logo-text" style="font-weight: 700; margin-left: 32px; font-family: Metropolis; font-size: 14px; color: #ffffff; text-decoration: none solid rgb(255, 255, 255);">Departamento comercial</p>
                                        <p class="footer-logo-text" style="margin-left: 32px; font-family: Metropolis; font-size: 14px; color: #ffffff; text-decoration: none solid rgb(255, 255, 255);">soporteparaalkimistas@mail.com</p>
                                    </div>
                                </div>
                                    <div class="footer-logo-icons" style=" display: flex; flex-direction: column; align-content: center; justify-content: flex-start; align-items: flex-end; margin-top: 21px; margin-right: 32.2px;">
                                        <div class="icons" style="height: 22px; background: transparent;">
                                            <img src="{{asset('images/logo.png')}}"  class="iconP" style="width: 57px; height: 41.4px;"/>
                                            <div>
                                                <img src="{{asset('images/facebook.svg')}}"  class="icon" style=" width: 22px; height: 22px; background: transparent;"/>
                                                <img src="{{asset('images/instagram.svg')}}"  class="icon" style=" width: 22px; height: 22px; background: transparent;"/>
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