const getStoredApp = () =>{
    const storedAppSTR = localStorage.getItem('installed-apps');
    if(storedAppSTR){
        const storedApp = JSON.parse(storedAppSTR);
        return storedApp;
    }else{
        return [];
    }
}

const addToDb = (id) =>{
 
    const storedApp = getStoredApp();
    
    if(storedApp.includes(id)){
        alert('App Already Installed');
    }else{
        storedApp.push(id);
        localStorage.setItem('installed-apps',JSON.stringify(storedApp));
    }
}

const removeFromDb = (id) =>{
    const storedApp = getStoredApp();
    const remainingApps = storedApp.filter(appId => appId !== id);
    localStorage.setItem('installed-apps', JSON.stringify(remainingApps));
    console.log(remainingApps);
    console.log(storedApp);
}
export {addToDb,getStoredApp,removeFromDb};