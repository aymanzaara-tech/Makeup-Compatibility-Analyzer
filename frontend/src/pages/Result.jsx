import { useEffect, useState } from "react";
import { getBackendStatus } from "../services/productService";

function Result() {
  const [status, setStatus] = useState("Checking backend connection...");

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const data = await getBackendStatus();

        if (data.success) {
          setStatus("✅ Connected Successfully");
        } else {
          setStatus("❌ Connection Failed");
        }
      } catch (error) {
        setStatus("❌ Unable to connect to backend");
        console.error(error);
      }
    };

    checkBackend();
  }, []);

  return (
    <div className="container">
      <h1>Compatibility Results</h1>
      <p>Your compatibility score will appear here.</p>

      <hr />

      <h2>Backend Status</h2>
      <p>{status}</p>
    </div>
  );
}

export default Result;