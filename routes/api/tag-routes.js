const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    });

    res.status(200).json({ message: 'success', data: tags });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

// get tag by id
router.get('/:id', async (req, res) => {
  try {
    const product = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!product) {
      return res
        .status(404)
        .json({ message: 'Tag not found', error: `tag with the id ${req.params.id} was not found` });
    }

    res.status(200).json({ message: 'success', data: product });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
