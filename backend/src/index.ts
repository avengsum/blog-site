import { Hono } from 'hono'
import dotnev from 'dotenv'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { decode, sign, verify } from 'hono/jwt'


dotnev.config();

 export const prisma = new PrismaClient({
  datasourceUrl:process.env.DATABASE_URL,
}).$extends(withAccelerate())

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();


app.post('/api/v1/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
	const body = await c.req.json();
	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password
			}
		});
	
		const jwt = await sign({id:user.id},c.env.JWT_SECRET)
    return c.json({jwt})
	} catch(e) {
		return c.status(403);
    return c.json({ error: "error while signing up" });

	}
})



export default app
