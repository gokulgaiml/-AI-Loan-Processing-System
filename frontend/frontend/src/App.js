import React, { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    annual_income: "",
    credit_score: "",
    loan_type: "",
    loan_amount: "",
    tenure: ""
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const processLoan = async () => {
    setLoading(true);
    setResult("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/process-loan",
        {
          ...formData,
          annual_income: Number(formData.annual_income),
          credit_score: Number(formData.credit_score),
          loan_amount: Number(formData.loan_amount),
          tenure: Number(formData.tenure)
        }
      );

      setResult(response.data.result);
    } catch (error) {
      setResult("⚠️ Error processing loan. Please check backend.");
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>🏦 AI Loan Processing System</h1>
        <p style={styles.subtitle}>
          One-Click Intelligent Loan Approval Agent
        </p>

        <div style={styles.form}>
          <input style={styles.input} name="name" placeholder="Full Name" onChange={handleChange} />
          <input style={styles.input} name="annual_income" placeholder="Annual Income" onChange={handleChange} />
          <input style={styles.input} name="credit_score" placeholder="Credit Score" onChange={handleChange} />
          <input style={styles.input} name="loan_type" placeholder="Loan Type (Personal/Home/Auto)" onChange={handleChange} />
          <input style={styles.input} name="loan_amount" placeholder="Loan Amount" onChange={handleChange} />
          <input style={styles.input} name="tenure" placeholder="Tenure (Years)" onChange={handleChange} />

          <button onClick={processLoan} style={styles.button}>
              Process My Loan
          </button>
        </div>

        {loading && <p style={styles.loading}>🤖 AI Agent is Processing...</p>}

        {result && (
          <div style={styles.result}>
            <h3>📋 Loan Decision</h3>
            <pre style={styles.resultText}>{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #027d5dff, #041d5dff)",
    fontFamily: "Segoe UI, sans-serif"
  },
  card: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(15px)",
    padding: "40px",
    borderRadius: "20px",
    width: "450px",
    color: "white",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
  },
  title: {
    textAlign: "center",
    marginBottom: "5px"
  },
  subtitle: {
    textAlign: "center",
    fontSize: "14px",
    marginBottom: "25px",
    opacity: 0.8
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "14px"
  },
  button: {
    marginTop: "15px",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #00b7ffff, #19e38bff)",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
  },
  loading: {
    marginTop: "20px",
    textAlign: "center",
    color: "#ffd900c7"
  },
  result: {
    marginTop: "25px",
    background: "rgba(34, 22, 22, 0.74)",
    padding: "20px",
    borderRadius: "10px"
  },
  resultText: {
    whiteSpace: "pre-wrap",
    fontSize: "14px"
  }
};

export default App;