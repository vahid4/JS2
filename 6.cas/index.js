const automobil = {
        marka: "Audi",
        model: "Q7",
        boja: "Bela",
        pogon: "quattro",
        menjac: "Automatik",
        km:240000,
        vlasnik:["062321552","063930630"],
        garaza:{
            parking:"JKP Servis",
            vikend:"od 17 free",
            satnaKarta: "50",
            dnevnaKarta: "200",
            mesecnaKarta: "2000",
            platiZa: function(pocetniDatum, krajnjiDatum) {
            const pocetniDan=pocetniDatum.getDate();
            const krajnjiDan=krajnjiDatum.getDate();
            const ukupnoDana=krajnjiDan-pocetniDan;
            return `Cena parkinga je ${ukupnoDana*this.dnevnaKarta}rsd.`
    }
        }
    }
   
    console.log(automobil.garaza.platiZa(new Date(2022,10,16), new Date(2022,10,21)))

const amina=new Date(2003,11,8)
const munevera=new Date(2003,8,13)

const aRazlika=Date.parse(amina)
const mRazlika=Date.parse(munevera)
const razlika=Math.abs(aRazlika-mRazlika);
const datumRazlike=new Date(razlika)
console.log(datumRazlike.getMonth())

    // const datum=new Date("2003-03-26")
    // console.log(datum.getDate())

    