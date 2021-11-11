const db = require('../config/connection');
const { User, SessionCard } = require('../models');
const userSeeds = require('./userSeeds.json');
const sessionCardSeeds = require('./sessionCardSeeds.json');

db.once('open', async () => {
  try {
    await SessionCard.deleteMany({});
    await User.deleteMany({});
    await User.create(userSeeds);
  }

  catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Session Card Seeded!');
  process.exit(0);
});


// for (let i = 0; i < sessionCardSeeds.length; i++) {
//   const { _id, User } = await SessionCard.create(sessionCardSeeds[i]);
//   const user = await User.findOneAndUpdate(
//     { username: thoughtAuthor },
//     {
//       $addToSet: {
//         thoughts: _id,
//       },
//     }
//   );
// }