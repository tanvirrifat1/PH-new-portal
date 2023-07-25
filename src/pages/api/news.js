const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.afkplob.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();

    const newsCollection = client.db("news_portal").collection("news");
    if (req.method === "GET") {
      const news = await newsCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: news });
    }

    if (req.method === "POST") {
      const news = req.body;
      const result = await newsCollection.insertOne(news);
      res.json(result);
    }

    // if (req.method === "GET") {
    //   const id = req.params.id;
    //   const news = await newsCollection.findOne({ _id: ObjectId(id) });
    //   res.send({ message: "success", status: 200, data: news });
    // }
  } finally {
    // await client.close();
  }
}

export default run;
