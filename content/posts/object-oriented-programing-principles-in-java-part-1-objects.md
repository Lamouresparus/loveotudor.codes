---
image: /images/uploads/piqsels.com-id-zblld.jpg
title: "Object-Oriented Programing Principles in java: Part 1 Objects"
date: 2020-06-10T11:36:29.823Z
published: true
tags:
  - "#java"
canonical_url: true
description: Learn the basics of Object-Oriented Programing in the java language
---
A programming concept I found difficult wrapping my head around in my third year in the University was Object-Oriented Programming. Coming from a QBasic foundation, this didn't sit well with me at first. It took lots of studies, googling, and reading tons of articles and videos to finally gather these points, which vaguely made sense to me then lol. Well, here I am 18 months later, writing about OOP. Who would have thought!

I wrote out these bullet points, which helped me a great deal:

* An Object-oriented program is a collection of objects interacting together. A class models an object.
* Encapsulation protects the fields of a class.
* A class can inherit all the properties of another class, interface, or both.
* Abstraction exposes the necessary features of a class without explaining many details.
* Polymorphism enables a superclass to reference its subclass object

Let's dive into these points.

## An object-oriented program is a collection of objects interacting together.

An object-oriented program is composed of objects. These multiple objects collectively define how the entire program works.

Say we have a bookstore that keeps a database of all its books. The bookstore has a librarian, chairs, tables, and so on. All these objects in the books store communicate with each other. Here's how: If a student comes to get a book titled “The road to bar beach” written by Sam Eyo. The librarian asks the database if it has a book with such a title and author. If the book is in the database, the database then gives the receptionist the number of copies available and checks the book details to get the cost of the book. Here we see the communication between the receptionist, the database, and the book. This is how an object-oriented program works—with different objects communicating with each other according to the rules specified by the program.

Our bookstore comprises different objects, with each object having distinct states called *fields* and behaviors called *methods*. The fields are the properties of the object.

For example, a book will have fields:



| S/N | Fields | Values                |
| --- | ------ | --------------------- |
| 1.  | Title  | The Road To Bar Beach |
| 2.  | Author | Sam Eyo               |



Let's see how this looks in code.



```java
public class Book {

   //The fields having no access modifier makes them package private

   int bookId;
   String title;
   String author;
   String yearOfPublication;
   int noOfCopies;
   double price;
}
```





This book could have methods:

1. isAvailable:

   ```java
    public booleanisAvailable(){

      returnnoOfCopies>0;
   }
   ```