import { createServer } from "node:http";
import { createAppServer } from "@app/infra/createAppServer";

const PORT = process.env.PORT || 5001;

const server = createAppServer(createServer);

server.listen(PORT);
console.log(`listening on http://localhost:${PORT}`);
