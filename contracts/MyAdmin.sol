// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyAdmin {
    struct PatientRecord {
        string identity;
        uint256 weight;
        uint256 height;
        string diseaseName;
        string bloodType;
        uint256 onsetDate;
        string diseaseDescription;
    }

    mapping(address => PatientRecord) public patientRecords;

    event MedicalRecordAdded(address indexed patient, string identity);

    function addMedicalRecord(
        string memory _identity,
        uint256 _weight,
        uint256 _height,
        string memory _diseaseName,
        string memory _bloodType,
        uint256 _onsetDate,
        string memory _diseaseDescription
    ) external {
        PatientRecord memory newRecord = PatientRecord({
            identity: _identity,
            weight: _weight,
            height: _height,
            diseaseName: _diseaseName,
            bloodType: _bloodType,
            onsetDate: _onsetDate,
            diseaseDescription: _diseaseDescription
        });

        patientRecords[msg.sender] = newRecord;

        emit MedicalRecordAdded(msg.sender, _identity);
    }
}
