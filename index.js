const API_KEY = `930b56c7e1ce4dcd99f153915260609`;
const API = `https://api.weatherapi.com/v1/current.json?`;

const response = await fetch(API);
let data = response.json;

let input = documentGetbyId("search");

const getdata = () => {
  let a = consolog(data);
};
