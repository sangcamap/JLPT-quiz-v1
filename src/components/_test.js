import {n3} from './_quizdata'

var data = [
 
]

const dataStorage = [...n3]


const getDataFromStorage = (e) => {
    data = []
    for (let i = 0; i < e; i++) {
        let randomIndex = Math.floor(Math.random() * dataStorage.length);
        data.push(dataStorage[randomIndex])
    }
}

getDataFromStorage(1)


export { data, dataStorage, getDataFromStorage}




