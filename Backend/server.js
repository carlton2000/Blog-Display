const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Add Cors
const cors = require('cors');
app.use(cors());

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false}));

app.get('/',(req, res) => 
res.json({msg: 'Welcome to our Blog site where all Blogs are visible'})
);


// Define Route
app.use('/api/users', require('./routes/users'));
app.use('/api/blog', require('./routes/blog'));
app.use('/api/auth', require('./routes/auth'));
// app.use('/api/admin', require('./routes/admin'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));