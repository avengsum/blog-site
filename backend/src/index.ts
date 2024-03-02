import { Hono } from 'hono'
import blog from './routes/blogRoutes'
import user from './routes/userRoutes'
import dotnev from 'dotenv'

dotnev.config();

const app = new Hono()

app.route('/blog',blog)
app.route('/user',user)


export default app
