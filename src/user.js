// src/user.js
function registerUser(email, password) {
  if (email && password) {
    return { success: true };
  }
  return { success: false };
}
module.exports = { registerUser };
