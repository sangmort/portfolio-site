---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Steel Tabs - A Pittsburgh Steeler's themed tab experience"
pubDate: 2023-12-11
description: "Project information for Steel Tabs."
author: "Osy"
tags: ["CSS", "JavaScript", "HTML", "Browser Extension"]
---

Steel Tabs is a fun project that transforms the new tab experience in Chrome and Firefox. This extension replaces the default "new tab" content with a beautifully styled Steelers-themed page that generates random "Tomlinisms"[^1]. 

## FEATURES

- **Random Tomlinisms:** Replaces the default content with a page featuring a randomly generated Tomlinism each time you open a new tab.

- **Multiple Themes:** Offers various themes inspired by Steelers' jerseys. Personalize your experience & effortlessly switch between themes. Your selected preference is automatically applied the next time you open a new tab.

- **Preloader Animation:** Features a preloader animation with Steelers hypocycloids to counter the white flash browser issue in new tabs.

- **Responsive Design:** Looks beautiful across different viewport sizes or even when the window is split or shrunk.

- **Browser Compatibility:** Works seamlessly in Chrome, Firefox, and Edge browsers.


## TECHNICAL DETAILS

- **CSS Animations & JavaScript:** 
	- Precisely timed CSS keyframe animations & JS pre-loader to circumvent the default browser occurrence of Flash of Unstyled Content (FOUC) in new tabs.
	- Pre-loader generated from CSS, not images, for optimized page load.
	- Animations styled as hypocycloids to continue the Steelers theme.

- **SASS Styling:** Developed with SASS for efficient styling, utilizing variables, mixins, etc., for continued maintainability & future scalability.

- **Vanilla JS Scripting:** For faster page loading, handling Tomlin quote randomization, theme application, theme preference storage in LocalStorage, and quote modification based on character count.

- **Responsive Design:** Uses CSS grid to adapt to various screen sizes & resolutions for a seamless experience across different devices.

- **Local Fonts:** Fonts are stored locally to ensure consistent theming across different computers.

- **Tomlinism Quotes:** Accessed through JavaScript and stored in JSON for easy management and future expansion.

- **Cross-Browser Compatibility:** 
	- Compliant with Chrome Manifest V3 while staying compatible with Firefox.
	- Styled and tested for Chrome, FireFox, & Edge.

## FUTURE ROADMAP

The current version is the Minimum Viable Product (MVP). Future updates may include:

- [ ] Packaging extension
- [ ] Additional Themes
	- [ ] Throwback
	- [ ] Gotham Rogues
	- [ ] Batman
	- [ ] Practice
	- [ ] 1963
	- [ ] Animated Hypercloids - Dark
	- [ ] Animated Hypercloids - Light
- [ ] Settings menu with options for users to:
	- [ ] Themes: 
		- [ ] Automatically cycle between all themes for each new tab.
		- [ ] Automatically cycle between selection of themes for each new tab.
		- [ ] Hide/show theme options.
	- [ ] Pre-Loader Animation:
		- [ ] Different Animation options
		- [ ] Modify timing .
		- [ ] Disable it entirely.
	- [ ] Tomlinism:
		- [ ] Show/Hide Mike Tomlin's name under the Tomlinism
		- [ ] Disable certain Tomlinisms
		- [ ] Disable all Tomlinisms
	- [ ] Search Bar:
		- [ ] Show/Hide a search bar in the new tab so users do not have to navigate to address bar.
		- [ ] Choose location of search bar
		- [ ] Choose search engine 
	- [ ] Steelers' Schedule
		- [ ] Show/Hide the Steelers Schedule

... and More to come!

## PRIVACY
Steel Tabs is designed with privacy in mind. It does not collect nor send any data to any first or third party's. 

Browsing habits, cookies, etc. are not tracked, stored, or shared. 


## TOMLINISM DEFINITION

[^1]: **Tomlinism:** Coined for Mike Tomlin's off-the-cuff, wisdom-filled expressions during pressers. *Example*:

> "There's a fine line between drinking wine and squashing grapes."
