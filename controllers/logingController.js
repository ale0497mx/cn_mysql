const connection = require('../models/db');

module.exports.loging = (req, res) => {
    const consult = 'SELECT * FROM user';


    try {
        connection.query(consult, (err, results) =>{
            console.log(results);
        });
    } catch (e) {
        
    }
}
// function query(sql) {
//     return new Promise((resolve, reject) => {
//         connection.query(sql, (error, results) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(results);
//             }
//         });
    // });
// }