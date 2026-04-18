from flask import Flask, request, jsonify
from flask_cors import CORS
from agent import run_ai_agent

app = Flask(__name__)
CORS(app)

@app.route("/process-loan", methods=["POST"])
def process_loan():

    data = request.json

    
    policy_context = """
    PERSONAL LOAN POLICY:
    - Minimum credit score: 650
    - Maximum loan: 20 times monthly income
    - Maximum tenure: 5 years
    - Debt-to-income ratio must be below 40%

    HOME LOAN POLICY:
    - Minimum credit score: 700
    - Maximum tenure: 25 years
    - Minimum annual income: 300000

    AUTO LOAN POLICY:
    - Minimum credit score: 600
    - Maximum tenure: 7 years

    """

    result = run_ai_agent(data, policy_context)

    return jsonify({"result": result})


if __name__ == "__main__":
    app.run(debug=True)