/*
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
}
*/

async function getProcessedData(url) {
    var v;
    try {
      v = await downloadData(url); // Intenta la promesa principal.
    } catch(e) {
      v = await downloadFallbackData(url); //Se captura el error de el caso en que falle la promesa
    }
    return processDataInWorker(v); //No necesita un await, por que este es el resultado de que ambas promesas sean reales
  }