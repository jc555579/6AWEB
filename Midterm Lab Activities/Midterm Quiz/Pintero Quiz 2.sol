// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Pintero_Quiz2 {
    string public fullName = "Pintero Juan D.";
    string public extractedBarangay;
    string public extractedCity;
    string public extractedProvince;
    string public extractedCountry;
    string public concatenatedString;

    bytes32 public hashAbiEncode;
    bytes32 public hashAbiEncodePacked;

    constructor() {
        // Data
        string memory barangay = "Balibago";
        string memory city = "Angeles";
        string memory province = "Pampanga";
        string memory country = "Philippines";

        // Extraction
        extractedBarangay = substring(barangay, 0, 2); 
        extractedCity = substring(city, 0, 2);         
        extractedProvince = substring(province, bytes(province).length - 2, bytes(province).length);
        extractedCountry = substring(country, bytes(country).length - 2, bytes(country).length);

        // Concatenation
        concatenatedString = string(abi.encodePacked(extractedBarangay, extractedCity, extractedProvince, extractedCountry));

        // Hashes
        hashAbiEncode = keccak256(abi.encode(extractedBarangay, extractedCity, extractedProvince, extractedCountry));
        hashAbiEncodePacked = keccak256(abi.encodePacked(extractedBarangay, extractedCity, extractedProvince, extractedCountry));
    }

    function substring(string memory str, uint startIndex, uint endIndex) internal pure returns (string memory) {
        bytes memory strBytes = bytes(str);
        require(endIndex <= strBytes.length, "Index out of bounds");
        bytes memory result = new bytes(endIndex - startIndex);
        for (uint i = startIndex; i < endIndex; i++) {
            result[i - startIndex] = strBytes[i];
        }
        return string(result);
    }
}