import { Hono } from "hono";

const blog = new Hono();

blog.post('/blog',(c) => {
  return c.text("blog")
})

blog.put('/',(c) => {
  return c.text("blog put")
})

blog.get('/:id',(c) => {
  return c.text('blog')
})

blog.get('/blog/bulk',(c) => {
  return c.text('blog bulk')
})

export default blog