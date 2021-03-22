<template>
    <div class="container-fluids">
        <div class="content">
            <div class="text-content">
                <span class="main-text">Risk warning:</span>
                <span class="text">
                    Derivative products are leveraged products and can result in losses.
                    Please ensure you fully understand the <br>
                    risks and take care to manage your exposure
                    and seek independent advice if necessary. 
                    It’s important for you to consider <br>
                    relevant legal documents before you decide whether or not to 
                    trade any of our products. 
                    All our trading accounts have <br> negative balance protection.
                </span>

                <br>
                <br>

                <span class="main-text">Eagle Global Markets</span>
                <span class="text">
                    is the trading name of Eagle GM Limited,
                    a company registered in Nigeria with RC 1322866 at address <br> Floor 4, 
                    The Bureau, 28 Raymond Njoku Street, S.W. Ikoyi, Lagos.
                </span>
                
                <br>
                <br>

                <span class="main-text">Eagle Global Markets (UK) LTD</span> 
                <span class="text"> 
                    is registered in the United Kingdom,: 34 South Molton Street, 
                    Mayfair, W1K 4RG. Company <br> Number: 12155018.
                </span>

                <br>
                <br>
            
                <span class="main-text">EGM Analytics Limited</span> 
                <span class="text"> 
                    is registered in the United Kingdom:20-22 Wenlock Road,London N1 7GU.
                    Company Number: <br> 12901768.
                </span>
            </div>

            <div class="hr">
                <hr>
            </div>

            <div class="footer">
                <div><img src="../assets/newlogo.svg" class="logo" alt="svg"></div>
                <div class="website">www.eagleglobalmarkets.com</div>
                <div class="icons-container">
                    <div class="mb-2 follow">Follow us</div>
                    <div>
                        <a href="#" class="mr-3"><img src="../assets/001-facebook.png" alt="facebook"></a>
                        <a href="#" class="mr-3"><img src="../assets/008-youtube.png" alt="youtube"></a>
                        <a href="#" class="mr-3"><img src="../assets/011-instagram.png" alt="instagram"></a>
                        <a href="#"><img src="../assets/013-twitter.png" alt="twitter"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container-fluids {
        background: #010C13;
        color: #fff;
    }

    .content {
        padding-top: 100px;
        padding-left: 99px;
        padding-right: 99px;
    }

    .footer {
        margin-top: 100px;
        padding-bottom: 100px;
    }

    .logo {
        width: 166px;
        height: 83px;
    }

    .main-text {
        font-family: 'Proxima Nova Bold';
        font-size: 21px;
    }

    .text {
        font-family: 'Proxima Nova Light';
        font-size: 21px;
        opacity: .8;
    }

    .text-content {
        margin-bottom: 100px;
    }

    hr {
        background: #fff;
        opacity: .5;
    }    

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .follow {
        font-family: 'Proxima Nova SemiBold';
        font-size: 21px;
    }

    .website {
        font-family: 'Proxima Nova Light';
        opacity: .8;
        font-size: 15px;
    }

    .icons-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;   
    }
</style>