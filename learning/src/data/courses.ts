export interface Lesson {
    id: string;
    title: string;
    duration: string;
    completed?: boolean;
    description?: string;
    videoUrl?: string;
  }
  
  export interface Course {
    id: string;
    title: string;
    instructor: string;
    description: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    duration: string;
    category: string;
    thumbnail: string;
    enrolled?: boolean;
    progress?: number;
    lessons: Lesson[];
  }
  
  export const courses: Course[] = [
    {
      id: "react-fundamentals",
      title: "React Fundamentals",
      instructor: "Sarah Johnson",
      description: "Learn the fundamentals of React, including components, props, state, and lifecycle methods.",
      level: "Beginner",
      duration: "4 weeks",
      category: "Web Development",
      thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      enrolled: true,
      progress: 35,
      lessons: [
        {
          id: "intro-to-react",
          title: "Introduction to React",
          duration: "15 min",
          completed: true,
          description: "Introduction to React and its component-based architecture. Learn why React has become one of the most popular JavaScript libraries for building user interfaces."
        },
        {
          id: "components-and-props",
          title: "Components and Props",
          duration: "25 min",
          completed: true,
          description: "Learn about creating components in React and how to pass data through props. Understand the difference between functional and class components."
        },
        {
          id: "state-and-lifecycle",
          title: "State and Lifecycle",
          duration: "30 min",
          description: "Understand how to use state in React components and the component lifecycle methods."
        },
        {
          id: "handling-events",
          title: "Handling Events",
          duration: "20 min",
          description: "Learn how to handle events in React and implement event handlers."
        },
        {
          id: "conditional-rendering",
          title: "Conditional Rendering",
          duration: "15 min",
          description: "Learn different methods for conditionally rendering components in React."
        },
        {
          id: "lists-and-keys",
          title: "Lists and Keys",
          duration: "20 min",
          description: "Understand how to render lists in React and the importance of keys."
        }
      ]
    },
    {
      id: "advanced-react",
      title: "Advanced React Patterns",
      instructor: "Michael Chen",
      description: "Deep dive into advanced React patterns including hooks, context, and performance optimization.",
      level: "Advanced",
      duration: "6 weeks",
      category: "Web Development",
      thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      enrolled: true,
      progress: 10,
      lessons: [
        {
          id: "hooks-intro",
          title: "Introduction to Hooks",
          duration: "30 min",
          completed: true,
          description: "Learn about React Hooks and how they allow you to use state and other React features without writing a class."
        },
        {
          id: "custom-hooks",
          title: "Building Custom Hooks",
          duration: "35 min",
          description: "Learn how to create custom hooks to extract component logic into reusable functions."
        },
        {
          id: "context-api",
          title: "Context API",
          duration: "25 min",
          description: "Understand how to use React's Context API to share state across the component tree without prop drilling."
        },
        {
          id: "performance-optimization",
          title: "Performance Optimization",
          duration: "40 min",
          description: "Learn techniques to optimize React application performance with memoization, code splitting, and more."
        }
      ]
    },
    {
      id: "node-js-backend",
      title: "Node.js Backend Development",
      instructor: "David Wilson",
      description: "Build scalable and robust backend systems with Node.js, Express, and MongoDB.",
      level: "Intermediate",
      duration: "8 weeks",
      category: "Backend Development",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      lessons: [
        {
          id: "node-intro",
          title: "Introduction to Node.js",
          duration: "25 min",
          description: "Learn about Node.js, its architecture, and how it enables JavaScript on the server."
        },
        {
          id: "express-basics",
          title: "Express.js Fundamentals",
          duration: "30 min",
          description: "Get started with Express.js framework for building web applications with Node.js."
        },
        {
          id: "rest-api",
          title: "Building RESTful APIs",
          duration: "45 min",
          description: "Design and implement RESTful APIs following best practices."
        },
        {
          id: "mongodb-intro",
          title: "MongoDB for Persistence",
          duration: "40 min",
          description: "Introduction to MongoDB and how to integrate it with Node.js applications."
        }
      ]
    },
    {
      id: "css-animation-mastery",
      title: "CSS Animation Mastery",
      instructor: "Emma Rodriguez",
      description: "Master the art of web animations using CSS transforms, transitions, keyframes, and more.",
      level: "Intermediate",
      duration: "5 weeks",
      category: "Web Design",
      thumbnail: "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      lessons: [
        {
          id: "css-transforms",
          title: "CSS Transforms",
          duration: "20 min",
          description: "Learn about CSS transforms to manipulate elements in 2D and 3D space."
        },
        {
          id: "transitions",
          title: "CSS Transitions",
          duration: "25 min",
          description: "Understand how to create smooth transitions between property changes."
        },
        {
          id: "keyframe-animations",
          title: "Keyframe Animations",
          duration: "35 min",
          description: "Master CSS keyframe animations for complex, multi-step animations."
        },
        {
          id: "performance-optimization",
          title: "Animation Performance",
          duration: "30 min",
          description: "Learn techniques to optimize animation performance with CSS."
        }
      ]
    },
    {
      id: "typescript-essentials",
      title: "TypeScript Essentials",
      instructor: "Ryan Thomas",
      description: "Learn how to use TypeScript to build more robust and maintainable JavaScript applications.",
      level: "Intermediate",
      duration: "4 weeks",
      category: "Programming",
      thumbnail: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      lessons: [
        {
          id: "typescript-intro",
          title: "Introduction to TypeScript",
          duration: "25 min",
          description: "Learn why TypeScript was created and how it enhances JavaScript development."
        },
        {
          id: "basic-types",
          title: "Basic Types",
          duration: "30 min",
          description: "Understand TypeScript's type system and basic type annotations."
        },
        {
          id: "interfaces",
          title: "Interfaces",
          duration: "20 min",
          description: "Learn how to define and use interfaces to create contracts for your code."
        },
        {
          id: "generics",
          title: "Generics",
          duration: "35 min",
          description: "Master TypeScript generics to create reusable, type-safe components."
        }
      ]
    },
    {
      id: "mobile-ux-design",
      title: "Mobile UX Design Principles",
      instructor: "Lisa Wang",
      description: "Create delightful mobile user experiences by applying fundamental UX design principles.",
      level: "Beginner",
      duration: "3 weeks",
      category: "Design",
      thumbnail: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      lessons: [
        {
          id: "mobile-design-intro",
          title: "Mobile Design Introduction",
          duration: "15 min",
          description: "Understand the unique constraints and opportunities in mobile UX design."
        },
        {
          id: "responsive-design",
          title: "Responsive Design Fundamentals",
          duration: "30 min",
          description: "Learn techniques for creating responsive layouts that work across device sizes."
        },
        {
          id: "touch-interactions",
          title: "Designing for Touch",
          duration: "25 min",
          description: "Design intuitive touch interactions for mobile interfaces."
        },
        {
          id: "usability-testing",
          title: "Mobile Usability Testing",
          duration: "35 min",
          description: "Learn methods for testing mobile UX designs with real users."
        }
      ]
    }
  ];
  