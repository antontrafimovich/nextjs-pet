export const getBodyFromResponse = (res) => {
  return new Promise((resolve, reject) => {
    let result = "";

    res
      .on("data", (chunk) => {
        result += chunk;
      })
      .on("error", (err) => {
        reject(err);
      })
      .on("end", () => {
        let resultJSON;

        try {
          resultJSON = JSON.parse(result);
        } catch (err) {
          reject(new Error("Error during parsing response body has occured."));
        }

        resolve(resultJSON);
      });
  });
};
