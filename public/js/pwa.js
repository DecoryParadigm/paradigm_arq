const init_func = () => {
    if ("serviceWorker" in navigator){
        navigator.serviceWorker.register("/service-worker.js")
        .then((reg) => { 
            console.log('Service worker registered -->', reg)
        })
        .catch ((err) => { 
            console.error('Service worker not registered -->', err);
        });
    }
}

document.addEventListener('DOMContentLoaded', init_func, false);