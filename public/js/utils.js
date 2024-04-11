export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error updating news:", error);
  }
}
