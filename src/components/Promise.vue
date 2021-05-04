<template>
    <div class="container-fluids">
        <div class="desktop">
            <ik-image 
                src = 'https://ik.imagekit.io/ipcfzmxad/Eagleglobal/Desktop/EGM_wT6EIPrBz.webp'
                :lqip="{active:true, quality:30, blur: 5}"
                loading="lazy"
            />
        </div>
        <div class="mobile">
            <ik-image 
                src = 'https://ik.imagekit.io/ipcfzmxad/Eagleglobal/Mobile/ImageEGM_Y93AD46TZ5i.webp'
                :lqip="{active:true, quality:30, blur: 5}"
                loading = "lazy"
            />
        </div>
        <div class="text-container">
            <div class="main-text">The EGM Promise</div>
            <div class="text desktop">
                Customer profitability is the cornerstone upon which the EGM foundation is built.
                This is why <br> we always go out of our way to provide the best trading conditions, tools, and
                resources to <br> make sure ALL our clients are well-equipped to beat the markets.
                <br>
                <br>
                <span>
                    With our innovative Cloudtrade feature, you can trade in Naira whenever, wherever
                    while <br> our user-friendly and intuitive Copytrading platform lets you copy 
                    expert traders and earn <br> when they do.
                </span> 
            </div>
            <div class="text mobile">
                Customer profitability is the cornerstone <br> upon which the EGM foundation
                is built. <br>
                This is why we always go out of our way to <br> provide the best trading 
                conditions, tools, and <br> resources to make sure ALL our clients are <br>
                well-equipped to beat the markets.
                <br>
                <br>
                <span>
                    With our innovative Cloudtrade feature, you <br> 
                    can trade in Naira whenever, wherever
                    while <br> our user-friendly and intuitive Copytrading <br>
                    platform lets you copy 
                    expert traders and earn <br> when they do.
                </span> 
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container-fluids {
        display: flex;
        padding: 0;
        margin-top: 82px;
        height: 394px;
    }

    .desktop img {
        height: 100%;
        width: 100%;
    }

    .text-container {
        background: #104EA1;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 70px;
    }

    .main-text {
        font-family: 'Proxima Nova Bold';
        font-size: 40px;
        margin-bottom: 25px;
    }

    .text {
        font-family: 'Proxima Nova Regular';
        font-size: 15.5px;
        opacity: .95;
    }

    .mobile {
        display: none;
    }

    @media screen and (max-width: 800px) {
        .container-fluids {
            height: auto;
        }

        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }

        .container-fluids {
            display: block;
            margin-top: 0;
        }

        img {
            width: 100%;
        }

        .main-text {
            font-size: 25px;
            text-align: center;
            margin-top: 40px;
            margin-bottom: 40px;
        }

        .text-container {
            padding: 0;
        }

        .text {
            font-size: 15px;
            text-align: center;
            margin-bottom: 60px;
        }
    }

    @media (max-width: 1211px) and (min-width: 800px) {
        .container-fluids {
            height: auto;
        }
        
        .mobile {
            display: none;
        }

        img {
            height: 100%;
        }

        .text {
            font-size: .8em;
        }
    }

    @media (min-width: 1252px) and (max-width: 1340px) {
        .text {
            font-family: 'Proxima Nova Regular';
            font-size: .83em;
            opacity: .95;
        }
    }

    @media (min-width: 1200px) and (max-width: 1252px) {
        .text {
            font-family: 'Proxima Nova Regular';
            font-size: .75em;
            opacity: .95;
        }
    }

    @media (min-width: 900px) and (max-width: 1201px) {
        .text {
            font-family: 'Proxima Nova Regular';
            font-size: .6em;
            opacity: .95;
        }
    }
</style>