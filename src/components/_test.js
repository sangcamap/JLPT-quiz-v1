import {n3} from './_quizdata'

const data = [
 
]

const dataStorage = [...n3]

const getDataFromStorage = (e) => {
    for (let i = 0; i < e; i++) {
        let randomIndex = Math.floor(Math.random() * dataStorage.length);
        data.push(dataStorage[randomIndex])
    }
}

getDataFromStorage(20)

export { data, dataStorage}




