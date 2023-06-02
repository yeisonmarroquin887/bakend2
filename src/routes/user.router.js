const { getAll, create, getOne, renove, update } = require('../controllers/user.controllers');
const express = require('express');

const UserRouter = express.Router();

UserRouter.route("/")
		.get(getAll)
        .post(create)
UserRouter.route("/:id")
        .get(getOne)
        .delete(renove)
        .put(update)

module.exports = UserRouter;