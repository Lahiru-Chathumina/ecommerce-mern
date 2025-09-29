const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lahiru:12345@cluster0.mongodb.net/studentdb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then((

) => console.log('MongoDB connected')
)
.catch(err => 
    console.error('MongoDB connection error:', err

    ));