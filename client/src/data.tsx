export type Status = "new" | "awaiting" | "payed";

export interface Order {
  id: string;
  tytul: string;
  opis: string;
  ilosc: string | number;
  telefon: string;
  kwota: number;
  status: Status;
}

export interface Client {
  id: string;
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
