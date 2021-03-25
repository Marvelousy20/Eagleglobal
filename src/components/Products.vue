<template>
    <div class="container-fluids">
        <div class="range">Our Range of Products</div>

        <div class="wrapper">
            <div class = 'text-container'>
                <div class="main-text">MT4</div>
                <div class= 'text'>
                    <span class="desktop">
                        Elevate your trading with our powerful MT4 <br>
                        platform complete with tools and resources to <br>
                        efficiently analyze price dynamics and make <br>
                        trade transactions.
                    </span>
                    <span class="mobile">
                        Elevate your trading with our powerful <br> MT4
                        platform complete with tools and <br> resources to 
                        efficiently analyze price <br> dynamics and make
                        trade transactions.
                    </span>

                    <div class="link">
                        <a href="#">
                            Get Started <img class="ml-3" src="../assets/Forward arrow.png" alt="">
                        </a>
                    </div>
                </div>
            </div>

            <div class = 'text-container'>
                <div class="main-text">CLOUDTRADE</div>
                <div class= 'text'>
                    <span class="desktop">
                        Trade the global markets in Naira with a <br> 
                        proprietary, indigenous platform that combines <br>
                        world-class functionality and a user-friendly <br>
                        interface.
                    </span>
                    <span class="mobile">
                        Trade the global markets in Naira with a <br> 
                        proprietary, indigenous platform that  <br> combines
                        world-class functionality and <br> a user-friendly
                        interface.
                    </span>

                    <div class="link">
                        <a href="#">
                            Get Started <img class="ml-3" src="../assets/Forward arrow.png" alt="">
                        </a>
                    </div>
                </div>
            </div>

            <div class = 'text-container no-margin'>
                <div class="main-text">COPYTRADE</div>
                <div class= 'text'>
                    <span class="desktop">
                        Trading made super-easy for those who can’t <br> 
                        trade or don’t have the time to - Make the same <br> 
                        moves the professionals are making and earn <br>
                        money whenever they do. Easy as EGM.
                    </span>
                    <span class="mobile">
                        Trading made super-easy for those who <br> can’t 
                        trade or don’t have the time to. <br> Make the same
                        moves as professionals <br> & earn
                        money whenever they do.
                    </span>

                    <div class="link">
                        <a href="#">
                            Get Started <img class="ml-3" src="../assets/Forward arrow.png" alt="">
                        </a>
                    </div>
                </div>
            </div>

            <div class = 'text-container no-margin'>
                <div class="main-text">ANALYTICS</div>
                <div class= 'text'>
                    <span class="desktop">
                        Welcome to your one-stop blog for in-depth <br> 
                        market analysis. Get a competitive advantage <br> 
                        with key news, easy-to-use tools, and the latest <br> 
                        professional insights from our team of experts.
                    </span>
                    <span class="mobile">
                        Welcome to your one-stop tool for <br> in-depth 
                        market analysis. Get a <br> competitive advantage
                        with key news, <br> & insights from our team of experts.
                    </span>

                    <div class="link">
                        <a href="#">
                            Get Started <img class="ml-3" src="../assets/Forward arrow.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<style scoped>
    .container-fluids {
        margin-top: 80px;
        margin-bottom: 100px;
    }

    .range {
        font-family: 'Proxima Nova Bold';
        font-size: 40px;
        text-align: center;
        margin-bottom: 60px;
    }

    a:hover {
        text-decoration: none;
    }

    .wrapper {
        display: flex;
        flex-wrap: wrap;
        padding: 0 195px;
        justify-content: space-between;
    }

    .text-container:not(.no-margin) {
        margin-bottom: 60px !important;
    }

    .main-text {
        background: #104EA1;
        font-family: 'Proxima Nova SemiBold';
        color: #fff;
        font-size: 24px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 31px;
    }

    .text {
        background: #CFDCEC;
        font-family: 'Proxima Nova Light';
        font-size: 18px;
        padding-left: 31px;
        padding-top: 30px;
        padding-right: 31px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        padding-bottom: 34px;
    }

    .link {
        background: #CFDCEC;
        font-family: 'Proxima Nova SemiBold';
        margin-top: 24px;
    }

    .link a {
        color: #104EA1;
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
            margin-top: 40px;
            margin-bottom: 50px;
        }

        .range {
            font-size: 25px;
            margin-bottom: 40px;
        }

        .wrapper {
            display: block;
            padding: 0 34px;
        }

        .main-text {
            font-size: 18px;
            padding-top: 17px;
            padding-bottom: 17px;
            padding-left: 20px;
        }

        .text {
            font-size: 15px;
            padding-left: 20px;
            padding-top: 19px;
            padding-bottom: 14px;
        }

        .text-container:not(.no-margin) {
            margin-bottom: 40px !important;
        }

        .no-margin {
            margin-bottom: 40px;
        }
    }

    @media screen and (max-width: 376px) {
        .text {
            font-size: 14.5px;
        }
    }

    @media screen and (max-width: 365px) {
        .text {
            font-size: 13.5px;
        }
    }
</style>