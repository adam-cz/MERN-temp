import mongoose from 'mongoose';

// Edit _itemSchema and _Item var

const _itemSchema = mongoose.Schema({
  //name: String,
  //date: { type: Date, default: Date.now },...
});

const _Item = mongoose.model('_Item', _itemSchema);

export default _Item;
