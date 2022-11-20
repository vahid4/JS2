// const automobil = {
//         marka: "Audi",
//         model: "Q7",
//         boja: "Bela",
//         pogon: "quattro",
//         menjac: "Automatik",
//         km:240000,
//         vlasnik:["062321552","063930630"],
//         garaza:{
//             parking:"JKP Servis",
//             vikend:"od 17 free",
//             satnaKarta: "50",
//             dnevnaKarta: "200",
//             mesecnaKarta: "2000",
//             platiZa: function(pocetniDatum, krajnjiDatum) {
//             const pocetniDan=pocetniDatum.getDate();
//             const krajnjiDan=krajnjiDatum.getDate();
//             const ukupnoDana=krajnjiDan-pocetniDan;
//             return `Cena parkinga je ${ukupnoDana*this.dnevnaKarta}rsd.`
//     }
//         }
//     }
   
//     console.log(automobil.garaza.platiZa(new Date(2022,10,16), new Date(2022,10,21)))

// const amina=new Date(2003,11,8)
// const munevera=new Date(2003,8,13)

// const aRazlika=Date.parse(amina)
// const mRazlika=Date.parse(munevera)
// const razlika=Math.abs(aRazlika-mRazlika);
// const datumRazlike=new Date(razlika)
// console.log(datumRazlike.getMonth())

    // const datum=new Date("2003-03-26")
    // console.log(datum.getDate())
//-----------------------------------------------------

const person={
    ime:"Vahid",
    prezime:"Gasanin",
    datumRodjenja:new Date(2005,5,13),
    punoImeiPrezime: function(){
        return `${this.ime} ${this.prezime}`
    }
}
console.log(person.punoImeiPrezime())

const person2={
    ime:"Imran",
    prezime:"Hazirovic",
    datumRodjenja:new Date(2006,8,12)
}
// console.log(person2)
// //call() funkcijaa
// console.log(person.punoImeiPrezime.call(person2))
//-------------------------------

const restoran={
    hrana:"pizza",
    gosti:"zadovoljni",
    lokacija:"uzi centar grada"
}

const restoran2={
    hrana:"supa",
    gosti:"zgrozeni",
    lokacija:"Mur"
}


function poruka(grad,drzava) {

    return `Vecerasnji specijalitet naseg restorana je ${this.hrana}. I mozemo reci da su gosti ${this.gosti}.
    Nas restoran se nalazi u ${this.lokacija} u ${grad},${drzava}.`
    
}

// console.log(poruka.call(restoran,"Tutin", "Srbija"))
// console.log(poruka.call(restoran2,"Novi Pazar", "Srbija"))

//------------------------------------------------------------------------
//apply( funkcija se razlikuje od call() tako sto se argumenti ako ih ima stavljaju u nizu, prvi argument je objekat
// na koji zelimo da se primeni i on ne ide u zagradu.)
//console.log(poruka.apply(restoran,["Tutin", "Srbija"]))


//bind() funkcionise na nacin da prvo dodelimo datu funkciju sa objektom nekoj promenjiljivoj i onda tu promenljivu 
// ili funkciju pozovemo sa  potrebnim argumentima.

// const bindFunction=poruka.bind(restoran2)
// console.log(bindFunction("Tutinburg", "Srbija")

console.log(93.8723416378)