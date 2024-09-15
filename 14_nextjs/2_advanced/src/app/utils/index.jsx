// api isteği atan fonksiyonu hazırla
export const getRecipies = async () => {
  const res = await fetch("https://dummyjson.com/recipes", {
    // cache: "no-store",
    // kullanınıcın 60 saniye boyunca yapıcağı bütümn siteklerde cache'deki veri alınıp kullanlır ama 60 saniye dolduktan sonraki yapıcağı ilk istekte cache'deki veri görmezden gelinir ve tekrar api isteği atar
    next: {
      revalidate: 60,
    },
  });

  return res.json();
};
