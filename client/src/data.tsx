export interface Client {
  ID: string | number;
  Imie: string;
  Nazwisko: string;
  Ulica: string;
  Kod?: string;
  Miasto: string;
  Region?: string;
  Zdjecie?: string;
  Telefon?: string;
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
  },
  {
    ID: 2,
    Imie: "Marian",
    Nazwisko: "Kowalski",
    Ulica: "Wiśniowa",
    Kod: "00-1111",
    Miasto: "Kraków",
    Region: "Zachodni",
    Telefon: "+48123456789",
  },
  {
    ID: 3,
    Imie: "Józef",
    Nazwisko: "Kowalski",
    Ulica: "Wiśniowa",
    Kod: "00-1111",
    Miasto: "Kraków",
    Region: "Zachodni",
    Telefon: "+48123456789",
  },
  {
    ID: 4,
    Imie: "Andrzej",
    Nazwisko: "Kowalski",
    Ulica: "Wiśniowa",
    Kod: "00-1111",
    Miasto: "Kraków",
    Region: "Zachodni",
    Telefon: "+48123456789",
  },
  {
    ID: 5,
    Imie: "Mariusz",
    Nazwisko: "Kowalski",
    Ulica: "Wiśniowa",
    Kod: "00-1111",
    Miasto: "Kraków",
    Region: "Zachodni",
    Telefon: "+48123456789",
  },
];
