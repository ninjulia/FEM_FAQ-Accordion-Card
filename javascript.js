/*
 *   VIA https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   Simple accordion pattern example
 */

const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
	const activePanel = e.target.closest(".faq-item");
	if (!activePanel) {
		return;
	}
	toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
	const buttons = panelToActivate.parentElement.querySelectorAll("button");
	const contents =
		panelToActivate.parentElement.querySelectorAll(".accordion-panel");

	buttons.forEach((button) => {
		button.setAttribute("aria-expanded", false);
	});

	contents.forEach((content) => {
		content.setAttribute("aria-hidden", true);
	});

	panelToActivate.querySelector("button").setAttribute("aria-expanded", true);
	panelToActivate
		.querySelector(".accordion-panel")
		.setAttribute("aria-hidden", false);
}
