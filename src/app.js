import Express from "express";

const app = Express();
app.use(Express.json());

//endpoint registro estudiante 
app.get('/registro', (req, res) => {
    const {id, user, last_name, email, birth_date, password, conf_password} = req.body;
    res.json({
        id: 1,
        user: "Armando",
        last_name: "Caceres",
        email: "usac@gmail.com",
        birth_date: "9/9/1952",
        password: "12345",
        conf_password: "12345"
    });
});

//endpoint inicio de sesion
app.get('/login', (req, res) => {
    const {email, password} = req.body;
    res.json({
        email: "usac@gmail.com",
        password: "12345"
    });
});

//endpoint asignacion curso
app.get('/asing', (req, res) => {
    const {id, user, class_c, section, day, time} = req.body;
    res.json({
        id: 1,
        class_c: "analisis1",
        section: "C",
        day: "Lunes",
        time: "9:00 a.m."
    });
});

export default app;