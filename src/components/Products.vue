<template>
    <div class="container-fluids">
        <div class="range">Our Range of Products</div>

        <div class="wrapper">
            <div class = 'text-container'>
                <div class="main-text">MT4</div>
                <div class= 'text'>
                    Elevate your trading with our powerful MT4 <br>
                    platform complete with tools and resources to <br>
                    efficiently analyze price dynamics and make <br>
                    trade transactions.

                    <div class="link">
                        <a href="#">
                            Get Started <i class="fas fa-arrow-right fa-sm ml-3" data-fa-mask="fas fa-circle"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class = 'text-container'>
                <div class="main-text">CLOUDTRADE</div>
                <div class= 'text'>
                    Trade the global markets in Naira with a <br> 
                    proprietary, indigenous platform that combines <br>
                    world-class functionality and a user-friendly <br>
                    interface.

                    <div class="link">
                        <a href="#">
                            Get Started <i class="fas fa-arrow-right fa-sm ml-3" data-fa-mask="fas fa-circle"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class = 'text-container no-margin'>
                <div class="main-text">COPYTRADE</div>
                <div class= 'text'>
                    Trading made super-easy for those who can’t <br> 
                    trade or don’t have the time to - Make the same <br> 
                    moves the professionals are making and earn <br>
                    money whenever they do. Easy as EGM.

                    <div class="link">
                        <a href="#">
                            Get Started <i class="fas fa-arrow-right fa-sm ml-3" data-fa-mask="fas fa-circle"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class = 'text-container no-margin'>
                <div class="main-text">ANALYTICS</div>
                <div class= 'text'>
                    Welcome to your one-stop blog for in-depth <br> 
                    market analysis. Get a competitive advantage <br> 
                    with key news, easy-to-use tools, and the latest <br> 
                    professional insights from our team of experts.

                    <div class="link">
                        <a href="#">
                            Get Started <i class="fas fa-arrow-right fa-sm ml-3" data-fa-mask="fas fa-circle"></i>
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
</style>