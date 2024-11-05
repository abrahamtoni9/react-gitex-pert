import { useState } from "react"

import { GifGrid, AddCategory } from "./components";

export const GitExpertApp = () => {
  const [ categories, setCategories ] = useState(['One Punch']);
  // console.log(categories);
  const onAddCategory = (newCategory) => 
  {

    if (categories.includes(newCategory)) return;

    console.log(newCategory);
    setCategories([newCategory, ...categories]);
  }
  return (
    <>
      <h1>GitExpertApp</h1>
      <AddCategory 
        onNewValue = { onAddCategory } 
      />
          {
            categories.map( category => <GifGrid key={category} category={category} /> )
          }
    </>
  )
}


