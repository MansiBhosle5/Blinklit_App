import React , { useEffect , useState } from 'react';
import CategoryCard from './CategoryCard';
import "./CategoryList.css";


const CategoryList = ({ searchQuery }) =>{

    const[categories,setCategories] = useState([]);
    const fetchCategories = async () => {
        try{
            fetch("http://localhost:5000/Blinkit/category")
            .then((response) => response.json())
            .then((data) => {
                console.log("data",data);
                setCategories(data);
            })
            
        } catch(error){
            console.log("error",error);
        }
    }

    useEffect(() => {
        fetchCategories();
       
    },[ ]) 

    // const filteredCategories = categories.filter((category) =>
    //     category.title.toLowerCase().includes(searchQuery.toLowerCase())
    //   );

    return(
        <>
        <div className='CategoryList-container'>
            {categories.map((category)=> (
            <CategoryCard 
             key = {category._id}
             title = {category.title}
             image = {category.image}
             id={category._id} 
             />
             ) )}
        </div> 
        </>
    )
}

export default CategoryList