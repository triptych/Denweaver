import { Client, Databases, ID, Query, Account } from "appwrite";

const client = new Client();
// const PROJECT_ID = '64a1b20d159e6fafb4f2';
//const DATABASE_ID = '64a9b62bdb31a58d0925';
// const COLLECTION_ID_MESSAGE = '64a9b63f67d854d80f84'



client
  .setEndpoint('https://appwrite.denweaver.com/v1') // Your API Endpoint
  .setProject(import.meta.env.PUBLIC_PROJECT_ID) // Your project ID
  ;


console.log("Client from client.js:", client)
const account = new Account(client);

export { client, account }