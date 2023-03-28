const Product = require("../models/Product");
const Address = require("../models/ShippingAddress");
const User = require("../models/User")

exports.createTransaction = async (req, res) => {
    try {
        const session = await User.startSession();
        session.startTransaction()
        const product = await Product.updateOne(
            {
                _id: "64224e1128c03dbb62fc7f17"
            },
            {
                $inc: { quantity: + 2}
            },
            { session }
            )
        const user = await User.create(req.body.user, { session })
        const shippingAddress = await Address.create(
            req.body.shippingAddress,
            { session }
        )
        await session.commitTransaction()
        session.endSession()
        res.json({ status: true, user, shippingAddress })
    } catch (error) {
        res.json({ status: false, error })
    }
}

exports.createTransactionWithOutSession = async (req, res) => {
    try {
        const product = await Product.updateOne(
            {
                _id: "64224e1128c03dbb62fc7f17"
            },
            {
                $inc: { quantity: - 2}
            }
            )
    const user = await User.create(req.body.user)
    const shippingAddress = await Address.create({
        address: req.body.shippingAddress,
        user_id: user._id
    })
    res.json({ status: true, user, shippingAddress, product })
} catch (error) {
    res.json({ status: false, error })
}
}