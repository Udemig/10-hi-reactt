//* Soyut Bir Parent Class
abstract class MusicPlayer {
  constructor(public apiUrl: string) {}

  getMusics() {
    console.log(this.apiUrl + " api'ından müzikler alınıyorr....");
  }

  abstract playMusic(name: string): void;
}

// Child Class
class Spotify extends MusicPlayer {
  playMusic(name: string): void {
    console.log(name + " spotify'dan çalıınıyor...");
  }
}

// Child Class
class AppleMusic extends MusicPlayer {
  playMusic(name: string): void {
    console.log(name + " applemusic'den çalınıyor...");
  }
}

const spo = new Spotify("www.api.spity.com");
spo.getMusics();
spo.playMusic("test");

const apple = new AppleMusic("www.apple.api.com");
apple.getMusics();
apple.playMusic("deneme");
