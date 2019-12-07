const MarioChar = require('../models/mariochar');
let mongoose;

describe("Saving records", () => {

  beforeAll(() => {
    mongoose = require('../connection');
  })

  beforeEach(() => {
    mongoose.connection.collections.mariochars.drop();
    let char = new MarioChar({
      name: "Mario"
    });

    return char.save();
  });
  it('Saves a record to the database', () => {
    let char = new MarioChar({
      name: "Mario"
    });

    return char.save().then(() => {
      expect(char.isNew).toBe(false);
    });
  });
});