const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
const PORT = process.env.PORT || 3000;
const stepsLog = {};
const workoutsLog = {};
const caloriesLog = {};

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/fitnessTracker', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('Welcome to the Fitness Tracker API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Signup
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 8);
      const user = new User({ email, password: hashedPassword });
      const token = jwt.sign({ _id: user._id }, 'secret_key');  // Replace 'secret_key' with your own secret key
      user.tokens = user.tokens.concat({ token });
      
      await user.save();
  
      res.status(201).send({ user, token });
    } catch (error) {
      res.status(400).send(error);
    }
});
  
  // Login
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({ error: 'Invalid login credentials' });
      }
  
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(400).send({ error: 'Invalid login credentials' });
      }
  
      const token = jwt.sign({ _id: user._id }, 'secret_key');  // Replace 'secret_key' with your own secret key
      user.tokens = user.tokens.concat({ token });
  
      await user.save();
  
      res.send({ user, token });
    } catch (error) {
      res.status(400).send(error);
    }
});

app.post('/log-steps', auth, async (req, res) => {
  const { userId, steps } = req.body;
  try {
    let user = await User.findOne({ userId });
    if (user) {
      user.steps = steps;
    } else {
      user = new User({ userId, steps });
    }
    await user.save();
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: 'An error occurred' });
  }
});

app.get('/get-steps/:userId', (req, res) => {
  const { userId } = req.params;
  if (stepsLog[userId]) {
    res.json({ success: true, steps: stepsLog[userId] });
  } else {
    res.json({ success: false, message: 'User not found' });
  }
});

// Log workouts
app.post('/log-workout', auth, async (req, res) => {
    const { userId, workout } = req.body;
    try {
      let user = await User.findOne({ userId });
      if (user) {
        user.workouts.push(workout);
      } else {
        user = new User({ userId, workouts: [workout] });
      }
      await user.save();
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false, message: 'An error occurred' });
    }
});

// Get workouts
app.get('/get-workouts/:userId', (req, res) => {
  const { userId } = req.params;
  if (workoutsLog[userId]) {
    res.json({ success: true, workouts: workoutsLog[userId] });
  } else {
    res.json({ success: false, message: 'User not found' });
  }
});


// Log calories
app.post('/log-calories', auth, async (req, res) => {
    const { userId, calories } = req.body;
    try {
        let user = await User.findOne({ userId });
        if (user) {
            user.calories = calories;
        } else {
            user = new User({ userId, calories });
        }
        await user.save();
        res.json({ success: true });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: 'An error occurred' });
    }
});

// Get calories
app.get('/get-calories/:userId', (req, res) => {
    const { userId } = req.params;
    if (caloriesLog[userId]) {
      res.json({ success: true, calories: caloriesLog[userId] });
    } else {
      res.json({ success: false, message: 'User not found' });
    }
});
