import React from "react";

const constants = {
  buttonClasses: "btn btn-primary",
  navTopName: "Home",
  numResPages: 2,
  numPostingPages: 2,
  addressValues: [
    "Residence street",
    "Residence city",
    "Residence postal code",
    "Mailing street",
    "Mailing postal code",
    "Mailing province",
    "Mailing country",
    "Residence address",
    "Residence proof",
    "Move when"
  ],
  softResetValues: [
    "Citizen type",
    "Citizen proof",
    "Identity proof type",
    "Sex",
    "Citizenship proof",
    "Identity proof",
    "Photo proof",
    "Signature",
    "pathFrom",
    "Same house",
    "Summary",
    "pageNum"
  ],
  hardResetValues: [
    "baseIndex",
    "Primary phone",
    "Alternate phone",
    "Email",
    "Special case",
    "Military proof type",
    "Residence proof type",
    "Military proof",
    "Posting message",
    "Birthday",
    "First name",
    "Middle name(s)",
    "Last name",
    "Person num",
    "For who user",
    "For who spouse",
    "For who dependant",
    "Dependant count",
    "Done"
  ],
  specialCaseChecks: [
    {
      label: "Born without identification",
      value: "Babies born in Ontario without identification"
    },
    {
      label: "International adoption",
      value:
        "Internationally adopted children under 16, adopted by Ontario residents"
    },
    {
      label: "Immigration and Refugee",
      value: (
        <div>
          <a href="#">Convention refugees</a> and other{" "}
          <a href="#">protected persons</a> as defined by the Immigration and
          Refugee Board of Canada
        </div>
      )
    },
    {
      label: "Military relation",
      value: "Military spouse or dependant"
    },
    {
      label: "Long term care home",
      value:
        "People who move from another Canadian province or territory into a long term care home in Ontario within the first three months of their arrival"
    },
    {
      label: "None of the above",
      value: "None of the above apply"
    }
  ],
  buttonsRes: [
    {
      label: "Driver's licence",
      value: "Valid Ontario driver's licence"
    },
    {
      label: "Temp licence",
      value:
        "Temporary driver's licence only if accompanied by photo licence card with the same address"
    },
    {
      label: "Photo card",
      value:
        "Valid Ontario Photo Card original, mailed utility bill (e.g. cable TV, hydro, gas, water)"
    },
    {
      label: "Bank account statements",
      value:
        "Monthly mailed bank account statements for savings or chequing accounts; does not include receipts, bank books, letters or automated teller receipts"
    },
    {
      label: "Employer record",
      value:
        "Employer record (e.g. pay stub, letter from employer on company letterhead)"
    },
    {
      label: "Report card",
      value: "School, college or university report card or transcript"
    },
    {
      label: "Child benefit statement",
      value: "Child Tax Benefit statement"
    },
    {
      label: "Notice of Assessment",
      value: "Most recent income tax Notice of Assessment"
    },
    {
      label: "Insurance policy",
      value: "Insurance policy (e.g. home, tenant, auto or life)"
    },
    {
      label: "Mortgage, rental or lease agreement",
      value: "Mortgage, rental or lease agreement"
    },
    {
      label: "Vehicle permit",
      value: "Ontario motor vehicle permit (plate or vehicle portions)"
    },
    {
      label: "Property tax bill",
      value: "Property tax bill"
    },
    {
      label: "Statement of direct deposit",
      value:
        "Statement of direct deposit for Ontario Works or for Ontario Disability Support Program (ODSP)"
    },
    {
      label: "T4E",
      value: "Statement of Employment Insurance Benefits Paid (T4E)"
    },
    {
      label: "T4A",
      value:
        "Statement of Old Age Security (T4A) or statement of Canada Pension Plan Benefits (T4A) (P)"
    },
    {
      label: "statements from a bank, trust company or credit union",
      value: `Any of the following statements from a bank, trust company or credit union:\
      - Registered Retirement Savings Plan (RRSP)  
      - Registered Retirement Income Fund (RRIF)  
      - Registered Home Ownership Savings Plan (RHOSP)  
      - Workplace Safety and Insurance Board Statement of Benefits (T5007)  
      - Canada Pension Plan Statement of Contributions`
    },
    {
      label: "None of the above",
      value: "None of the above"
    }
  ],
  buttonsCitizen: [
    {
      label: "Passport",
      value: "Canadian passport"
    },
    {
      label: "Birth certificate",
      value: "Birth certificate"
    },
    {
      label: "Canadian Certificate of Registration of Birth Abroad",
      value: "Canadian Certificate of Registration of Birth Abroad"
    },
    {
      label: "Certified Statement of Live Birth",
      value:
        "Certified Statement of Live Birth from any Canadian province or territory"
    },
    {
      label: "Certificate of Canadian Citizenship",
      value:
        "Certificate of Canadian Citizenship or Certificate of Naturalization"
    },
    {
      label: "Certificate of Indian status",
      value: "Certificate of Indian Status"
    },
    {
      label: "Indian record",
      value: "Registered Indian Record"
    },
    {
      label: "Temporary confirmation",
      value: "Temporary Confirmation of Registration document"
    },
    {
      label: "None of the above",
      value: "None of the above"
    }
  ],
  buttonsID: [
    {
      label: "Passport",
      dependency: "n/a",
      value: "Passport (Canadian or foreign)",
      extraText:
        "*You have already used this document type to prove Canadian citizenship."
    },
    {
      label: "Credit card",
      dependency: "n/a",
      value: "Credit card"
    },
    {
      label: "Driver's licence",
      dependency: "n/a",
      value:
        "Valid driver's licence or temporary driver's licence from any Canadian province or territory",
      extraText:
        "*You have already used this document type to prove residency in Ontario."
    },
    {
      label: "Immigration ID card",
      dependency: "Canadian citizen",
      value: "Canadian Immigration Identification Card",
      extraText:
        "*You have already used this document type to prove Canadian citizenship."
    },
    {
      label: "Certificate of Canadian Citizenship",
      dependency: "n/a",
      value: "Certificate of Canadian Citizenship (plastic card)",
      extraText:
        "*You have already used this document type to prove Canadian citizenship."
    },
    {
      label: "Certificate of Indian status",
      dependency: "n/a",
      value: "Certificate of Indian Status (paper or plastic card)",
      extraText:
        "\n*You have already used this document type to prove Canadian citizenship."
    },
    {
      label: "Confirmation of permanent residence",
      dependency: "Canadian citizen",
      value:
        "Confirmation of Permanent Residence (IMM 5292) only if signature is shown",
      extraText:
        "*You have already used this document type to prove Canadian citizenship."
    },
    {
      label: "Employee ID card",
      dependency: "n/a",
      value: "Current employee ID card"
    },
    {
      label: "professional association licence",
      dependency: "n/a",
      value: "Current professional association licence"
    },
    {
      label: "Old age security card",
      dependency: "n/a",
      value: "Old Age Security Card"
    },
    {
      label: "Vehicle permit",
      dependency: "n/a",
      value:
        "Motor vehicle permit (plate portion only) from any Canadian province or territory"
    },
    {
      label: "Permanent residence card",
      dependency: "Canadian citizen",
      value:
        "Permanent Resident Card from any Canadian province or territory only if signature is shown"
    },
    {
      label: "Record of landing",
      dependency: "n/a",
      value: "Record of Landing (IMM 1000)"
    },
    {
      label: "Student ID card",
      dependency: "n/a",
      value: "Student ID card"
    },
    {
      label: "Union card",
      dependency: "n/a",
      value: "Union card"
    },
    {
      label: "None of the above",
      value: "None of the above"
    }
  ],
  militaryAddresses: [
    {
      label: "Petawawa",
      value: "4th Canadian Division Support Base Petawawa Headquarters",
      street: "Building S-111, 101 Menin Road",
      city: "Chalk River",
      postalCode: "K0J 1J0"
    },
    {
      label: "Ottawa",
      value: "Canadian Forces Support Unit (Ottawa)",
      street: "101 Colonel By Drive",
      city: "Ottawa",
      postalCode: "K1A 0K2"
    },
    {
      label: "Borden",
      value: "CFB Borden",
      street: "PO Box 1000, Stn Main",
      city: "Borden",
      postalCode: "L0M 1C0"
    },
    {
      label: "Kingston",
      value: "CFB Kingston",
      street: "PO Box 17000, Station Forces",
      city: "Kingston",
      postalCode: "K7K 7B4"
    },
    {
      label: "Leitrim",
      value: "CFS Leitrim",
      street: "3545 Leitrim Rd",
      city: "Ottawa",
      postalCode: "K1A 0K2"
    },
    {
      label: "North Bay",
      value: "CFB North Bay",
      street: "General Delivery",
      city: "Hornell Heights",
      postalCode: "POH 1PO"
    },
    {
      label: "Trenton",
      value: "CFB Trenton",
      street: "PO Box 1000 Station Forces",
      city: "Astra",
      postalCode: "K0K 3W0"
    }
  ]
};

export default constants;
