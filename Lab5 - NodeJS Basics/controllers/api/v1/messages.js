const getAllMessages = (req, res) => {
    res.json({
        status: "success",
        data: {
            messages: "GET all messages"
        }
    });
}

module.exports.getAllMessages = getAllMessages;