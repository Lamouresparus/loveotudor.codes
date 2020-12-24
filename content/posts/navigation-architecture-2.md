---
image: /images/uploads/untitlednavi.png
title: Navigation Architecture 2
date: 2020-12-24T14:27:56.466Z
published: true
tags:
  - java
  - android
canonical_url: true
description: Learn how to pass data from one fragment to another using Safe Args
  in Navigation Architecture.
---
In the previous [article](https://codesource.io/implementing-navigation-architecture-in-android), you implemented the navigation architecture component and was able to navigate to different destinations in the app. In this article, you will make the app look more meaningful by passing data from one fragment to another with Safe Args.

# Outline:

* What Safe Args is all about.
* Setup the layout.
* Defining an argument.
* Setting and getting an argument.

# Before we begin, you should have:

* Basic knowledge of android development with java
* A Laptop
  An Android IDE. I will be using Android studio version 2.0
* Migrated your project to use [AndroidX](https://developer.android.com/jetpack/androidx) libraries. If not, see how to migrate your project [here](https://developer.android.com/jetpack/androidx/migrate).
* Read the previous article: [Implementing Navigation Architecture in Android.](https://codesource.io/implementing-navigation-architecture-in-android/)
* Good spirits!

# What Safe Args is all about?

The *Safe Args argument* is a Gradle plugin that generates simple object and builder classes for type-safe argument passing. To make use of this plugin, we would use the [Safe Args](https://developer.android.com/topic/libraries/architecture/navigation/navigation-pass-data#Safe-args) dependency which was added to the project in the previous article.

Just in case you didn’t do so already, here are the necessary dependencies needed:

Include the following classpath in your top-level **build.gradle file**: