# Daily Log
This is a file for recording daily study activities/readings. This repository was started before I decided to formalize/document my studying, so unlisted items were made before the first entry.

Some of the entries in the beginning will provide more context and explanation of my current starting point, in order to provide perspective for people who want to use this as a guide.

## Daily Plan
The idea is to do all the tasks on this list each day:
- [ ] Practice an Algorithm
- [ ] Practice a Data Structure
- [ ] Do a Practice Problem (like codewars, interviewbit, etc.)
- [ ] Do a Practice Problem without using the IDE
- [ ] Readings

Algorithms and Data Structures are the obvious things to practice— they are commonly tested (though not necessarily commonly used) components of interviews. I expect each of these tasks to take around 10 minutes each.

Practice problems typically take less than 30 minutes each, and should be treated as applied algorithm/data structure practice. This is most similar to an interview scenario, and practicing without an IDE allows you to develop your ability to read code and understand how it is working. Practice problems also help with practicing identifying test cases.

Readings can very in length— depending on the study material and your commitment. Currently, I think a minimum of 15 minutes is a reasonable amount of reading. This is to dive deeper into applied concepts, the conversation within communities, and to further develop your opinion on solutions.

 

## Log
### 2020
#### August 5th, 2020
I started working on the questions on [interviewbit](interviewbit.com) sometime in the last two weeks. Finding the optimal solution is still somewhat difficult for me. Javascript has always been my interview language of choice (due to the flexible data structures, instead of having to memorize specific data structures in something like Java, where there is a primitive array and an enriched class with more functionality).

That is to say that I started working on the [Max Sum Contiguous Subarray InterviewBit Problem](https://www.interviewbit.com/problems/max-sum-contiguous-subarray/), and found a suboptimal O(n<sup>2</sup>) solution, then took that as an opportunity to find an appropriate algorithm, [Kadane's Algorithm](https://hackernoon.com/kadanes-algorithm-explained-50316f4fd8a6), to learn and implement.

For reading, I am currently a few chapters into reading Designing Data-Intensive Applications, which is a fantasic text on the common decisions and tradeoffs made while designing a performant system— so I read 15 minutes of that, then went on to read [A Plea For Lean Software](https://people.inf.ethz.ch/wirth/Articles/LeanSoftware.pdf), which was trending on [HackerNews](https://news.ycombinator.com/item?id=24059704).

Next, I worked on the [Maximum Absolute Difference InterviewBit Problem](https://www.interviewbit.com/problems/maximum-absolute-difference/), found another O(n<sup>2</sup>) solution, then had to look into decomposing absolute values (yes, I was a little embarassed to Google basic maths), which led to an O(n) solution.

While working I came across an article on [Inverted Triangle CSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/), which is an organization method that we use at my current company. I decided to read that as well, since we rely on it to scale our css.


I decided to do a more general implementation of Kadane's algorithm as my algorithm practice— just to solidify my knowledge of it— and it helped me understand what the base idea of it was (creating an array describing the highest possible sum at any given point)

Finally, spent time writing tests for a LinkedList class, then implemented the functionality to fulfill those tests— which took two hours at least.

I spent 7.5 hours studying CS today, which is much longer than I expected to take. Hopefully this speeds up as I spend time on it.

#### August 6th, 2020
Practice Problems:

[Minimum Steps in an Infinite Grid](https://www.interviewbit.com/problems/min-steps-in-infinite-grid/)
[Partitions](https://www.interviewbit.com/problems/partitions/)— didn't finish this due to a series of edge cases— it seems like I can get the answer, but its not written in the best way (due to the edge cases)

Readings:

[Google Code Review Process](https://github.com/google/eng-practices)
[Google Engineering Practices](https://arxiv.org/ftp/arxiv/papers/1702/1702.01715.pdf?utm_source=ponyfoo+weekly&utm_medium=email&utm_campaign=163)

Today was difficult in terms of interview practice, due to the large amount of meetings I had today.


#### August 7th, 2020
Today is a Friday— I suspect this may affect my productivity

Starting by finishing reading [Google Engineering Practices](https://arxiv.org/ftp/arxiv/papers/1702/1702.01715.pdf?utm_source=ponyfoo+weekly&utm_medium=email&utm_campaign=163)

Next, I started working on Google's [Tech Dev Guide](https://techdevguide.withgoogle.com/paths/foundational/) problems

First off— [Find longest word in dictionary that is a subsequence of a given string](https://techdevguide.withgoogle.com/paths/foundational/find-longest-word-in-dictionary-that-subsequence-of-given-string/#code-challenge)

