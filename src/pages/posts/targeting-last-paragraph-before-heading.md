---
layout: ../../layouts/MarkdownPostLayout.astro
title: "CSS: Targeting the last paragraph and next heading..."
pubDate: 2023-10-17
description: "Targeting the last paragraph before a heading"
author: "Osy"
tags: ["CSS", "HTML5", "Code"]
---

## Introduction

Pulled my hair out quite a bit trying to target the last paragraph before a heading using CSS, so thought I'd make a quick blog post about it in case any one else has run into this. Ultimately, I foudnd it better to add spacing to the heading `<h2>` instead of the pararaph `<p>`. It's great for controling the spacing and visual hierarchy of content on a web page.

### Code Explanation

The completed code, the main part consisting of a series of selectors and a rule::

```css
/* Add padding to headings that follow a paragraph */
p:not(:last-of-type) + h1,
p:not(:last-of-type) + h2,
p:not(:last-of-type) + h3,
p:not(:last-of-type) + h4,
p:not(:last-of-type) + h5,
p:not(:last-of-type) + h6 {
  padding-top: 2rem;
}
```

- `p` is a type selector and selects all `<p>` (paragraph) elements in the HTML document.

- `:not(:last-of-type)` A pseudo-class selector that selects all `<p>` elements that are **not** the last `<p>` element of their respective parent containers. In other words, it **excludes** the **last paragraph** in **each container**. _EX: if you have multiple paragraphs within a `<div>`, it will select all paragraphs except the last one in each `<div>`_

- `+` Acombinator selector called the adjacent sibling combinator. It selects an element that is immediately preceded by a specified element. In this case, it's looking for an `<h1>` element that comes immediately after the selected `<p:not(:last-of-type)>`.

- `h1` Another type selector, and it selects all `<h1>` heading elements in the HTML document. In this case, we've repeated the rule so it also targets the headings (h1 to h6) that directly follow the selected paragraphs.

- `padding-top: 2rem;` Rule that applies a top padding of `2 rems` to the selected headings.

### Use Case Scenarios

This CSS code is particularly useful in various scenarios, such as:

1. **Creating Visual Separation**: When you want to visually separate headings from the paragraphs that precede them, making your content more scannable and organized.

2. **Improving Readability**: Adding padding ensures that headings don't appear cramped or cluttered, improving the overall readability of your web content.

3. **Enhancing User Experience**: When content is more visually seperated in the layout, making it easier to read, it ultimately leads to better UX.

## Why padding, and not margin?

A simple way to avoid margin collapse. For more information on Margin Collapse, check out <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing" target="_blank" alt="MDN Web Docs  on Margin Collapsing">MDN Web Docs - Margin Collapse</a>.
