

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let result = true;
        if(result) {
        resolve("La operación fue exitosa");
    } else {
        reject("Falló la operación");
    }
    }, 1000);
});

promise
    .then(message => console.log(message))
    .catch(error => console.log(error));