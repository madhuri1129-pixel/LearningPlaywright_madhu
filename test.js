function createUsers(names, roles) // created function with name createusers with names, roles as parameters
{
  return names.map((name, i) => {
    const username = name.toLowerCase().replace(/\s+/g, "_");
    return {
      username,
      email: `${username}@playwrightbatch.com`,
      role: roles[i]
    };
  });
}

// Example usage: passing names and roles to the createUsers function and logging the result
const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];
const users = createUsers(names, roles);
console.log(users);

