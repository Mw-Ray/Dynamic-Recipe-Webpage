const recipeObjects = [
    {
        name: "Pilau Rice",
        ingredients: [
            "2 cups basmati rice",
            "4 cups water",
            "1 onion, finely chopped",
            "2 tablespoons vegetable oil",
            "Grated ginger",
            "2 cloves garlic, minced",
            "3 teaspoons soy sauce",
            "500g beef, well cut",
            "2 chillies, chopped",
            "1 teaspoon cumin seeds",
        ],
        instructions: `
        1.Rinse the basmati rice under cold water until the water runs clear.
        2.In a large pot, heat the vegetable oil over medium heat.
        3.Add the chopped onion and sauté until golden brown.
        4.Add the minced garlic and grated ginger, cooking for another minute until fragrant.
        5.Stir in the cumin seeds and chopped chillies, cooking for an additional minute.
        6.Add the beef to the pot, cooking until browned on all sides.
        7.Pour in the water and bring to a boil. Add the soy sauce and stir well.
        8.Add the rinsed rice to the pot, stirring gently to combine.
        9.Reduce heat to low, cover, and simmer for about 15-20 minutes or until the rice is cooked and has absorbed all the liquid.
        10.Fluff the rice with a fork before serving.Serve hot, garnished with fresh coriander if desired.
        `
    },
    {
        name: "Chicken Curry",
        ingredients: [
            "500g chicken, cut into pieces",
            "2 onions, finely chopped",
            "2 tomatoes, chopped",
            "2 tablespoons vegetable oil",
            "1 tablespoon ginger-garlic paste",
            "1 teaspoon turmeric powder",
            "1 teaspoon red chili powder",
            "1 teaspoon garam masala",
            "Salt to taste",
            "Fresh coriander leaves for garnish"
        ],
        instructions: `
        1. Heat the vegetable oil in a large pot over medium heat.Add the chopped onions and sauté until golden brown.
        2. Add the ginger-garlic paste and cook for another minute until fragrant.
        3. Stir in the chopped tomatoes, turmeric powder, red chili powder, and salt.Cook until the tomatoes are soft and the oil starts to separate from the mixture.
        4. Add the chicken pieces to the pot, stirring well to coat them with the spice mixture.
        5. Cover and cook on low heat for about 20-25 minutes or until the chicken is cooked through and tender.
        6. Sprinkle garam masala over the curry, stir well, and cook for an additional 5 minutes.
        7. Garnish with fresh coriander leaves before serving.
        `
    },
    {
        name: "Vegetable Stir-fry",
        ingredients: [
            "2 cups mixed vegetables (carrots, bell peppers, broccoli)",
            "2 tablespoons vegetable oil",
            "2 cloves garlic, minced",
            "1 tablespoon soy sauce",
            "Salt and pepper to taste",
            "Sesame seeds for garnish"
        ],
        instructions: `
        1. Heat the vegetable oil in a large skillet or wok over medium-high heat.
        2. Add the minced garlic and sauté for about 30 seconds until fragrant.
        3. Add the mixed vegetables to the skillet, stirring frequently for about 5-7 minutes 
        until they are tender-crisp.
        4. Pour in the soy sauce, seasoning with salt and pepper to taste.
        5. Cook for an additional 2 minutes, stirring well to combine all ingredients.
        6. Garnish with sesame seeds before serving.
        
        `
    },
    {
        name: "Fruit Salad",
        ingredients: [
            "2 apples, diced",
            "2 bananas, sliced",
            "1 cup grapes, halved",
            "1 orange, segmented",
            "1 tablespoon honey",
            "Juice of 1 lemon"
        ],
        instructions: `
        1. In a large bowl, combine the diced apples, sliced bananas, halved grapes, and orange segments.
        2. Drizzle honey over the fruit and squeeze lemon juice on top.
        3. Gently toss the fruit salad to combine all ingredients evenly.
        4. Serve chilled or at room temperature.       
        `    
            
    },
    {
        name: "Chocolate Cake",
        ingredients: [
            "1 cup all-purpose flour",
            "1/2 cup cocoa powder",
            "1 cup sugar",
            "1/2 cup butter, softened",
            "2 eggs",
            "1 teaspoon vanilla extract",
            "1 teaspoon baking powder",
            "1/2 teaspoon salt",
            "1/2 cup milk"
        ],
        instructions : `
1. Preheat the oven to 350°F (175°C). Grease and flour a cake pan.
2. In a mixing bowl, cream together the softened butter and sugar until light and fluffy.
3. Add the eggs one at a time, beating well after each addition. Stir in the vanilla extract.
4. In another bowl, sift together the flour, cocoa powder, baking powder, and salt.
5. Gradually add the dry ingredients to the wet mixture , alternating with the milk, until well combined.
6. Pour the batter into the prepared cake pan and smooth the top.
7. Bake for 30-35 minutes or until a toothpick inserted in the center comes out clean.
8. Let it cool before serving.`
    }   
];

console.log("INside")
const recipeContainer = document.getElementById('recipe-container');

// iterate/loop thru recipes
let length = recipeObjects.length;
console.log("Length: "+length)
for (let i = 0; i < length; i++) {
    console.log("Recipe number "+ i + " : "+recipeObjects[i].name)
}
console.log("outside")

function displayRecipes() {
    const recipeContainer = document.getElementById('recipe-container');
    recipeObjects.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        const recipeName = document.createElement("h2");
        recipeName.textContent = recipe.name;
        recipeCard.appendChild(recipeName);
        
        const ingredientsTitle = document.createElement("h3");
        ingredientsTitle.textContent = "Ingredients:";
        recipeCard.appendChild(ingredientsTitle);

        const ingredientsList = document.createElement("li");
        recipe.ingredients.forEach(ingredient => {
            const listItem = document.createElement("ul");
            listItem.textContent = ingredient;
            ingredientsList.appendChild(listItem);
        });
        recipeCard.appendChild(ingredientsList);

        const instructionsTitle = document.createElement("h3");
        instructionsTitle.textContent = "Instructions:";
        recipeCard.appendChild(instructionsTitle);

        const instructions = document.createElement("div");
        instructions.classList.add("instructions");
       
        const instructionsSteps = recipe.instructions.split('\n');
        const  firstThreeSteps = instructionsSteps.slice(0,3).join('\n');
        const remainingSteps = instructionsSteps.slice(3).join('\n');

        instructions.innerHTML = firstThreeSteps.replace(/\n/g, '<br>');

        if(remainingSteps.trim().length > 0) {
            const hiddenContent = document.createElement("div");
            hiddenContent.classList.add("hidden-content");
            hiddenContent.innerHTML = remainingSteps.replace(/\n/g, "<br>");
            instructions.appendChild(hiddenContent);
            

            const readMoreBtn = document.createElement("button");
            readMoreBtn.classList.add("read-more-btn");
            readMoreBtn.textContent = "Read More";

            readMoreBtn.addEventListener('click', () => {
                if (hiddenContent.classList.contains('hidden-content')) {
                    hiddenContent.classList.remove('hidden-content');
                    readMoreBtn.textContent = "Show Less";
                } else {
                    hiddenContent.classList.add('hidden-content');
                    readMoreBtn.textContent = "Read More";
                }
            });
            
            recipeCard.appendChild(instructions);
            recipeCard.appendChild(readMoreBtn);
        } else {
            recipeCard.appendChild(instructions);
        }

        recipeContainer.appendChild(recipeCard);
    });   
}
document.addEventListener("DOMContentLoaded", displayRecipes);

//v2.2
// function displayRecipes() {
//             const recipeContainer = document.getElementById('recipe-container');
            
//             recipeObjects.forEach(recipe => {
//                 const recipeCard = document.createElement("div");
//                 recipeCard.classList.add("recipe-card");

//                 // Recipe name
//                 const recipeName = document.createElement("h2");
//                 recipeName.textContent = recipe.name;
//                 recipeCard.appendChild(recipeName);

//                 // Ingredients section
//                 const ingredientsTitle = document.createElement("h3");
//                 ingredientsTitle.textContent = "Ingredients:";
//                 recipeCard.appendChild(ingredientsTitle);

//                 const ingredientsList = document.createElement("ul");
//                 recipe.ingredients.forEach(ingredient => {
//                     const listItem = document.createElement("li");
//                     listItem.textContent = ingredient;
//                     ingredientsList.appendChild(listItem);
//                 });
//                 recipeCard.appendChild(ingredientsList);

//                 // Instructions section
//                 const instructionsTitle = document.createElement("h3");
//                 instructionsTitle.textContent = "Instructions:";
//                 recipeCard.appendChild(instructionsTitle);

//                 const instructions = document.createElement("div");
//                 instructions.classList.add("instructions");
                
//                 // Split instructions for read more functionality
//                 const instructionSteps = recipe.instructions.split('\n');
//                 const firstThreeSteps = instructionSteps.slice(0, 3).join('\n');
//                 const remainingSteps = instructionSteps.slice(3).join('\n');

//                 instructions.innerHTML = firstThreeSteps.replace(/\n/g, '<br>');
                
//                 if (remainingSteps.trim().length > 0) {
//                     const hiddenContent = document.createElement('div');
//                     hiddenContent.classList.add('hidden-content');
//                     hiddenContent.innerHTML = remainingSteps.replace(/\n/g, '<br>');
//                     instructions.appendChild(hiddenContent);

//                     const readMoreBtn = document.createElement('button');
//                     readMoreBtn.classList.add('read-more-btn');
//                     readMoreBtn.textContent = 'Read More';
                    
//                     readMoreBtn.addEventListener('click', () => {
//                         if (hiddenContent.classList.contains('hidden-content')) {
//                             hiddenContent.classList.remove('hidden-content');
//                             readMoreBtn.textContent = 'Show Less';
//                         } else {
//                             hiddenContent.classList.add('hidden-content');
//                             readMoreBtn.textContent = 'Read More';
//                         }
//                     });
                    
//                     recipeCard.appendChild(instructions);
//                     recipeCard.appendChild(readMoreBtn);
//                 } else {
//                     recipeCard.appendChild(instructions);
//                 }

//                 recipeContainer.appendChild(recipeCard);
//             });
//         }

//         document.addEventListener("DOMContentLoaded", displayRecipes);


//       const instructionsSection = document.createElement("div");
//         instructionsSection.innerHTML = "<h3.Instructions:</h3>";
        
    //     const initialLength = 100;
    //     let fullInstructions = recipe.instructions;
    //     let displayInstructions  = fullInstructions;
    //     let hasMore = false;

    //     if (fullInstructions.length > initialLength) {
    //         displayInstructions = fullInstructions.substring(0, initialLength) + "";
    //         hasMore = true;
    //     }

    //     const instructionsText = document.createElement("p");
    //     instructionsText.textContent = displayInstructions;
    //     instructionsSection.appendChild(instructionsText);

    //     if(hasMore) {
    //         const readMoreBtn = document.createElement("button");
    //         readMoreBtn.textContent = "Read More";
    //         readMoreBtn.classList.add("read-more-btn");

    //         readMoreBtn.addEventListener("click", () => {
    //             if(instructionsText.textContent === displayInstructions) {
    //                 instructionsText.textContent = fullInstructions;
    //                 readMoreBtn.textContent = "Show Less";
    //             } else {
    //                 instructionsText.textContent = displayInstructions;
    //                 readMoreBtn.textContent = "Read More";
    //             }
                
    //         });
    //         instructionsSection.appendChild(readMoreBtn);
    //     }

    //     recipeCard.appendChild(instructionsSection);       
    //     recipeContainer.appendChild(recipeCard);

    // });




// function createRecipeCard(myRecipe) {
//     const recipeCard = document.createElement('div');
//     recipeCard.classList.add('recipe-card');

//     const title = document.createElement('h2');
//     title.textContent = myRecipe.name;
//     recipeCard.appendChild(title);
// }    

// const ingredientsSection = document.createElement('div');
// ingredientsSection.classList.add('ingredients');
// ingredientsSection.innerHTML = '<h3>Ingredients:</h3>';

// const ingredientsList = document.createElement("ul");
// myRecipe.ingredients.forEach(ingredients => {
//     const listItem = document.createElement("li");
//     listItem.textContent = ingredient;
//     ingredientsList.appendChild(ListItem);
// })
// const instructionsSection = document.createElement('div');
// instructionsSection.classList.add('instructions');

// const instrucionsSection = document.createElement('div');
// instructionsSection.classList.add('instructions');

// const initialInstructions = recipe.instructions.split('</p>')[0] + '</p>';
// const remainingInstructions = recipe.instructions.substring(initialInstructions.length);

// instructionsSection.innerHTML = '<h3>Instructions:</h3>' + initialInstructions;

//     if (remainingInstructions.trim().length > 0) {
//         const hiddenContent = document.createElement('div');
//         hiddenContent.classList.add('read-more-btn');
//         readMoreBtn.textContent = 'Read More';
//         readMoreBtn.addEventListener('click', () => {
//             hiddenContent.classListcontains('hidden-content');
//             if (hiddenContent.classList.contains('hidden-content')) {
//                 readMoreBtn.textContent = 'Read More';
//             } else {
//                 readMoreBtn.textContent = 'Show Less';
//             }

//         });
//         recipeCard.appendChild(readMoreBtn);
//     }
//     recipeCard.appendChild(instructionsSection);
    

// function renderRecipes() {
//     recipes.forEach(recipe => {
//         const card = createRecipeCard(recipe);
//         recipeContainer.appendChild(card);
//     });
// }

     //read more btn functionality
    //     const initialInstructions = recipe.instructions.split('</p>')[0] + '</p>';
    //     const remainingInstructions = recipe.instructions.substring(initialInstructions.length);

    //     instructionsSection.innerHTML = '<h3>Instructions:</h3>' + initialInstructions;

    //     if (remainingInstructions.trim().length > 0) {
    //     const hiddenContent = document.createElement('div');
    //     hiddenContent.classList.add('read-more-btn');
    //     readMoreBtn.textContent = 'Read More';
    //     readMoreBtn.addEventListener('click', () => {
    //         hiddenContent.classListcontains('hidden-content');
    //         if (hiddenContent.classList.contains('hidden-content')) {
    //             readMoreBtn.textContent = 'Read More';
    //         } else {
    //             readMoreBtn.textContent = 'Show Less';
    //         }

    //     });
    //     recipeCard.appendChild(readMoreBtn);
    //     }
       
    // });
