//using this to utilise express router
import express from "express";
import { addToList, getAllList } from "../models/list.js";

//imoporting to test if the router works
// import list from "../db/index.js";

//putting express router into a variable
const router = express.Router();

router.get("/", async function (req, res) {
  const result = await getAllList();
  res.json({ success: "true", payload: result });
});
// router.get("/", (req, res) => {
//   res.json({ status: 200, payload: list });
// });

router.post("/", async function (req, res) {
  const result = await addToList(req.body);
  res.json({ success: "true", payload: result });
});

// exporting this router so that the main index.js can tell which URL uses this specific route
//as will have multiple routes, will always have to use default export because you cant export all of them as named as they will have same starting names.
export default router;
