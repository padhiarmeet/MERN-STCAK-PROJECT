import express from "express";
import { Book } from '../models/bookmodels.js'

const router = express.Router();

router.post('/', async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.publishYear || !req.body.review || !req.body.rating || !req.body.imgUrl) {
        return res.status(400).send({
          message: 'send all the boooks fild!!'
        })
      }
      const newbook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
        review : req.body.review,
        rating : req.body.rating,
        img : req.body.imgUrl
      }
      const book = await Book.create(newbook);
      return res.status(200).send(book);
    }
    catch (error) {
      console.log(error)
      return res.status(500).send({
        message: 'Server error',
        error
      });
    }
  })
  //to get all the books from database
router.get('/', async (req, res) => {
    try {
      const books = await Book.find({});
  
      return res.status(200).json({
        count: books.length,
        data: books 
      });
    }
    catch (error) {
      console.log(error)
    }
  })
  
  //to get book by the id
router.get('/:id', async (req, res) => {
    try {
      const {id} = req.params;
      const book = await Book.findById(id);
  
      return res.status(200).json(book);
    }
    catch (error) {
      console.log(error)
      res.status(500).send({
        message: 'Server error',
        error
      });
    }
  })
  //to update the book
router.put('/:id',async (req, res) =>{
    try{
      if (!req.body.title || !req.body.author || !req.body.publishYear || !req.body.review || !req.body.rating || !req.body.imgUrl) {
        return res.status(400).send({
          message: 'send all the boooks fild!!'
        })
      }
      const {id} = req.params;
      const result = await Book.findByIdAndUpdate(id,req.body);
  
      if(!result){
        return res.status(404).json({message: 'Book not found....'})
      }
      return res.status(200).send({message: 'Bookfound sucessfully ....'})
    }
    catch(error){
      console.log(error)
      res.status(500).send({
        message: 'Server error',
        error
      });
    }
  })
  
  //delete the books
router.delete('/:id',async(req,res)=>{
    try{
      const { id } = req.params;
      const result = await Book.findByIdAndDelete(id);  
  
      if(!result){
        return res.status(404).json({message: 'Book not found....'})
      }
      return res.status(200).send({message: 'Book deleted sucessfully ....'})
    }
    catch(error){
      console.log(error)
      res.status(500).send({message: 'Server error',error});
    }
  })

  export default router;


