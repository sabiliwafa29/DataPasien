// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    struct Patient {
        uint256 id;
        string phoneNumber;
        string emailAddress;
        string password;
        string dateOfBirth;
        string addresst;
        string gender;
    }

    mapping(uint256 => Patient) public patients;

    function registerPatient(uint256 id, string memory phoneNumber, string memory emailAddress, string memory password, string memory dateOfBirth, string memory addresst, string memory gender) public {
        require(patients[id].id == 0, "Patient with this ID already exists");

        patients[id] = Patient({
            id: id,
            phoneNumber: phoneNumber,
            emailAddress: emailAddress,
            password: password,
            dateOfBirth: dateOfBirth,
            addresst: addresst,
            gender: gender
        });
    }

    function getPatientById(uint256 id) public view returns (Patient memory) {
        require(patients[id].id != 0, "Patient with this ID does not exist");

        return patients[id];
    }
}
