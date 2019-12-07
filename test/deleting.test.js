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

  it('Delete one record from the database', () => {
    return MarioChar.findOneAndRemove({ name: 'Mario' }).then(() => {
      return MarioChar.findOne({ name: 'Mario' }).then((result) => {
        expect(result).toEqual(null);
      }
      )
    }
    )
  });

});