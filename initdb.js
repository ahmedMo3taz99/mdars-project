const sql = require("better-sqlite3");
const db = sql("schools.db");

const dummySchools = [
  {
    NameSchool: "مدارس الإحسان الدولية",
    TitleSchool: "من التأسيس الى الثانوية",
    Imagee: "/images/card-img1.png",
    Country: "دولية",
    CountryLang: "المنهاج الأمريكي",
    Installment: "امكانية التقسيط",
    SuccessIcon: "/images/success-icon.png",
    Money: "3500$",
  },

  {
    NameSchool: "مدارس الاحمودي الدولية",
    TitleSchool: "من التأسيس الى الجامعه",
    Imagee: "/images/card-img1.png",
    Country: "المحليه",
    CountryLang: "المنهاج الالمانيه",
    Installment: "لا امكانية التقسيط",
    SuccessIcon: "/images/success-icon.png",
    Money: "5000$",
  },

  {
    NameSchool: "مدارس الولي الخاصه",
    TitleSchool: "من التأسيس الى الجامعه",
    Imagee: "/images/card-img1.png",
    Country: "المحليه",
    CountryLang: "المنهاج الالمانيه",
    Installment: "لا امكانية التقسيط",
    SuccessIcon: "/images/success-icon.png",
    Money: "6000$",
  },

  {
    NameSchool: "مدارس ايحاجه الدولية",
    TitleSchool: "من التأسيس الى الجامعه",
    Imagee: "/images/card-img1.png",
    Country: "المحليه",
    CountryLang: "المنهاج الالمانيه",
    Installment: "لا امكانية التقسيط",
    SuccessIcon: "/images/success-icon.png",
    Money: "88888$",
  },

  {
    NameSchool: "مدارس حبيبيي الدولية",
    TitleSchool: "من التأسيس الى الجامعه",
    Imagee: "/images/card-img1.png",
    Country: "المحليه",
    CountryLang: "المنهاج الالمانيه",
    Installment: "لا امكانية التقسيط",
    SuccessIcon: "/images/success-icon.png",
    Money: "5000$",
  },

  {
    NameSchool: "مدارس حبيبييتي الدولية",
    TitleSchool: "من التأسيس الى الجامعه",
    Imagee: "/images/card-img1.png",
    Country: "المحليه",
    CountryLang: "المنهاج الالمانيه",
    Installment: "لا امكانية التقسيط",
    SuccessIcon: "/images/success-icon.png",
    Money: "555555$",
  },

  {
    NameSchool: "مدارس محمد الدولية",
    TitleSchool: "من التأسيس الى الجامعه",
    Imagee: "/images/card-img1.png",
    Country: "المحليه",
    CountryLang: "المنهاج الالمانيه",
    Installment: "لا امكانية التقسيط",
    SuccessIcon: "/images/success-icon.png",
    Money: "54554$",
  },

  {
    NameSchool: "مدارس احمد الدولية",
    TitleSchool: "من التأسيس الى الجامعه",
    Imagee: "/images/card-img1.png",
    Country: "المحليه",
    CountryLang: "المنهاج الالمانيه",
    Installment: "لا امكانية التقسيط",
    SuccessIcon: "/images/success-icon.png",
    Money: "5000$",
  },

  {
    NameSchool: "مدارس بيلا الدولية",
    TitleSchool: "من التأسيس الى الجامعه",
    Imagee: "/images/card-img1.png",
    Country: "المحليه",
    CountryLang: "المنهاج الالمانيه",
    Installment: "لا امكانية التقسيط",
    SuccessIcon: "/images/success-icon.png",
    Money: "5000$",
  },

  {
    NameSchool: "مدارس هلا الدولية",
    TitleSchool: "من التأسيس الى الجامعه",
    Imagee: "/images/card-img1.png",
    Country: "المحليه",
    CountryLang: "المنهاج الالمانيه",
    Installment: "لا امكانية التقسيط",
    SuccessIcon: "/images/success-icon.png",
    Money: "5000$",
  },

  {
    NameSchool: "مدارس محمديين الدولية",
    TitleSchool: "من التأسيس الى الجامعه",
    Imagee: "/images/card-img1.png",
    Country: "المحليه",
    CountryLang: "المنهاج الالمانيه",
    Installment: "لا امكانية التقسيط",
    SuccessIcon: "/images/success-icon.png",
    Money: "5000$",
  },

  {
    NameSchool: "مدارس ساره الدولية",
    TitleSchool: "من التأسيس الى الجامعه",
    Imagee: "/images/card-img1.png",
    Country: "المحليه",
    CountryLang: "المنهاج الالمانيه",
    Installment: "لا امكانية التقسيط",
    SuccessIcon: "/images/success-icon.png",
    Money: "5000$",
  },
  {
    NameSchool: "مدارس كوكو الدولية",
    TitleSchool: "من التأسيس الى الجامعه",
    Imagee: "/images/card-img1.png",
    Country: "المحليه",
    CountryLang: "المنهاج الالمانيه",
    Installment: "لا امكانية التقسيط",
    SuccessIcon: "/images/success-icon.png",
    Money: "5000$",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS schools (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       NameSchool TEXT NOT NULL UNIQUE,
       TitleSchool TEXT NOT NULL,
       Imagee TEXT NOT NULL,
       Country TEXT NOT NULL,
       CountryLang TEXT NOT NULL,
       Installment TEXT NOT NULL,
       SuccessIcon TEXT NOT NULL,
       Money TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO schools VALUES (
         null,
         @NameSchool,
         @TitleSchool,
         @Imagee,
         @Country,
         @CountryLang,
         @Installment,
         @SuccessIcon,
         @Money
      )
   `);

  for (const school of dummySchools) {
    stmt.run(school);
  }
}

initData();
