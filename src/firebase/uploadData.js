import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import {
  buildsymmetrical,
  cocre8,
  lawsoncon,
  millerab,
  barudoni,
} from "./companies";

const uploadData = async () => {
  await setDoc(doc(db, "real-estate-clients", "barudoni"), barudoni);
};

export default uploadData;
