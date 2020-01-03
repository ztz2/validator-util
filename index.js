"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_id_1 = __importDefault(require("./lib/is-id"));
var is_usci_1 = __importDefault(require("./lib/is-usci"));
var validatorUtil = {
    isID: is_id_1.default,
    isUSCI: is_usci_1.default
};
exports.default = validatorUtil;
