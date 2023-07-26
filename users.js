
const http = require('http');
const hostname = '127.0.0.1';
const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(express.text());
app.use(cors());
app.use(express.json());
let nr_acces = 0;
let feedback_api = "";
app.get(
    "/page", (req, res) => {

        res.sendFile("./pages/page.html", { root: __dirname });

    }
);
app.post("/users", (req, res) => {
    

    feedback_api = req.body;

    console.log(feedback_api);
}
);
app.get("/users", (req, res) => {

    res.send({

        feedback_api,
       
    })
}
);

app.get("/api", (req, res) => {

    nr_acces += 0.5;
    console.log(nr_acces + " accceses");

    res.json({
        test: "Number of users that accessed the page:" + nr_acces,

    })

}
);

app.listen(process.env.PORT || 5001, () => {
    console.log("it works");
});
