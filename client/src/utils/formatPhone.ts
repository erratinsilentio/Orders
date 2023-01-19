export const formatPhone = (phone: string) => {
  return (
    phone.slice(0, 3) +
    " " +
    phone.slice(3, 6) +
    " " +
    phone.slice(6, 9) +
    " " +
    phone.slice(9)
  );
};
