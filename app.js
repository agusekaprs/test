const express = require('express');
const app = express();
app.listen(3020, () => {
  console.log("first commit");
  console.log("perubahan 1");
  console.log("perubahan 2");
<<<<<<< HEAD
  console.log("perubahan 3 dev branch");
=======
  console.log("perubahan 3");
  console.log("perubahan 4");
>>>>>>> parent of 1d40ab9 (resvert last 2 commit for fixing bugs)
});