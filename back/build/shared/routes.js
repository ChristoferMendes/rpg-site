"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const routes_1 = require("../modules/user/routes");
const routes_2 = require("../modules/characters/routes");
exports.routes = (0, express_1.Router)();
exports.routes.use('/users', routes_1.userRouter);
exports.routes.use('/characters', routes_2.characterRouter);
