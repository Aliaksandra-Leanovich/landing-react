import React, { useEffect, useState } from "react";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

interface IData {
  data: DocumentData;
  id: string;
}

export const EmailsTable = () => {
  const [emails, setEmails] = useState<IData[]>();

  useEffect(() => {
    getEmails();
  }, []);

  const getEmails = () => {
    const emailsCollectionRef = collection(db, "users");
    getDocs(emailsCollectionRef)
      .then((response) => {
        const users = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setEmails(users);
        console.log(users, emails);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      {emails?.map((email) => (
        <div key={email.id}>
          <p>{email.data.email} </p>
        </div>
      ))}
    </div>
  );
};
