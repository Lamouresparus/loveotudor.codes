---
image: /images/uploads/istockphoto-1131109259-170667a.jpg
title: "Object-Oriented Programming Principles in java: Part 2"
date: 2020-07-21T15:31:38.176Z
published: true
canonical_url: true
cover_image: /images/uploads/istockphoto-1131109259-170667a.jpg
tags:
  - java
  - android
  - kotlin
description: Learn the basics of Object-Oriented Programing in the java language
---
> In our previous article, we talked about classes and objects. We created a class called "Book" and instantiated a Book object-"myBook" in our main method. Our code was not quite perfect. Let us see why -shall we?

## Encapsulation

Assuming our librarian wants to update the number of available copies of Happy home in our bookstore to 23. It would look like this:

`myBook.noOfCopies = 24;`

This isn't cool and this is why. If our librarian erroneously inputs a negative value:

```java
Book myBook = new Book("Happy Home", "Love Otudor", "June 2020");
myBook.noOfCopies = -24;
System.out.println(myBook);
```

![Code output](/images/uploads/screenshot-from-2020-05-25-16-57-40.png "Book details")

Our code seems to be working fine.
Lets see what happens when we attempt a purchase of 6 copies of Happy Home:

`myBook.buy(6);`

We get this:

![Code output](/images/uploads/screenshot-from-2020-05-25-17-02-00.png "Book purchase")

We cannot purchase a book. This is because we have a negative number of available copies.

Remember, in the `buy` method, we restricted the purchase of a book if the number of copies to be purchased was greater than the number of copies available.

It doesn't even make sense to have a negative number of books in a bookstore in the first place.

So, how can we avoid this?

Well, this is where encapsulation comes in.

### Encapsulation protects the fields of a class.

*Encapsulation* is achieved when the state of an object is kept private in its class. This makes it impossible to have direct access and make direct changes to its state as we did earlier.

You may ask: how then can we access and manage the states of the object? We can do this through public methods(getters and setters) in the object’s class.

To make our fields in the book class private, we just use the keyword `private`.

```java
public class Book {

   //The fields having no access modifier makes them(fields/states) package private
   private static int bookCount;
   private int bookId;
   private String title;
   private String author;
   private String yearOfPublication;
   private int noOfCopies;
   private double price;

   //...other codes are hidden for clarity

}
```

We see an error in the Main method.

![Error in Main method](/images/uploads/screenshot-from-2020-05-26-11-44-02.png "Error in the Main method")

We have successfully secured our fields.

On to the next!

The *Setter* method also known as *mutators* are used to set the state of an object. It is a void method that begins with the word set and looks like this.

```java
public void setNoOfCopies(int noOfCopies) {
   if(noOfCopies >=0) {
       this.noOfCopies = noOfCopies;
   }
   else{
       System.out.println("Input a valid number");
   }
}
```

We have successfully blocked the librarian from assigning negative values to the number of copies available for a book.

The setters for the other fields would look like this:

```java
public void setPrice(double price) {
   if(price <0) this.price = 0.0;
   else this.price = price;
}

public void setTitle(String title) {
   this.title = title;
}

public void setAuthor(String author) {
   this.author = author;
}

public void setYearOfPublication(String yearOfPublication) {
   this.yearOfPublication = yearOfPublication;
}
```

\
*Getter* methods simply return the value of the object's property. They begin with the word \`get\`.

```java
public static int getBookId() {
   return bookId;
}

public String getTitle() {
   return title;
}
// …
```

I trust you can complete that.

Let's use this in our main method.

```java
public class Main {

   public static void main(String[] args) {
  Book myBook = new Book("Happy Home", "Love Otudor", "June 2020");
  System.out.println("-------------- Using Setters-----------------");
  System.out.println();
  myBook.setNoOfCopies(-24);
  System.out.println();
  System.out.println("-------------- Using Getters-----------------");
  System.out.println();
  System.out.println(myBook.getNoOfCopies());
   }
}
```

Running this we get:

![Code output](/images/uploads/screenshot-from-2020-05-28-18-18-51.png "Using getters and setters")public class 

With encapsulation, we’ve gained control over our data by restricting the receptionist from assigning negative values.



## Inheritance

Inheritance is a concept in which an object inherits all the properties and behaviors of a parent object.

So far we've seen that everything is an object. This theory creates the possibility of having very similar objects in a program.

For example, we could have textbooks and novels in our Bookstore. A textbook and a novel share the same properties as a book object. The only difference is:

* A textbook has a subject property, and
* Novels have genres. 

To achieve this we could:

1. Create a class called Textbook.
2. Copy and paste all the code from the Book class into the Textbook class.
3. Create a subject field with its getters and setters.
  ```java
 public class TextBook extends Book {
      private String subject;
      TextBook(String subject, String title, String author, String yearOfPublication) {
          super(title, author, yearOfPublication);
          this.subject = subject;
      }

      public String getSubject() {
          return subject;
      }

      public void setSubject(String subject) {
          this.subject = subject;
      }

      @Override
      public String toString() {
          return ("Book Id: "+getBookId()+"\n"+
                  "Subject: "+getSubject()+"\n"+
                  "Title: "+getTitle()+"\n"+
                  "Author: "+getAuthor()+"\n"+
                  "Year of Publication: "+getYearOfPublication()+"\n"+
                  "Price: $"+getPrice()+"\n"+
                  "Number of Copies Available: "+getNoOfCopies()+"\n"+
                  "Thank you!");
      }
   }
```

We could do the same for the Novel class, but that's a lot of code duplication.

With inheritance, we eliminate unnecessary code duplication by making the Textbook and Novel class inherit the properties of the Book class.

### A class can inherit all the properties of another class and/or interface

The derived(child) class can have the states and methods of its base(parent) class, along with its states and methods. A derived class can extend only one base class, however, it can implement more than one interface. An interface on the other hand can extend any number of interfaces.
We can harness the power of inheritance in our BookStoreApp by creating a class called TextBook, having Book as its parent.

![Image illustration of inheritance](/images/uploads/screenshot-from-2020-07-22-14-34-15.png "Inheritance")

We can harness the power of inheritance in our BookStoreApp by creating a class called TextBook, having Book as its parent.

```java
public class TextBook extends Book {
   private String subject;
   TextBook(String subject, String title, String author, String yearOfPublication) {
       super(title, author, yearOfPublication);
       this.subject = subject;
   }

   public String getSubject() {
       return subject;
   }

   public void setSubject(String subject) {
       this.subject = subject;
   }

   @Override
   public String toString() {
       return ("Book Id: "+getBookId()+"\n"+
               "Subject: "+getSubject()+"\n"+
               "Title: "+getTitle()+"\n"+
               "Author: "+getAuthor()+"\n"+
               "Year of Publication: "+getYearOfPublication()+"\n"+
               "Price: $"+getPrice()+"\n"+
               "Number of Copies Available: "+getNoOfCopies()+"\n"+
               "Thank you!");
   }
}
```

The Novel class would look pretty much look the same way. Except that instead of having a `subject` field, it would rather have `genre`.

We can now create instances of the Textbook and Novel class in our Main Method.

`TextBook javaBasics = new TextBook("Java Programming", "Introduction to Java", "Jim Wilson", "January,2020");`

``

`Novel theRoadToBarBeach = new Novel("Fiction", "The Road To Bar Beach", "Sam Eyo", "1988");`

`System.out.println(myBook +"\n" +"\n"+javaBasics+ "\n"+ "\n"+ "\n" + theRoadToBarBeach);`

Running this would give:

![output code](/images/uploads/screenshot-from-2020-06-02-18-01-01.png "output of inheritance code")

## Abstraction

When something is called abstract, it means that it is incomplete or not clearly defined. Similarly, abstraction in java is a programming technique that hides the implementation details and reveals only the functionality(relevant operations) to the user.

### Abstraction exposes the necessary features of a class without explaining many details.

A real-world example of abstraction is when we charge our mobile devices. All we have to do is connect our charger to a power source and plug it to our phones. We don't need to know the nitty-gritty details of the flow of electrons and all that complex stuff.

We can achieve abstraction in two ways:

1. An abstract class.
2. An interface.

An *abstract class* is a class that has the keyword **abstract**. It could have constructors and any number of abstract, static, or final methods. Abstract classes cannot be instantiated(have objects of itself).

An *abstract class* is a class that has the keyword **abstract**. It could have constructors and any number of abstract, static, or final methods. Abstract classes cannot be instantiated(have objects of itself). An *abstract method* has the keyword **abstract**, with no implementation(method body). Thet exists only in an abstract class and should not be private, as it is to be implemented by the user. With abstract classes, we can achieve 100% or less abstraction.

An *interface* on the other hand is 100% abstract and has no concrete methods. It is created with the keyword **interface.** Here is an interesting fact: just as a class is the blueprint of an object, an interface is also the blueprint of a class.

Back in our BookStore App, we want to restrict the librarian from creating a book object. Rather, the book type must be specified as a Novel or Textbook.

To do this, firstly we make our Book class abstract.

```java
public abstract class Book {

   //...Codes hidden for clarity
}
```

If we try to create a Book, we get this error from IntelliJ:

**“Book' is abstract; cannot be instantiated”.**

Nicely done!

With abstraction, we can force all subclasses of the Book class to implement the toString method. By making the toString method of the Book class an abstract method. To achieve this we:

* use the keyword abstract,
* remove the method's body, and
* add a semicolon.

  ```java
  //We override this method so it does not print out the memory address of the book
  @Override
  public abstract String toString();
  ```

Now if we remove the overridden toString method in either of the Novel and TextBook class, we get an error that says:

**“Class 'TextBook' must either be declared abstract or implement abstract method 'toString()' in 'Book'”.**

## Polymorphism

*Polymorphism* is a Greek word that means many forms. In java is the ability of an object to have many forms.

For example, a female could be a mother, a sister, an aunt, and many more. They all(mother, sister, aunt, etc.) are subclasses of the Female class. So if we have a  mother called Lisa, an aunt called Joy, and a sister called Love. We could have a list of females and have Lisa, Joy, and Love in it. That's polymorphism there. Because they are all females, they can be grouped as females.

Polymorphism makes it possible for a class to be used exactly as its parent, while still keeping its methods.

With polymorphism, it is possible to create an ArrayList of Books in our BookStore app that stores both Novels and Textbooks.

```java
TextBook javaBasics = new TextBook("Java Programming","Introduction to Java",
     "Jim Wilson", "January, 2020");

Novel theRoadToBarBeach = new Novel("Fiction", "The Road To Bar Beach", "Sam Eyo",
     "1988");


ArrayList<Book> list = new ArrayList();
list.add(javaBasics);
list.add(theRoadToBarBeach);
System.out.println(list);
```

### Polymorphism enables a superclass to reference its subclass object.

`Book myBook = new Novel("Fiction","Happy Home", "Love Otudor", "June 2020");`

``

Here the superclass Book references its subclass Novel.

**Thank you for reading! I hoped this article helped you.**

**\*\*\*Smily Face\*\*\***