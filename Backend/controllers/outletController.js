// @desc     Get Outlets
// @route    GET /api/outlets
const getOutlets = (req, res) => {
    res.status(200).json({ message : 'Show all the outlets'})
}

// @desc     Add Outlets
// @route    POST /api/outlets
const addOutlet = (req, res) => {
    if(!req.body.name){
        res.status(400)
        throw new Error('Please add outlet name')
    }

    res.status(200).json({ message : 'New outlet added'})
}

// @desc     Update Outlet
// @route    PUT /api/outlets/:id
const updateOutlet = (req, res) => {
    res.status(200).json({ message : `Updated outlet ${req.params.id}`})
}

// @desc     Delete Outlet
// @route    GET /api/outlets
const deleteOutlet = (req, res) => {
    res.status(200).json({ message : `Deleted outlet ${req.params.id}`})
}

module.exports = {
    getOutlets,
    addOutlet,
    updateOutlet,
    deleteOutlet
}