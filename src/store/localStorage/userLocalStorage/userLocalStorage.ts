
export function getUserStorage (){
    return localStorage.getItem('userName');
}

export function setUserStorage (value: string){
    return localStorage.setItem('userName', JSON.stringify(value));
}