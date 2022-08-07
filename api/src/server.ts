import app from "./app";
import { AppDataSource } from "./typeorm/data-sources"

app.listen(process.env.PORT, async () => {
  console.log(`Server started in port ${process.env.PORT}`);
  AppDataSource.initialize().then(() => {
    console.log("Success");
  }).catch(err => {
    console.log("Database not started");
  })
})