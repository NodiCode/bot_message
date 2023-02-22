const TOKEN = '6092600931:AAEEtHeoGVxWmeg_mWVDECUa9mMadrpmXbM'
const CHAT_ID = "692692208"
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

const success = document.getElementById("success")

document.getElementById("tg").addEventListener("submit", function(e)  {
        e.preventDefault();
        let message = `<b> Заявка с сайта! </b>\n`;
        message += `<b>Отправитель: </b> ${this.name.value}\n`;
        message += `<b>Номер: </b> ${this.number.value}\n`;
        message += `<b>Почта: </b> ${this.email.value}\n`;
        console.log(message);
        axios.post(URL_API,{ 
            chat_id:CHAT_ID, 
            parse_mode:"html", 
            text:message 
        }).then((res)=>{ 
            this.name.value="" 
            this.number.value="" 
            this.email.value="" 
            success.innerHTML="Сообщение отправлено!" 
            success.style.display="block" 
        }).catch((err)=>{ 
            console.log(err); 
        }).finally(()=>console.log(success))
    })
    

// https://api.telegram.org/bot6092600931:AAEEtHeoGVxWmeg_mWVDECUa9mMadrpmXbM/getUpdates

