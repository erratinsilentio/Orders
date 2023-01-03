export interface Order {
  id: string | number;
  tytul: string;
  opis: string;
  ilosc: string | number;
}

export interface Client {
  id?: string | number;
  imie: string;
  nazwisko: string;
  ulica: string;
  kod?: string;
  miasto: string;
  region?: string;
  zdjecie?: string;
  telefon: string;
  orders?: Order[];
}

export const clientData: Client[] = [
  {
    ID: 1,
    Imie: "Jan",
    Nazwisko: "Kowalski",
    Ulica: "Wiśniowa",
    Kod: "00-1111",
    Miasto: "Kraków",
    Region: "Zachodni",
    Telefon: "+48123456789",
    Orders: [{ ID: "1632", Tytul: "Buty", Ilosc: "1", Opis: "Wygodne" }],
  },
  {
    ID: 2,
    Imie: "Marian",
    Nazwisko: "Kowalski",
    Ulica: "Wiśniowa",
    Kod: "00-1111",
    Miasto: "Kraków",
    Region: "Zachodni",
    Telefon: "+48898990000",
    Orders: [{ ID: "1666", Tytul: "Koszula", Ilosc: "1", Opis: "W kratke" }],
  },
  {
    ID: 3,
    Imie: "Józef",
    Nazwisko: "Kowalski",
    Ulica: "Wiśniowa",
    Kod: "00-1111",
    Miasto: "Kraków",
    Region: "Zachodni",
    Telefon: "+48777456789",
    Orders: [{ ID: "1991", Tytul: "Plecak", Ilosc: "2", Opis: "Na plecy" }],
  },
  {
    ID: 4,
    Imie: "Andrzej",
    Nazwisko: "Kowalski",
    Ulica: "Wiśniowa",
    Kod: "00-1111",
    Miasto: "Kraków",
    Region: "Zachodni",
    Telefon: "+48847948735",
    Orders: [
      { ID: "1863", Tytul: "Gitara", Ilosc: "4", Opis: "Wow" },
      { ID: "1866", Tytul: "Cygaro", Ilosc: "14", Opis: "Uwaga" },
    ],
  },
  {
    ID: 5,
    Imie: "Mariusz",
    Nazwisko: "Kowalski",
    Ulica: "Wiśniowa",
    Kod: "00-1111",
    Miasto: "Kraków",
    Region: "Zachodni",
    Telefon: "+48119938028",
    Orders: [{ ID: "1932", Tytul: "Spodnie", Ilosc: "5", Opis: "Wygodne" }],
  },
];
