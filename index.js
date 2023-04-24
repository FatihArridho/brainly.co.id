'use-strict';

    const Brain = require("./src/brainly")
    
    const Brainly = async (query, count = 10) => {
    let response = await Brain(query, count).catch(error => {
        return {
            'success': false,
            'message': error,
        };
    });

    return response;
};

module.exports = Brainly;