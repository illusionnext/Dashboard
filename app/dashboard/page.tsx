import { v4 as uuidv4 } from "uuid";
import { randomUUID } from "crypto";

export default function Page() {
  const uuidLibrary = uuidv4(),
    uuidNative = crypto.randomUUID();

  console.log("uuid library", uuidLibrary); //This code only work in .log not in .dir
  console.log("uuid native", uuidNative); //Support only in modern browsers
  console.log("uuid nodejs", randomUUID()); //Support only in modern browsers Node.js v16.6.0 or later
  return <p>Dashboard Page</p>;
}
