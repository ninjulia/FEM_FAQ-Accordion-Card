# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![Screenshot](./screenshot.png)

### Links

- Solution URL: [https://github.com/ninjulia/FEM_FAQ-accordion-card](https://github.com/ninjulia/FEM_FAQ-accordion-card)
- Live Site URL: [https://ninjulia.github.io/FEM_FAQ-accordion-card/](https://ninjulia.github.io/FEM_FAQ-accordion-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I leveraged the accordion functionality from the W3 Schools example found in the Useful Resources section below. It was good to see an established pattern for how to code this type of functionality, and there was no point in re-inventing the wheel here.  Overall, I was pleased with how the layout came together, getting the images to display as directed was especially challenging. While I ultimately achieved the desired result, the way that I had to get the images to align feels a bit "hacky" to me. I first attempted to use logical numbers in my margins and positioning but still did not achieve the layout I was hoping for. 

### Continued development

I ended up mixing ems and px units for padding / margin measurements and I feel like the alignment for the images relies on "magic numbers" that may break the layout in more vigorous testing.  If this was going on a live site, I would also adjust the functionality of the accordion to close the last open FAQ item when a new item is clicked on.  It has a much cleaner look, although the resulting UX may just be my own opinion. I would also incorporate a smooth slide to open so that the FAQs don't just pop open and closed.

### Useful resources

- [https://www.w3schools.com/howto/howto_js_accordion.asp](https://www.w3schools.com/howto/howto_js_accordion.asp) - I leveraged this html/css/js pattern. It was great to not have to re-invent the wheel when it comes to standard accordion patterns. 


## Author

- Website - [Julia](https://www.becausejulia.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/ninjulia)

## Acknowledgments

Shout out again to W3 Schools and their JS how to for things like this. It's great to see how other people tackle this code pattern.
