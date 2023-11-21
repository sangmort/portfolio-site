# Portfolio/Resume Website of Oumaima Seham Yassen
Also known as **Osy**.

--- 
## Development Notes
Notes on things that need to be done, or have been done, for future reference. 

---

### Known Bugs/Issues
- [ ] Mobile Navigation Close Button
	- When user clicks outside of navigation pane to close navigation, the close button remains a X instead of reverting to a hamburger.
- [ ] IpadOS Horizontal Anchor Scroll
    - On Ipad Pro, when tablet is in horizontal orientation, first click to `#about` anchor link does not scroll to top of the `<section>` but ~halfway down the section instead.

---

### To-Do
- [ ] Back to Top floating button
	- Better UX & efficiency to get back to the top:
		- On desktop, as there is no "home" link in the navigation
		- On mobile, as "home" in navigation link reloads the entire page
- [ ] Contact Form *In-Progress*
	- Better UX for the user then clicking a `mailto:` link.
		- Allows user to stay in their browser, vs opening their native OS mail application, resulting in less frustration.
	- Allows email validation and rate limiting can be employed.
	- Allows spam protection to be employed.

---

### Fixed Bugs/Issues
- [x] Parallax effecting layout
	- The JS that applied a transform to the for parallax effect on desktop was applying it to mobile header as well, causing layout conflicts with flex on smaller screens.
	- **Fix** Refactor JS to check if viewport is >=1400px (desktop) before applying transform to header.
- [x] Clouds were not appearing on mobile devices
	- Keyframe animations were below `@media` queries, thus not triggering on mobile screens. 
	- **Fix** Refactor CSS so `@keyframes` were above `@media` queries in the CSS cascade.
- [x] Parallax scroll effect not smooth, had a tacky feeling
	- When user would scroll down page, scrolling was not smooth and would feel as if the mouse would "stick."
    - **Fix** Refactor JS to optimize rendering / animations by using translate3d(), allows browser to use Hardware Acceleration / GNU instead of just CPU for better performance. Additionally, increased scroll speed of the parallax paths for more fluid UX.
- [x] Vertical Tabs initial focus
	- The first tab is open by default, but it is not active or focused so the CSS effect is not present.
    - **Fix** refactor JS to add `.active-tab` CSS class to style active tabs.
- [x] Osy #header-logo SVG link has border-bottom when user hovers over it
    - `#header-logo` has border-bottom effect on `:hover`, as if it were a normal `a:hover` link.
	- **Fix** target parent class links `.navbar-default a:hover` to overide default link hover styling.

---

### Performance Improvements
- [x] Limit number of stars and clouds generated by screensize/viewport.
- [x] Refactor to use SVG circle paths instead of `<div>` elements for each star.
- [x] Refactor to use a single SVG with multiple circle paths inside of it for each star.
- [x] Reduce .ico size and fix web manifest URL causing redirects.
- [x] Add `will-change: filter;` on rules that use `filter` keyframes animations for performance.
- [x] Change the CSS property of `.star` to `display: none;` instead of `visibility:hidden;` so DOM is not needlessly loading invisible assets.  