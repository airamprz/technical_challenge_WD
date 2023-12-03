const phonesData = require('../data/phones.json');

module.exports.viewAll = (req, res, next) => {
    try {
        res.json(phonesData);
    } catch (error) {
        console.error('Error while retrieving phones', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.viewOne = (req, res, next) => {
    try {
        const phoneId = parseInt(req.params.id);

        const phone = phonesData.find(phone => phone.id === phoneId);

        if (!phone) {
            return res.status(404).json({ error: 'Phone not found' });
        } else {
            res.json(phone);
        }
    } catch (error) {
        console.error('Error while retrieving phone details', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
