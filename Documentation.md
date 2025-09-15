![](logo.png)

**Client Portal\
Finitic Services Provider**



Author: Abdelrahman Hassan\
Front-End Developer\
Version: 1.0\
Date: September 2025


# **Table of Contents**
1. Project Overview
2. Technical Stack
3. Project Structure
4. Component Documentation
5. State Management
6. Internationalization
7. Styling
8. API Integration
9. Development Setup
10. Build and Deployment
11. Best Practices
12. Troubleshooting


# **Project Overview**
The Client Portal is a modern web application built with React and TypeScript, designed to provide a comprehensive interface for client management and interaction. The application features a responsive design with support for multiple languages and themes.
# **Technical Stack**
- Frontend Framework: React 19
- Language: TypeScript
- UI Library: Material-UI (MUI) v7
- State Management: Redux Toolkit
- Routing: React Router v7
- HTTP Client: Axios
- Internationalization: i18next
- Build Tool: Vite
- Styling: Styled Components & Emotion
# **Project Structure**
The following tree represents the complete structure of the project:

├─ .env\
├─ .gitignore\
├─ README.md\
├─ eslint.config.js\
├─ index.html\
├─ package-lock.json\
├─ package.json\
├─ public\
│  ├─ locales\
│  │  ├─ ar\
│  │  │  └─ translation.json\
│  │  └─ en\
│  │     └─ translation.json\
│  └─ vite.svg\
├─ src\
│  ├─ App.css\
│  ├─ App.tsx\
│  ├─ assets\
│  │  ├─ images\
│  │  │  ├─ chart.png\
│  │  │  ├─ coin.png\
│  │  │  └─ logo.png\
│  │  └─ react.svg\
│  ├─ components\
│  │  ├─ Auth\
│  │  ├─ Layout\
│  │  ├─ Pages\
│  │  ├─ Setting\
│  │  ├─ Shared\
│  │  └─ \_UI\
│  ├─ config.ts\
│  ├─ helper\
│  ├─ i18n.ts\
│  ├─ layouts\
│  ├─ main.tsx\
│  ├─ pages\
│  ├─ routes\
│  ├─ store\
│  ├─ theme\
│  └─ vite-env.d.ts\
├─ tsconfig.app.json\
├─ tsconfig.json\
├─ tsconfig.node.json\
└─ vite.config.ts
# **Component Documentation**
## **UI Components (src/components/_UI/)**

### **AppButton**
A highly customizable button component that extends MUI's Button with additional styling and functionality.

**Props:**
- Extends all MUI ButtonProps
- Custom props:
  - `isLoading`: boolean - Shows loading state
  - `fullWidth`: boolean - Makes button full width
  - `variant`: 'contained' | 'outlined' | 'text' (default: 'contained')
  - `color`: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info' (default: 'primary')

**Example Usage:**
```tsx
import { AppButton } from '@/components/_UI/AppButton';

// Basic usage
<AppButton onClick={() => console.log('Clicked!')}>
  Click Me
</AppButton>

// With loading state
<AppButton 
  isLoading={true} 
  variant="contained"
  color="primary"
>
  Processing...
</AppButton>
```

### **AppBox** 
A flexible container component that provides consistent spacing and styling.

**Props:**
- Extends MUI BoxProps
- Custom props:
  - `p`: number | string - Padding (supports theme spacing)
  - `m`: number | string - Margin (supports theme spacing)
  - `withBorder`: boolean - Adds border
  - `radius`: number - Border radius in pixels

**Example Usage:**
```tsx
import { AppBox } from '@/components/_UI/AppBox';

// Basic usage with spacing
<AppBox p={2} m={1}>
  Content goes here
</AppBox>

// With border and custom radius
<AppBox withBorder radius={8} p={3}>
  <Typography>Box with border</Typography>
</AppBox>
```

### **BoxRounded24**
A specialized box component with 24px border radius.

**Props:**
- All AppBox props
- Fixed 24px border radius
- Default padding of 24px

**Example Usage:**
```tsx
import { BoxRounded24 } from '@/components/Shared/Boxes/BoxRounded24';

<BoxRounded24 withBorder>
  <Typography variant="h6">Section Title</Typography>
  <Typography>Content with consistent rounded corners</Typography>
</BoxRounded24>
```

### **CustomBox**
A highly customizable box component with additional styling options.

**Props:**
- All AppBox props
- `elevation`: number - Shadow depth (0-24)
- `hoverEffect`: boolean - Adds hover effect
- `background`: string - Custom background color

**Example Usage:**
```tsx
import { CustomBox } from '@/components/Shared/Boxes/CustomBox';

<CustomBox 
  elevation={2}
  hoverEffect
  background="#f5f5f5"
  p={3}
>
  <Typography>Hover over me!</Typography>
</CustomBox>
```

## **Best Practices for Using UI Components**

1. **Consistent Spacing**
   - Use theme spacing (multiples of 4) for consistent padding and margins
   - Example: `p={2}` for 16px padding

2. **Theming**
   - Use theme colors instead of hardcoded values
   - Access theme values using the `useTheme` hook:
   
   ```tsx
   import { useTheme } from '@mui/material/styles';
   
   function ThemedComponent() {
     const theme = useTheme();
     return (
       <div style={{ color: theme.palette.primary.main }}>
         This text uses the primary theme color
       </div>
     );
   }
   ```

3. **Responsive Design**
   - Use MUI's responsive breakpoints:
   
   ```tsx
   <Box 
     p={{ xs: 1, sm: 2, md: 3 }}
     m={{ xs: 0.5, md: 1 }}
   >
     Responsive spacing
   </Box>
   ```

## **Layout Components**
- Header – Top navigation bar with profile & notifications.
- Sidebar – Collapsible main navigation menu.
## **Shared Components**
- Boxes – Custom box styles: BoxRounded24, BoxRounded44, CustomBox.
- Buttons – Styled variants: Primary, Secondary, Green, Red, Yellow.
# **State Management**
The application uses Redux Toolkit for global state management, and RTK Query for data fetching and caching. State slices are organized by feature (auth, user, deposits, etc.).
# **Internationalization**
i18next is used for multi-language support. It includes language detection with i18next-browser-languagedetector, and an HTTP backend for loading translations dynamically.
# **Styling**
The project uses a combination of Styled Components and Emotion for dynamic component-level styling. MUI Theme ensures consistent theming, and responsive design is achieved with CSS Grid and Flexbox.
# **API Integration**
Axios is used as the HTTP client for API requests. API services are organized by feature. Error handling and interceptors are implemented globally.
# **Development Setup**
- Prerequisites: Node.js v24+, npm or yarn.
- Installation:

npm install

- Run development server:

npm run dev

- Build for production:

npm run build

- Preview production build:

npm run preview

Environment Variables: Create a `.env` file in root and add required variables.
# **Build and Deployment**
To create a production build, run `npm run build`. The output is generated in the `/dist` folder and can be deployed to any static hosting provider (e.g., Vercel, Netlify).
# **Best Practices**
- Follow Atomic Design methodology for components.
- Keep components small and focused.
- Use TypeScript interfaces for props.
- Follow ESLint and Prettier rules.
- Prefer functional components with hooks.
- Write unit tests with React Testing Library.
# **Troubleshooting**
- Check `.env` file if API requests fail.
- Ensure Node.js version is compatible.
- Clear cache and reinstall dependencies if build errors occur.
- Use React DevTools and Redux DevTools for debugging.
- Optimize performance by memoizing components and lazy-loading routes.
