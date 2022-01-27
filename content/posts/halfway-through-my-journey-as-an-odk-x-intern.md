---
image: /images/uploads/arnaud-steckle-tpyyldqoxky-unsplash.jpg
title: Halfway through my journey as an ODK-X Intern
date: 2022-01-26T13:48:30.174Z
published: true
tags:
  - outreachy
  - java
  - android
  - ODK-X
canonical_url: true
description: This is the third blog in a series of Outreachy Internship blogs.
---
![ODK-X logo](/images/uploads/odk-x-logo.png "ODK-X logo")

I am mid-way into Outreachy and so far it's been an amazing journey😊. The community mentors have been super in helping me find my way around.

In this blog post, I will be writing about my community ODK-X and the project I am working on.

### **Firstly, a brief intro on ODK**

Open Data Kit(ODK) is open-source software for mobile data collection in resource-limited settings. Over the last 13 years, ODk has evolved into two individual projects run by separate teams which are: [ODK](https://getodk.org/) and [ODK-X](https://odk-x.org/).

ODK-X is free and open-source software that lets you build customized applications for collecting, managing, and visualizing your data in resource-constrained environments, just as well as you would do in the office. It is majorly used for data collection. What makes it stand out from other data collection apps is the fact that it gives room for data updates and can be used to collect multi-level data. During this internship, I have updating ODK-X tests to use the latest Android Testing Framework.

### **Ummm, Okay, so what does that mean***❓*

According to the Oxford dictionary:

> "*a test is a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use*".

 In software engineering, tests are methods written to check, evaluate, and ensure that a particular software does what it is supposed to. Tests make it possible to catch defects/bugs early, write better code, reduce manual testing, and the list goes on.

The ODK-X Android tools have several Android tests in numerous repositories. Some of these tests are a couple of years old. Android on the other hand regularly enhances and extends its testing frameworks. As a result of this, some of these tests that were perfectly working a few years back have become deprecated. This is because they make use of old android libraries which are currently deprecated.

> **Deprecated** here means that in the nearest future the library or function that is marked as deprecated will be removed. When a functionality is deprecated, a period is given to developers to change their code and make use of the new function or library before that deprecated functionality is completely removed. If this deprecated functionality is removed, without the developer updating the code that uses it, that piece of code will break. This may have a ripple effect across the whole software.

**So this is where I come in😉.** Ooohlala! This project is all about updating these tests to use the recent android testing frameworks and suit best practices. So far, I have been removing all deprecated code and replacing them with their recommended replacements. This way, when the deprecated functionality is removed, these old tests won't break.

### **The Journey and Hurdles**

When I began contributing to ODK-X, my java was quite rusty, as I had learned and began using kotlin for Android Development a few months back. It was also my first time contributing to open source. I wasn't so good with git too. I also had to brush up on my testing skills. The first time I ever actually wrote a test for a live software was during the contribution phase... I had to do a whole lot of reading and documenting to get a little bit comfortable.

When I got accepted, my first task introduced me to CICD, which I talked about in my previous article. I was also a bit skeptical or rather shy when I had to ask questions. 

This was a whole new journey for me and I a super grateful I got the travel tickets 😏. What's more exciting is the fact that I get to be a part of this big problem-solving software used by  world-renowned companies and organizations such as the red cross. In a way, I feel like I am extending my knowledge for the greater good by ensuring that this software is properly tested before it is released.

I look forward to contributing to ODK-X after the end of this internship and probably mentor in the next Outreachy round.

Halfway through this internship, I have learned a lot more about android tests, version control, CICD, clear and precise communication, and many others. I have seen so much growth even in my writing 😁. You noticed that too right 😉? **Here is a mental picture**😂: 

![Omo](/images/uploads/28be92baee76480eb493cc53f96895dc.jpg "Omo")

A few weeks back I used to be the "**Omo**" girl 😂😂😂.\
\
\
Thank you for staying this long with me.

Until next time...

...Cheers😊