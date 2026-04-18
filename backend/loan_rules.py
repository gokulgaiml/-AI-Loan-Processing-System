def calculate_eligibility(data):

    monthly_income = data["annual_income"] / 12
    max_loan = monthly_income * 20

    if data["credit_score"] < 650:
        return False, "Credit score below minimum requirement."

    if data["loan_amount"] > max_loan:
        return False, "Requested amount exceeds eligibility (20x monthly income)."

    return True, "Eligible based on internal rules."