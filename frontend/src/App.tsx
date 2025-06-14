import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

interface Contact {
  id: number;
  name: string;
  email: string;
}

console.log('App rendering...');

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8899';

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${API_URL}/contacts/`);
      setContacts(res.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const addContact = async () => {
    if (!name || !email) return;
    try {
      await axios.post(`${API_URL}/contacts/`, { name, email });
      setName('');
      setEmail('');
      fetchContacts();
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const deleteContact = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/contacts/${id}/`);
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-petal p-8 text-gray-700 font-[Georgia] tracking-wide animate-float">
      <h1 className="text-5xl font-bold text-rose mb-8 drop-shadow-lg">
        💖 Contact Book 💖
      </h1>

      <div className="mb-8 flex flex-col gap-6 w-full items-center">
        <input
          className="border p-3 rounded-md w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-3 rounded-md w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={addContact}
          className="bg-rose text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Add
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-2xl">
        {contacts.length === 0 ? (
          <p className="text-center text-gray-500">No contacts yet</p>
        ) : (
          <ul className="divide-y">
            {contacts.map((contact) => (
              <li
                key={contact.id}
                className="flex justify-between items-center py-2"
              >
                <span>
                  <strong>{contact.name}</strong> — {contact.email}
                </span>
                <button
                  onClick={() => deleteContact(contact.id)}
                  className="text-red-500 hover:underline"
                >
                  delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
console.log('App loaded');
