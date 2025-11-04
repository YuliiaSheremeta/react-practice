import axios from "axios";
//import {Contact,ContactId} from "../types/contacts.ts";

interface Contact{
    name: string,
    number:string,
    id: string,  
}

type ContactId = Contact['id'];

interface ContactUpdate {
    name: string,
    number: string,
    id:ContactId,
}


axios.defaults.baseURL = 'https://67f427facbef97f40d2d8cb8.mockapi.io';

export const getContacts = async () => { 
    const res = await axios.get<Contact[]>('/contacts');
    return res.data;
};

export const createNewContact = async (newContact:Pick<Contact,'name'|'number'>) => {
    const res = await axios.post<Contact>('/contact',newContact);
    return res.data;
};
 
export const deleteContact = async (contactId:ContactId) => {
    const res = await axios.delete<Contact>(`/contacts/${contactId}`);
    return res.data;
}

export const updateContact = async (taskUpdate: ContactUpdate) => { 
    const res = await axios.put<Contact>(`/contacts/${taskUpdate.id}`, taskUpdate);
    return res.data;
}