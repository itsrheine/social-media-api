const { Schema, model } = require('mongoose');

const ThoughtSchema = new Thought({
        thoughtText: {
            type: String,
            required: true,
            minlength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,

        },
        username: {
            type: String,
            required: true
        },
        reactions: [],
    },
        {
            toJSON: {
                getters: true
            }
        }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);


module.exports = Thought;