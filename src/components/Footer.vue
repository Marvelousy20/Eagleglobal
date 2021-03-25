<template>
    <div class="container-fluids">
        <div class="content">
            <div class="text-content">
                <span class="main-text desktop">Risk warning:</span>
                <span class="text desktop">
                    Derivative products are leveraged products and can result in losses.
                    Please ensure you fully understand the <br>
                    risks and take care to manage your exposure
                    and seek independent advice if necessary. 
                    It’s important for you to consider <br>
                    relevant legal documents before you decide whether or not to 
                    trade any of our products. 
                    All our trading accounts have <br> negative balance protection.
                </span>

                <div class="mobile">
                    <span class="main-text">Risk warning:</span>
                    <span class="text">
                    Investing in Eagle Global <br> Markets derivative products 
                    carries significant <br> risks and is not suitable for all investors. 
                    You <br> could lose more than your deposits. You do not <br> own, or have any 
                    interest in, the underlying <br> assets. We recommend that you seek <br> 
                    independent advice and ensure you fully <br> understand the risks involved 
                    before trading. <br> Spreads may widen depending on liquidity <br> and market 
                    volatility.
                    <br>
                    <br>
                    The information on this website is prepared <br> without considering your 
                    objectives, financial <br> situation or needs. Consequently, you should <br>
                    consider the information in light of your <br> objectives, financial 
                    situation and needs. 
                    </span>
                </div>
                
                <br>
                <br>

                <span class="main-text desktop">Eagle Global Markets</span>
                <span class="text desktop">
                    is the trading name of Eagle GM Limited,
                    a company registered in Nigeria with RC 1322866 at address <br> Floor 4, 
                    The Bureau, 28 Raymond Njoku Street, S.W. Ikoyi, Lagos.
                </span>

                <div class="mobile">
                    <span class="main-text">Eagle Global Markets</span>
                    <span class="text">
                        is the trading name of <br> Eagle GM Limited,
                        a company registered in <br> Nigeria with RC 1322866 at address Floor 4, <br> 
                        The Bureau, 28 Raymond Njoku Street, S.W. <br> Ikoyi, Lagos.
                    </span>
                </div>

                <br>
                <br>

                <span class="main-text desktop">Eagle Global Markets (UK) LTD</span> 
                <span class="text desktop"> 
                    is registered in the United Kingdom,: 34 South Molton Street, 
                    Mayfair, W1K 4RG. Company <br> Number: 12155018.
                </span>

                <div class="mobile">
                    <span class="main-text">Eagle Global Markets (UK) Limited</span> 
                    <span class="text"> 
                        is <br> registered in the United Kingdom,: 34 South <br> Molton Street, 
                        Mayfair, W1K 4RG. Company <br> Number: 12155018.
                    </span>
                </div>

                <br>
                <br>
            
                <span class="main-text desktop">EGM Analytics Limited</span> 
                <span class="text desktop"> 
                    is registered in the United Kingdom:20-22 Wenlock Road,London N1 7GU.
                    Company Number: <br> 12901768.
                </span>

                <div class="mobile">
                    <span class="main-text">EGM Analytics Limited</span> 
                    <span class="text"> 
                        is registered in the United <br> Kingdom:20-22 Wenlock Road, London <br> N1 7GU.
                        Company Number: 12901768.
                    </span>
                </div>
            </div>

            <div class="hr">
                <hr>
            </div>

            <div class="footer">
                <div><img src="../assets/newlogo.svg" class="logo" alt="svg"></div>
                <div class="website">www.eagleglobalmarkets.com</div>
                <div class="icons-container desktop">
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

        .content {
            padding-top: 82px;
            padding-left: 27px;
            padding-right: 27px;
            padding-bottom: 50px;
        }

        .main-text, .text {
            font-size: 16px;
        }

        .text-content {
            margin-bottom: 50px;
        }

        .logo {
            width: 67.48px;
            height: 32.61px;
        }

        .footer {
            margin-top: 50px;
            padding-bottom: 0px;
        }
    }

    @media screen and (max-width: 376px) {
        .main-text, .text {
            font-size: 14.2px;
        }
    }
</style>