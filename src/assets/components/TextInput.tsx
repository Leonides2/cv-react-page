import { ChangeEvent } from "react"


const TextInput= ({placeholder, handleInputChange, value} : {placeholder: string, handleInputChange: (e: ChangeEvent<HTMLInputElement>)=>void, value: any})=>{


    return(
        <input type="text" placeholder={placeholder} 
         onChange={handleInputChange} value={value}></input>
    )
}

export default TextInput