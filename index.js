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



/* Object Constructor with parameter and argument*/
        class add{
            constructor(num1,num2){
                console.log("\n This is a constructor Method, Works Automatically without calling, taking Parameter and can't return")
                let sum =num1+num2;
                console.log(sum)
            }
        }

        let addObj = new add(50,30)



/*Change class properties value using constructor*/
        class sub{
            num1 = 50;
            num2 = 30;

            constructor(a,b){
                this.num1 = a
                this.num2 = b
            }
            subTwoNumber(){
                return this.num1-this.num2;
            }
        }

        let subObj = new sub(100,30);
        console.log(subObj.subTwoNumber());


/*Getter and Setter Methods*/
        class Product{

            set setPrice(value){
                this.price=value
            }

            get getPrice(){
                return this.price
            }
        }

        let ProductObj = new Product();
        ProductObj.setPrice=100
        console.log("This is value find by getter method")
        console.log(ProductObj.getPrice)


/*Static keyword used for -Shared Properties - Utility Function - Memory Efficiency - Performance*/
        class customer{
            static first_name="MD"
            static last_name="Rumman"

        static getName(){
                return `Customer name is ${this.first_name} ${this.last_name}`
            }
        }

        console.log(customer.first_name)
        console.log(customer.last_name)
        console.log(customer.getName())


/* Inheritance*/
        class Father{
            num1 = 10;
            num2 = 30;

            addNumber(){
                let sum = this.num1 + this.num2;
                console.log(sum)
            }
        }

        class Daughter extends Father{

        }

        let DaughterObJ = new Daughter()
        console.log (DaughterObJ.num1)
        console.log (DaughterObJ.num2)
        DaughterObJ.addNumber()

        let FatherObj = new Father()
        console.log(FatherObj.num1)
        FatherObj.addNumber()


/*Inheritance with constructor and Parameter*/
        class Mother{

        }

        class son extends Mother{
            
            constructor(msg){
                super()
                console.log(msg)
            }
        }

        new son("Constructor of son and print");


/*Method overriding*/
        class father{
            addNumbers(){
                let num1 = 20;
                let num2 = 55;
                console.log(num1+num2)
            }
        }

        class daughters extends father{
            addNumbers(){
                let num1 = 220;
                let num2 = 350;
                console.log(num1+num2)
            }
        }

        let fatherObj = new father()
        fatherObj.addNumbers()

        let daughtersObJ = new daughters()
        daughtersObJ.addNumbers()



/*Method overloading*/
        class myClass{

            myMethod(p1,p2,p3){
                if(arguments.length==1){
                    console.log("Recieved One Argument", p1)
                }
                else if(arguments.length==2){
                    console.log("Recieved Two Arguments", p1,p2)
                }
                else if(arguments.length==3){
                    console.log("Recieved Three Arguments", p1,p2,p3)
                }
            }
        }
        let myClassObj = new myClass()
        myClassObj.myMethod(5)
        myClassObj.myMethod(10,15)
        myClassObj.myMethod(20,25,30)



        /*
        --------------- Encapsulation -------------
        1. Grouping Data and Action
        2. Hide Complexity
        3. Data protection
        4. Controlled Access
        5. Enhances maintainability

        - Encapsulation Using Closures
        - Using Constructor Functions
        - Using ES6 Classes
        */



/*Encapsulation Using Closures*/
        function createCounter(){
            let count = 0;

            return{
                increment: function(){
                    count++;
                },
                decrement: function(){
                    count--;
                },
                getCount: function(){
                    return count;
                }
            }
        }

        const counter = createCounter()

        counter.increment()
        counter.increment()
        counter.increment()
        counter.increment()
        counter.decrement()
        counter.decrement()

        console.log('counter vaolue', counter.getCount())
