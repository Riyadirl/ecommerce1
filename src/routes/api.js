const express = require('express');
const BrandController = require('../controllers/BrandController');
const { CategoryList } = require('../controllers/CategoryController');

const router = express.Router();


// Brand Category
router.get('./BrandList', BrandController.BrandList);
router.get('/CategoryList', CategoryController.CategoryList);