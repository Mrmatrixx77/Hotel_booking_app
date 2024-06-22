import { useToast } from "@/components/ui/use-toast";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";


type ToastMessage = {
  message: string;
  type: "SUCCESS" | "ERROR";
};

type AppContext = {
  showToast: (toastMessage: ToastMessage) => void;
  isLoggedIn:boolean;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toastItems, setToastItems] = useState<ToastMessage | undefined>(undefined);
  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  const {toast} = useToast();
  
let variants;
if(toastItems?.type === "SUCCESS"){
  variants = "default"
}else{
  variants = "destructive"
}

  useEffect(()=>{
    if(toastItems != undefined){

      toast({
        variant : `${variants}`,
        description:`${toastItems?.message}`
        
      })
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[toastItems])


  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          console.log(toastMessage)
          setToastItems(toastMessage)
        },
        isLoggedIn: !isError,
      }}
    >
      
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const  useAppContext = () => {
    const context = useContext(AppContext);
    return context as AppContext;
}