const mongoose = require('mongoose');

const comments = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    commenttext: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default : Date.now
    },
  });

const BlogSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    hashtag:{
        type: String,
        default: '#'
    },
    blog_content: {
        type: String,
        required: true,
    },
    comment:[comments],
    date: {
        type: Date,
        default : Date.now
    },
});



module.exports = mongoose.model('blog',BlogSchema);