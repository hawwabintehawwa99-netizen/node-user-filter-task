async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();

    const result = users
      .filter(({ company }) =>
        /\b(group|service)\b/i.test(company.catchPhrase)
      )
      .map(({ name, email, address: { city } }) =>
        `User: ${name} | Email: ${email} | City: ${city}`
      );

    console.log(result);
  } catch (error) {
    console.error("Data fetch nahi ho saka:", error.message);
  }
}

getUsers();