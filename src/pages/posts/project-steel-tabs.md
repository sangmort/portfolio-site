---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Project: Steel Tabs - A Pittsburgh Steelers Themed Extension"
pubDate: 2023-12-11
description: "Project information for Steel Tabs."
author: "Osy"
tags: ["Project", "CSS", "JavaScript", "HTML", "Extension"]
---
## Summary
Browser Extension that replaces default new tab with visually pleasing Steelers themed page. </br> **Code:** [GitHub Repository]()  **Demo:** [Live Page]()

## PROJECT OVERVIEW
### INSPIRATION
As a web dev, I'm perpetually online, pretty much living in browsers, constantly opening new tabs for testing, development, and research. 

Let's be real—**The default new tab in browsers is boring at best, and ugly at worst**. That said, it does offer a unique opportunity; a blank canvas ready to be painted.

As yinzers[^1] know, with the Steelers, you're not just a fan—you bleed Black and Gold, always wanting more injected into your life. Steel Tabs is a passion project. It's personal. It's rooted in the joy, stress, love, and cardiac problems that only being a Steelers fan brings.

### OBJECTIVES
Infuse a bit of Steelers magic into fans everyday tasks as they browse the net by replacing browsers default new tab with a Steelers themed one.

#### USER EXPERIENCE
- Create an immersive and visually appealing experience every time Steelers' fans open a new tab in their browser of choice.
- Add an element of surprise, motivation, and amusement with a variety of randomly generated Tomlinisms[^2] on the new tab page.
- Enable users to personalize their new tab with various Steelers themes.

#### TECHNICAL
- **Performant**: New tab should load quickly so as not to impact user's browsing routine.
- **Responsive**: UI should adapt seamlessly to various screen sizes and adjust dynamically when windows resize.
- **Accessible**: Code should have Semantic HTML elements and incorporate accessibility features for an inclusive user experience.
- **Usability**: Extension should be intuitive to use, install, navigate, and customize.
- **Compatibility**: Should work across multiple browsers.

### Features
#### Responsive UI
Inspired by various Pittsburgh Steelers jerseys. Created with CSS Grid for optimal responsiveness across different screen resolutions, viewports, and to persist across windows resizing.


#### Theme Selection
Themes are selected through a radio button input. The chosen theme is saved in local storage to persist across sessions.

#### Dynamic Quotes
Tomlinism quotes are fetched asynchronously from `quotes.json`. The selected quote is displayed on the new tab page. If the quote is lengthy, it's visually adjusted to maintain the page's aesthetics by adding a `.shrink-text` CSS class.


## DESIGN
The design choices aim to capture the essence of being a Steelers fan, providing a visually appealing and emotionally resonant experience for users without compromising legal and performance considerations.

### CONSIDERATIONS
- **Distinct Recognition:** Must unmistakably and instantly reflect the Steelers' identity without relying on copyrighted assets.
- **Copyright Compliance:** Avoid the use of copyrighted assets, such as team logos and photos, to ensure legal adherence.
- **Responsive**: Prioritize scalability for seamless adaptation to varying screen sizes and window resizes, maintaining aesthetic appeal.
- **Performance:** Prioritize a design that is performant to enhance the UX by avoiding heavy assets such as images and videos.
- **Incorporation of Tomlinisms:** Ensure the design can incorporate Tomlinism quotes without distortion.

### DESIGN INSPIRATION
- **Steelers-Themed Colors:** Black, Gold, White. Inspired by the Steelers, emphasizing their iconic aesthetics without infringing on copyrights.
- **Jersey-Inspired Themes:** Incorporate themes reminiscent of Steelers jerseys, fostering a connection to the team's identity and allowing for multiple user options.
- **Emotional Resonance:** Aim for a design that goes beyond aesthetics, intending to evoke emotional response from Steelers fans.
- **Everyday Enjoyment:** Envision the extension as a personal expression that brings joy to users during their routine browser activities.

### MOCKUPS
`<wireframe and mockups here>`

## DEVELOPMENT

### CONSIDERATIONS
- Code should be clean, efficient, and lightweight for optimal performance. The replacement of the default new tab should not disrupt users' browsing with slow tab loads.
- Address FOUC (Flash of Unstyled Content) concerns caused by default new tab browser behavior, particularly noticeable with an actual UI, ensuring a seamless transition to the themed new tab.
- Package fonts with the extension and load them locally to maintain a consistent UI/UX across different environments, avoiding styling issues caused by varied local system fonts.
- As this extension is made to work across different browsers, incorporate a comprehensive CSS Reset to maintain consistent UI/UX.
- Develop accessible code with Semantic HTML5 to enhance usability for visually impaired users.
- Implement error handling for fetching quotes from the provided JSON file, with any failures logged to the console.

### TECHNOLOGIES
- **HTML5**: For performance, nothing beats the speed of pure HTML.
- **CSS**: Faster UI loading compared to SVGs or images while offering easy modification and performant animations.
- **SASS**: Accelerates development and facilitates theme customization through mixins and variables.
- **JavaScript**: Essential for implementing functionality and managing logic.
- **JSON**: Convenient to store Tomlinism quotes for easier maintainability.
- **Fetch API:** Asynchronously retrieve data, specifically quotes, from a provided JSON file.
- **Chrome Extension API:** Seamless integration with Chromium browsers while remaining compatible with Firefox.
- **LocalStorage:** To store and retrieve user's selected theme for persistence across new tab sessions.

### CODE SNIPPETS
#### Theming 
Use the `@each` directive to creates a set of CSS classes, each representing a theme, with corresponding custom properties derived from the provided key-value pairs. Used to apply styles dynamically based on the selected theme.
```scss
// Use variables in theme
@each $theme, $map in $themes {
  .theme-#{$theme} {
    @each $key, $value in $map {
      --#{$key}: #{inspect($value)};
    }
  }
}
```

An example of how the variables, properties, & themes are defined in SCSS. As a big feature of this extension is having a large number of themes for users to chose from, it was important to make sure it's easily maintainable and scalable.  
```scss
// Themes
$themes: (
  home: (
    font-family: 'LeagueGothic Italic',
    font-style: italic,
    font-weight: 200,
    font-weight-strong: 600,
    font-size-label: 1.5rem,
    font-size-quote: 6rem,
    font-size-shrink: 4.5rem,
    background-color: $black,
    options-unchecked-fill: $black,
    quote-color: $black,
    option-color: $white,
    stripes-outline: $stripe-border-width + $black,
    stripe-01: $black,
    stripe-02: $gold,
    stripe-03: $white,
    stripe-04: $gold,
    stripe-05: $white,
    stripe-06: $gold,
    stripe-07: $black,
    jersey-side-color: $black,
    jersey-width: 100dvw,
    loader-bg: #101820,
  ),
  // etc.
)
```

This JavaScript sets the theme, handles changes when a radio button is selected, and listens for theme changes. 

The selected theme is stored in the local storage, the page's default theme is set on load, and the corresponding label for the selected theme is "checked."

```js
  // Theme functionality
  function setTheme(theme) {
    document.body.className = "theme-" + theme;
    localStorage.setItem("selectedTheme", theme);
  }

  // Handle theme changes in radio buttons
  function handleThemeChange(radio) {
    const selectedTheme = radio.value;
    setTheme(selectedTheme);

    document.querySelectorAll(".options label").forEach(function (label) {
      label.classList.remove("checked");
    });

    const labelForRadio = document.querySelector(`label[for="${radio.id}"]`);
    if (labelForRadio) {
      labelForRadio.classList.add("checked");
    }
  }

  // Listen for theme changes in radio buttons & update the page
  document.querySelectorAll('input[name="theme"]').forEach(function (radio) {
    radio.addEventListener("change", function () {
      handleThemeChange(this);
    });
  });

  // Set default theme on page load based on stored preference otherwise default to home-theme
  const storedTheme = localStorage.getItem("selectedTheme");
  const defaultTheme = storedTheme || "home";

  // Set the default theme and mark corresponding label as checked
  setTheme(defaultTheme);

  const checkedLabel = document.querySelector(`label[for="theme-${defaultTheme}"]`);
  if (checkedLabel) {
    checkedLabel.classList.add("checked");
  }
```

#### Headings
SCSS `@for` directive to automatically generate headings using a provided font-size for `h1`, stored in a variable.
```scss
$h1-size: 3rem;

// Generate headings sizes
@for $i from 1 through 6 {
  h#{$i} {
    font-size: $h1-size - 0.35rem * ($i - 1);
  }
}
```

Compiles to the below CSS

```css
h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.65rem;
}

h3 {
  font-size: 2.3rem;
}

h4 {
  font-size: 1.95rem;
}

h5 {
  font-size: 1.6rem;
}

h6 {
  font-size: 1.25rem;
}
```


## FUTURE ROADMAP
The current version of Steel Tabs represents the Minimum Viable Product (MVP).. To enhance the user experience and add more value, future updates are planned. The roadmap includes:

### PACKAGING EXTENSION
Explore packaging options for wider distribution and easier installation, moving beyond the current "load unpacked" method.

### ADDITIONAL THEMES
Introduce a variety of new themes inspired by different aspects of Steelers culture.
- Jerseys
  - Throwback
  - Gotham Rogues
  - Batman
  - Practice
  - 1963
- Miscelaenous 
  - Animated Hypercloids - Dark
  - Animated Hypercloids - Light
  - Terrible Towel

### SETTINGS MENU
Implement a user-friendly settings menu with customizable options, allowing users to tailor the new tab UI for better UX

#### THEMES
- Automatically cycle between:
  - All themes for each new tab.
  - A selection of themes for each new tab.

#### PRE-LOADER ANIMATION
- Different animation options:
  - Modify animation timing.
  - Disable the pre-loader animation entirely.

#### TOMLINISM
- Allow users to disable specific Tomlinisms.
- Provide an option to disable all Tomlinisms.

#### SEARCH BAR
- Show/Hide a search bar in the new tab for added convenience.
- Allow users to choose the location of the search bar.
- Provide options to choose a preferred search engine.

### CONTINUOUS IMPROVEMENT
- Regularly update and expand the collection of Tomlinism quotes for a fresh and engaging experience.
- Gather user feedback and implement improvements based on user preferences and suggestions.
- Stay compliant with Chrome Manifest V3 while ensuring compatibility with the latest versions of Firefox and Edge.
  


[^1]: **Yinzer**: Traditionally used to refer to folks from the Pittsburgh area, especially those with a heavy accent. Over the years this term has come to be associated with passionate fans of the Pittsburgh Steelers, regardless of if they have ties to the region.

[^2]: **Tomlinism**: A concise, often cryptic, statement made by Mike Tomlin, the head coach of the Pittsburgh Steelers, typically conveying a strategic or motivational message.
