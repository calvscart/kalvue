import { useEffect, useState } from 'react';

export default function Lanyard() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.lanyard.rest/v1/users/' + process.env.DCID);
        const data = await response.json();
        setStatus(data);
      } catch (err) {
        console.error("Failed to fetch Lanyard status", err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="text-white mt-6">
      <h2 className="text-xl font-bold mb-2">Lanyard Status</h2>
      {status ? (
        <pre className="bg-gray-800 p-4 rounded overflow-auto text-sm max-h-80">
          {JSON.stringify(status, null, 2)}
        </pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}