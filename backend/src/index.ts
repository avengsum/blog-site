import { Hono } from 'hono'
import blog from './routes/blogRoutes'
import user from './routes/userRoutes'

const app = new Hono()

app.route('/blog',blog)
app.route('/user',user)


export default app
