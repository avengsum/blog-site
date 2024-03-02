import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const blog = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  },
  Variables : {
		userId: string
	}
}>();

blog.post('/', async (c) => {
  const userId = c.get('userId');
  const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const post = await prisma.post.create({
      data:{
        title: body.title,
			  content: body.content,
			  authorId: userId
      }
    }) 
    return c.json({
      id: post.id
    });
})

blog.put('/',async (c) => {
  const userId = c.get('userId');
  const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());
    const body = await c.req.json();

    prisma.post.update({
      where: {
        id: body.id,
        authorId: userId
      },
      data: {
        title: body.title,
        content: body.content
      }
    });
  
    return c.text('updated post');
})

blog.get('/:id', async (c) => {
  const userId = c.req.param('id')
  const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());
    const body = await c.req.json();

    const post = prisma.post.findUnique({
      where:{
        id: userId
      }
    });

    return c.json(post)
})

blog.get('/blog/bulk', async (c) => {
  const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const posts = await prisma.post.findMany({});

	return c.json(posts);

})

export default blog