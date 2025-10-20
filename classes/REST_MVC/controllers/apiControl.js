exports.post = (req, res, next) => {
    res.status(200).send("Requisição POST recebida com sucesso!")
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    res.status(201).send("Requisição PUT recebida com sucesso!")
}

exports.delete = (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    res.status(200).send("requisição DELETE feita com sucesso!");
}