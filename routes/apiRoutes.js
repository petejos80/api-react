const axios = require("axios");
const router = require("express").Router();

router.get("/articles", (req, res) => {
  axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=38c636a55a034777a89339eee9c68565&q=", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
