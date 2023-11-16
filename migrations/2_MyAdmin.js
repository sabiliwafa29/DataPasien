const admin = artifacts.require("./contract/MyAdmin")

module.exports = function(deployer){
    deployer.deploy(admin)
}