<template>
    <div class="container-fluids">
        <div class="row">
            <div class="col-md-6">
                <div class="text-container">
                    <div class="main-text">
                        <span class="testi">
                            <img class="img-one" src="../assets/chat bubble green.png" alt="">     
                            Testi— 
                            <img class="img-two" src="../assets/chat bubble blue.png" alt="">  
                        </span>  
                        <br> monials
                    </div>
                    <div class="text">
                        <span class="testi">
                            <img class="img-three" src="../assets/chat bubble blue.png" alt="">
                            Kind words from customers who have traded
                            <img class="img-four" src="../assets/chat bubble green.png" alt=""> <br>  
                        </span>
                        with us across our various products.
                    </div>      
                </div>
            </div>

            <div class="col-md-6">
                <div class="card-container">
                    <div class="cards one">
                        <div class="card-image">
                            <img src="../assets/man With facecap.png" alt="">
                        </div>
                        <div class="card-text">
                            EGM has been top notch in terms of how they give <br> 
                            support and training to newbies like myself when it <br> 
                            comes to trading. I recommend Eagle Global <br> Markets to everyone.

                            <div class="name">
                                - Israel Oluwasanmi
                            </div>
                        </div>
                    </div>

                    <div class="cards blue two">
                        <div class="card-image">
                            <img src="../assets/Beside tree.png" alt="">
                        </div>
                        <div class="card-text">
                            The comprehensive service that they provide <br> 
                            to customers in addition to the variety of <br> 
                            products they offer are excellent which is why <br> 
                            I’ll be trading with them for many years.

                            <div class="name">
                                - Ehijimentor Ehigie
                            </div>
                        </div>
                    </div>

                    <div class="cards three">
                        <div class="card-image">
                            <img src="../assets/bb.png" alt="">
                        </div>
                        <div class="card-text">
                            Absolutely love trading with EGM! They <br> 
                            give personal coaching to help you learn <br>
                            more about the trading process as well <br>
                            as daily insights to make smarter investments.

                            <div class="name">
                                - Israel Oluwasanmi
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .testi {
        position: relative;
    }

    .testi .img-one {
        position: absolute;
        bottom: 60px;
        left: -70px;
    }

    .testi .img-two {
        position: absolute;
        right: -100px;
        bottom: 48px;
    }

    .testi .img-three {
        position: absolute;
        bottom: 20px;
        left: -80px;
    }

    .testi .img-four {
        position: absolute;
        right: -70px;
        top: 10px;
    }

    .card-image {
        margin-right: 19px;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
    }

    .main-text {
        font-family: 'Proxima Nova Bold';
        font-size: 100px;
        line-height: 80px;
    }

    .card-container {
        float: right;
    }

    .card-text {
        font-family: 'Proxima Nova Light';
        font-size: 16px;
    }

    .text {
        font-family: 'Proxima Nova Regular';
        font-size: 17px;
        margin-top: 20px;
    } 

    .name {
        font-family: 'Proxima Nova Bold';
        margin-top: 15px;
    }

    .container-fluids {
        background: #ECF8F1;
        padding-top: 80px;
        padding-bottom: 80px;
        padding-left: 165px;
        padding-right: 135px;
    }

    .cards {
        display: flex;
        color: #fff;
        border-radius: 8px;
        border-bottom: 15px solid #000000;
        padding-top: 21px;
        padding-left: 21px;
        padding-right: 26px;
        padding-bottom: 21px;
        margin-top: 40px;
    }

    .one {
        background: #40BB78;
        max-width: 482px;
    }

    .two {
        background: #104EA1;
        width: 432px;
        position: relative;
        right: 50px;
    }

    .three {
        background: #40BB78;
        width: 432px;
        float: right;
    }
</style>