import { useEffect, useState } from 'react';

const useCustom = () => {
    const [check, setCheck] = useState('check in');
    const [bgcolor, setbgcolor] = useState('success');
  
    const handleCheck = () =>{

    
        if (check =='check in' ){
          setCheck('check out')
          setbgcolor('danger')
    
            }
        if (check =='check out' ){
          setCheck('attandance marked already')
          setbgcolor('success')
    
            }
      }
  
    return {
        check,
     handleCheck
    };
  };
  
  export default useCustom;
  