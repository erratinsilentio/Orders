import { Client } from "../data";
export const formatName = (client: Client) => {
  let nameToLowerCase = client.imie.toLowerCase();
  let nameFormatted = nameToLowerCase.charAt(0).toUpperCase() + nameToLowerCase.slice(1);

  let surnameToLowerCase = client.nazwisko.toLowerCase();
  let surnameFormatted = surnameToLowerCase.charAt(0).toUpperCase() + surnameToLowerCase.slice(1);

  return nameFormatted + " " + surnameFormatted;
};
