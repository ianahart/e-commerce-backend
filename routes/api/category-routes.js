const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });

    res.status(200).json({ message: 'success', data: categories });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

// get category by it's id
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!category) {
      return res.status(404).json({ message: 'Category Not Found' });
    }

    res.status(200).json({ message: 'success', data: category });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    if (!Object.keys(req.body).includes('categoryName')) {
      return res.status(400).json({ message: 'Bad Request', error: "Missing 'categoryName' in request body" });
    }
    const newCategory = await Category.create({
      category_name: req.body.categoryName,
    });

    res.status(201).json({ message: 'Category created', data: newCategory });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

// update a category by it's id
router.put('/:id', async (req, res) => {
  try {
    if (!Object.keys(req.body).includes('categoryName')) {
      return res.status(400).json({ message: 'Bad Request', error: "Missing 'categoryName' in request body" });
    }
    const category = await Category.update(
      {
        category_name: req.body.categoryName,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (category === 0) {
      return res
        .status(404)
        .json({ message: 'Bad Request', error: `category with the id ${req.params.id} was not found` });
    }

    res.status(200).json({ message: 'Category updated', data: category });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

// delete a category by it's id
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (category === 0) {
      return res
        .status(404)
        .json({ message: 'category not found', error: `category with the id ${req.params.id} was not found` });
    }

    res.status(200).json({ message: 'success', data: category });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

module.exports = router;
