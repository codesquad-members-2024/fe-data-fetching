export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      console.log(response);
      return await response.json();
    }
  } catch (error) {
    console.error("Error updating news:", error);
  }
}
