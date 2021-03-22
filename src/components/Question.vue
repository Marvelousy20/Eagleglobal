<template>
    <div class="container-fluids">
        <div class="image-container">
            <img src="../assets/laptop2.png" alt="laptop">
        </div>

        <div class="text-container">
            <div class="main-text">Ready to beat the markets?</div>
            <div class="text">
                It’s quick and easy to get started - apply in minutes with our <br>
                simple application process. 
            </div>

            <div> 
                <button class="btn-one">
                    <a href="#">Open An Account</a>
                </button>

                <button class="btn-two">
                    <a href="#">Try Demo Trading</a>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .container-fluids {
        display: flex;
        margin: 100px 80px;
    }

    .main-text {
        font-family: 'Proxima Nova Bold';
        font-size: 38px;
        margin-bottom: 30px;

    }

    .text {
        font-family: 'Proxima Nova Regular';
        font-size: 17px;
        opacity: .95;
        margin-bottom: 50px;
    }

    .text-container {
        background: #010C13;
        color: #fff;
        width: 100%;
        height: 394px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 44px;
    }

    button {
        width: 200px;
        height: 65px;
        border: none;
        outline: none;
        font-size: 17px;
        font-family: 'Proxima Nova SemiBold';
        border-radius: 8px;
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
</style>