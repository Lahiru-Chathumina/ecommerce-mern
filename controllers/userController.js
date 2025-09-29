const User = require('../models/userModel');

    exports.addUser = async (req,res)=>{
                 
            const { name, email, age } = req.body;
            const newUser = new User({ name, email, age });

            try {
                await newUser.save();
                res.status(201).json({
                     message: "User added successfully", user: newUser 
                    });
                    
                 } catch (error) {
                res.status(500).json({ message: "Error adding user", error });
            }
    }