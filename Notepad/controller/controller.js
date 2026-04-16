// const { getallnote, getonenote, createnote, updatenote, deletenote } = require('../controller/controller');
const jwt = require('jsonwebtoken');
const secret = 'mysecretkey';

const noteservice = require('../service/service');

const getallnote = async (req, res) => {
    const result = await noteservice.getallnote();
    res.json({
        message: "All notes",
        data: result
    });
};

const getonenote = async (req, res) => {
    const id = Number(req.params.id);
    const result = await noteservice.getonenote(id);
    res.json({
        message: "Note found",
        data: result
    });
};

const createnote = async (req, res) => {
    const { title, content } = req.body;
    const result = await noteservice.createnote(title, content);
    res.json({
        message: "Note created",
        data: result
    });
};

const updatenote = async (req, res) => {
    const id = Number(req.params.id);
    const { title, content } = req.body;
    const result = await noteservice.updatenote(id, title, content);
    res.json({
        message: "Note updated",
        data: result
    });
};

const patchnote = async (req, res) => {
    const id = Number(req.params.id);
    const { title, content } = req.body;
    const result = await noteservice.updatenote(id, title, content);
    res.json({
        message: "Note updated",
        data: result
    });
}

const deletenote = async (req, res) => {
    const id = Number(req.params.id);
    const result = await noteservice.deletenote(id);
    res.json({
        message: "Note deleted",
        data: result
    });
};

const authentication = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password are required"
        });
    }
    const result = await noteservice.authentication(username, password);
    return res.status(200).json({
        message: "User authenticated",
        data: result
    });
};

const readauthentication = async (req, res) => {
    const { username } = req.query;
    if (!username) {
        return res.status(400).json({
            message: "Username is required"
        });
    }
    const result = await noteservice.readauthentication(username);
    return res.status(200).json({
        message: "User authenticated",
        data: result
    });
};

const auth = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password are required"
        });
    }
    const result = await noteservice.authentication(username, password);
    if (result) {
        return res.status(200).json({
            message: "User authenticated",
            data: result
        });
    } else {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }
};

const dashboard = async (req, res) => {
    return res.status(200).json({
        message: "Welcome to the dashboard"
    });
};

const authen = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authService.login(email, password);

        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            "mysecretkey",
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login successful",
            token: token
        });

    } catch (err) {
        res.status(500).json({ message: "Login error" });
    }
};

module.exports = { getallnote, getonenote, createnote, updatenote, deletenote, patchnote, authentication, readauthentication, authen, dashboard };