export const updateName = async (name: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      // Here we would make a request to the server to update the name
      if (!name) {
        resolve("Name is required");
      }
      resolve("Name updated successfully");
    }, 3000);
  });
};
