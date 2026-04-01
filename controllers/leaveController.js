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

exports.approveLeave = async (req, res) => {
    try {
        const leave = await Leave.findByIdAndUpdate(req.params.id, { status: 'Approved' }, { new: true });
        res.status(200).json({ message: 'Leave approved', leave });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
};
