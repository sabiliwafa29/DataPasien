// Selecting form and input elements
import Web3 from 'web3';

const web3 = new Web3('http://127.0.0.1:8545');
const address = '0x335BFB84dF08c653CA3C451Fdf0a0cB97D508Ae1';
const abi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "recordId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "age",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "gender",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "bloodType",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "allergies",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "diagnosis",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "treatment",
        "type": "string"
      }
    ],
    "name": "MedicalRecords__AddRecord",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "recordId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "age",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "gender",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "bloodType",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "allergies",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "diagnosis",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "treatment",
        "type": "string"
      }
    ],
    "name": "MedicalRecords__DeleteRecord",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "isDeleted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "recordId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_age",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_gender",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_bloodType",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_allergies",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_diagnosis",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_treatment",
        "type": "string"
      }
    ],
    "name": "addRecord",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "deleteRecord",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "getRecord",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getRecordId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "getTimeStamp",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "getName",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "getAge",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "getGender",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "getBloodType",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "getAllergies",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "getDiagnosis",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "getTreatment",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "getDeleted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const genderInput = document.getElementById("gender");

    // Getting trimmed values from input fields
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const gender = genderInput.value;

    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
    if (date === "") {
        showError(dateInput, "Select your date of birth");
    }
    if (gender === "") {
        showError(genderInput, "Select your gender");
    }

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Submitting the form
    form.submit();
}

// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Handling form submission event
form.addEventListener("submit", handleFormData);

// Add this JavaScript for the modal
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const modal = document.getElementById('myModal');
  const closeModal = document.querySelector('.close');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting
    modal.style.display = 'block';
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

let idpasien = document.getElementById('recordId').value;
console.log(idpasien);
let name = document.getElementById('name').value;
console.log(name);
let email = document.getElementById('bloodType').value;
console.log(email);
let password = document.getElementById('allergies').value;
console.log(password);
let date = document.getElementById('timestamp').value;
console.log(date);
let alamat = document.getElementById('treatment').value;
console.log(alamat);
let gender = document.querySelector('#gender').value;
console.log(gender);

async function submit(event) {
  const accounts_other = await ethereum.request({ method: "eth_requestAccounts" });
  console.log(accounts_other);

  const contract = new web3.eth.Contract(abi, address);
  try {
    await contract.methods.Submit(candidateId, HimaIndex).send({ from: accounts_other[0], gas: 3000000 });
    alert('Identitas Anda sudah dikirim');
  } catch (error) {
    alert('Gagal gagal' + error.message);
  }
}

