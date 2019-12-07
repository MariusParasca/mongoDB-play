const MarioChar = require('../models/mariochar');
let mongoose;

describe("Finding records", () => {
  beforeAll(() => {
    mongoose = require('../connection');
  });

  let char;

  beforeEach(() => {
    mongoose.connection.collections.mariochars.drop();
    char = new MarioChar({
      name: "Mario"
    });

    return char.save();
  });

  it('Finds one record from the database', () => {
    return MarioChar.findOne({ name: 'Mario' }).then((result) => {
      expect(result.name).toBe('Mario');
    });
  });

  it('Finds one record by ID from the database', () => {
    return MarioChar.findOne({ _id: char._id }).then((result) => {
      expect(result._id).toStrictEqual(char._id);
    });
  });

});