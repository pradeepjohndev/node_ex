// const { getallnote, getonenote, createnote, updatenote, deletenote } = require('../controller/controller');

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

module.exports = { getallnote, getonenote, createnote, updatenote, deletenote, patchnote };