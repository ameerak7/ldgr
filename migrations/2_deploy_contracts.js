const LDGRIssuer = artifacts.require("LDGRIssuer");
const LDGRToken = artifacts.require("LDGRToken");
const LDGRSecurity = artifacts.require("LDGRSecurity");

module.exports = function (deployer) {
  deployer.deploy(
    LDGRToken,
    "0x377DC29dA10c10bf358bd00B988dF2EDbfBA988c",
    "name",
    "symbol",
    0
  );
  deployer.deploy(
    LDGRSecurity,
    "0x377DC29dA10c10bf358bd00B988dF2EDbfBA988c",
    "name",
    "symbol"
  );
  deployer.deploy(
    LDGRIssuer,
    "0x377DC29dA10c10bf358bd00B988dF2EDbfBA988c",
    "0x377DC29dA10c10bf358bd00B988dF2EDbfBA988c",
    "name",
    "_stateFileNumber",
    "_stateOfIncorporation",
    "_physicalAddressOfOperation"
  );
};
