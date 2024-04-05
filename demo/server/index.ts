import express from "express";
import cors from "cors";
import singleRouter from "./routes/single";
import multiRouter from "./routes/multi";

const app = express();
const port = 8080; // default port to listen


const corsOptions = {
  origin: ["http://localhost:3000", "https://developers.ceramic.network"],
  optionsSuccessStatus: 200 // For legacy browser support
  }

app.use(express.json());
app.use(cors(corsOptions)); 
// app.use(bodyParser.json());

const allowCrossDomain = (
  req: any,
  res: { header: (arg0: string, arg1: string) => void },
  next: () => void
) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

app.use("/single", singleRouter);
app.use("/multi", multiRouter);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
