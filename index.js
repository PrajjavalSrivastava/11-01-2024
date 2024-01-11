import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date("June 26, 2023 11:12:00");
    const day = today.getDay();

    // console.log(day);
    let type = "a weekday";
    let adv = " its time to work hard";

    if (day ===0 || day ===6){
        type = "the weekend";
        adv = " its time to have some fun";
    }

    res.render("index.ejs",{
     dayType: type,
     advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});