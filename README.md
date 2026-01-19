# Shadcn Admin Dashboard

A modern, comprehensive admin dashboard UI built with **ShadcnUI**, **Vite**, and **TanStack Router**. Designed with responsiveness, accessibility, and developer experience in mind.

This project provides a complete admin dashboard solution with a rich set of components, pages, and features. Perfect for building modern web applications that require admin interfaces, data management, and user authentication flows.

## ✨ Features

### 🎨 **UI & Design**

- **Dark/Light mode** with system preference detection
- **RTL (Right-to-Left) support** for international applications
- **Responsive design** - works perfectly on mobile, tablet, and desktop
- **Accessible components** following WCAG guidelines
- **Modern sidebar** with collapsible navigation and team switching

### 🚀 **Core Functionality**

- **Global search command** (⌘K) for quick navigation
- **15+ pre-built pages** including dashboard, tables, forms, and error states
- **Advanced data tables** with sorting, filtering, pagination, and bulk actions
- **Authentication flow** with multiple sign-in/up variations
- **Task management** with drag-and-drop capabilities
- **Chat interface** with real-time messaging UI
- **User management** with detailed profiles and permissions

### 🔧 **Developer Experience**

- **TypeScript** for type safety
- **TanStack Router** for file-based routing with type-safe navigation
- **TanStack Query** for data fetching and caching
- **Form validation** with React Hook Form and Zod
- **Code splitting** and lazy loading for optimal performance
- **ESLint + Prettier** for code quality and formatting

<details>
<summary>Customized Components (click to expand)</summary>

This project uses Shadcn UI components, but some have been slightly modified for better RTL (Right-to-Left) support and other improvements. These customized components differ from the original Shadcn UI versions.

If you want to update components using the Shadcn CLI (e.g., `npx shadcn@latest add <component>`), it's generally safe for non-customized components. For the listed customized ones, you may need to manually merge changes to preserve the project's modifications and avoid overwriting RTL support or other updates.

> If you don't require RTL support, you can safely update the 'RTL Updated Components' via the Shadcn CLI, as these changes are primarily for RTL compatibility. The 'Modified Components' may have other customizations to consider.

### Modified Components

- scroll-area
- sonner
- separator

### RTL Updated Components

- alert-dialog
- calendar
- command
- dialog
- dropdown-menu
- select
- table
- sheet
- sidebar
- switch

**Notes:**

- **Modified Components**: These have general updates, potentially including RTL adjustments.
- **RTL Updated Components**: These have specific changes for RTL language support (e.g., layout, positioning).
- For implementation details, check the source files in `src/components/ui/`.
- All other Shadcn UI components in the project are standard and can be safely updated via the CLI.

</details>

## 🏗️ Tech Stack

### **Frontend Framework**

- **[React 19](https://react.dev/)** - The library for web and native user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types

### **Build & Development**

- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[SWC](https://swc.rs/)** - Rust-based platform for compilation

### **UI & Styling**

- **[ShadcnUI](https://ui.shadcn.com)** - Re-usable components built with Radix UI and Tailwind CSS
- **[TailwindCSS v4](https://tailwindcss.com/)** - A utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components

### **Routing & Data Fetching**

- **[TanStack Router](https://tanstack.com/router/latest)** - Type-safe file-based routing
- **[TanStack Query](https://tanstack.com/query/latest)** - Data fetching and caching library
- **[Axios](https://axios-http.com/)** - Promise based HTTP client

### **Form & Validation**

- **[React Hook Form](https://react-hook-form.com/)** - Performant, flexible forms
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### **State Management**

- **[Zustand](https://zustand-demo.pmnd.rs/)** - Small, fast, and scalable state management

### **Icons & Assets**

- **[Lucide Icons](https://lucide.dev/icons/)** - Beautiful & consistent icons
- **[Tabler Icons](https://tabler.io/icons)** - Brand icons only

### **Development Tools**

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Knip](https://knip.dev/)** - Find unused files, dependencies and exports

## 📁 Project Structure

```
src/
├── assets/           # Static assets (icons, images)
├── components/       # Reusable UI components
│   ├── ui/          # ShadcnUI base components
│   ├── layout/      # Layout-specific components
│   └── data-table/  # Advanced table components
├── features/        # Feature-based modules
│   ├── auth/        # Authentication pages
│   ├── dashboard/   # Dashboard components
│   ├── users/       # User management
│   ├── tasks/       # Task management
│   └── chats/       # Chat interface
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── routes/          # TanStack Router pages
├── stores/          # Zustand stores
└── styles/          # Global styles
```

## 📱 Available Pages

### **📊 Dashboard**

- Overview with analytics and charts
- Recent sales and activity tracking
- Customizable widgets and metrics

### **👥 User Management**

- User listing with advanced filtering
- User profiles and detailed views
- Role-based access control interface

### **✅ Task Management**

- Kanban-style task boards
- Task creation and editing
- Priority and status management

### **💬 Chat Interface**

- Real-time chat UI
- User presence indicators
- Message threading and reactions

### **📱 Apps**

- Application management dashboard
- App listing and configuration
- Integration management

### **🔐 Authentication**

- Multiple sign-in layouts
- Sign-up with validation
- Forgot password flow
- OTP verification

### **⚠️ Error Pages**

- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error
- Maintenance page

### **⚙️ Settings**

- Profile management
- Account settings
- Appearance preferences
- Notification controls

## 🚀 Getting Started

### **Prerequisites**

Make sure you have the following installed:

- **Node.js** (v18 or higher)
- **pnpm** (recommended) or npm/yarn

### **Installation**

1. **Clone the repository**

```bash
git clone https://github.com/sayro-damaceno/shadcn-admin
cd shadcn-admin
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Start development server**

```bash
pnpm dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

### **Available Scripts**

```bash
# Development
pnpm dev              # Start development server

# Building
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Run ESLint
pnpm format           # Format with Prettier
pnpm format:check     # Check formatting

# Analysis
pnpm knip             # Find unused files and dependencies
```

## 🎯 Key Features Highlights

### **🔍 Global Search**

Press `Cmd/Ctrl + K` to open the global command menu for quick navigation throughout the application.

### **📊 Advanced Data Tables**

- Server-side sorting and filtering
- Column visibility controls
- Bulk selection and actions
- Pagination with page size options
- URL state synchronization

### **🌙 Theme System**

- Light/Dark mode toggle
- System preference detection
- Persistent theme storage
- Smooth theme transitions

### **🌐 RTL Support**

Full right-to-left language support with proper component layouts and navigation flow.

### **📱 Responsive Design**

Optimized layouts for all screen sizes with mobile-first approach and touch-friendly interactions.

## 💡 Customization

This dashboard is built to be highly customizable. You can:

- **Add new pages** by creating routes in `src/routes/`
- **Create custom components** in `src/components/`
- **Modify the sidebar** by editing `src/components/layout/data/sidebar-data.ts`
- **Customize themes** in `src/styles/theme.css`
- **Add new features** following the feature-based architecture in `src/features/`

## 🙏 Acknowledgments

This template was copied from the original [Shadcn Admin](https://github.com/satnaing/shadcn-admin) repository created by [@satnaing](https://github.com/satnaing).

## 📄 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/). Feel free to use it for personal and commercial projects.
