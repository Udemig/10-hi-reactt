/*
 * Abstract Class (Soyut Sınıf)

 * Abstract class'lar sınıflar için birebir şema görevi görür.
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların ortak özelliklerini ve methodlarını belirleriz
 
 * Soyut sınıfların doğrudan örnekleri oluşturulamazlar. Bundan dolayı soyut sınıflara, normal sınıflar için bir tip tanımı diyebiliriz. 
 */

// Soyut Sınıf
abstract class TakePhoto {
  constructor(cameraMode: string, filter: string) {}

  takePicture() {
    console.log("fotoğraf çekiliyor..");
  }

  // alt sınıflarda share methodunun görevi değişkenlik göstericeği için görevini tanımlamayıp soyut bir method olarak tanımladık
  abstract share(send_to: string): void;
}













// new TakePhoto() //! Soyut bir sınıfın örneği doğrudan OLUŞTURULAMAZ
// Abstract class'ın özelliklerini ve methodlarını miras alana yeni bir alt class oluşturucaz.
// Oluşturduğumuz bu alt class'ın içerisinde abstract methodun görevini tanımlamak zorundayız.

class Instagram extends TakePhoto {
  // abstract class'da oluşturulan ama görevi tanımlanmayan methodun görevinni tanımla (implement)
  share(send_to: string): void {
    console.log(`Çeklien foto ${send_to} ile paylaşılıyor..`);
  }
}

const insta = new Instagram("ön kamera", "gece");
insta.takePicture();
insta.share("@ahmet");

// 2.kez soyut sınıfı miras alan bir alt class daha oluşturalım
class Twitter extends TakePhoto {
  share(send_to: string): void {
    console.log(`Gönderilen tweet ${send_to} ile paylaşılıyor`);
  }
}

const tw = new Twitter("arka", "doğa");
tw.takePicture();
tw.share("@ali");
