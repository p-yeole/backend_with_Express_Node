import { initServer, app } from "./server.js";
import ProductRouter from "./features/products/products.router.js";
import UserRouter from "./features/users/users.router.js";

initServer();

app.use("/products", ProductRouter);
app.use("/users", UserRouter);
