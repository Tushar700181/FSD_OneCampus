const Leave = require('../models/leave');
exports.submitLeave = async (req, res) => {
    try {
        const leave = new Leave(req.body);
        await leave.save();
        res.status(201).json({ message: 'Leave submitted successfully', leave });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
