const MarioChar = require('../models/mariochar');
require('./connection');

// jest.setTimeout(100000);

describe("Saving records", () => {
  // afterEach(() => mockgoose.helper.reset());

  it('Saves a record to the database', () => {
    let char = new MarioChar({
      name: "Mario"
    });

    return char.save().then(() => {
      expect(char.isNew).toBe(false);
    });

  });

  afterAll(() => mongoose.disconnect());

})