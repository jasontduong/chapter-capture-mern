import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

});

const mangaSchema = mongoose.Schema({
    data: [
        {
          node: {
            id: Number,
            title: String,
            main_picture: {
              medium: String,
              large: String
            }
          }
        },
    ],
    message: String,
    creator: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})
export const PostMessage = mongoose.model('PostMessage', postSchema);
export const MangaMessage = mongoose.model('MangaMessage', mangaSchema);
