// @ts-check
import { module } from "@prisma/composer";
import kopiNusantaraNextService from "./service.mjs";

export default module("kopi-nusantara-next", ({ provision }) => {
  provision(kopiNusantaraNextService, { id: "kopinusantaranext" });
});
