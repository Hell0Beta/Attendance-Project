# Attendance Project Dashboard

This project consists of a Django backend and a Next.js frontend dashboard for attendance management.

## Prerequisites

- Python 3.8 or higher
- Node.js 18 or higher
- pnpm (recommended) or npm

## Setup Instructions

### 1. Backend Setup (Django)

1. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run Django migrations:**
   ```bash
   python manage.py migrate
   ```

3. **Create a superuser (optional):**
   ```bash
   python manage.py createsuperuser
   ```

4. **Start the Django development server:**
   ```bash
   python manage.py runserver
   ```
   The Django server will run on http://localhost:8000

### 2. Frontend Setup (Next.js Dashboard)

1. **Navigate to the dashboard directory:**
   ```bash
   cd coachpro-dashboard
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or if you prefer npm:
   # npm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   # or if you prefer npm:
   # npm run dev
   ```
   The Next.js dashboard will run on http://localhost:3000

## Project Structure

- `Attendance_Project/` - Django backend
- `coachpro-dashboard/` - Next.js frontend dashboard
- `manage.py` - Django management script

## Available Scripts

### Backend (Django)
- `python manage.py runserver` - Start Django development server
- `python manage.py migrate` - Apply database migrations
- `python manage.py createsuperuser` - Create admin user

### Frontend (Next.js)
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run linting

## Access Points

- **Django Admin:** http://localhost:8000/admin
- **Dashboard:** http://localhost:3000
- **Django API:** http://localhost:8000/api/ (when implemented) 