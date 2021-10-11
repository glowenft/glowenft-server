const auth = require("../../middleware/auth");

module.exports = app => {
    const nfts = require("../controllers/nft.controller.js");

    var router = require("express").Router();

    // Create a new nft
    router.post("/", auth, nfts.create);

    // Retrieve all nfts
    router.get("/", nfts.findAll);

    // Retrieve all published nfts
    router.get("/published", auth, nfts.findAllPublished);

    // Retrieve a single nft with id
    router.get("/:id", auth, nfts.findOne);

    // Update a nft with id
    router.put("/:id", auth, nfts.update);

    // Delete a nft with id
    router.delete("/:id", auth, nfts.delete);

    // Create a new nft
    router.delete("/", auth, nfts.deleteAll);

    app.use('/api/nfts', router);
};