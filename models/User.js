import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);
