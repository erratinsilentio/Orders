export interface Order {
  id: string | number;
  tytul: string;
  opis: string;
  ilosc: string | number;
  telefon: string;
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
