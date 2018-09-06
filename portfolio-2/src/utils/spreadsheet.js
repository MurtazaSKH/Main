import config from "../config";

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Sheet1!A2:G"
      })
      .then(
        response => {
          const data = response.result.values;
          const items = data.map(item => ({
            name: item[0],
            link: item[1],
            description: item[2],
            type: item[3],
            imageLink:item[4],
            id:item[5],
            tech:item[6]
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
//+ data.col + data.row
export function saveContact(data,successCallback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
    .update({
      apiKey: config.apiKey,
      spreadsheetId: config.spreadsheetId,
      range: 'Sheet2!A1' ,
      valueInputOption: 'USER_ENTERED',
      resource: data.value
    }).then(successCallback);
  });
}
