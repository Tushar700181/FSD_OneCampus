const CafeItem = require('../models/cafeItem');
exports.getMenu = async (req, res) => {
    try {
        const items = await CafeItem.find({ available: true });
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
