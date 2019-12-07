const MarioChar = require('../models/mariochar');
const mongoose = require('./connection');

describe("Saving records", () => {

  beforeEach((done) => {
    mongoose.connection.collections.mariochars.drop(() => {
      done();
    }
    );
  });

  afterAll(() => mongoose.disconnect());

  it('Saves a record to the database', () => {
    let char = new MarioChar({
      name: "Mario"
    });

    return char.save().then(() => {
      expect(char.isNew).toBe(false);
    });

  });
});