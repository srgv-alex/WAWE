document.addEventListener('DOMContentLoaded', function() {
	const gallery = document.getElementById('gallery');
	if (gallery) {
		const mixer = mixitup(gallery, {
			selectors: {
				target: '.mix',
			},
			animation: {
				duration: 300,
			},
		});
	}
});
