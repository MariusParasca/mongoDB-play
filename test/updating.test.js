const MarioChar = require('../models/mariochar');
let mongoose;

describe("Updating records", () => {
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

  it('Update one record from the database', () => {
    return MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' }).then(() => {
      return MarioChar.findById(char._id).then((result) => {
        expect(result.name).toEqual('Luigi');
      });
    });
  });

});