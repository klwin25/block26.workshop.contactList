import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      const response = await fetch(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
      );
      const data = await response.json();
      setContact(data);
      console.log(data);
    }

    fetchContact();
  }, [selectedContactId]);

  return (
    <div>
      {contact ? (
        <div>
          <h2>{contact.name}</h2>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>
            Address: {contact.address.street}, {contact.address.city},{" "}
            {contact.address.zipcode}
          </p>
          <p>Website: {contact.website}</p>
          <p>
            Company: {contact.company.name}, {contact.company.catchPhrase},
            {contact.company.bs}
          </p>
          <button onClick={() => setSelectedContactId(null)}>
            Back to Contact List
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
