---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Project: Steel Tabs - A Pittsburgh Steelers Themed Extension"
pubDate: 2023-12-11
description: "Project information for Steel Tabs."
author: "Osy"
tags: ["Project", "CSS", "JavaScript", "HTML", "Extension"]
---
## PROJECT OVERVIEW

Browser Extension that replaces the default new tab with visually pleasing Steelers themed page. <br>
**Code:** [GitHub Repository](), **Demo:** [Live Page]()

---

### INSPIRATION
As a web dev, I'm perpetually online, pretty much living in browsers, constantly opening new tabs for testing, development, and research. 

Let's be real—**The default new tab in browsers is boring at best, and ugly at worst**. That said, it does offer a unique opportunity; a blank canvas ready to be painted.

As yinzers[^1] know, with the Steelers, you're not just a fan—you bleed Black and Gold, always wanting more injected into your life. Steel Tabs is a passion project. It's personal. It's rooted in the joy, stress, love, and cardiac problems that only being a Steelers fan brings.

---

### OBJECTIVES
Infuse a bit of Steelers magic into Steelers fans everyday tasks as they browse the net by replacing browsers default new tab.

#### USER EXPERIENCE
- Create an immersive and visually appealing experience every time Steelers' fans open a new tab in their browser of choice.
- Add an element of surprise, motivation, and amusement with a variety of randomly generated Tomlinisms[^2] on the new tab page.
- Empower users to personalize their new tab by choosing from various Steelers themes.

#### TECHNICAL
- **Performance**: New tab should load quickly so as not to impact user's browsing routine.
- **Responsive**: UI should adapt seamlessly to various screen sizes and adjust dynamically when windows resize.
- **Accessible**: Code should have Semantic HTML elements and incorporate accessibility features for an inclusive user experience.
- **Usability**: Extension should be intuitive to use, install, navigate, and customize.
- **Compatibility**: Should work across multiple browsers.

### PERSONAL TOUCH
The decision to include "Tomlinisms" stems from my admiration for Coach Mike Tomlin's leadership style and motivational approach. Each randomly generated Tomlinism is not just a quote; it's a personal reminder of resilience, determination, and the pursuit of excellence.

## DESIGN

### CONSIDERATIONS
Wanted to bring Steelers spirit without having to use copyrighted assets such as logos. Additionally, the design needed to be performant and responsive, while being able to show the Tomlinism quotes. 

### DESIGN INSPIRATION
The choice of Steelers-themed visuals and jersey-inspired themes reflects not only the team's iconic aesthetics but also serves as a nod to the moments that make being a Steelers fan special. The extension is a personal expression that I hope resonates with fellow fans and brings a smile to their faces when they go about their everyday tasks in a browser.

### MOCKUPS
`<wireframe and mockups here>`

## DEVELOPMENT

### CONSIDERATIONS
- Code should be clean, simple, and not overly bloated. As this extension replaces the default new tab in browsers, performance is of utmost importance so as not to disrupt users browsing routine. Slow tab loads would make the extension more frustrating than fun. 
- Default new tab browser behavior causes FOUC (Flash of Unstyled Content). While this is hardly noticeable with the empty default new tab, it's much more prominent when the webpage has an actual UI.  
- Fonts should be packaged with the extension and loaded locally several reasons: .
	1. For security reasons, extensions can not call external assets like fonts.
	2. Ensures consistent UI/UX across different computers, operating systems, and browsers, even if users do not have the font installed natively.
	3. Different operating systems, browsers, etc. have different local system fonts that can easily effect styling in a bad way.
- As this extension is made to work across multiple browsers, it's important to incorporate a comprehensive CSS Reset for consistent UI/UX.
- Accessible code with Semantic HTML5 for visually impaired users.

### TECHNOLOGIES USED
- **HTML5** - For performance, nothing beats the speed of pure HTML.
- **CSS** - Allows for the UI to load faster than using SVGs or images, can be easily modified, and animations are performant. 
- **SASS** - For faster development time, and easier ability to modify and create new themes using functions and Variables.
- **JavaScript** - For necessary functionality, handling logic, storing user preferences in LocalStorage.
- **JSON** - For storing the Tomlinism quotes for easier maintainability. 

## CODE
A few select code snippets.

#### RANDOMIZER & TOMLINISM GENERATOR
Three functions designedto generate and display Tomlinisms fetched from a JSON file. 

Acts as a helper function. It provides more varied results then simply using `Math.random()` on it's own, and will be useful in future updates. 

```js
// Randomizer helper function
function selectRandomItemFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
```



An asynchronous function that fetches Tomlinism quotes from a JSON file named `quotes.json`. It uses the `chrome.runtime.getURL()` method to retrieve the file and `fetch()` to get the contents. The retrieved quotes are then parsed as JSON and returned.

```js
// Randomizer helper function
function selectRandomItemFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Fetch quotes from JSON file
async function fetchQuotes() {
  const response = await fetch(chrome.runtime.getURL("./scripts/quotes.json"));
  const quotes = await response.json();
  return quotes;
}
```


This function combines the previous two functions to generate a tomlinism. It calls `fetchQuotes()` to get an array of Tomlinisms, uses `selectRandomItemFrom()` to pick a random one, and then injects it into an HTML element with the id "tomlinism-quote." 
	- It also checks the length of the quote; if it exceeds 100 characters, it adds a CSS class, "shrink-text," to the HTML element for better UI.

```js
// Selects tomlinism, apply randomizer, inject into the page
async function tomlinismGenerator() {
  const tomlinism = await fetchQuotes();
  let randomTomlinQuote = selectRandomItemFrom(tomlinism);
  let quoteElement = document.getElementById("tomlinism-quote");
  quoteElement.innerHTML = '"' + randomTomlinQuote + '"';

  // Check if the quote is long & add CSS class to shrink text size
  if (randomTomlinQuote.length > 100) {
    quoteElement.classList.add("shrink-text");
  } else {
    quoteElement.classList.remove("shrink-text");
  }
}
tomlinismGenerator();
```

[^1]: **Yinzer**: Traditionally used to refer to folks from the Pittsburgh area, especially those with a heavy accent. Over the years this term has come to be associated with passionate fans of the Pittsburgh Steelers, regardless of if they have ties to the region. 
[^2]: **Tomlinism**: A concise, often cryptic, statement made by Mike Tomlin, the head coach of the Pittsburgh Steelers, typically conveying a strategic or motivational message.
