const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
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
      include: [{ model: Product, through: ProductTag }],
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
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    if (!Object.keys(req.body).includes('tagName')) {
      return res.status(400).json({ message: 'Bad Request', error: "Missing 'tagName' in request body" });
    }
    const newTag = await Tag.create({
      tag_name: req.body.tagName,
    });

    res.status(201).json({ message: 'Tag created', data: newTag });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

// update a tag's name by its id value
router.put('/:id', async (req, res) => {
  try {
    if (!Object.keys(req.body).includes('tagName')) {
      return res.status(400).json({ message: 'Bad Request', error: "Missing 'tagName' in request body" });
    }
    const tag = await Tag.update(
      {
        tag_name: req.body.tagName,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (tag === 0) {
      return res.status(404).json({ message: 'Bad Request', error: `tag with the id ${req.params.id} was not found` });
    }

    res.status(200).json({ message: 'Tag updated', data: tag });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

// delete a tag by its id value
router.delete('/:id', async (req, res) => {
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (tag === 0) {
      return res
        .status(404)
        .json({ message: 'Tag not found', error: `tag with the id ${req.params.id} was not found` });
    }

    res.status(200).json({ message: 'success', data: tag });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

module.exports = router;
