<template>
    <div class="container-fluids">
        <div class="content">
            <div>
                <div class="question">Why Trade with EGM?</div>
                
                <div class="content-container desktop">
                    <div class="image-cont">
                        <img src="../assets/Safe and secure.png" alt="safe and secure">
                    </div>
                    <div>
                        <div class="main-text">Safe & Secure</div>
                        <p class="text">
                            Security is at the forefront our mind, which is <br>
                            why we’re licensed and regulated by the Financial <br>
                            Commission in Hong-Kong.
                        </p>
                    </div>
                </div>

                <div class="content-container mobile">
                    <div class="image-cont">
                        <img src="../assets/mobile/Group 63.png" alt="safe and secure">
                    </div>
                    <div>
                        <div class="main-text">Safe & Secure</div>
                        <p class="text">
                            Security is at the forefront our mind, which <br> is
                            why we’re licensed and regulated by <br> the Financial
                            Commission in Hong-Kong.
                        </p>
                    </div>
                </div>

                <div class="content-container desktop">
                    <div class="image-cont">
                        <img src="../assets/Multiple assets.png" alt="multiple asstes">
                    </div>
                    <div>
                        <div class="main-text">Variety of Instruments</div>
                        <p class="text">
                            We don’t believe in limitations, which is why our clients get access <br> 
                            to thousands of instruments ranging from forex and CFDs to indices, <br> 
                            commodities, and stocks, all from the same trading account.
                        </p>
                    </div>
                </div>

                <div class="content-container mobile">
                    <div class="image-cont">
                        <img src="../assets/mobile/Group 64.png" alt="multiple asstes">
                    </div>
                    <div>
                        <div class="main-text">Variety of Instruments</div>
                        <p class="text">
                            We don’t believe in limitations, which is 
                            why our clients get access
                            to thousands of <br> instruments ranging from forex 
                            and CFDs to <br> indices,
                            commodities, and stocks, all from the <br> same trading account.
                        </p>
                    </div>
                </div>

                <div class="content-container desktop">
                    <div class="image-cont">
                        <img src="../assets/Trade signals.png" alt="trade signals">
                    </div>
                    <div>
                        <div class="main-text">Daily Market Analysis & Live Education</div>
                        <p class="text">
                            Stay ahead of the curve with daily world-leading market analysis in <br>
                            addition to free educational resources, webinars, and podcasts.
                        </p>
                    </div>
                </div>

                <div class="content-container mobile">
                    <div class="image-cont">
                        <img src="../assets/mobile/Group 65.png" alt="trade signals">
                    </div>
                    <div>
                        <div class="main-text">Daily Market Analysis <br> & Live Education</div>
                        <p class="text">
                            Stay ahead of the curve with daily world-leading market analysis in
                            addition to free educational resources, webinars, and podcasts.
                        </p>
                    </div>
                </div>
            </div>
            <div class="main-image-container desktop">
                <!-- <img src="../assets/mobile.png" alt="trade"> -->
                <img src="../assets/mobile/phone.png" alt="trade">
                <!-- <img src="../assets/mobile/a.png" alt="trade"> -->
            </div>
            <div class="image-container mobile">
                <img src="../assets/mobile/phones.png" alt="trade">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .main-image-container {
        width: 34%;
    }

    .main-image-container img {
        width: 100%;
    }

    .question {
        font-family: 'Proxima Nova Bold';
        font-size: 40px;
        margin-top: 90px;
        margin-bottom: 78px;
    }

    .content {
        padding-left: 100px;
        padding-right: 100px;
        display: flex;
        justify-content: space-between;
    }

    .content-container {
        display: flex;
    }

    .image-cont {
        margin-right: 40.5px;
    }

    .main-text {
        font-family: 'Proxima Nova Bold';
        font-size: 20px;
        margin-bottom: 16px;
    }

    .text {
        font-family: 'Proxima Nova Regular';
        font-size: 17px;
        margin-bottom: 70px;
    }

    .mobile {
        display: none;
    }

    @media screen and (max-width: 800px) {
        .content {
            padding: 0;
            display: block;
        }

        .desktop {
            display: none !important;
        }

        .mobile {
            display: block;
        }

        .question {
            font-size: 25px;
            margin-top: 40px;
            margin-bottom: 30px;
            text-align: center;
        }

        .content-container {
            display: flex;
            flex-direction: column;
            text-align: center;
        }

        .main-text {
            align-self: center !important;
            font-size: 16px;
            margin-bottom: 20px;
        }

        .image-cont {
            margin-right: 0;
            margin-bottom: 20px;
        }

        .text {
            max-width: 350px;
            margin: 0 auto;
            font-size: 15px;
            margin-bottom: 40px;
        }

        .image-container {
            max-width: 80%;
            margin: 0 auto;
            margin-top: 20px;
        }

        .image-container img {
            width: 100%;
        }

        button {
            border-radius: 5px;
        }
    }
</style>