import { useState } from "react"

export const AddCategory = ( { onNewValue } ) => 
{
    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (e) => 
    {
        // console.log(e.target.value);
        setInputValue(e.target.value); 
    }

    const onSubmit = (e) => 
    {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;

        // setCategories( [inputValue, ...categories] );
        onNewValue(inputValue.trim());

        setInputValue('');
    }
    
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs" 
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}
 
