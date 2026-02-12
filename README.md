1.Hologram dashboard -Node.js WebSocket backend that streams live system metrics and handles bidirectional control messages for a holographic dashboard UI. files(hologram dashboard and server.js)



2. Social Book project-Set up an Express server with MongoDB connection (Mongoose)

Created authentication routes:

POST /api/auth/register
POST /api/auth/login
Implemented password hashing with bcrypt
Implemented JWT authentication
Created a frontend login/register modal (React-free, plain HTML/JS)
Stored JWT token in localStorage
Configured Express to serve frontend from /public
Fixed wildcard routing issue (PathError: Missing parameter name)
Next Steps (To Do)
Verify user data is saved in MongoDB
Create a Post model with:
text
image (optional)
userId
createdAt
Build posts API:
POST /api/posts (create)
GET /api/posts (list)
Implement image upload using multer
Save image path in MongoDB
Add auth middleware to protect post routes
Render posts on the frontend
