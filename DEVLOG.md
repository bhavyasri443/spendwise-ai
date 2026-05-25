## Day 1 — 2026-05-21

**Hours worked:** 5

**What I did:**
- Initialized the Next.js project with TypeScript and Tailwind CSS
- Configured shadcn/ui for reusable UI components
- Built a modern SaaS-style landing page
- Created reusable components including Navbar, Hero, Stats, Features, CTA, and Footer
- Applied dark theme styling and responsive layout
- Created GitHub repository and pushed initial commits

**What I learned:**
- Learned better component organization using the Next.js App Router
- Improved understanding of modern SaaS landing page structure and responsive UI patterns

**Blockers / what I'm stuck on:**
- Still deciding the best structure for the audit engine logic and pricing rules

**Plan for tomorrow:**
- Build the AI spend form
- Create audit calculation logic
- Design the audit results section

## Day 2 — 2026-05-22

**Hours worked:** 6

**What I did:**
- Created pricing data structure for AI tools and plans
- Built the AI Spend Audit form component
- Added support for selecting AI tools, plans, and team seats
- Implemented the first version of the audit recommendation engine
- Added savings calculation logic for overspending detection
- Built dynamic audit result cards UI
- Integrated the SpendForm component into the homepage

**What I learned:**
- Learned better state management using React hooks
- Improved understanding of pricing rule systems and audit logic
- Learned how TypeScript handles dynamic object indexing

**Blockers / what I'm stuck on:**
- Need a more scalable structure for handling multiple plan combinations dynamically
- Plan input currently uses text input instead of controlled dropdown options

**Plan for tomorrow:**
- Improve plan selection using dropdown menus
- Add multiple dynamic tool entries
- Store audit state using localStorage
- Begin backend setup with Supabase

## Day 3 — 2026-05-23

**Hours worked:** 6

**What I did:**
- Refactored the AI Spend Audit form to support multiple tools dynamically
- Added add/remove tool functionality
- Replaced manual plan text input with controlled dropdown menus
- Improved the recommendation engine structure for better scalability
- Added automatic plan switching based on selected tool
- Implemented localStorage persistence so audit data remains after page refresh
- Improved the overall UI structure and user experience of the audit section

**What I learned:**
- Learned better approaches for managing dynamic form arrays in React
- Improved understanding of scalable frontend state management
- Learned how localStorage can improve user experience in SaaS products

**Blockers / what I'm stuck on:**
- Need to improve audit logic to support more advanced financial recommendations
- Need backend integration to persist audit reports permanently

**Plan for tomorrow:**
- Setup Supabase backend
- Store audit reports in database
- Create shareable audit result links
- Start AI-generated summary integration

## Day 4 — 2026-05-25

**Hours worked:** 7

**What I did:**
- Integrated Supabase backend into the application
- Created audits database table with proper schema
- Added email capture functionality
- Connected frontend audit generation to database storage
- Configured Row Level Security policies for insert access
- Successfully stored audit reports in Supabase database
- Improved understanding of backend integration workflows

**What I learned:**
- Learned how Supabase works as a Backend-as-a-Service platform
- Learned how environment variables are used securely in Next.js
- Improved understanding of API integration and database persistence
- Learned how RLS policies affect frontend database operations

**Challenges faced:**
- Initial confusion with Supabase UI and API configuration
- Debugging frontend breakage during backend integration
- Understanding Row Level Security policies

**How I solved them:**
- Rebuilt integration step-by-step
- Used isolated testing after every setup stage
- Added insert policy to allow frontend audit storage

**Plan for tomorrow:**
- Improve audit analytics UI
- Add charts and savings summaries
- Create downloadable audit reports
- Improve recommendation intelligence