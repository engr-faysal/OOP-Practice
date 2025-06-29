/* Object Literal*/
        let person={
            first_name: "Faysal",
            last_name: "Imran",
            age: 28,
            city: 'Dhaka',
            isBangladeshi: true,
            getName: ()=>{
                return `My nmae is ${person.first_name} ${person.last_name}`
            }
        }
        console.log(person.getName())



