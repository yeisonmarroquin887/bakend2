const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const users = await User.findAll()
    return res.json(users)
});

const create = catchError(async(req, res) => {
    const user = req.body
    const createUser = await User.create(user)
    return res.status(201).json(createUser)
})

const getOne = catchError(async(req, res) => {
    const {id} = req.params
    const oneUser = await User.findByPk(id)
    if(!oneUser) return res.status(404).json({message: "This user does not exist"})
    return res.json(oneUser)
})

const renove = catchError(async (req, res) => {
    const {id} = req.params
    const renoveUser = await User.destroy({where: {id}})
    if(!renoveUser) return res.status(404).json({message: "This user does not exist"})
    return res.sendStatus(204)
})

const update = catchError(async(req, res) => {
    const {id} = req.params
    const userbody = req.body
    const userUpdate = await User.update(userbody, {where: {id}, returning: true})
    if(userUpdate[0] === 0) return res.status(404).json({message: "This user does not exist"})
    return res.json(userUpdate)
})

module.exports = {
    getAll,
    create,
    getOne,
    renove,
    update
}