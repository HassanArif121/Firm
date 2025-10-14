import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  FullContent: {
    type: String,
    required: true,
  },
  tags: [{
    type: String,
    trim: true,
  }],
});


export default mongoose.models.Blog || mongoose.model('Blog', blogSchema); 
