/*
 * Access Modifiers - Erişim Belirteçleri

 * Class elemenları ile hassas bilgiler tutucağımız zaman bu bilgilerin class'In dışarısından erişilip erişilmeyeceğini belirtmek isteriz.

 * Örneğin kredi kartı bilgilerini tutan bir class olsun bu class'ın tutucağı bilgileri kod içerisnde her yerde kullanılmasını önlemek isteyebilir.

 * 3 adet erişim belirteci vardır.

 * public: hem class dışarısında hemde class'ı miras alan diğer class'lardan erişilebilir
 * protected: class'dışarısında erişilemez ama class'ı miras alab diğer class'lardan erişilebilir.
 * private: hem class dışarısından hem de class'ı miras alan diğer class'lardan erişilemez
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// PUBLIC
var Arac = /** @class */ (function () {
    function Arac() {
        this.marka = "Honda";
    }
    Arac.prototype.tanit = function () {
        console.log("Bu arabanın markası: ", this.marka); // tanımlandığı class içerisinden eriştik
    };
    return Arac;
}());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Motor.prototype.calistir = function () {
        console.log(this.marka + " motoru çalıştı"); // miras alındığı class içerisinden eriştik
    };
    return Motor;
}(Arac));
var honda = new Arac();
console.log(honda.marka); // class'ın dışarısnda eriştik
// PROTECTED
var EvcilHayvan = /** @class */ (function () {
    function EvcilHayvan() {
        this.ad = "Boncuk";
    }
    return EvcilHayvan;
}());
var Kopek = /** @class */ (function (_super) {
    __extends(Kopek, _super);
    function Kopek() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kopek.prototype.havla = function () {
        console.log(this.ad + " havlıyor");
    };
    return Kopek;
}(EvcilHayvan));
var kopek = new Kopek();
// kopek.ad; // DIŞARIDAN ERİŞİM YOK !
// PRIVATE
var OzelPersonel = /** @class */ (function () {
    function OzelPersonel() {
        this.isim = "Mahmut";
    }
    OzelPersonel.prototype.selamla = function () {
        console.log("merhaba " + this.isim);
    };
    return OzelPersonel;
}());
var GumrukPersoneli = /** @class */ (function (_super) {
    __extends(GumrukPersoneli, _super);
    function GumrukPersoneli() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GumrukPersoneli.prototype.tanit = function () {
        // this.isim // miras alınan class'ta erişime kapalı
    };
    return GumrukPersoneli;
}(OzelPersonel));
var kisi = new GumrukPersoneli();
// kisi.isim // dışarında erişime kapalı
/*
 * NOT: Erişim belirteçleri aynı bütün ts'e özel olan kodlarda olduğu gibi kodu derlediğimizde ortadan kalkar. Yani berliteçler sadece geliştirme aşamasını daha güvenli hale getirmek için kullanılır proje yayınladığında bir işlevi olmaz
 */
var isim = "ahmet";
