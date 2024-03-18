
const TextInput= ({placeholder, id} : {placeholder: string, id: string})=>{

    return(
        <input type="text" placeholder={placeholder} id={id}></input>
    )
}

export default TextInput