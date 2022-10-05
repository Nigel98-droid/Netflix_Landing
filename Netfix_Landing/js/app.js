const tableItems = document.querySelectorAll('.table-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    // Remove all show and border classes
    removeBorder ();
    removeShow ();
    // add border to current tab item
    this.classList.add('tab-border');
    // Grab content item from Dom
    const tabContentItem = document.querySelector(` #${this.id}-content`);
    // add show class
    tabContentItem.classList.add('show');
}

// Remove botton borders from all content items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}

// Listen for each tab item click
tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});