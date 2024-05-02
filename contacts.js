import fs from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "node:url";
import colors from "colors";
import { randomUUID } from "crypto";

const _dirname = dirname(fileURLToPath(import.meta.url));
const contactsPath = `${_dirname}\\db\\contacts.json`;

//CRUD

//Read
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, { encoding: "utf8" });
    const contacts = JSON.parse(data);
  } catch (error) {
    console.log("There was an error".bgRed.white);
    console.error(error);
  }
}

//Update
async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, { encoding: "utf-8" });
    const contacts = JSON.parse(data);
    const contact = contacts.find((target) => target.id === contactId);

    if (contact) {
      console.table(contact);
    } else {
      console.error("Contact was not found".bgRed);
    }
  } catch (error) {
    console.log("There was an error".bgRed.white);
    console.error(error);
  }
}

//Delete
async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, { encoding: "utf-8" });
    const contacts = JSON.parse(data);
    const newList = contacts.filter((target) => target.id !== contactId);

    await fs.writeFile(contactsPath, JSON.stringify(newList, null, 2));
    console.log("Contact deleted".bgGreen);
    console.table(newList);
  } catch (error) {
    console.log("There was an error".bgRed.white);
    console.error(error);
  }
}

//Create
async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath, { encoding: "utf-8" });
    const contacts = JSON.parse(data);
    const newProductId = randomUUID();

    const newContact = {
      id: newProductId,
      name,
      email,
      phone,
    };

    contacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    console.log("The contact was created succesfully".bgGreen);
  } catch (error) {
    console.log("There was an error".bgRed.white);
    console.error(error);
  }
}

export { listContacts, getContactById, removeContact, addContact };
