import { Client, Account, TablesDB, } from "appwrite";

export const client = new Client();
const url = (import.meta as any).env.VITE_APPWRITE_ENDPOINT;
const projectId = (import.meta as any).env.VITE_APPWRITE_PROJECT_ID;

client.setEndpoint(url).setProject(projectId);
export const account = new Account(client);
export const tableDB = new TablesDB(client)
export { ID } from "appwrite";
