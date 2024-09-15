const Page = ({ params }) => {
  const parameters = params.slug;

  if (parameters.length == 1) {
    return `${parameters[0]} belgesindesiniz`;
  }

  if (parameters.length == 2) {
    return `${parameters[0]} belgesinde ${parameters[1]} sayfasındasınız`;
  }

  if (parameters.length > 2) {
    return `${parameters[0]} belgesinde ${parameters[1]} sayfasında ${parameters[2]} satırındasınız`;
  }

  return (
    <div>
      <p>belge yok</p>
    </div>
  );
};

export default Page;
