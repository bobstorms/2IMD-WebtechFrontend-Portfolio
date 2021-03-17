const getAllMessages = (req, res) => {
    res.json({
        status: "success",
        data: {
            messages: "GET all messages"
        }
    });
}

const getMessageWithId = (req, res) => {
    let id = req.params.id;
    res.json({
        status: "success",
        data: {
            message: `GET message with ID: ${id}`
        }
    })
}

module.exports.getAllMessages = getAllMessages;
module.exports.getMessageWithId = getMessageWithId;