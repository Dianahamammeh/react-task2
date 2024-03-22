declare class Contact {
    name: string;
    email: string;
    phone: string;
    constructor(name: string, email: string, phone: string);
}
declare class AddressBook {
    contacts: Contact[];
    addContact(contact: Contact): void;
    findContactByName(name: string): Contact | undefined;
    filterByGroup(group: string): Contact[];
    sortByName(): void;
    searchContacts(searchTerm: string): Contact[];
    printContacts(): void;
}
declare let addressBook: AddressBook;
declare let contact1: Contact;
declare let contact2: Contact;
declare let contact3: Contact;
declare var searchResults: Contact[];
