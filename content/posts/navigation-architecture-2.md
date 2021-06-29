---
image: /images/uploads/iphone-11-pro-max-1nav.png
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

# Before you begin, you should have:

* Basic knowledge of android development with java
* A Laptop
  An Android IDE. I will be using Android studio version 2.0
* Migrated your project to use [AndroidX](https://developer.android.com/jetpack/androidx) libraries. If not, see how to migrate your project [here](https://developer.android.com/jetpack/androidx/migrate).
* Read the previous article: [Implementing Navigation Architecture in Android.](https://codesource.io/implementing-navigation-architecture-in-android/)
* Good spirits!

# What Safe Args is all about?

The *Safe Args argument* is a Gradle plugin that generates simple object and builder classes for type-safe argument passing. To make use of this plugin, use the [Safe Args](https://developer.android.com/topic/libraries/architecture/navigation/navigation-pass-data#Safe-args) dependency which was added to the project in the previous article.

Just in case you didn’t do so already, here are the necessary dependencies needed:

Include the following classpath in your top-level **build.gradle file**:

```java
def nav_version = "2.3.0"
        classpath "androidx.navigation:navigation-safe-args-gradle-plugin:$nav_version"
```

Apply the plugin below in your app or module's build.gradle file:

```java
apply plugin: "androidx.navigation.safeargs"
```

> **NOTE**: If you are using kotlin, you can find the alternative dependencies [here](https://developer.android.com/jetpack/androidx/releases/navigation).

# Setting up the layout

You are going to add an edit text to the start destination(HomeFragment) of the navigation graph. This Edit text would take any length in Centimeters. This value would be passed as an argument to the SecondFragment, where it would be converted to Feet.



**Step 1:** Switch to the Design tab of the home_fragment.xml file.

**Step 2:** Drag and drop an Edit Text from the palette on to the parent. Position the Edit Text to be above the button with ID: next_fragment_button.

**Step 3:** Give the Edit Text an ID: `length_in_cm` and a hint `“Enter length in cm”`.

**Step 4:** Change the title(text) of the button with ID: `next_fragment_button` from `“Move to Next Fragment”` to `“Convert to ft”`.

**Step 5:** Open the fragment_second.xml file and switch to the design tab.

**Step 6:** Change the parent layout to a constraint layout.

**Step 7:** Position the default Text View to be at the center of the parent layout and give it an ID: `length_in_ft`.

**Step 8:** Remove the default `“Hello Blank Fragment”` text attribute. You are going to replace this with the length in feet.





# Defining an argument

To receive the inputted length from the HomeFragment, you need to define an argument in the SecondFragment.



**Step 1:** Open the design tab of the navigation_graph.xml file.

**Step 2:** Click on the secondFragment.

**Step 3:** In the attributes window, go to the Arguments section and click on the plus button to add an argument.

**Step 4:** In the pop-up window, give it the name: “Length In Feet” and select type to String.

**Step 5:** Set the default value of the argument to “Invalid Input: Please input a valid length”. 

**Step 6:** Rebuild the project. This would generate the necessary class concerning the argument created.



# Setting and getting an argument



In the generated Java directory you would find the SecondFragmentArgs class. In this class, you would find newly generated methods to access and manipulate the `Length In Feet` field you added.

**Step 1:** Open the HomeFragment.java file and reference the Edit Text with ID: `length_in_cm` in the `onViewCreated` method, using `findViewById`.



In the SecondFragmentArgs.java class, you would find the `setLengthInFeet` method. Use this method to pass the calculated length in feet to the Second Fragment. To do this, create a method that receives the numbers inputted in the Edit text as string, converts it to a double, performs the necessary math operations in converting centimeter to feet, and finally returns a string of the length in feet.



**Step 2:** Copy and paste the code snippet below in the HomeFragment.java file.

```java
public String convertToFeet(String lengthInCm){
    double lengthCm;
    String result;

    try {
        lengthCm = Double.parseDouble(lengthInCm);
        double lengthInFt = lengthCm/30.48;
        result = lengthInFt +"ft";

    } catch (NumberFormatException e) {
        result = null;
    }
    
    return result;
}
```







**Step 3:** Pass the length in feet when the user clicks on the button. To do this, set the value of the argument to be the result gotten from the `convertToFeet` method in the `launchSecondFragment` *action. Recall that this action is called when the button is clicked.*

Here is the code snippet:



```java
@Override
public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
    super.onViewCreated(view, savedInstanceState);
    Button button = view.findViewById(R.id.next_fragment_button);
    final EditText lengthInCmEt = view.findViewById(R.id.length_in_cm);
    button.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            Navigation.findNavController(view).navigate(HomeFragmentDirections.launchSecondFragment().setLengthInFeet(convertToFeet(lengthInCmEt.getText().toString())));
        }
    });

}

```



**Step 4:** In the SecondFragment.java file, override the `onViewCreated` method.

**Step 5:** In the `onViewCreated` method, get a reference to the Text View with ID: `length_in_ft` using `findViewById`. This is where you would set the string argument gotten from the HomeFragment.

**Step 6:** Use the `SecondFragmentArgs` class to retrieve the string argument as shown below:



```java
SecondFragmentArgs secondFragmentArgs = SecondFragmentArgs.fromBundle(getArguments());
String lengthInFt = secondFragmentArgs.getLengthInFeet();
```





**Step 7:** Set the text of the Text View to the String gotten from the argument: `lengthInFt`.



```java
textView.setText(lengthInFt);
```





 **Step 8:** Voila! You can now run your program.

 

 **Thank you!**

 

 You can find the link to this project on Github [here](https://github.com/Lamouresparus/NavigationSampleApp.git).