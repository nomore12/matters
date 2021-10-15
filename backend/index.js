const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const whiteList = ["*"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not Allowed Origin'));
    }
  }
}

const images = {
  "images": [
    { "title": "Irure", "id": 1, "desc": "Irure magna minim enim consectetur ad cupidatat.", "date": "2021-10-13" },
    { "title": "Amet", "id": 2, "desc": "Amet veniam eiusmod qui culpa nulla.", "date": "2021-10-14" },
    { "title": "Lorem", "id": 3, "desc": "Lorem id quis ut elit aliquip in deserunt.", "date": "2021-10-14" },
    { "title": "Exercitation", "id": 4, "desc": "Exercitation veniam ea veniam occaecat veniam.", "date": "2021-10-15" }
  ]
};

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/api/images', (req, res) => {
  res.json({ok: true, images: images});
})

app.listen(5000, () => console.log('backend test'));