type Client = {
  id: string;
  imie: string;
};

export const getClient = async (id: string) => {
  const response = await fetch(`http://localhost:3000/clients/${id}`);
  const data = await response.json();
  console.log(data);
  return data as Client;
};

export const getAllClients = async () => {
  const response = await fetch(`http://localhost:3000/clients/`);
  const data = await response.json();
  console.log(data);
  return data as Client[];
};

export const addClient = async (client: Omit<Client, "id">) => {
  const response = await fetch(`http://localhost:3000/clients`, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(client),
  });
  const data = await response.json();
  console.log(data);
  return data as Client;
};

export const deleteClient = async (id: string) => {
  const response = await fetch(`http://localhost:3000/clients/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
};

export const updateClient = async (id: string, client: Client) => {
  const response = await fetch(`http://localhost:3000/clients/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(client),
  });
  const data = await response.json();
  console.log(data);
};
