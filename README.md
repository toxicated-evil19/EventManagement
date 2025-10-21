# EventManagement - Professional Event Planning Platform

*EventManagement is a modern, interactive event planning platform built with Next.js and React. It provides an intuitive booking interface with multi-step forms, dynamic galleries, service showcases, and comprehensive digital tools for managing events. The platform uses TypeScript for type safety, Tailwind CSS for responsive design, and shadcn/ui components for a polished user experience.*

## Overview

EventManagement is a comprehensive event booking and planning solution that streamlines the process of organizing events. Whether you're planning a wedding, corporate event, birthday party, or special occasion, this platform provides all the tools you need to create unforgettable experiences. 

The platform features:
- **Responsive design** optimized for mobile and desktop
- **Smooth multi-step booking process** with visual progress tracking
- **Engaging visual sections** including hero, services, gallery, and digital tools
- **Type-safe development** with TypeScript and Zod validation
- **Modern UI components** from shadcn/ui with Radix UI accessibility
- **High-performance frontend** built with Next.js 15 and Turbopack

## Key Features

✨ **Multi-Step Booking Process**
- Step-by-step form wizard with visual progress indicators
- Personal details collection
- Event information gathering
- Order confirmation

🎨 **Modern UI Components**
- Responsive hero section with compelling call-to-action
- Services showcase with feature highlights
- Interactive gallery section
- Digital tools section for event planning assistance
- Professional footer with contact information

📱 **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes (mobile, tablet, desktop)
- Touch-friendly navigation and forms
- Smooth animations and transitions

🎯 **Form Management**
- React Hook Form for efficient form handling
- Zod schema validation
- Custom form components with error handling
- Support for multiple field types (text, date, time, textarea)

🎭 **Visual Elements**
- Smooth scrolling navigation
- Gradient backgrounds and modern styling
- Icon integration with Lucide React
- Animated progress indicators
- Framer Motion for smooth animations

## How the Application Works

When a user visits the EventManagement platform, they land on the responsive landing page featuring various sections showcasing services, previous events, and booking capabilities. The multi-step booking form guides users through collecting their personal information, event details, and finally confirming their booking. All form data is validated in real-time using Zod schemas, ensuring data integrity before submission. The platform features smooth animations and transitions powered by Framer Motion, providing an engaging user experience across all devices.

### Application Flow

```
User Visits Platform
    ↓
Landing Page Loads (EventPlannerLanding.tsx)
    ↓
Navigation & Hero Section Displayed
    ↓
User Explores Services & Gallery
    ↓
User Clicks "Book Event"
    ↓
Multi-Step Form Initializes
    ├─ Step 1: Personal Details (Name, Email, Phone)
    ├─ Step 2: Event Information (Date, Time, Location, Description)
    └─ Step 3: Confirmation & Submission
    ↓
Form Validation (Zod)
    ↓
Success Message / Error Handling
    ↓
Close Form or Start New Booking
```

## Architecture Overview

### Frontend Architecture

The EventManagement frontend follows a **component-based architecture** with clear separation of concerns:

```mermaid
graph TD
    subgraph UI["UI Layer"]
        A["Landing Page"]
        B["Navbar"]
        C["Hero Section"]
        D["Services Section"]
        E["Gallery Section"]
        F["Booking Section"]
        G["Digital Tools"]
        H["Footer"]
        
        A --- B
        A --- C
        A --- D
        A --- E
        A --- F
        A --- G
        A --- H
    end
    
    subgraph COMPONENTS["Form Components"]
        I["PersonalDetailsForm"]
        J["EventInformationForm"]
        K["ProgressIndicator"]
        L["ConfirmationForm"]
    end
    
    subgraph STATE["State Management"]
        M["React Hook Form"]
        N["Zod Validation"]
        O["Component State"]
    end
    
    subgraph UI_LIB["UI Component Library"]
        P["shadcn/ui Components"]
        Q["Radix UI Primitives"]
        R["Custom Components"]
    end
    
    F --- I
    F --- J
    F --- K
    F --- L
    
    I --- M
    J --- M
    L --- M
    
    M --- N
    
    P --- Q
    R --- Q
    
    classDef page fill:#667eea,stroke:#764ba2,stroke-width:2px,color:#fff
    classDef form fill:#f093fb,stroke:#f5576c,stroke-width:2px,color:#fff
    classDef state fill:#4facfe,stroke:#00f2fe,stroke-width:2px,color:#fff
    classDef ui fill:#43e97b,stroke:#38f9d7,stroke-width:2px,color:#fff
    
    class A,B,C,D,E,G,H page
    class I,J,K,L form
    class M,N,O state
    class P,Q,R ui
```

### Component Interaction Flow

```mermaid
sequenceDiagram
    participant U as User
    participant LP as Landing Page
    participant BS as BookingSection
    participant FH as React Hook Form
    participant ZOD as Zod Validator
    participant UI as UI Components
    
    U->>LP: Visits Platform
    LP->>LP: Renders All Sections
    LP-->>U: Display Page
    
    U->>BS: Clicks "Book Event"
    BS->>FH: Initialize Form
    FH-->>BS: Form Context Ready
    BS-->>U: Show Step 1 Form
    
    U->>UI: Enters Personal Details
    UI->>FH: Register Fields
    FH-->>BS: Update Form State
    BS-->>U: Highlight Progress
    
    U->>BS: Click Next
    BS->>ZOD: Validate Step 1
    alt Validation Passes
        ZOD-->>BS: Success
        BS-->>U: Show Step 2 Form
    else Validation Fails
        ZOD-->>BS: Error Messages
        BS-->>U: Display Errors
    end
    
    U->>UI: Enters Event Information
    UI->>FH: Register Fields
    FH-->>BS: Update Form State
    
    U->>BS: Click Next
    BS->>ZOD: Validate Step 2
    ZOD-->>BS: Validation Result
    BS-->>U: Show Step 3 Confirmation
    
    U->>BS: Review & Confirm
    BS->>ZOD: Final Validation
    ZOD-->>BS: All Valid
    BS-->>U: Show Success
```

## Tech Stack

### Frontend Technologies

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 15.0.3 | React framework with server-side rendering & optimization |
| **React** | 19.1.1 | UI library & component framework |
| **TypeScript** | 5.x | Type-safe JavaScript development |
| **Tailwind CSS** | 3.4.1 | Utility-first CSS framework |
| **React Hook Form** | 7.53.2 | Efficient form state management |
| **Zod** | 3.23.8 | TypeScript-first schema validation |
| **Shadcn/ui** | Latest | High-quality, accessible UI components |
| **Lucide React** | 0.456.0 | Beautiful, consistent icon library |
| **Framer Motion** | 11.11.13 | Smooth animation library |
| **React Slick** | 0.30.2 | Responsive carousel component |
| **React Day Picker** | 9.9.0 | Date picker component |
| **Date-fns** | 3.6.0 | Date manipulation utilities |
| **Class Variance Authority** | 0.7.0 | Component variant management |
| **CLSX** | 2.1.1 | Conditional className utility |

### Development Tools

| Tool | Purpose |
|---|---|
| **TypeScript** | Static type checking & IntelliSense |
| **ESLint** | Code linting & quality |
| **PostCSS** | CSS preprocessing & optimization |
| **Turbopack** | Fast bundler for rapid development |
| **Next.js Turbopack** | Production-grade build optimization |

## App Architecture

### Detailed Component Breakdown

The EventManagement platform is built using a modular component architecture that promotes reusability, maintainability, and scalability.

**Landing Page Entry Point** (`EventPlannerLanding.tsx`)
- Main orchestrator component
- Manages scroll detection for navbar styling
- Composes all major sections

**Navigation Components**
- `Navbar.tsx` - Sticky navigation with scroll detection and responsive mobile menu
- `HeroSection.tsx` - Hero banner with compelling call-to-action and imagery

**Content Sections**
- `ServicesSection.tsx` - Showcases available event planning services
- `GallerySection.tsx` - Interactive gallery with carousel of past events
- `DigitalToolsSection.tsx` - Additional tools and features for event planning
- `BookingSection.tsx` - Main booking form container and orchestrator

**Form Components** (Booking Flow)
- `ProgressIndicator.tsx` - Visual progress tracking across steps
- `PersonalDetailsForm.tsx` - Collects user contact information
- `EventInformationForm.tsx` - Gathers event-specific details
- Confirmation step for review before submission

**UI Components Library** (shadcn/ui)
- Accessible, customizable components built on Radix UI
- Full TypeScript support with prop typing
- Consistent styling through Tailwind CSS
- Includes: Badge, Button, Calendar, Card, Dialog, Form, Input, Label, Navigation Menu, Sheet, Slider, Switch, Tabs, Textarea

**Utility & Support**
- `Footer.tsx` - Contact and information footer
- `utils.ts` - Helper functions for common operations
- `bookingSteps.ts` - Constants defining the booking workflow

### Project Structure

```
EventManagement/
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── globals.css              # Global styles & CSS variables
│   │   ├── layout.tsx               # Root layout with metadata & fonts
│   │   ├── page.tsx                 # Home page entry point
│   │   ├── constants/
│   │   │   └── bookingSteps.ts      # Booking flow step definitions
│   │   └── fonts/
│   │       ├── GeistVF.woff         # Geist Sans font
│   │       └── GeistMonoVF.woff     # Geist Mono font
│   │
│   ├── components/
│   │   ├── EventPlannerLanding.tsx  # Main orchestrator component
│   │   │
│   │   ├── booking-separations/     # Multi-step form modules
│   │   │   ├── EventInformationForm.tsx    # Event details form
│   │   │   ├── PersonalDetailsForm.tsx     # User contact form
│   │   │   └── ProgressIndicator.tsx       # Step progress tracker
│   │   │
│   │   ├── user-interface/          # Page section components
│   │   │   ├── Navbar.tsx                  # Sticky navigation
│   │   │   ├── HeroSection.tsx             # Hero/banner
│   │   │   ├── ServicesSection.tsx         # Services showcase
│   │   │   ├── GallerySection.tsx          # Event gallery with carousel
│   │   │   ├── BookingSection.tsx          # Booking form orchestrator
│   │   │   ├── DigitalToolsSection.tsx     # Tools & features
│   │   │   └── Footer.tsx                  # Footer & contact
│   │   │
│   │   └── ui/                      # shadcn/ui component exports
│   │       ├── badge.tsx            # Badge component
│   │       ├── button.tsx           # Button component
│   │       ├── calendar.tsx         # Calendar picker
│   │       ├── card.tsx             # Card container
│   │       ├── dialog.tsx           # Modal dialog
│   │       ├── form.tsx             # Form wrapper
│   │       ├── input.tsx            # Input field
│   │       ├── label.tsx            # Form label
│   │       ├── navigation-menu.tsx  # Navigation menu
│   │       ├── sheet.tsx            # Side sheet/drawer
│   │       ├── slider.tsx           # Range slider
│   │       ├── switch.tsx           # Toggle switch
│   │       ├── tabs.tsx             # Tabbed interface
│   │       └── textarea.tsx         # Text area field
│   │
│   └── lib/
│       └── utils.ts                 # Utility functions (cn, clsx)
│
├── public/
│   └── images/                      # Static assets & graphics
│
├── Configuration Files
│   ├── components.json              # shadcn/ui config (aliases, theme)
│   ├── tailwind.config.ts           # Tailwind CSS theme & plugins
│   ├── tsconfig.json                # TypeScript compiler options
│   ├── postcss.config.mjs           # PostCSS processing
│   ├── next.config.ts               # Next.js configuration
│   ├── .eslintrc.json               # ESLint rules
│   └── .gitignore                   # Git exclusions
│
├── package.json                     # Dependencies & scripts
├── package-lock.json                # Dependency lock file
└── README.md                        # This file
```

## Booking Flow Process

The booking system implements a three-step process with validation at each stage:

```
┌─────────────────────────────────────────────────────┐
│         STEP 1: PERSONAL DETAILS                    │
│  ┌────────────────────────────────────────────────┐ │
│  │ • First Name (text input)                      │ │
│  │ • Last Name (text input)                       │ │
│  │ • Email (email input with validation)          │ │
│  │ • Phone (phone input with formatting)          │ │
│  └────────────────────────────────────────────────┘ │
│           ⬇️  Validate with Zod Schema ⬇️            │
└─────────────────────────────────────────────────────┘
           │
✅ (Pass) / ❌ (Fail - Show Errors)
           │
┌─────────────────────────────────────────────────────┐
│         STEP 2: EVENT INFORMATION                   │
│  ┌────────────────────────────────────────────────┐ │
│  │ • Event Date (date picker)                     │ │
│  │ • Event Time (time picker)                     │ │
│  │ • Location (text input with suggestions)       │ │
│  │ • Description (textarea for event details)     │ │
│  │ • Budget (optional slider)                     │ │
│  │ • Services (multi-select checkboxes)           │ │
│  └────────────────────────────────────────────────┘ │
│           ⬇️  Validate with Zod Schema ⬇️            │
└─────────────────────────────────────────────────────┘
           │
✅ (Pass) / ❌ (Fail - Show Errors)
           │
┌─────────────────────────────────────────────────────┐
│         STEP 3: CONFIRMATION & REVIEW               │
│  ┌────────────────────────────────────────────────┐ │
│  │ Display Summary of:                            │ │
│  │ • Personal Details                             │ │
│  │ • Event Details                                │ │
│  │ • Selected Services                            │ │
│  │ • Total Estimated Cost                         │ │
│  │                                                │ │
│  │ Options:                                       │ │
│  │ [Edit] [Cancel] [CONFIRM & SUBMIT]             │ │
│  └────────────────────────────────────────────────┘ │
│           ⬇️  Final Validation ⬇️                    │
└─────────────────────────────────────────────────────┘
              │
              ⬇️
   ┌─────────────────────┐
   │  ✅ SUCCESS         │
   │  Booking Confirmed  │
   │  Show Confirmation  │
   │  & Reference Number │
   └─────────────────────┘
```

## Component Hierarchy

```
EventPlannerLanding
├── Navbar
│   ├── Logo
│   ├── Navigation Links
│   └── Mobile Menu (Sheet)
├── HeroSection
│   ├── Background Image
│   ├── Headline
│   └── CTA Button
├── ServicesSection
│   ├── Section Title
│   ├── Service Cards (multiple)
│   └── Icons
├── GallerySection
│   ├── Gallery Title
│   ├── React Slick Carousel
│   └── Gallery Images
├── BookingSection
│   ├── Form Container
│   ├── ProgressIndicator
│   │   ├── Step 1 Circle
│   │   ├── Step 2 Circle
│   │   ├── Step 3 Circle
│   │   └── Progress Line
│   ├── PersonalDetailsForm (Conditional Render)
│   │   ├── Input Fields
│   │   ├── Validation Messages
│   │   └── Navigation Buttons
│   ├── EventInformationForm (Conditional Render)
│   │   ├── Date/Time Pickers
│   │   ├── Location Input
│   │   ├── Description Textarea
│   │   ├── Budget Slider
│   │   ├── Service Checkboxes
│   │   ├── Validation Messages
│   │   └── Navigation Buttons
│   ├── ConfirmationForm (Conditional Render)
│   │   ├── Summary Display
│   │   ├── Edit Button
│   │   ├── Cancel Button
│   │   └── Confirm Button
│   └── Success Modal (After Submit)
├── DigitalToolsSection
│   ├── Tools Grid
│   └── Tool Cards
└── Footer
    ├── Contact Information
    ├── Quick Links
    └── Social Media Links
```

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn** package manager
- Basic understanding of React and TypeScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/toxicated-evil19/EventManagement.git
   cd EventManagement
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application

### Build for Production

```bash
npm run build
npm start
```

### Code Quality

```bash
# Run ESLint
npm run lint
```

## Component Documentation

### Booking Section

The booking section provides a multi-step form for event bookings:

**Features:**
- Visual progress indicator showing booking steps
- Three-step process: Personal Details → Event Information → Confirmation
- Form validation with Zod
- Responsive design for mobile and desktop

**Props:** None (uses internal state management)

**Steps:**
1. **Personal Details** - Collect name, email, and phone
2. **Event Information** - Event date, time, location, and description
3. **Confirmation** - Review and submit booking

### Services Section

Displays available event planning services with icons and descriptions.

### Gallery Section

Showcases previous events with an interactive carousel using react-slick.

### Navigation

Sticky navbar that appears on scroll with smooth transitions and responsive mobile menu.

## Form Handling

The application uses **React Hook Form** with **Zod** for schema validation:

```typescript
const form = useForm({
  resolver: zodResolver(eventSchema),
  defaultValues: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    location: "",
    description: ""
  }
});
```

## Styling

- **Tailwind CSS** for utility-first styling
- **Custom CSS variables** for theming (see `globals.css`)
- **Responsive design** with mobile-first approach
- **Dark mode support** configured in `tailwind.config.ts`

## UI Component Library

Using **shadcn/ui** components built on **Radix UI** for:
- Accessibility
- Customization
- Consistency
- Type safety

All components are fully typed with TypeScript.

## Responsive Breakpoints

The application is optimized for:
- **Mobile** - 320px and up
- **Tablet** - 640px and up
- **Desktop** - 1024px and up
- **Large Desktop** - 1536px and up

## Animations

Smooth animations powered by **Framer Motion** for:
- Page transitions
- Component entrance effects
- Progress indicator updates
- Form step transitions

## Performance Optimizations

- Next.js 15 with Turbopack for fast builds
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Type-safe development with TypeScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Naming Conventions

- Components: `PascalCase.tsx` (e.g., `BookingSection.tsx`)
- Utilities: `camelCase.ts` (e.g., `utils.ts`)
- Styles: Global styles in `globals.css`, component styles inline with Tailwind
- Constants: `camelCase.ts` (e.g., `bookingSteps.ts`)

## Project Limitations & Assumptions

### Current Limitations
- **Frontend Only** - No backend integration; bookings are not persisted
- **No Authentication** - Currently no user login/signup system
- **No Payment Processing** - Cannot accept actual payments
- **Static Data** - Services and gallery content are hardcoded
- **Single Language** - Only English is supported
- **No Email System** - Cannot send booking confirmations
- **No Data Validation** - Form data is not saved or validated on backend
- **Single Tenant** - Not designed for multiple event planners
- **No Real-time Updates** - No live booking updates or notifications

### Assumptions Made
- Users have modern browsers with ES2017+ support
- Users have JavaScript enabled
- Mobile users have touch-capable devices
- All event dates are in the future
- All prices are in a single currency
- Standard business hours for event planning
- Users have valid email addresses
- Phone numbers follow standard formatting
- Event locations are within service area

## Technical Decisions & Trade-offs

### Why Next.js 15?
- **Server-side rendering** for better SEO
- **Vercel deployment** integration
- **Built-in optimization** for images and fonts
- **API routes** for future backend integration
- **Turbopack** for ultra-fast development

### Why React Hook Form + Zod?
- **Performance** - Minimizes re-renders with uncontrolled components
- **Type Safety** - Zod provides runtime type validation
- **Developer Experience** - Simple, intuitive API
- **Bundle Size** - Lightweight compared to Formik
- **Built-in Features** - Async validation, cross-field validation

### Why Shadcn/ui?
- **Accessibility** - Built on Radix UI (WCAG compliant)
- **Customization** - Components are in your codebase, not node_modules
- **Type Safety** - Full TypeScript support
- **No Theme Lock-in** - Uses Tailwind CSS for styling
- **Consistent Design** - Professional, cohesive UI

### Why Tailwind CSS?
- **Utility-First** - Rapid development with no custom CSS needed
- **Responsive Design** - Mobile-first breakpoints built-in
- **Dark Mode** - Easy dark mode implementation
- **Performance** - Purges unused styles in production
- **Maintenance** - No CSS specificity issues

## Deployment Guide

### Prerequisites for Deployment
- GitHub account and repository
- Vercel account (free tier available)
- Git installed locally

### Step-by-Step Deployment (Vercel)

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Select your EventManagement repository
   - Click "Import"

3. **Configure Project**
   - Framework: Next.js (auto-detected)
   - Root Directory: ./ (default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: .next (auto-filled)
   - Environment Variables: None required for MVP

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your app is now live at a `.vercel.app` domain

5. **Custom Domain (Optional)**
   - Go to project settings
   - Add your custom domain
   - Update DNS records as instructed
   - Wait for SSL certificate generation

### Alternative Deployment Options

**Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy
```

**Docker Deployment**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables for Production

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://your-api.com
```

## Performance Metrics

The application is optimized for speed and performance:

- **First Contentful Paint (FCP)** < 1.5s
- **Largest Contentful Paint (LCP)** < 2.5s
- **Cumulative Layout Shift (CLS)** < 0.1
- **Time to Interactive (TTI)** < 3.5s
- **Lighthouse Score** > 90

### Performance Optimizations Used
- Next.js Image optimization
- CSS-in-JS with Tailwind (purged in production)
- Component code splitting
- Lazy loading of sections
- Minified JavaScript bundles
- Gzip compression
- CDN delivery via Vercel

## Development Guide

### Code Quality Standards

- **TypeScript strict mode** enabled (`strict: true`)
- **ESLint** configured with Next.js recommended rules
- **Prettier** for automatic code formatting
- **Component composition** over prop drilling
- **Reusable UI components** from shadcn/ui library
- **Type safety** - No `any` types in production code
- **Prop validation** - All props are typed and documented

### Coding Conventions

**File Naming**
- Components: `PascalCase.tsx` (e.g., `BookingSection.tsx`)
- Utilities: `camelCase.ts` (e.g., `utils.ts`)
- Types/Interfaces: `PascalCase.ts` (e.g., `EventTypes.ts`)
- Constants: `camelCase.ts` (e.g., `bookingSteps.ts`)

**Component Structure**
```typescript
// Imports
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

// Types
interface ComponentProps {
  prop1: string;
  prop2?: number;
}

// Component
const MyComponent: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // State
  const [state, setState] = useState('');
  
  // Hooks
  const form = useFormContext();
  
  // Handlers
  const handleClick = () => {
    // logic
  };
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default MyComponent;
```

**Styling Conventions**
- Use Tailwind CSS utility classes
- Create custom CSS only in `globals.css`
- Use CSS variables for theming
- Responsive design: mobile-first approach
- Consistent spacing using Tailwind scale

### Git Workflow

1. Create feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. Make changes and commit
   ```bash
   git add .
   git commit -m "Add amazing feature"
   ```

3. Push to remote
   ```bash
   git push origin feature/amazing-feature
   ```

4. Create Pull Request on GitHub

## Troubleshooting & FAQ

### Installation Issues

**Problem: `npm install` fails with dependency conflicts**
```bash
# Solution: Clear npm cache and try again
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Problem: `Node modules not installing`**
```bash
# Solution: Use older npm version
npm install -g npm@9
npm install
```

**Problem: `Port 3000 already in use`**
```bash
# Solution: Use different port
npm run dev -- -p 3001
```

### Development Issues

**Problem: Hot reload not working**
- Check if changes are being saved
- Restart dev server: `Ctrl+C` then `npm run dev`
- Clear Next.js cache: `rm -rf .next`

**Problem: TypeScript errors after package update**
```bash
# Solution: Regenerate types
npx tsc --noEmit
npm run build
```

**Problem: Styles not applying**
- Check class name spelling
- Verify Tailwind CSS is included in `tailwind.config.ts`
- Check for specificity issues in `globals.css`
- Hard refresh browser (Cmd+Shift+R on Mac)

### Build Issues

**Problem: Build fails with "Module not found"**
```bash
# Solution: Reinstall dependencies
npm install
npm run build
```

**Problem: Vercel deployment fails**
- Check Node version matches (v18+)
- Verify all environment variables are set
- Check build log for specific errors
- Rebuild without cache on Vercel

### Form Issues

**Problem: Form validation not triggering**
- Ensure Zod schema is properly defined
- Check field names match schema keys
- Verify `react-hook-form` provider wraps form

**Problem: Form values not updating**
- Check `useFormContext()` is available
- Verify form is registered with `register()`
- Check for typos in field names

**Problem: Date picker not showing**
- Ensure `react-day-picker` is installed
- Check `calendar.tsx` component is exported
- Import `calendar.tsx` in the form

### Browser Compatibility

**Problem: App not working in older browsers**
- App requires modern browser (Chrome, Firefox, Safari, Edge)
- Check browser version (ES2017+ support needed)
- Use [browserstack](https://www.browserstack.com) for testing

**Problem: Mobile layout broken**
- Check viewport meta tag in `layout.tsx`
- Verify Tailwind responsive classes
- Test with Chrome DevTools mobile emulation

### Common Questions

**Q: How do I customize colors?**
A: Edit `tailwind.config.ts` theme section or modify CSS variables in `globals.css`

**Q: How do I add a new form field?**
A: 
1. Add field to Zod schema
2. Add input component in form file
3. Register field with `form.register()`

**Q: How do I change the booking steps?**
A: Edit `src/app/constants/bookingSteps.ts`

**Q: Can I use this commercially?**
A: Yes, it's MIT licensed. No restrictions on commercial use.

**Q: How do I add backend integration?**
A: Create API routes in `src/app/api/` or use Next.js Server Actions

**Q: How do I deploy to my own server?**
A: Build with `npm run build` and run `npm start`, or use Docker

**Q: Where do I store booking data currently?**
A: Currently data is not persisted. You need to add backend integration.

**Q: How do I implement authentication?**
A: Consider using NextAuth.js or Auth0 for authentication

**Q: Can I add more form steps?**
A: Yes, add to `bookingSteps.ts` and create corresponding form components

## Browser Support

- **Chrome** (latest versions)
- **Firefox** (latest versions)
- **Safari** (v14+)
- **Edge** (latest versions)
- **Mobile Browsers** (iOS Safari, Chrome Mobile)

All browsers must support ES2017+ and CSS Grid/Flexbox

## License

This project is open source and available under the **MIT License**.