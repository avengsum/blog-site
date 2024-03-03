import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signinInput, signupInput, createPostInput, updatePostInput } from "@100xdevs/common-app"
import bcrypt from 'bcrypt'

export const user = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

user.post('/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const { success } = signupInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(body.password,salt);
	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: hashPassword,
				name:body.username
			}
		});
		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });
	} catch(e) {
		c.status(403);
		return c.json({ error: "error while signing up" });
	}
})
  
user.post('/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const { success } = signinInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
	const user = await prisma.user.findUnique({
		where: {
			email: body.email
		}
	});

	if (!user || !comparePassword(body.password,user.password)) {
		c.status(403);
		return c.json({ error: "user not found" });
	}

	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
})


const comparePassword = async (inputPassword : string,storedPassword : string) => {
	if(!inputPassword || !storedPassword){
		return false
	}
	try {
		const match = await bcrypt.compare(inputPassword,storedPassword);
		return match
	} catch (error) {
		console.error("Password comparison error in signin:", error);
		return false;
	}
	
}
