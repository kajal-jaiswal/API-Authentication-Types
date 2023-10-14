// import express from "express";
// import axios from "axios";

// const app = express();
// const port = 3000;
// const API_URL = "https://secrets-api.appbrewery.com";

// //TODO 1: Fill in your values for the 3 types of auth.
// const yourUsername = "kajal";
// const yourPassword = "kaja123";
// const yourAPIKey = "d33361bc-00c1-4439-848d-22d52557d9a9";
// const yourBearerToken = "28221a88-9dca-4cce-8f54-bbcdcf618bfa";

// app.get("/", (req, res) => {
//   res.render("index.ejs", { content: "API Response." });
// });

// app.get("/noAuth",async (req, res) => {
//    //TODO 2: Use axios to hit up the /random endpoint
//   //The data you get back should be sent to the ejs file as "content"
//   //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.

//   try{
//     const response = await axios.get(API_URL + "/random");
//     const result = JSON.stringify(response.data);
//     res.render("index.ejs",{
//       content : result
//     });

//   }
//   catch (error) {
   
//       res.status(404).send(error.message);
//     }
  
// });




// app.get("/basicAuth",async (req, res) => {
//    //TODO 3: Write your code here to hit up the /all endpoint
//   //Specify that you only want the secrets from page 2
//   //HINT: This is how you can use axios to do basic auth:
//   // https://stackoverflow.com/a/74632908
//   /*
//    axios.get(URL, {
//       auth: {
//         username: "abc",
//         password: "123",
//       },
//     });
//   */
//   try{
//     const response = await axios.get(API_URL + "/all?page=2",{
//       auth : {
//         username:yourUsername,
//         password:yourPassword,
//       }
//     });
//     const result = JSON.stringify(response.data);
//     res.render("index.ejs",{
//       content : result
//     });

//   }
//   catch (error) {
   
//       res.status(404).send(error.message);
//     }
 
// });

// app.get("/apiKey",async (req, res) => {
//    //TODO 4: Write your code here to hit up the /filter endpoint
//   //Filter for all secrets with an embarassment score of 5 or greater
//   //HINT: You need to provide a query parameter of apiKey in the request.
//   try{
//     const response = await axios.get(API_URL + `/filter?score=5&apiKey=${yourAPIKey}`,{
    
//     });
//     const result = JSON.stringify(response.data);
//     res.render("index.ejs",{
//       content : result
//     });

//   }
//   catch (error) {
   
//       res.status(404).send(error.message);
//     }
 
// });
 
// const config = {
//   headers: { Authorization: `Bearer ${yourBearerToken}` },
// };

// app.get("/bearerToken", async (req, res) => {
//   try {
//     const result = await axios.get(API_URL + "/secrets/2", config);
//     res.render("index.ejs", { content: JSON.stringify(result.data) });
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// // app.get("/bearerToken", (req, res) => {
// //   //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
// //   //and get the secret with id of 42
// //   //HINT: This is how you can use axios to do bearer token auth:
// //   // https://stackoverflow.com/a/52645402
// //   /*
// //   axios.get(URL, {
// //     headers: { 
// //       Authorization: `Bearer <YOUR TOKEN HERE>` 
// //     },
// //   });
// //   */
// // });

// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });

