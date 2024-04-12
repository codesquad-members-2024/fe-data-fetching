function delay(): Promise<void> {
	const DELAY = 2000;
	const $newsWrap = document.querySelector(".news") as HTMLElement;
	const $loading = document.querySelector(".loading") as HTMLElement;

	$newsWrap.classList.add("blur");
	$loading.style.display = "block";

	return new Promise<void>((resolve) => {
		setTimeout(resolve, DELAY);
	}).then(() => {
		$newsWrap.classList.remove("blur");
		$loading.style.display = "none";
	});
}

export default delay;
