const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);
