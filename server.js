const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const AUTH_COOKIE = 'controlHubAuth';

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const requireAuth = (req, res, next) => {
  const hasAuth = req.cookies?.[AUTH_COOKIE] === 'admin';
  if (!hasAuth) {
    return res.redirect('/');
  }
  return next();
};

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body || {};

  if (username === 'admin' && password === '123') {
    res.cookie(AUTH_COOKIE, 'admin', {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 1000,
    });
    return res.status(200).json({ success: true });
  }

  return res.status(401).json({ success: false, message: 'Invalid credentials.' });
});

app.get('/landing', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

app.get('/solution-wizard', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'SolutionWizard.html'));
});

app.get('/logout', (req, res) => {
  res.clearCookie(AUTH_COOKIE);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
