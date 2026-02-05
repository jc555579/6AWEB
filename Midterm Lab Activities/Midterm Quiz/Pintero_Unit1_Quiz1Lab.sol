// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract OddUnitsService {

    string public firstName = "Jose";
    string public middleName = "Balsa";
    string public lastName = "Rizal";

    uint256 public serviceFee;
    bytes32 public hashValue;

    // Function to calculate service fee and hash
    function calculate(uint8 serviceCode) public {
        require(serviceCode == 1 || serviceCode == 2, "Invalid service code");

        // Calculate service fee based on service code
        if (serviceCode == 1) {
            // Consultation: 10,000 + 12% tax
            serviceFee = 10000 + (10000 * 12 / 100);
        } else {
            // Documents: 2,000 + 10% service charge + 12% tax
            uint256 base = 2000;
            uint256 serviceCharge = base * 10 / 100;
            uint256 subtotal = base + serviceCharge;
            serviceFee = subtotal + (subtotal * 12 / 100);
        }

        // Extract characters for hash
        bytes memory f = bytes(firstName);
        bytes memory m = bytes(middleName);
        bytes memory l = bytes(lastName);

        bytes1 firstCharFirstName = f[0];
        bytes1 lastCharMiddleName = m[m.length - 1];
        bytes1 firstCharLastName = l[0];

        uint8 firstDigitServiceFee = getFirstDigit(serviceFee);

        // Generate hash according to service code
        if (serviceCode == 1) {
            // Consultation: use abi.encodePacked
            hashValue = keccak256(
                abi.encodePacked(
                    firstCharFirstName,
                    lastCharMiddleName,
                    firstCharLastName,
                    serviceCode,
                    firstDigitServiceFee
                )
            );
        } else {
            // Documents: use abi.encode
            hashValue = keccak256(
                abi.encode(
                    firstCharFirstName,
                    lastCharMiddleName,
                    firstCharLastName,
                    serviceCode,
                    firstDigitServiceFee
                )
            );
        }
    }

    // Helper function to get first digit of service fee
    function getFirstDigit(uint256 number) internal pure returns (uint8) {
        while (number >= 10) {
            number /= 10;
        }
        return uint8(number);
    }
}
