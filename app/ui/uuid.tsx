"use cache";
import { v4 as uuidv4 } from "uuid";
import { randomUUID } from "crypto";

// ⚠️"use cache" () must be async

const UUID = async () => {
  const uuidLibrary = uuidv4(),
    uuidNative = crypto.randomUUID();

  console.log("uuid library", uuidLibrary); //This code only work in .log not in .dir
  console.log("uuid native", uuidNative); //Support only in modern browsers
  console.log("uuid nodejs", randomUUID()); //Support only in modern browsers Node.js v16.6.0 or later
  return (
    <section className="grid place-content-center place-items-center gap-4 ">
      <h1>
        uuid library: <strong className="text-red-500">{uuidLibrary}</strong>
      </h1>
      <h1>
        uuid native: <strong className="text-red-500">{uuidNative}</strong>
      </h1>
      <h1>
        uuid nodejs:{" "}
        <strong className="text-red-500">{randomUUID()}</strong>{" "}
      </h1>
    </section>
  );
};

export default UUID;
