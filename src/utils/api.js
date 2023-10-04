export default async function api(url, options = {}) {
  const config = {
    method: "GET",
    mode: "cors",
    "headers":
    {
      "Content-Type": "application/json"
    },
    ...options,
  };

  const response = await fetch(url, config);
  try {
    const responseBody = await response.json();
    if (responseBody) {
      return responseBody;
    } else {
      return {};
    }
  } catch (error) {
    throw new Error(error);
  }
}
