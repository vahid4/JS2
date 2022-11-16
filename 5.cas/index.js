// const vaha ={
//     firstName: "Vahid",
//     lastName: "Gashi",
//     language:"bosanski",
//     setLanguage:function (jezik) {
//         this.language=jezik
//         return this.language
//     },
//     setNickName:function () {
//     vaha.nickname=this.firstName.slice(0,2)+(this.lastName.slice(0,2)).toLocaleLowerCase()
//        return vaha.nickname;
//     }
// }
// console.log(vaha.setNickName())
// console.log(vaha.language);
// console.log(vaha.setLanguage("nemacki"));

//---------domaci-------------------------
// 2. Zadatak

const automobil = {
    marka: "Audi",
    model: "Q7",
    boja: "Bela",
    pogon: "quattro",
    menjac: "Automatik",
    km:240000,
    vlasnik:[062321552],
    garaza:{
        parking:"JKP Servis",
        vikend:"od 17 free",
        satnaKarta: "50",
        dnevnaKarta: "200",
        mesecnaKarta: "2000",
        platiZa: function(from,to) {
      prviDatum=new Date(from)
      drugiDatum=new Date(to)
      razlika=parseInt((prviDatum-drugiDatum)/(1000*60*60*24),10)
      razlika=Math.abs(razlika)
      console.log(razlika)
    }
    }
}

 automobil.garaza.platiZa("2022-03-26","2022-04-26")
//------------------------
// const d=new Date("2022-03-26")
// const v=new Date("2022-04-26")
// razlika=parseInt((d-v)/(1000*60*60*24),10)
// razlika=Math.abs(razlika)
// console.log(razlika)
// if(razlika/30>1){
//     brojMeseci=razlika/30
//     brojMeseci=Math.floor(brojMeseci)
//     console.log(brojMeseci)
// }
// cenaMeseci=brojMeseci*2000;



// var date1 = new Date("7/11/2010");
// var date2 = new Date("7/15/2010");
// var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10); 
// console.log(diffDays)
