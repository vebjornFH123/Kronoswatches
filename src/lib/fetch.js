
export async function fetchAPI(url, func, fetch) {
  try {
    let response = await fetch(url); //waiting for promise to be settled...
    let data = await response.json(); //waiting for promise to be settled...
    //do something with the data..
    func(data); // call the function with the data.
  } catch (err) {
    console.log(`Something went wrong with ${fetch.toUpperCase()} fetch:` + err);
  }
}

