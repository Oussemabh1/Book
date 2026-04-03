const Book = require("../models/book");
async function add(req, res) {
  try {
    const book = new Book(req.body);
    await book.save();

    res.send("good added!!!!");
  } catch (err) {
    res.send(err);
  }
}

async function showbook(req, res) {
  try {
    const books = await Book.find();

    res.json(books);
  } catch (err) {
    res.send(err);
  }
}

async function searchbytitle(req, res) {
  try {
    const book = await Book.find({ title: req.params.title });

    res.json(book);
  } catch (err) {
    res.send(err);
  }
}

async function searchbytitlebody(req, res) {
  try {
    const book = await Book.find({ title: req.body.title });

    res.json(book);
  } catch (err) {
    res.send(err);
  }
}


async function showbookbyid(req, res) {
  try {
    const book = await Book.findById(req.params.id);

    res.json(book);
  } catch (err) {
    res.send(err);
  }
}

async function deletebook(req, res) {
  try {
    await Book.findByIdAndDelete(req.params.id);

    res.send("book deleted");
  } catch (err) {
    res.send(err);
  }
}

async function updatebook(req, res) {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(book);
  } catch (err) {
    res.send(err);
  }
}

async function increaseprice(req, res) {
  try {
    const books = await Book.find({ stock: { $lt: 5 } });
    for(let book of books){
      book.price=book.price*1.1;
      await book.save();
    } 
    res.json(books);
  } catch (err) {
    res.send(err);
  }
}

async function getnbrbook(req, res) {
  try {
    const nbrbooks = await Book.find({ stock: { $gt: 4 } }).countDocuments();
  return nbrbooks
  } catch (err) {
    return err;
  }
}



module.exports = {
  add,
  showbook,
  searchbytitle,
  searchbytitlebody,
  showbookbyid,
  deletebook,
  updatebook,
  increaseprice,
  getnbrbook

};
