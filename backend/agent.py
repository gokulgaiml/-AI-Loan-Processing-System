import os
from dotenv import load_dotenv
from loan_rules import calculate_eligibility
from langchain_groq import ChatGroq

load_dotenv()

print("Loaded GROQ KEY:", os.getenv("GROQ_API_KEY"))

llm = ChatGroq(
    model="llama-3.1-8b-instant",  
    temperature=0.3,
    groq_api_key=os.getenv("GROQ_API_KEY")
)

def run_ai_agent(application_data, policy_context):

    eligibility, rule_reason = calculate_eligibility(application_data)

    prompt = f"""
You are a Senior AI Loan Officer.

Customer Application:
{application_data}

Bank Policy Context:
{policy_context}

Rule Engine Result:
Eligibility: {eligibility}
Reason: {rule_reason}

Tasks:
1. Final Decision (APPROVED / REJECTED)
2. Clear explanation
3. If rejected, suggest alternative
4. If approved, provide:
   - Approved amount
   - Interest rate suggestion (10-15%)
   - EMI estimate
   - Disbursement timeline

Return structured output.
"""

    response = llm.invoke(prompt)

    return response.content