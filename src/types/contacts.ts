export default interface Contact{
    name: string,
    number:string,
    id: string,  
}
export type ContactId = Contact['id'];