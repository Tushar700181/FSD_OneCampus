const CafeItem = require('../models/cafeItem');
const Order = require('../models/order');

exports.getMenu = async (req, res) => {
    try {
        const items = await CafeItem.find({ available: true });
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.placeOrder = async (req, res) => {
    try {
        const order = new Order({ items: req.body.items, userId: req.body.userId, total: req.body.total });
        // await order.save();
        res.status(201).json({ message: 'Order placed', orderId: order._id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
