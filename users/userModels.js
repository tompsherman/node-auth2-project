const db = require('../data/db-config')

module.exports = {
    //function names:
    find,
    findBy,
    create,
}

    //functions:
    function find(){
        return db('users')
    }
    function findBy(filter){
        return db('users')
        .where(filter)
        .orderBy('id')
    }
    async function create(duck){
        const [id] = await
        db('users').insert(duck)
            return db('users')
            .where({id})
            .first()
    }