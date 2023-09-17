const fs = require('fs');

const botid = 'bot5869164323:AAHHzFVVlTSQoWrNqMQPGP07pVc29-r8o2Y' // paste your bot id
const chatid = '-1001833730267' // paste your chat id



console.log("\nGohashindi Developer\n")
console.log("\nCalm.com Giftcard Checker By : https://t.me/hiopts\n")
console.log('')

const randomstr = (length) => {
    const characters = "_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;

}



const getdata = async () => {
    const randomstring = randomstr(10);
    let waitingMessage = "Please wait... Calm.com generator and checker Is Running"; // Inisialisasi pesan "Please wait"
    const url = "https://api.calm.com/gift/certificate/" + randomstring; // Inisialisasi url
    console.log(waitingMessage)
    await fetch(url, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "en-US,en;q=0.9,id;q=0.8,jv;q=0.7",
            "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    }).then(res => {
        // Hentikan interval
        if (res.status == 200) {
            const successMessage = `Gifcard is Live By @hiopts \n Click this link and Download Your Gifcard  And Redeem \n  Link : ${res.url} \n`; // Inisialisasi pesan "Success"   
            fetch(`https://api.telegram.org/${botid}/sendMessage?chat_id=${chatid}&text=` + successMessage).then(res => console.log(successMessage))
            fs.writeFile('result.txt', res.url, function (err) {
                if (err) throw err;
                console.log('Result Saved To result.txt');
            });
            setTimeout(getdata, 5000);
        } else {
            console.log("Error This Link Gifcard : " + res.url)
            setTimeout(getdata, 5000);
        }

    })


}



getdata()