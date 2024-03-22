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

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
