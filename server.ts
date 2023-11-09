import { Elysia } from "elysia";
import { faker } from "@faker-js/faker"

const app = new Elysia()

interface User {
  id: string;
  username: string
  email: string
}

const users: User[] = []

app.post("/users", async ({ set }) => {
  set.status = 201
  
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  users.push({
    id: crypto.randomUUID(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
  });
  
})

app.get("/users", ({ set }) => {
  set.status = 200
  
  return { users }
})

app.listen(3333);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);