export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("데이터를 불러오는 중 오류 발생!!!");
    }
  } catch (error) {
    console.error("Error updating news:", error);
  }
}
