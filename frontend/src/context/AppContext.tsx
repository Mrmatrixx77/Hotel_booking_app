import { useToast } from "@/components/ui/use-toast";
import React, { useContext, useEffect, useState } from "react";


type ToastMessage = {
  message: string;
  type: "SUCCESS" | "ERROR";
};

type AppContext = {
  showToast: (toastMessage: ToastMessage) => void;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toastItems, setToastItems] = useState<ToastMessage | undefined>(undefined);
  const {toast} = useToast();
  
let variants;
if(toastItems?.type === "SUCCESS"){
  variants = "default"
}else{
  variants = "destructive"
}
console.log(toastItems)

  useEffect(()=>{
    if(toastItems != undefined){

      toast({
        variant : `${variants}`,
        description:`${toastItems?.message}`
        
      })
    }

  },[toastItems])


  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          console.log(toastMessage)
          setToastItems(toastMessage)
        },
      }}
    >
      {/* {toastItems && 
      toast({})
      
      
      } */}
      
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const  useAppContext = () => {
    const context = useContext(AppContext);
    return context as AppContext;
}