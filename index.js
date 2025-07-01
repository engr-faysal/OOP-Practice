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


/* Object Constructor*/
        function wife(){
            this.first_name="Rabeya",
            this.last_name="Akter",
            this.age=21,
            this.city="Dhaka",
            this.isFaridpuira=true

            this.getName= ()=>{
                return `Wife's Name ${this.first_name} ${this.last_name}`
            }
        }
        let wifeInstance = new wife();
        console.log(wifeInstance.getName());



/* Object blueprint by class*/
        class user{
            first_name = "sadia"
            last_name = "Afroj"
            age = 6
            city = "Madaripur"
            isBangladeshi = true
            getName(){
                return `Nephew Name is ${this.first_name} ${this.last_name}`
            }
        }

        let userObj1 = new user()
        console.log(userObj1.getName())