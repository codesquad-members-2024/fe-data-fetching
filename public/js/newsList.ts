async function getNewsList() {
	await fetch('/users')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		});
}
export default getNewsList;
