module.exports = app => {
    app.get("/", (req, res) => {
        res.json({
            status: "NTask API"
        });
    });
};

module.exports = app => {
    const Tasks = app.models.tasks;
    app.get('/tasks', (req, res) => {
        Tasks.findAll({}, (tasks) => {
            res.json({
                tasks: tasks
            });
        });
    });
};

// module.exports = app => {
//   var Tasks = app.models.tasks;
//   app.get("/tasks", (req, res) => {
//     Tasks.findAll({}).done((tasks) => {
//       res.json({tasks: tasks});
//     });
//   });
// }; 