export async function fetchQuote() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    return data.content;
  } catch (err) {
    return "Stay focused!";
  }
}
