interface IAdress {
  city: string;
  street: string;
  zipcode: number;
}

interface IEdu {
  school: string;
  grudationYear?: number;
}

interface IJob {
  company: string;
  startDate: Date;
  title: string;
}

interface IPerson {
  id: number;
  firstname: string;
  lastname: string;
  age: number;

  adress: IAdress;
  education: IEdu;
  job: IJob[];
}

const faruk: IPerson = {
  id: 23432,
  firstname: "Faruk",
  lastname: "Kaya",
  age: 35,

  adress: {
    city: "İSTANBUL",
    street: "4567 SK.",
    zipcode: 34410,
  },

  education: { 
    school: "İTÜ", 
    grudationYear: 2020 
  },

  job: [
    {
      company: "X Şirket",
      startDate: new Date(),
      title: "Frontend",
    },
  ],
};









// interface içerisnde tanımladığınız bazı tipler tekrardan tanımlanması gerekebilir.
// bUnun önüne geçmek için tekrardan kullanılabilceğini düşündüğümüz tipleri ayrıca tanımlarız
const adresBul = (adress: IAdress) => {
  console.log("rota oluşturuluyor");
};
