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
Object-Oriented Programming was this Programming paradigm that I found difficult—coming from a QBASIC foundation. I had to do a lot of studying, googling, reading tons of articles—which vaguely made sense to me then, until I finally got my eureka moment. Here I am, writing an article on the concept that took me so long to understand. I can’t still believe I spent months on something I could have learned within an hour if I had the proper guide. Lol—google search no more, because here I am with the guide I wish I had to understand the concept of Object-Oriented Programming.

Back then, when I was learning, there were some bullet points I wrote behind my jotter that helped me a great deal to understand this paradigm. The first thing I would like you to do is to pick up your pen or create sticky notes to jot these points down.

* An Object-oriented program is a collection of objects interacting together. A class models an object.
* Encapsulation protects the fields of a class.
* A class can inherit all the properties of another class, interface, or both.
* Abstraction exposes the necessary features of a class without explaining many details.
* Polymorphism enables a superclass to reference its subclass object

Object-Oriented Programing Principles in java: Part 1 Objects



Object-Oriented Programming was this Programming paradigm that I found difficult—coming from a QBASIC foundation. I had to do a lot of studying, googling, reading tons of articles—which vaguely made sense to me then, until I finally got my eureka moment. Here I am, writing an article on the concept that took me so long to understand. I can’t still believe I spent months on something I could have learned within an hour if I had the proper guide. Lol—google search no more, because here I am with the guide I wish I had to understand the concept of Object-Oriented Programming.



Back then, when I was learning, there were some bullet points I wrote behind my jotter that helped me a great deal to understand this paradigm. The first thing I would like you to do is to pick up your pen or create sticky notes to jot these points down.



* An Object-oriented program is a collection of objects interacting together.
* A class models an object.
* Encapsulation protects the fields of a class.
* A class can inherit all the properties of another class, interface, or both.
* Abstraction exposes the necessary features of a class without explaining many details.
* Polymorphism enables a superclass to reference its subclass object

Done putting them down? Put on your swimming suit and dive with me into the sea of OOP. I know I haven’t quite explained what OOP is—I only kind of told you the story of my life.



Let's define!



What Is Object-Oriented Programming?



Object-Oriented Programming is a programming paradigm or concept in which your programs can be related to real-world objects.



Don’t panic yet, because I’m going to break this down real quick.



Assuming you have a bookstore that keeps a database of all its books. This bookstore has a librarian, books, chairs, tables, and so on. All these objects in the bookstore communicate with each other. Lol, I know this isn't the internet of things(IOTs), but just follow along.

An instance is a student coming into the library to get a book titled “The road to bar beach” written by Sam Eyo. The librarian asks the database if it has a book with such a title and author. If the book is in the database, the database then gives the receptionist the number of copies available and checks the book details to get the cost of purchasing the book.



Here you see the communication between the receptionist, the database, and the book.



An object-oriented program is a collection of objects interacting together.



This is how an object-oriented program works—with different objects communicating with each other according to the rules specified by the program.

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