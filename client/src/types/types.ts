export type typeColor = "primary-color" | "primary-color-light" | "secondary-color-light" | "secondary-color";
export interface TypeUser {  
    user: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: number;
    role: { name: string };
  }