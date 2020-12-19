//Importante usare solo let e const e NON var
//1. Creare una funzione che dato un oggetto persona ritorni il campo age se esiste 
//altrimenti ritorni una stringa con scritto "età non presente"

const personaNoAge = {
    nome: "Antonio"
}

const personaWithAge = {
    nome: "Luigi",
    age: 25
}

const getAge = (persona) => {
    //sviluppa qui

    if (persona.age != undefined) {  //se age non è udefined che esiste altrimenti no.   
        return age
    }
    return "età non presente"

}


const getAgeShort = (persona) => persona.age || "eta non presente"
//sviluppa qui
// const test= true || false
// const test0= false || true
// const prova= false || false //false !!
// const prova2= "" || "ciao"


//    // if (persona.age != undefined) {  //se age non è udefined che esiste altrimenti no.
//         return age
//     }  
//         return "età non presente"


console.log(getAgeShort(personaWithAge))

//getAge(personaNoAge) //dovrebbe ritornare 25
// getAge(personaWithAge) dovrebbe ritornare età non presente




//2. Creare una funzione che date tre proprietà ritorni un oggetto con quelle proprietà

const returnObject = (nome, age, lavoro) => {
    //sviluppa qui
    // const io = {}
    // io.nome=nome
    // io.lavoro=lavoro
    // io.age=age

    // return io

    //     const io={
    //         nome:nome,
    //         lavoro:lavoro,
    //         age:age
    //     }
    //         return io

    // const io={

    // }
    // io["nome"]= nome
    // io["age"]= age
    // io["lavoro"]=lavoro

    // return io

    return {
        nome, lavoro, age
    }

}

const returnshort = (nome, lavoro, age) => ({nome, lavoro, age}) // si aggiungono e parentesi tonde quando si vuoel ritornare con l'arrow un oggetto. 
    



console.log(returnObject("Giovanni", "33", "falegname"))

returnObject("Alessandro", 28, "dev") //dovrebbe ritornare { nome: "Alessandro", age: 28, lavoro: "dev"}


//3. Creare una funzione che dati due oggetti ritorni una stringa contenente il nome della persona con la seniority maggiore

const junior = {
    name: "Alberto",
    seniority: 2
}

const senior = {
    name: "Federico",
    seniority: 5
}

const getMaxSeniority = (obj1, obj2) => {
    //sviluppa qui
    

    if(obj1.seniority > obj2.seniority){
         return obj1.name
    }
        return obj2.name
    
       

}

getMaxSeniority(junior, senior) 

console.log(getMaxSeniority(junior,senior))

//EXTRA Dato un array di oggetti ritornare il nome della persona con age maggiore ed age minore


const arrayPeople = [
    {
        name: "Giovanni",
        age: 88
    },
    {
        name: "Mattia",
        age: 90
    },
    {
        name: "Federico",
        age: 8
    },
    {
        name: "Marco",
        age: 55
    }
]


const getMaxMinAge = (array) => {
    //sviluppa qui
}

//getMaxMinAge(arrayPeople) dovrebbe ritornare una stringa: "Mattia è il piu vecchio, Federico è il piu giovane" 