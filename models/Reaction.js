const { ObjectId } = require('bson');
const { Schema, model } = require('mongoose');

const ReactionSchema = new Reaction({
    reactionId: {
        Default: new ObjectId,
    },
    reactionBody: {
        type: String,
        required: true,

    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
    {
        toJSON: {
            getters: true
        }
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);


module.exports = Thought;