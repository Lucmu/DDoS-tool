class DDoSTool {
    constructor(addr) {
        this.address = addr;
    }
    stress(loops) { require("./functions/stress.js").stress(this.address, loops); }
}

module.exports = DDoSTool;
