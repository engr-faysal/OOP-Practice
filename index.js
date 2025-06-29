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


/* Object instance*/
        let daughter= new Object();
        daughter.first_name="Minha",
        daughter.last_name="Ayat",
        daughter.age=0,
        daughter.city="Dhaka"
        daughter.getName= function(){
            return `Daughter's Name ${daughter.first_name} ${daughter.last_name}`
        }
        console.log(daughter.getName())
