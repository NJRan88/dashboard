import React, { useState } from "react";

export default function App() {
  const [inputs, setInputs] = useState({
    revenue: "",
    expenses: "",
    leads: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => {
    const { name, value } = e.target;
    setInputs((p) => ({ ...p, [name]: value }));
  };

  const rev = Number(inputs.revenue || 0);
  const exp = Number(inputs.expenses || 0);
  const leads = Number(inputs.leads || 0);
  const profit = rev - exp;

  return (
    <div className="container">
      <h1 className="h1">SoloPro Business Dashboard</h1>

      {!submitted ? (
        <div className="card" style={{maxWidth: 560}}>
          <div style={{display:"grid",gap:12}}>
            <input className="input" type="number" name="revenue" placeholder="Revenue this week ($)" onChange={handle}/>
            <input className="input" type="number" name="expenses" placeholder="Expenses this week ($)" onChange={handle}/>
            <input className="input" type="number" name="leads" placeholder="New Leads / Customers" onChange={handle}/>
            <textarea className="textarea" name="notes" placeholder="Notes / Key context..." onChange={handle}/>
            <button className="btn" onClick={() => setSubmitted(true)}>Generate Dashboard</button>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-3" style={{marginTop:16}}>
            <div className="card">
              <div className="label">Revenue</div>
              <div className="value">${rev.toLocaleString()}</div>
              <div className="badgeGood">↑ Growth vs last week</div>
            </div>

            <div className="card">
              <div className="label">Expenses</div>
              <div className="value">${exp.toLocaleString()}</div>
              <div className="badgeBad">↓ Higher than average</div>
            </div>

            <div className="card">
              <div className="label">Profit</div>
              <div className="value">${profit.toLocaleString()}</div>
              <div className="note">Revenue – Expenses</div>
            </div>

            <div className="card">
              <div className="label">New Leads / Customers</div>
              <div className="value">{leads.toLocaleString()}</div>
            </div>

            <div className="card" style={{gridColumn:"span 2"}}>
              <h2 className="sectionTitle">✅ Wins</h2>
              <ul className="list">
                <li>Revenue grew by X%</li>
                <li>Closed 3 new client deals</li>
              </ul>
            </div>

            <div className="card" style={{gridColumn:"span 2"}}>
              <h2 className="sectionTitle">⚠️ Risks</h2>
              <ul className="list">
                <li>Expenses trending high</li>
                <li>Lead-to-client conversion dropped</li>
              </ul>
            </div>

            <div className="card" style={{gridColumn:"span 3"}}>
              <h2 className="sectionTitle">🎯 Priorities for Next Week</h2>
              <ol className="list">
                <li>Reduce unnecessary expenses</li>
                <li>Double down on lead nurturing</li>
                <li>Plan next promotional campaign</li>
              </ol>
            </div>

            <div className="card" style={{gridColumn:"span 3"}}>
              <h2 className="sectionTitle">📝 Notes</h2>
              <div className="hr"></div>
              <p style={{whiteSpace:"pre-wrap", color:"#374151"}}>{inputs.notes || "—"}</p>
            </div>

            <div className="card" style={{gridColumn:"span 3", textAlign:"right"}}>
              <button className="btn" onClick={() => setSubmitted(false)}>Reset Inputs</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
