const axios = require("axios");

function stress (addr, loops = 10, interval = 1000) {
    if(!addr) throw Error("Address parameter missing.");
    let stats = {};
    function act () {
        for (let i = 0; i <= loops; i++) {
            if(!stats["all"]) stats["all"] = 0;
            stats["all"]++;
            try {
                const response = axios(addr)
                if(!stats["success"]) stats["success"] = 0;
                stats["success"]++;
            } catch (e) {
                if(!stats["error"]) stats["error"] = 0;
                stats["error"]++;
            }
        }
    }
    setInterval(() => {
        try { act() } catch (e) { };
        console.log(stats)
    }, interval)
};

module.exports = { stress };
