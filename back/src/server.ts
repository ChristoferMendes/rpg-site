import { app } from "./app";
import { routes } from "./shared/routes";


app.use(routes)

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
