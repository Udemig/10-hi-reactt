// cevap vermesi belirli bir sn süren fonksiyon
export async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Login = async () => {
  // burada api isteğini attığımızı ve 3sn cevap veridğini düşünelim
  await delay(2000);

  return <div>Giriş Sayfası</div>;
};

export default Login;
