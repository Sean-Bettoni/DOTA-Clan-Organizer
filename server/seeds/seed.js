const db = require('../config/connection');
const { User, SessionCard } = require('../models');
const userSeeds = require('./userSeeds.json');
const sessionCardSeeds = require('./sessionCardSeeds.json');

db.once('open', async () => {
  try {
    // await SessionCard.deleteMany({});
    await User.deleteMany({});

    await SessionCard.create(sessionCardSeeds);
    await User.create(userSeeds);
    
  }

  catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('All Done!!');
  process.exit(0);
});