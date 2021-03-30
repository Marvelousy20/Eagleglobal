<template>
    <div class="container-fluids">
        <div class="range">Our Range of Products</div>

        <div class="wrapper desktop">
            <a href="#">
                <div class = 'text-container'>
                    <div class="main-text">MT4</div>
                    <div class= 'text'>
                        <span class="desktop">
                            Elevate your trading with our powerful MT4 <br>
                            platform complete with tools and resources to <br>
                            efficiently analyze price dynamics and make <br>
                            trade transactions.
                        </span>

                        <div class="link">
                            <a href="#">
                                Get Started <img class="ml-2" src="../assets/Forward arrow@2x.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </a>
            
            <a href="#">
                <div class = 'text-container'>
                    <div class="main-text">CLOUDTRADE</div>
                    <div class= 'text'>
                        <span class="desktop">
                            Trade the global markets in Naira with a <br> 
                            proprietary, indigenous platform that combines <br>
                            world-class functionality and a user-friendly <br>
                            interface.
                        </span>
                    
                        <div class="link">
                            <a href="#">
                                Get Started <img class="ml-2" src="../assets/Forward arrow@2x.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </a>
            
            <a href="#">
                <div class = 'text-container no-margin'>
                    <div class="main-text">COPYTRADE</div>
                    <div class= 'text'>
                        <span class="desktop">
                            Trading made super-easy for those who can’t <br> 
                            trade or don’t have the time to - Make the same <br> 
                            moves the professionals are making and earn <br>
                            money whenever they do. Easy as EGM.
                        </span>
                    
                        <div class="link">
                            <a href="#">
                                Get Started <img class="ml-2" src="../assets/Forward arrow@2x.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </a>
            
            <a href="#">
                <div class = 'text-container no-margin'>
                    <div class="main-text">ANALYTICS</div>
                    <div class= 'text'>
                        <span class="desktop">
                            Welcome to your one-stop blog for in-depth <br> 
                            market analysis. Get a competitive advantage <br> 
                            with key news, easy-to-use tools, and the latest <br> 
                            professional insights from our team of experts.
                        </span>
                    
                        <div class="link">
                            <a href="#">
                                Get Started <img class="ml-2" src="../assets/Forward arrow@2x.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </a>
        </div>

        <div class="wrapper mobile">
            <a href="#">
                <div class = 'text-container'>
                    <div class="main-text">MT4</div>
                    <div class= 'text'>
                        
                        <span class="mobile">
                            Elevate your trading with our powerful <br> MT4
                            platform complete with tools and <br> resources to 
                            efficiently analyze price <br> dynamics and make
                            trade transactions.
                        </span>

                        <div class="link">
                            <a href="#">
                                Get Started <img class="ml-2" src="../assets/mobile/Forward arrow.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </a>
            
            <a href="#">
                <div class = 'text-container'>
                    <div class="main-text">CLOUDTRADE</div>
                    <div class= 'text'>
                        <span class="mobile">
                            Trade the global markets in Naira with a <br> 
                            proprietary, indigenous platform that  <br> combines
                            world-class functionality and <br> a user-friendly
                            interface.
                        </span>

                        <div class="link">
                            <a href="#">
                                Get Started <img class="ml-2" src="../assets/mobile/Forward arrow.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </a>
            
            <a href="#">
                <div class = 'text-container no-margin'>
                    <div class="main-text">COPYTRADE</div>
                    <div class= 'text'>
                        <span class="mobile">
                            Trading made super-easy for those who <br> can’t 
                            trade or don’t have the time to. <br> Make the same
                            moves as professionals <br> & earn
                            money whenever they do.
                        </span>

                        <div class="link">
                            <a href="#">
                                Get Started <img class="ml-2" src="../assets/mobile/Forward arrow.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </a>
            
            <a href="#">
                <div class = 'text-container no-margin'>
                    <div class="main-text">ANALYTICS</div>
                    <div class= 'text'>
                        <span class="mobile">
                            Welcome to your one-stop tool for <br> in-depth 
                            market analysis. Get a <br> competitive advantage
                            with key news, <br> & insights from our team of experts.
                        </span>

                        <div class="link">
                            <a href="#">
                                Get Started <img class="ml-2" src="../assets/mobile/Forward arrow.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </a>
            
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

    .desktop .text-container {
        height: 273px !important;
        width: 445px !important;
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

    .wrapper a {
        color: black;
    }

    .text-container:not(.no-margin) {
        margin-bottom: 90px !important;
    }

    .main-text {
        background: #052753;
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
        color: #052753;
    }

    .mobile {
        display: none;
    }

    @media screen and (max-width: 800px) {
        .desktop {
            display: none !important;
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
            padding-left: 30px;
        }

        .text {
            font-size: 16.5px;
            padding-left: 30px;
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