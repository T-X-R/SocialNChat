# Social&Chat
An appication allow people to like/follow each other and begin a real-time chat.

## Technologies
ASP.NET(v7), Entity Framework Core, Postgres and Angular(v15)

## Backend
- Login: includes validation, JWTs(JSON Web Tokens) and Authentication Middleware.
- Middleware: includes exceptions middleware
- Seeding: seeding data into database
- Repository Pattern: UserRepository
- AutoMapper: AutoMapperProfiles
- User update
- Connect to Cloudinary: photo upload, delete
- Pagination
- Search Filters
- Like Entity
- Message Entity
- User Roles Control
- SignalR

## Frontend
- Login/Registration: login/register check, authentication
- Interceptor: error handler, JWT token handler, loading handler
- Bootstrap
- Photo Gallery: [NgxGallery](https://github.com/kolkov/ngx-gallery)
- Edit Profile
- Photo Storage: Cloudinary
- File upload: ng2-file-upload
- Pagination
- Search Filters: age, gender, latest/recent members
- Cache
- Like Users
- Message: send, delete
- User Roles
- Real-time access

## Deployment
- Github Action: auto build & deployment
