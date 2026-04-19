#  AI Loan Processing System

An AI-powered Loan Processing System that combines a Rule-Based Engine with a Large Language Model (LLM) to automate loan approval decisions.

---

##  Project Overview

This project simulates a real-world banking loan approval workflow using:

- Rule-based eligibility checks
- AI-powered reasoning using Groq LLM
- Structured decision output
- Modern React frontend
- Flask backend API

The system evaluates customer loan applications and returns:

- Final Approval / Rejection
- Explanation
- Approved Amount (if eligible)
- Suggested Interest Rate
- EMI Estimate
- Disbursement Timeline
- Alternative Suggestions (if rejected)

---

##  Architecture

```
User (React Frontend)
        ↓
Flask Backend API
        ↓
Rule Engine (Eligibility Logic)
        ↓
Groq LLM (AI Loan Officer)
        ↓
Structured Decision Response
```

---

##  Tech Stack

###  Frontend
- React.js
- Axios
- Modern UI Styling

###  Backend
- Flask
- Flask-CORS
- Python-dotenv

###  AI & Processing
- LangChain
- LangChain-Groq
- Groq LLM (Llama model)
- Custom Loan Rule Engine

---

##  Project Structure

```
loan-ai-agent/
│
├── backend/
│   ├── app.py
│   ├── agent.py
│   ├── loan_rules.py
│   ├── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── package.json
│
└── README.md
```

---

##  Installation & Setup

### 1️ Clone Repository

```bash
git clone YOUR_GITHUB_LINK
cd loan-ai-agent
```

---

### 2️ Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   
pip install -r requirements.txt
```

Create `.env` file:

```
GROQ_API_KEY=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 
```

Run backend:

```bash
python app.py
```

Backend runs on:
```
http://127.0.0.1:5000
```

---

### 3️ Frontend Setup

Open new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend runs on:
```
http://localhost:3000
```

---

##  Project Demo

This demo video shows:

- Loan Application Submission
- Rule Engine Evaluation
- AI Agent Decision
- Approved & Rejected Cases
- EMI Calculation
- Final Structured Output

 **Watch the Demo Here:**  
https://drive.google.com/file/d/1YmA3ZMDq7ocmtsnqZVCxXMTy7VtQzWEs/view?usp=sharing

---

##  How It Works

1. User submits loan details.
2. Backend rule engine checks:
   - Credit Score
   - Income
   - Loan Amount
3. AI Agent (LLM) acts as Senior Loan Officer.
4. Final structured decision is generated.
5. Response sent back to frontend.

---

##  Security Note

- API keys are stored securely using `.env`
- `.env` file is excluded from GitHub
- No secrets are pushed to repository

---

##  Key Features

✔ Rule-Based Decision Logic  
✔ LLM-Powered Final Review  
✔ EMI Calculation  
✔ Clean UI with Status Badges  
✔ Structured AI Output  
✔ End-to-End Loan Workflow  

---
