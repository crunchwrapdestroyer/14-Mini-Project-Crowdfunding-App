const router = require('express').Router()
const {Project, User} = require('../models')

router.get('/', async (req, res) => {
    const projects = await Project.findAll ({
        include: [
            {
                model: User,
                attributes: ['name']
            }
        ]
    })
    res.json(projects)
})

// /project/:id 
router.get('/project/:id', async (req, res) => {
    const project = await Project.findByPk(req.params.id, {
        include: [
            {
                model: User,
                attributes: ['name']
            }
        ]
    })
    res.json(project)
})

// /login
router.get('/login', (req, res) => {
    res.send('login')
})

// /profile
router.get('/profile', (req, res) => {
    res.send('profile')
})

module.exports = router
