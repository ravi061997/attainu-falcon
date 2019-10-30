import React from 'react'

class Search extends React.Component {
    
    state={
        searchValue: "",
        meals:[]
    }
        handleSearch = () =>{
            this.makeApiCall(this.state.searchValue);
        }

        handleOnChange = event => {
            this.setState({searchValue:event.target.value})
        }

        makeApiCall = searchInput => {
            let searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}` ; 

            
            fetch(searchUrl)
            .then(response => response.json())
            .then(jsonData => this.setState({meals:jsonData.meals}))
        }

        render(){
        return(
            <div className = "container m-4" >
                
                <h1>Welcome to the meal search app</h1>

                <input type ="text" name = "text" placeholder="Search the meal" className="form-control" onChange=
                {this.handleOnChange} value={this.state.value}/><br/>
            
                <button onClick={this.handleSearch} className= "btn btn-success">Search</button>

                {this.state.meals ? ( 
                    <div id ="meals-conatiner">
                        {this.state.meals.map((meal,index) => (
                            <div className = "single-meal" key={index}>
                                <h2>{meal.strMeal}</h2>
                                <img src = {meal.strMealThumb} alt="meal-thumbnail" />
                            </div>
                        ))}
                    </div>

                ) : (
                    <p>Try someting for melas</p>
                )}
        </div>
     )
    }
} 

export default Search;
