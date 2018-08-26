import config from "../config";

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Sheet1!A2:C"
      })
      .then(
        response => {
          const data = response.result.values;
          const items = data.map(item => ({
            name: item[0],
            link: item[1],
            description: item[2],
            type: item[3]
          })) || [];

          callback({
            items
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
