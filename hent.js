import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";

function hentSpoegsmaal() {
  const [question, setQuestion] = useState("");
  const [values, loading, error] = useCollection(
    collection(database, "questions")
  );
  const data = values?.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return data;
}
