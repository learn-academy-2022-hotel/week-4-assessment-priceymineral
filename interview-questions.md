# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: OOP is a coding paradigm in which objects are the basis for code development. Every object is the instance of a blueprint called a class. A class can be instantiated as many times as needed to create as many objects as necessary. Methods and attributes can be defined within the class and will be available for access for the instantiated object. Functional programming relies on functions as the building blocks for code functionality. 

Researched answer: Most common type of OOP is class based or "classical" OOP. OOP is modeled by a collection of objects, each of which perform a specific function and represent a specific aspect of a system. 

1. What is the difference between a Float and an Integer in Ruby?

Your answer: A float contains a decimal ('.') and an integer does not. They are instantiations of different classes: Integer in the case integers and Float in the case of floats, which means they have different properties and methods from each other. 

Researched answer: Adding a float to an integer will retun a float. An underscore can be used for large integers for readability, e.g. 1000000 (one million) can be represented by 1_000_000 and interpreted equally in Ruby. 

1. Ruby has an implicit return. What does that mean?

Your answer: It is built into the methods without the need of a special keyword as in Javascript where the keyword "return" is necessary within a function (explicit return). 

Researched answer: An implicit return means that a value is returned automatically at the end of the function call. Much like an arrow function in JS, all Ruby blocks have an implicit return. The default value is nil, and will be reassigned to the last line of code in a block. The return keyword can be used for explicit returns.

1. What is a block in Ruby?

Your answer: A block is a custom method that can be passed to Ruby's built in methods. It is identified by the syntax "do-end." The keyword "do" marks the beginning of the block and "end" marks the end of the block. Ruby blocks are used to extend the functionality of built in methods to custom needs of the user. 

Researched answer: Like anonymous functions in Javascript, they're methods without a name. Blocks do not belong to an object. Curly braces can be used to replace the do-end keywords. Arguments are passed in between pipes || and separated by commas if multiple are required. The yield keyword is used to call a block inside of a method. 

1. How do you extract a value in a Ruby hash?

Your answer: Dot notation as well as bracket notation (?). 

Researched answer: Bracket notation can be used with the key. The method .extract() can also be used followed by the key and the .values or .keys method, e.g.
student = {"name"=>"Octavio"}
student.extract('name').keys => ['name']
student.extract('name').keys => ['Octavio']

## Looking Ahead: Terms for Next Week

1. Class Inheritance: The ability for a class (in this case known as a subclass) to access properties and methods of the parent class, known as a superclass. It is useful to keep logic in one place without the need to repeat code. 

2. RSpec: Stands for Ruby Specification and it is a framework used to test the behavior of a Ruby application. 

3. CRUD: Create-Read-Update-Delete are the four basic actions a user can perform to manage data stored in a database. 

4. Test-driven development: The process of converting web application development requirements into tests to accomplish the desired goals of the application. 

5. HTTP: Set of rules that define how a client-server communication takes place. The client typically being the web browser and server the system where data is fetched. 
