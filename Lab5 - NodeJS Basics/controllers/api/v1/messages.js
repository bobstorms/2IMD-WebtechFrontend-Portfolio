const getAllMessages = (req, res) => {
    if(req.query.user) {
        let user = req.query.user;
        res.json({
            status: "success",
            data: {
                message: `GETTING messages for username: ${user}`
            }
        });
    } else {
        res.json({
            status: "success",
            data: {
                message: "GET all messages",
            }
        });
    }
}

const getMessageWithId = (req, res) => {
    let id = req.params.id;
    res.json({
        status: "success",
        data: {
            message: `GET message with ID: ${id}`
        }
    });
}

const saveMessage = (req, res) => {
    let username = "Pikachu";
    res.json({
        status: "success",
        data: {
            message: `POSTING a new message for user ${username}`
        }
    });
}

const updateMessage = (req, res) => {
    let id = req.params.id;
    res.json({
        status: "success",
        data: {
            message: `UPDATING message with ID: ${id}`
        }
    });
}

const deleteMessage = (req, res) => {
    let id = req.params.id;
    res.json({
        status: "success",
        data: {
            message: `DELETING a message with ID: ${id}`
        }
    });
}

module.exports.getAllMessages = getAllMessages;
module.exports.getMessageWithId = getMessageWithId;
module.exports.saveMessage = saveMessage;
module.exports.updateMessage = updateMessage;
module.exports.deleteMessage = deleteMessage;