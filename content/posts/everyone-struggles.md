---
image: /images/uploads/pngitem_3956608.png
title: Everyone Struggles
date: 2022-01-14T13:42:17.602Z
published: true
tags:
  - outreachy
  - java
  - android
  - ODK-X
canonical_url: true
description: This is the second blog in a series of Outreachy Internship blogs.
---
![](/images/uploads/pngitem_3956608.png "It is okay to ask questions" width="400" height="100")

**Yay!**

It's been four weeks into Outreachy and I must say the experience has been awesome. From feeling overwhelmed with excitement, to worrying about my performance during the internship, to my first Zoom call, and then my first and annoying bug(I will be sharing about this here), to fixing the bug, and my first merged PR. Whew! 😅 

It's been an amazing journey so far and I am super grateful to my ever ready to help mentors 😊. You are the real **MVPs**.

Well, About my first bug...

I encountered an annoying blocker in my first week. I was unable to run the tests on android studio. How do I update the test when it doesn't even run❗️❓. I kept getting the error message: “test events were not received”. I tried a couple of solutions I saw online, but none was forthcoming. I was with a friend at the time, so we tried changing the version of java I was using on android studio from jdk11 to 8, and voila! it worked😊. I reached out to my mentor Waylon and he explained to me that ODK-X currently uses Java 8 because of several historical reasons that are slowly being removed.

My first task was to find out why the tests were failing on version 8.1 on the build server, for a test I wrote during the contribution phase. After reporting on this task. Waylon mentioned that he would need to make upgrades on the build server. I didn't quite know what a build server was. I was a bit hesitant to ask at first because I didn't know how to structure my question lol. So I quickly googled it.

![Image of my google search](/images/uploads/screenshot-2022-01-10-at-00.28.27.png "Image of my google search")

Which lead me to a couple of links which I will share at the end of this article. After much reading, I Was able to wrap my head around the concept.

A few days later, during our test meeting, I was able to get detailed answers to the questions I had asked.

### **So what would I say to someone worried about asking questions?**

Well, I will say ask anyway. Sometimes, even if you do not quite put out the question right, the follow-up answers/questions that don't quite hit the point will help you figure out how best to structure your question and give you a more in-depth understanding. Also, you might learn something you never noticed you didn't know😂. Hey! It's just a question and I don't think there are any perfect questions🤔.

I will also want to point out that everyone is learning😊. So do not feel any less of yourself when faced with a problem that needs answers😏.

Here is are some helpful links from my googling😂

[Definition: Build Server](https://searchsoftwarequality.techtarget.com/definition/Build-Server)

[What is a CI/CD pipeline?](https://www.redhat.com/en/topics/devops/what-cicd-pipeline)

Cheers!!!