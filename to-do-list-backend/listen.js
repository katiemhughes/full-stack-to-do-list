const { PORT = 5000 } = process.env;

const app = require("../to-do-list-backend/server");

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});