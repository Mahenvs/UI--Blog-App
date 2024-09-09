import { toast } from "@/hooks/use-toast"; 

export const displayToast = (msg: string,color: string) => {
  toast({
    description: msg,
    duration: 3000, 
    style: {
      backgroundColor: color,
      color: '#ffffff', // Text color
    },
  });
};