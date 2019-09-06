"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerOperator {
    addWhitelist(playerName) {
        console.log(`${playerName} has been added to whitelist`);
        return true;
    }
    removeWhitelist(playerName) {
        console.log(`${playerName} has been removed from whitelist`);
        return true;
    }
}
exports.default = ServerOperator;
//# sourceMappingURL=ServerOperator.js.map