console.log("hi");

class Contact {
  name: string;
  email: string;
  phone: string;

  constructor(name: string, email: string, phone: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

class AddressBook {
  contacts: Contact[] = [];

  addContact(contact: Contact): void {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contact.email)) {
      throw new Error("Invalid email format");
    }

    // Name validation (example - check for empty name)
    if (!contact.name || contact.name.trim() === "") {
      throw new Error("Name cannot be empty");
    }

    // Name validation (example - check for empty name)
   
 let  myName = {};
 if (Object.keys(myName).length === 0) {
   console.log('name is empty');
 } else {
   console.log('name is not empty');
 }

    // You can add further validations for phone number format, etc.

    this.contacts.push(contact);
  }

  findContactByName(name: string): Contact | undefined {
    return this.contacts.find((contact) => contact.name === name);
  }

  filterByGroup(group: string): Contact[] {
    return this.contacts.filter((contact) => contact.group === group);
  }

  sortByName(): void {
    this.contacts.sort((a, b) => a.name.localeCompare(b.name));
  }

  // New functionalities:
  // 1. Validate various contact properties on addition (already implemented)
  // 2. Search contacts by name (partial match)

  searchContacts(searchTerm: string): Contact[] {
    const normalizedSearchTerm: string = searchTerm.toLowerCase();
    return this.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedSearchTerm)
    );
  }

  printContacts(): void {
    for (const contact of this.contacts) {
      console.log(`Name: ${contact.name}`);
      console.log(`Email: ${contact.email}`);
      console.log(`Phone: ${contact.phone}`);
      console.log("-----");
    }
  }
}

let addressBook: AddressBook = new AddressBook();

let contact1: Contact = new Contact("diana", "diana@example.com", "123-456-7890");
let contact2: Contact = new Contact("Alice Smith", "alice.smith@invalid", "456-789-0123"); // Invalid email
let contact3: Contact = new Contact("", "valid@email.com", "789-012-3456"); // Empty name

addressBook.addContact(contact1);

try {
  addressBook.addContact(contact2); // This will throw an error (invalid email)
  addressBook.addContact(contact3); // This will throw an error (empty name)
} catch (error:any) {
  console.error("Error adding contact:", error.message);
}

console.log("Contacts:");
addressBook.printContacts();

// Example usage of new search functionality
var searchResults: Contact[] = addressBook.searchContacts("diana");
console.log("Search results (name containing 'diana'):");
searchResults.forEach((contact) => console.log(` - ${contact.name}`));