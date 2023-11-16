const patient = artifacts.require("./contract/MyContract")

module.exports = function(deployer){
    deployer.deploy(patient)
}