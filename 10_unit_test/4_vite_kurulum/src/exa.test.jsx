describe("hespalama testleri", () => {
  // testlerde kullanıcağım ortak değişken
  let value = 0; // 0 // 1 // 0

  beforeEach(() => {
    value = 0;
  }); // 3 kez çalışır (her testten önce)

  afterEach(() => {
    value = null;
  }); // 3 kez çalışır (her testten sonra)

  it("başlangıç değeri 0'dır", () => {
    expect(value).toBe(0);
  });

  it("başlangıç değerine ++ operatörü ile arttırsak 1 olur", () => {
    value++;
    expect(value).toBe(1);
  });

  it("başlangıç değerine -- operatörü ile azaltırsak -1 olur", () => {
    value--;
    expect(value).toBe(-1);
  });
});
