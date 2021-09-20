import { Router as routers } from "express";

const router = routers();

router.get("/", (req, res) => {
  console.log("here");
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version,
  });
});

export default router;
