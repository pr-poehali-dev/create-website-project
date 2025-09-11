import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  avatar?: string;
  role: 'client' | 'admin';
  createdAt: Date;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'development' | 'testing' | 'completed' | 'on-hold';
  progress: number;
  startDate: Date;
  endDate?: Date;
  budget: number;
  spent: number;
  type: 'ai' | 'crypto' | 'consulting' | 'development';
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

interface AuthContextType {
  user: User | null;
  projects: Project[];
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Omit<User, 'id' | 'createdAt' | 'role'>) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<void>;
  createProject: (projectData: Omit<Project, 'id' | 'startDate'>) => Promise<void>;
  updateProject: (id: string, projectData: Partial<Project>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'AI Customer Support Bot',
    description: 'Custom AI chatbot for customer service automation',
    status: 'development',
    progress: 75,
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-03-15'),
    budget: 50000,
    spent: 37500,
    type: 'ai',
    priority: 'high'
  },
  {
    id: '2', 
    name: 'Secure Payment Gateway',
    description: 'Cryptographic security implementation for payment processing',
    status: 'testing',
    progress: 90,
    startDate: new Date('2024-02-01'),
    endDate: new Date('2024-04-01'),
    budget: 75000,
    spent: 67500,
    type: 'crypto',
    priority: 'urgent'
  },
  {
    id: '3',
    name: 'Data Analytics Platform',
    description: 'AI-powered business intelligence dashboard',
    status: 'planning',
    progress: 15,
    startDate: new Date('2024-03-01'),
    budget: 100000,
    spent: 15000,
    type: 'ai',
    priority: 'medium'
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock login - в реальном приложении здесь был бы API запрос
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email,
        firstName: 'John',
        lastName: 'Doe',
        company: 'TechCorp Ltd.',
        avatar: '/img/avatar-placeholder.jpg',
        role: 'client',
        createdAt: new Date('2023-01-15')
      };
      
      setUser(mockUser);
      setProjects(mockProjects);
    } catch (error) {
      throw new Error('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: Omit<User, 'id' | 'createdAt' | 'role'>) => {
    setIsLoading(true);
    try {
      // Mock registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        ...userData,
        id: Date.now().toString(),
        role: 'client',
        createdAt: new Date()
      };
      
      setUser(newUser);
      setProjects([]);
    } catch (error) {
      throw new Error('Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setProjects([]);
  };

  const updateProfile = async (userData: Partial<User>) => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      setUser({ ...user, ...userData });
    } finally {
      setIsLoading(false);
    }
  };

  const createProject = async (projectData: Omit<Project, 'id' | 'startDate'>) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const newProject: Project = {
        ...projectData,
        id: Date.now().toString(),
        startDate: new Date()
      };
      
      setProjects(prev => [...prev, newProject]);
    } finally {
      setIsLoading(false);
    }
  };

  const updateProject = async (id: string, projectData: Partial<Project>) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setProjects(prev => prev.map(project => 
        project.id === id ? { ...project, ...projectData } : project
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    projects,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    createProject,
    updateProject
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};