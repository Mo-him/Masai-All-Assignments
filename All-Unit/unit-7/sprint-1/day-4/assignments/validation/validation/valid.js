const valid = (req, res, next) => {
    if (req.method == 'POST') {
        const detail = req.body
        if (typeof (detail.id) != 'number' || typeof (detail.rating) != 'number' || typeof (detail.name) != 'string' || typeof (detail.description) != 'string' || typeof (detail.cast) != 'string' || typeof (detail.genre) != 'string') {
            res.status(400).send('bad requst ')
        }
            else{
                next()
            }
        
    }
    else{

        next()
    }
}

module.exports = valid;

