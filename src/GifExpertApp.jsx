import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpertapp=()=>{



    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory=(newCategory)=>{
        // console.log(newCategory);
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);


    }
    return(
        <>
            <h1>GifExpertApp</h1>



            <AddCategory 
            onNewCategory={(value)=> onAddCategory(value)}


            />


            
                {
                categories.map( category=>{
                    return (
                    <GifGrid 
                    key={category}
                     category={category}/>
                    )
                })}

        
        
        
        </>



    );
};