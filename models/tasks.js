module.export = app => {
    return {
        findAll: (params, callback) => {
            return callback([{
                    title: 'Fazer compras'
                },
                {
                    title: 'Consertar o pc'
                }
            ]);
        }
    };
};

// module.exports = app => {
//     app.get("/tasks", (req, res) => {
//         res.json({
//             tasks: [{
//                     title: "Fazer compras"
//                 },
//                 {
//                     title: "Consertar o pc"
//                 }
//             ]
//         });
//     });
// };