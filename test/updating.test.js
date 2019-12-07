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
      name: "Mario",
      weight: 50
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

  it('Increments the weight by 1', () => {
    return MarioChar.update({}, { $inc: { weight: 1 } }).then(() => {
      return MarioChar.findById(char._id).then((result) => {
        expect(result.weight).toEqual(char.weight + 1);
      });
    })
  });

});