export interface ContactListProps {
  contacts: Contact[];
  selectedId: number;
  onSelect: (id: number) => void;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
}

export interface EditContactProps {
  savedContact: Contact;
  onSave: (updateData: Contact) => void;
}