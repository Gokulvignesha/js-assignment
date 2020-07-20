class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email} and achieved ${this.luCoins} coins`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    addCoins(user){
        user.luCoins += 100;
        console.log(`${user.name} has got ${user.luCoins} coins`);
    }

    removeCoins(user){
        user.luCoins -= 150;
        console.log(`${user.name} has loss ${user.luCoins} coins`);
    }



}

class Admin extends Moderator{
   addCourse(user,coursename){
       user.courses.push(coursename);
       console.log(user.courses);
   }
   removeCourse(user,coursename){
       var ind= user.courses.indexOf(coursename);
       delete user.courses[ind];
       console.log(user.courses);
   
}

   
}


let user1 = new User('abcd',21,'abcd@gmail.com')
let user2 = new User('efgh',22,'efgh@gmai.com')
let moder = new Moderator('modu',24,'boy@gmail.com','Moderator');
let admin = new Admin('adu',25,'bye@gmail.com');


admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
admin.removeCourse(user1,"Python");
admin.addCourse(user2,"Java");

user1.login();
user2.login();
user1.logout();

moder.addCoins(user2);
moder.addCoins(user2);
moder.addCoins(user2);
moder.removeCoins(user2);

user2.getDetails();
user2.logout();
