<template>
    <div class="container-fluids">
        <div class="image-container">
            <img class="desktop" src="../assets/laptop2.png" alt="laptop">
            <img class="mobile" src="../assets/mobile/laptop2.png" alt="">
        </div>

        <div class="text-container">
            <div class="main-text desktop">Ready to beat the markets?</div>
            <div class="main-text mobile">Ready to beat <br> the markets?</div>

            <div class="text desktop">
                It’s quick and easy to get started - apply in minutes with our <br>
                simple application process. 
            </div>
            <div class="text mobile">
                It’s quick and easy to get started <br> - apply in minutes with our <br>
                simple application process. 
            </div>

            <div class="desktop"> 
                <button class="btn-one">
                    <a href="#">Open An Account</a>
                </button>

                <button class="btn-two">
                    <a href="#">Try Demo Trading</a>
                </button>
            </div>

            <div class="mobile button"> 
                <div>
                    <button class="btn-one">
                        <a href="#">Open An Account</a>
                    </button>
                </div>
                
                <div>
                    <button class="btn-two">
                        <a href="#">Try Demo Trading</a>
                    </button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>

    .container-fluids {
        display: flex;
        margin: 100px 80px;
    }

    .main-text {
        font-family: 'Proxima Nova Bold';
        font-size: 38px;
        margin-bottom: 30px;

    }

    .text {
        font-family: 'Proxima Nova Regular';
        font-size: 17px;
        opacity: .95;
        margin-bottom: 50px;
    }

    .text-container {
        background: #052753;
        color: #fff;
        width: 100%;
        height: 394px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 44px;
    }

    button {
        width: 200px;
        height: 65px;
        border: none;
        outline: none;
        font-size: 17px;
        font-family: 'Proxima Nova SemiBold';
        border-radius: 8px;
    }

    button a:hover {
        text-decoration: none;
    }

    .btn-one {
        margin-right: 42px;
        background: #40BB78;
    }

    .btn-one a {
        color: #fff;
    }

    .btn-two {
        border: 2px solid #40BB78;
        background: none;
    }

    .btn-two a {
        color: #40BB78;
    }

    .mobile {
        display: none;
    }

    @media screen and (max-width: 800px) {
        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }

        .container-fluids {
            display: block;
            margin: 0;
            text-align: center;
        }

        img {
            width: 100%;
        }

        .text-container {
            background: #052753;
            color: #fff;
            width: 100%;
            height: auto;
            display: block;
            padding: 70px 0;
        }

        .main-text {
            font-size: 35px;
            line-height: 42px;
            margin-bottom: 50px;
        }

        .text {
            font-size: 17px;
            line-height: 22px;
            margin-bottom: 50px
        }

        button {
            width: 153px;
            height: 48px;
            font-size: 15px;
            font-family: 'Proxima Nova Regular';
            margin-bottom: 0;
            border-radius: 5px;
        }

        .btn-one {
            margin-right: 0;
            margin-bottom: 30px;
        }
    }

    @media (max-width: 1314px) and (min-width: 800px) {
       img {
           display: none;
       }

       .mobile {
           display: none;
       }

       .image-container {
           background: url('../assets/mobile/laptop2.png');
           height: 392px;
           width: 100%;
           background-size: cover;
           background-position: center;
       }
    }

     @media (max-width: 1219px) and (min-width: 800px) {
       .mobile {
           display: none;
       }

       .main-text {
           font-size: 2em;
       }

       .text {
           font-size: 1em;
       }

        button {
            width: 180px;
            height: 55px;
            font-size: 15px;
            font-family: 'Proxima Nova Regular';
            margin-bottom: 0;
            border-radius: 5px;
        }
    }

    @media (max-width:1113px) and (min-width: 800px) {
        .text {
            font-size: .8em;
        }
        button {
            width: 8rem;
            font-size: .8em;
        }

        .main-text {
            font-size: 1.5em;
        }
    }

    @media (max-width: 1315px) and (min-width: 1219px) {
        .text {
            font-size: 1em;
        }

        .main-text {
            font-size: 1.4em;
        }

        button {
            width: 170px;
        }
    }
</style>