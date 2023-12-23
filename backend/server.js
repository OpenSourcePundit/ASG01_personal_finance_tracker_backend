import app from "./App.js";
import ConnectDB from "./config/database.js";

ConnectDB()



app.listen(process.env.PORT,()=>{
    console.log(`Server listening on PORT ${process.env.PORT}`)
})


