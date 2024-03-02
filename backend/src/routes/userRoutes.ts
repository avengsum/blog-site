import { Hono } from "hono";

const user = new Hono();

user.post('/signup',(c) => {
  return c.text("user signup page")
})

user.post('/signin' , (c) => {
  return c.text("user signin page")
})


export default user