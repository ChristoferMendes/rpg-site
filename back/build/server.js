"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const routes_1 = require("./shared/routes");
app_1.app.use(routes_1.routes);
const PORT = 4500;
app_1.app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
