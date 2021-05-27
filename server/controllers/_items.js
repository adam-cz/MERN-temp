//_items models import
import _Item from '../models/_item.js';

//request data from DB and send back JSON

export const _function = async (req, res) => {
  try {
    const _result = await _Item.find();
    res.status(200).json(_result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//These are just controllers which have something to do with _items
