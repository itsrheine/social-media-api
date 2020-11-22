const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought, 
    updateThought,
    deleteThought,
    addaReaction,
    removeaReaction
} = require('../../controllers/thought-controller')

router.route('/')
    .get(getAllThoughts);

router.route('/:userId')    
    .post(createThought)
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions')
    .post(addaReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeaReaction);

module.exports = router;