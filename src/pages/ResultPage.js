import React, { useState, useEffect } from 'react';

export default function ResultPage() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('https://csbsquizserver-production-ba05.up.railway.app/api/results')
      .then(response => response.json())
      .then(data => setResults(data));
  }, []);

  return (
    <div>
      <center>
        <h2 style={{ marginBottom: '20px' }}>Quiz Results</h2>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>Department</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>Score</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#fff' }}>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{result.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{result.department}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{result.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  )
}