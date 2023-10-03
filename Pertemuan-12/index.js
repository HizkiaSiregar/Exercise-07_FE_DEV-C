// Class in JS
// ----------

// Objct Literal

const mobil = {
    transmisi : "manual",
    bahanbakar : "Bensin",
    mesin : 1500
};

console.log(mobil)

class Mobil {
    constructor(transmisi, bahanbakar, mesin) {
        this.transmisi = transmisi;
        this.bahanbakar = bahanbakar;
        this.mesin = mesin;
    }
}

const mobil1 = new Mobil ("Manual", "Bensin", 1500)
console.log(mobil1)

class Toyota extends Mobil {
    constructor(merek, warna, transmisi, bahanbakar, mesin) {
        super(transmisi, bahanbakar, mesin)
        this.merek = merek;
        this.warna = warna;
    }
}

const toy = new Toyota(23, "Grey", "Manual", "Bensin", 1500)
console.log(toy)