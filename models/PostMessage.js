import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: String,
    author: String,
    characters: [String],
    message: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', PostSchema);

export default PostMessage;