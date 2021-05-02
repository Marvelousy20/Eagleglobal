<template>
    <div class="container-fluid">
        <ik-image
            rel = "preload"
            class="hero desktop"
            :lqip="{active:true, quality:30, blur: 5}"
            src = 'https://ik.imagekit.io/ipcfzmxad/tr:w-1549,h-963,cm-extract,x-248,y--2/Eagleglobal/Desktop/Gold_fPgBZnqUrz4.webp'
            loading = "lazy"
        />
        
        <ik-image 
            rel = "preload"
            class="desktop gold"
            :lqip="{active:true, quality:30, blur: 5}"
            src = "https://ik.imagekit.io/ipcfzmxad/Eagleglobal/Desktop/Gold_Price_indi_INDm2tCuL.png"
            loading = "lazy"
        />

        <ik-image
            rel = "preload"
            class="hero mobile"
            :lqip="{active:true, quality:30, blur: 2}"
            src="https://ik.imagekit.io/ipcfzmxad/Eagleglobal/Mobile/Mask_Group_12_UBSPFUCMO6U.webp"
            loading = "lazy"
        />

        <ik-image 
            class="mobile gold-two"
            :lqip="{active:true, quality:50, blur: 5}"
            src = "https://ik.imagekit.io/ipcfzmxad/Eagleglobal/Mobile/Gold_Price_indi_3NtsSYejh.png"
            loading = "lazy"
        />

        <div class="content">
            <div class="trading">
                <span>TRADING REIMAGINED</span>
            </div>

            <div class="main-text">
                The Profitable <br> way to <span>trade.</span> 
            </div>
            <div class="text desktop">
                We empower Africans to access profitable <br>
                Opportunities in the Financial Markets.
            </div>
            <div class="text mobile">
                We empower Africans to <br>
                access profitable opportunities <br> 
                In the Financial Markets.
            </div>

            <div>
                <button class="btn-one">
                    <a href="https://clients.eagleglobalmarkets.com/#/" target="_blank" rel="noopener">Open An Account</a>
                </button>

                <button class="btn-two desktop">
                    <a href="https://demo.eagleglobalmarkets.com/Advanced.aspx" rel="noopener">Try Demo Trading</a>
                </button>
            </div>

            <div class="social desktop">
                <i class="fab fa-whatsapp fa-lg icon" aria-hidden="true"></i>

                <a href="https://wa.me/+2349082908871" target="_blank" rel="noopener"><span>0908 290 8871</span></a> 
            </div>
        </div>
    </div>
</template>

<style scoped>
    .mobile {
        display: none;
    }

    .hero {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 100%;
        width: 100%;
    }

    .container-fluid {
        /* background: url('../assets/Hero.webp'); */
        /* background: url('../assets/Hero.png'); */
        /* background-size: cover;
        background-position: right; */
        position: relative;
        color: #fff;
        height: 820px;
    }

    .gold {
        position: absolute;
        top: 45%;
        right: 34%;
    }

    a {
        color: #fff;
    }

    a:hover {
        color: #ddd;
        text-decoration: none;
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
        font-size: 60px;
        line-height: 60px;
        margin-bottom: 37px;
        position: relative;
    }

    .main-text span {
        color: #40BB78;
    }

    .text {
        font-family: 'Proxima Nova Regular';
        font-size: 23px;
        opacity: .95;
        margin-bottom: 60px;
        position: relative;
    }

    button {
        width: 200px;
        height: 65px;
        border: none;
        outline: none;
        font-size: 17px;
        font-family: 'Proxima Nova Regular';
        border-radius: 8px;
        margin-bottom: 85px;
        position: relative;
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
        position: relative;
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
            /* background: url('../assets/mobile/Hero.webp'); */
            background-size: cover;
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
            border-radius: 5px;
        }

        .gold-two {
            position: absolute;
            top: 49%;
            left: 50%;
            margin-left: -51px;
        }
    }
</style>