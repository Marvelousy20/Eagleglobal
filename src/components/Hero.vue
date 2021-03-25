<template>
    <div class="container-fluid">
        <div class="content">
            <div class="trading">
                <span>TRADING REIMAGINED</span>
            </div>

            <div class="main-text">
                The Profitable <br> way to <span>trade.</span> 
            </div>
            <div class="text desktop">
                We are all about making the financial markets <br>
                more accessible and profitable for Nigerians <br>
                & Africans. Because when you win, we win too.
            </div>
            <div class="text mobile">
                We empower Africans to <br>
                access profitable opportunities <br> 
                In the Financial Markets.
            </div>

            <div>
                <button class="btn-one">
                    <a href="#">Open An Account</a>
                </button>

                <button class="btn-two desktop">
                    <a href="#">Try Demo Trading</a>
                </button>
            </div>

            <div class="social desktop">
                <i class="fab fa-whatsapp fa-lg icon" aria-hidden="true"></i>

                <span>0908 290 8871</span> 
            </div>
        </div>
    </div>
</template>

<style scoped>
    .mobile {
        display: none;
    }

    .container-fluid {
        background: url('../assets/Hero.png');
        background-size: cover;
        background-position: right;
        height: 820px;
        color: #fff;
    }

    .content {
        padding-top: 180px;
        padding-left: 100px;
    }

    .trading {
        font-family: 'Proxima Nova Regular';
        font-size: 15px;
        opacity: .95;
        margin-bottom: 21px;
        letter-spacing: 0.75px;
    }

    .main-text {
        font-family: 'Proxima Nova Bold';
        font-size: 50px;
        line-height: 50px;
        margin-bottom: 37px;
    }

    .main-text span {
        color: #40BB78;
    }

    .text {
        font-family: 'Proxima Nova Regular';
        font-size: 20px;
        opacity: .95;
        margin-bottom: 60px;
    }

    button {
        width: 200px;
        height: 65px;
        border: none;
        outline: none;
        font-size: 17px;
        font-family: 'Proxima Nova SemiBold';
        border-radius: 8px;
        margin-bottom: 85px;
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

    .social {
        font-family: 'Proxima Nova Regular';
        font-size: 15px;
    }

    .social span {
        margin-left: 21px;
        opacity: .95;
    }

    @media screen and (max-width:800px) {
        .desktop {
            display: none;
        }

        .content {
            padding-left: 0;
            padding-top: 60px;
            text-align: center;
        }

        .mobile {
            display: block;
        }

        .container-fluid {
            background: url('../assets/mobile/Gold.png');
            background-size: cover;
            background-position: center;
            height: 765px;
        }

        .trading {
            font-size: 11px;
            letter-spacing: 0.55px;
        }

        .main-text {
            font-size: 37px;
            line-height: 37px;
            margin-bottom: 40px;
        }

        .text {
            font-size: 15px;
            /* line-height: 18px; */
            margin-bottom: 52px;
        }

        .btn-one {
            margin-right: 0;
        }

        button {
            width: 153px;
            height: 48px;
            font-size: 15px;
            font-family: 'Proxima Nova Regular';
            margin-bottom: 0;
        }
    }
</style>