class Index {
    static index(req, res) {
        try {
            res.render('index', {

            })
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default Index;