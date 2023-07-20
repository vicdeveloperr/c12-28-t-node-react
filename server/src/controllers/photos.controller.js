const Photo = require('../models/Photo');

const getPhotos = async (req, res) => {
  try {
      const photos = await Photo.findAll();
      res.status(200).json(photos);
  } catch (error) {
      console.log(error);
  }
}

const postPhoto = async (req, res) => {
  const {name} = req.body;
  try {
    await Photo.create({name})
    res.status(201).send('Photo created successfully')
  } catch (error) {
    
  }
}

module.exports = {
  getPhotos,
  postPhoto
}