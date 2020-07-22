---
image: /images/uploads/istockphoto-1131109259-170667a.jpg
title: "Object-Oriented Programming Principles in java: Part 2"
date: 2020-07-21T15:31:38.176Z
published: true
tags:
  - "#java"
canonical_url: true
description: Learn the basics of Object-Oriented Programing in the java language
---
> In our previous article, we talked about classes and objects. We created a class called "Book" and instantiated a Book object-"myBook" in our main method. Our code was not quite perfect. Let us see why -shall we?

## Object-Oriented Programing Principles in java: Encapsulation

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



![Code output](/images/uploads/screenshot-from-2020-05-28-18-18-51.png "Using getters and setters")





With encapsulation, we’ve gained control over our data by restricting the receptionist from assigning negative values.