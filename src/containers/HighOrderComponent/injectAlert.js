import React,{useState,useEffect} from 'react'
import AlertMsg from '../../components/common/AlertMsg/alertMsg';

const InjectAlert =()=>(WrappedComponent)=>function InjectAlert(props){

    // const {message} = props;
    const [messageContent,setMessageContent] = useState({}); 
    const despace = (str) => str.replace(/ /g, '');

    const triggerAlert=(alertType='error',message='')=>{
        const newKey = despace(message);
        console.log(newKey,"newKey")
        setMessageContent((updatedMsg)=>({...updatedMsg,[newKey]: {alertType,message}}))
    }
useEffect(()=>{
     if(typeof window !== 'undefined'){
         window.triggerAlert = triggerAlert;
     }
},[])


return(
    <>        {Object.keys(messageContent).map((key, index) => (

     <AlertMsg message={messageContent[key].message} variant={messageContent[key].alertType} openAlert={messageContent[key]} duration={2000}/>
    ))}
     <WrappedComponent {...props}/>
    </>
)

}
 


export default InjectAlert
