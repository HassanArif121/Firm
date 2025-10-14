import mongoose from 'mongoose';

const attorneySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,

  },
  bio: {
    type: String,
   required: true
  }
});


export default mongoose.models.Attorney || mongoose.model('Attorney', attorneySchema); 
