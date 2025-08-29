const complaintSchema = new mongoose.Schema({
    Room: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
      minlength: 10, 
    },
    ComplaintName: {
      type: String,
      required: true, 
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  

  const Complaint = mongoose.model('Complaint', complaintSchema);
  


const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    branch: { type: String, required: true },
    year: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);

const wardenSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
    phone: { type: String, required: true }
});

const Warden = mongoose.model('Warden', wardenSchema);