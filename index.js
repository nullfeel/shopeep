const puppeteer = require('puppeteer');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var ask = "";

rl.stdoutMuted = false;

rl._writeToOutput = function _writeToOutput(stringToWrite) {
    if (rl.stdoutMuted && stringToWrite != '\r\n' &&  stringToWrite != '\n' && stringToWrite != '\r')
        if(rl.line.length > 0)
            rl.output.write("*");
        else
            rl.output.write(ask);
    else
        rl.output.write(stringToWrite);
};

async function jalankan(page, link)
{
    try 
    {
        await page.goto(link,{waitUntil: "networkidle2"});
        var wkt = await new Date();

        const date = await new Date();
        const asd = await new Date("December 11, 2020 22:18:59:000"); // Ingat ini
        console.log("Waiting for the time...");
        console.log("The time is " + (((asd-date)/1000)/60)/60);
        await page.waitForTimeout(asd-date);
        console.log("Waited long enough...");
        console.log("Start loading target...");
        await page.setRequestInterception(true);
        page.on('request', request => {
            if (request.resourceType() === 'image')
                request.abort();
            else
                request.continue();
        });

        const needReload = false; // Ingat ini
        if(needReload)
        {
            page.reload();
        }
        try {
            await page.waitForSelector(`svg.flash-sale-logo.flash-sale-logo--white`);
            console.log("Bismillah semoga stonk");

            var wkt1 = new Date();
            console.log((wkt1-wkt)/1000);

            //Varian

            // await page
            //     .waitForSelector(`div.flex._3dRJGI._3a2wD- > div > div:nth-child(1) > div > button:nth-child(1)`)
            //     .then(() => page.click(`div.flex._3dRJGI._3a2wD- > div > div:nth-child(1) > div > button:nth-child(1)`));
            // console.log("Successfully clicked varian...");

            //Beli Sekarang

            await page
                .waitForSelector(`#main > div > div._1Bj1VS > div.page-product.page-product--mall > div.container > div.product-briefing.flex.card._2cRTS4 > div.flex.flex-auto.k-mj2F > div > div:nth-child(5) > div > div > button.btn.btn-solid-primary.btn--l.YtgjXY`)
                .then(() => page.click(`#main > div > div._1Bj1VS > div.page-product.page-product--mall > div.container > div.product-briefing.flex.card._2cRTS4 > div.flex.flex-auto.k-mj2F > div > div:nth-child(5) > div > div > button.btn.btn-solid-primary.btn--l.YtgjXY`)); //#main > div > div._1Bj1VS > div.page-product.page-product--mall > div.container > div.product-briefing.flex.card._2cRTS4 > div.flex.flex-auto.k-mj2F > div > div:nth-child(5) > div > div > button
            console.log("Clicked the buy button...");
            

            wkt1 = new Date();
            console.log((wkt1-wkt)/1000);

            await page
                .waitForSelector(`.toast`)
            await page.waitForFunction(() => !document.querySelector('.toast'));
            console.log("Toast is no more...")

            // Check Out

            await page
                .waitForSelector(`div.cart-page-footer__checkout > button`)
                .then(() => page.click(`div.cart-page-footer__checkout > button`));
            console.log("checked out...");

            wkt1 = new Date();
            console.log((wkt1-wkt)/1000)

            await page
                .waitForSelector(`div.page-checkout > .loading-spinner-popup`)
            await page.waitForFunction(() => !document.querySelector('div.page-checkout > .loading-spinner-popup'));
            console.log("Loading bangg...");

            // Select Shopeepay
            await page
                .waitForSelector('#main > div > div._1Bj1VS > div.page-checkout.container > div.page-checkout__payment-order-wrapper > div.checkout-payment-method-view > div > div.checkout-payment-method-view__current.checkout-payment-setting > div.checkout-payment-setting__payment-methods-tab > span:nth-child(1) > button')
                .then(() => page.click('#main > div > div._1Bj1VS > div.page-checkout.container > div.page-checkout__payment-order-wrapper > div.checkout-payment-method-view > div > div.checkout-payment-method-view__current.checkout-payment-setting > div.checkout-payment-setting__payment-methods-tab > span:nth-child(1) > button'));    
                console.log("Select Shopeepay");
            await page.waitForTimeout(300);
            

                ////*[@id="main"]/div/div[2]/div[3]/div[4]/div[2]/div[10]/button
            await page
               .waitForSelector(`#main > div > div._1Bj1VS > div.page-checkout.container > div.checkout-product-ordered-list > div.checkout-product-ordered-list__content > div > div.Bghhyr > div._3-_Zjn.pC1-UH > div._3f0IkJ`)
               .then(() => page.click(`#main > div > div._1Bj1VS > div.page-checkout.container > div.checkout-product-ordered-list > div.checkout-product-ordered-list__content > div > div.Bghhyr > div._3-_Zjn.pC1-UH > div._3f0IkJ`));
              //#modal > div.shopee-modal__container > div.shopee-modal__content > div.logistics-selection-modal > div.logistics-selection-modal__selection-container > div > div > div.stardust-dropdown__item-body.stardust-dropdown__item-body--open > div > div > div > div > div.stardust-radio.stardust-radio--checked > div.stardust-radio__content > div > div.stardust-dropdown.stardust-dropdown--open > div.stardust-dropdown__item-body.stardust-dropdown__item-body--open > div.stardust-radio._137jG8.stardust-radio--checked
            await page
              .waitForSelector(`#modal > div.shopee-modal__container > div.shopee-modal__content > div.logistics-selection-modal__footer > div > button.stardust-button.stardust-button--primary.logistics-selection-modal__submit-btn`)
              .then(() => page.click(`#modal > div.shopee-modal__container > div.shopee-modal__content > div.logistics-selection-modal__footer > div > button.stardust-button.stardust-button--primary.logistics-selection-modal__submit-btn`));
            console.log("pilih pengiriman");
            //await page  page.click(`#modal > div.shopee-modal__container > div.shopee-modal__content > div.logistics-selection-modal > div.logistics-selection-modal__selection-container > div > div > div.stardust-dropdown__item-body.stardust-dropdown__item-body--open > div > div > div > div > div.stardust-radio.stardust-radio--checked > div.stardust-radio__content > div > div.stardust-dropdown.stardust-dropdown--open > div.stardust-dropdown__item-body.stardust-dropdown__item-body--open > div:nth-child(1) > div.stardust-radio-button > div`);
            
            await page 
                .waitForSelector(`#main > div > div._1Bj1VS > div.page-checkout.container > div.page-checkout__payment-order-wrapper > div.OR36Xx > div._3S63c5._1WpGLP > button`)
                .then(() => page.click(`#main > div > div._1Bj1VS > div.page-checkout.container > div.page-checkout__payment-order-wrapper > div.OR36Xx > div._3S63c5._1WpGLP > button`));
             console.log("Chekouttt gannnnn");

            wkt1 = new Date();
            console.log((wkt1-wkt)/1000);

            // Pesan

            // await page
            //     .waitForSelector(`div._3S63c5._1WpGLP > button.stardust-button`)
            //     .then(() => page.click(`div._3S63c5._1WpGLP > button.stardust-button`))
            // console.log("Successfully buy, Enjoy :)...")
            //await page.screenshot({path: `screenshots/${makeid(5)}-stonks.png`});
        } catch(err)
        {
            console.log(err)
        }
    } catch(err)
    {
        console.log(err);
    }
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

async function otp(page)
{
    try {
        rl.stdoutMuted = true;
        ask = "Enter the OTP Code: ";
        await rl.question(ask, async function(OTP){
            if(await OTP != "no")
            {
                await page.type('#main > div > div._3evFhm > div > div > form > div > div._1B7mke._1W4V3v > div.UEclfJ._27cR_W > input[type=tel]:nth-child(1)', OTP)
               // await page.screenshot({path: 'screenshots/typingOTP.png'});
                await page.waitForTimeout(300);
                console.log(`Clicking the Verifikasi button`);
                await page
                    .waitForSelector('#main > div > div._3evFhm > div > div > form > div > div._1B7mke._1W4V3v > button')
                    .then(() => page.click('#main > div > div._3evFhm > div > div > form > div > div._1B7mke._1W4V3v > button'));
                console.log(`Successfully clicked the Verifikasi button`);
            } else {
                await page.click('#main > div > div._3evFhm > div > div > form > div > div._1B7mke._1W4V3v > div.oB34z1 > div:nth-child(2) > span:nth-child(3)');
                await page
                    .waitForSelector('#main > div > div._3evFhm > div > div > div > div._1B7mke._1W4V3v > div > button:nth-child(3)')
                    .then(() => page.click('#main > div > div._3evFhm > div > div > div > div._1B7mke._1W4V3v > div > button:nth-child(3)'));
                await otp(page);
            }
        });
        return new Promise((resolve, reject) => {
            page.waitForTimeout(300);
        });
    } catch(err) {
        console.log(err);
    }
}

async function checkLogin(page)
{
    try
    {
        // Checking if login element exist
        let element = await page.$("#main > div > div._1Bj1VS.qEcSbS > div:nth-child(1) > div > div.navbar-wrapper.container-wrapper > div > ul > a:nth-child(5)");
        console.log(element);
        //await page.screenshot({path: 'screenshots/cekLogin.png'});
        if(await element === null)
        {
            return true;
        } else {
            return false;
        }
    } catch(err)
    {
        console.log(err);
    }
}

async function login(page, username, password, loginLink)
{
    try 
    {
        console.log(`Heading login page...`)
        await page.goto(loginLink, {waitUntil: 'networkidle2'});
        console.log(`${loginLink} loaded successfully...`)
        console.log("Inputting Credentials...")
        await page
            .waitForSelector('input._56AraZ[name=loginKey]')
            .then(() => page.type('input._56AraZ[name=loginKey]', username))
            .then(() => page.type('input._56AraZ[name=password]', password))
            .then(() => page.waitForTimeout(300))
            .then(() => page.click('button._35rr5y._32qX4k._1ShBrl._3z3XZ9._2iOIqx._2h_2_Y'));
        console.log("Clicking OTP Ok button...")
        await page
            .waitForSelector('#modal > aside > div._2GJ_OW.undefined > div > div._39FqMM._28QTWk > button._35rr5y._32qX4k._3SWXCx._2iOIqx._2h_2_Y')
            .then(() => page.click('#modal > aside > div._2GJ_OW.undefined > div > div._39FqMM._28QTWk > button._35rr5y._32qX4k._3SWXCx._2iOIqx._2h_2_Y'));
        //await page.screenshot({path: 'screenshots/otp.png'});
    } catch(err)
    {
        console.log(err);
    }
}

async function start(username, password, link)
{
    try 
    {
        console.log(`Starting things up...`);
        const loginLink = `https://shopee.co.id/buyer/login`;
        const shopeeLink = `https://shopee.co.id/`;
        const browser = await puppeteer.launch({
            headless: false, 
            args: ["--user-data-dir=./Google/Chrome/User Data/",'--no-sandbox']
        }); // default is true
        console.log(`Successfully launched puppeteer...`);
        const page = await browser.newPage();
        console.log(`Successfully spawn chromium...`);
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36');
        console.log(`Heading ${shopeeLink}...`);
        await page.goto(shopeeLink, {waitUntil: 'networkidle2'});
        console.log(`${shopeeLink} loaded successfully...`)
        if(await checkLogin(page) === true)
        {
            console.log("You are logged in...");
           // await page.screenshot({path: 'screenshots/loggedIn.png'});
            console.log(`Heading ${link}`);
            await jalankan(page, link);
        } else {
            console.log("You are not logged in...");
            //await page.screenshot({path: 'screenshots/notLoggedIn.png'});
            await login(page, username, password, loginLink);
            await page.waitForTimeout(300);
            await page.waitForSelector('#main > div > div._3evFhm > div > div > form > div > div._1B7mke._1W4V3v > div.UEclfJ._27cR_W > input[type=tel]:nth-child(1)')
            await otp(page);
            await jalankan(page, link);
            // //#main > div > div._3evFhm > div > div > form > div > div._1B7mke._1W4V3v > div.oB34z1 > div:nth-child(2) > span:nth-child(3)
            // //#main > div > div._3evFhm > div > div > div > div._1B7mke._1W4V3v > div > button:nth-child(3)
            // await page.waitForSelector('#main > div > div._3evFhm > div > div > form > div > div._1B7mke._1W4V3v > div.UEclfJ._27cR_W > input[type=tel]:nth-child(1)')
            // await otp(page);
            // await jalankan(page, link);
        }        
    } catch(err)
    {
        console.log(err);
    }
}

rl.question('Username: ', function(username) {
    rl.stdoutMuted = true;
    ask = "Password: ";
    rl.question(ask, function(password) {
        rl.stdoutMuted = false;
        rl.question('Link: ', function(link) {
            start(username, password, link);
        });
    });
});
