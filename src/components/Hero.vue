<template>
    <div class="container-fluid">
        <div class="content">
            <div class="trading">
                <span>TRADING REIMAGINED</span>
            </div>

            <div class="main-text">
                The Profitable <br> way to <span>trade.</span> 
            </div>
            <div class="text">
                We are all about making the financial markets <br>
                more accessible and profitable for Nigerians <br>
                & Africans. Because when you win, we win too.
            </div>
            <button class="btn-one">
                <a href="#">Open An Account</a>
            </button>

            <button class="btn-two">
                <a href="#">Try Demo Trading</a>
            </button>

            <div class="social">
                <i class="fab fa-whatsapp fa-lg" aria-hidden="true"></i>

                <span>0908 290 8871</span> 
            </div>
        </div>
    </div>
</template>

<style scoped>
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
</style>