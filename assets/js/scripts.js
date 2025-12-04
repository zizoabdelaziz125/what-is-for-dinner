// stored Meals
const meals = [
  //Mediterranean Quinoa Bowl
  {
    title: "Mediterranean Quinoa Bowl",
    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    image: "./assets/images/Mediterranean Quinoa Bowl.avif",
    rating: 4.5,
    reviews: 156,
    prepTime: 20,
    cookTime: 35,
    servings: "2 people",
    category: ["Easy", "Mediterranean"],
    ingredients: [
      "1 cup cooked quinoa",
      "1/2 cup cherry tomatoes",
      "1/4 cup chopped cucumber",
      "2 tbsp tahini",
    ],
    instructions: [
      "Cook quinoa according to package instructions.",
      "Chop vegetables.",
      "Mix tahini with lemon and olive oil.",
      "Assemble and serve.",
    ],
    nutrition: {
      calories: "580 kcal",
      protein: "24g",
      carbs: "68g",
      fat: "22g",
      fiber: "4g",
      sodium: "920mg",
    },
    tips: [
      "Use fresh lemon juice for the dressing.",
      "You can replace quinoa with brown rice.",
    ],
  },

  //Creamy Chicken Alfredo
  {
    title: "Creamy Chicken Alfredo",
    description: "Classic creamy pasta with grilled chicken and parmesan.",
    image: "./assets/images/Creamy Chicken Alfredo.avif",
    rating: 4.8,
    reviews: 320,
    prepTime: 15,
    cookTime: 25,
    servings: "3 people",
    category: ["Medium", "Italian"],
    ingredients: [
      "200g fettuccine pasta",
      "1 grilled chicken breast",
      "1 cup heavy cream",
      "1/2 cup parmesan cheese",
    ],
    instructions: [
      "Boil the pasta.",
      "Grill the chicken.",
      "Prepare Alfredo sauce.",
      "Mix everything together and serve.",
    ],
    nutrition: {
      calories: "720 kcal",
      protein: "36g",
      carbs: "66g",
      fat: "38g",
      fiber: "3g",
      sodium: "640mg",
    },
    tips: ["Add garlic for extra flavor.", "Use freshly grated parmesan."],
  },

  //Beef Stir Fry
  {
    title: "Beef Stir Fry",
    description: "Quick Asian-style beef stir fry with vegetables.",
    image: "./assets/images/Beef Stir Fry.jpg",
    rating: 4.6,
    reviews: 210,
    prepTime: 10,
    cookTime: 12,
    servings: "2 people",
    category: ["Easy", "Asian","Easy", "Asian"],
    ingredients: [
      "200g sliced beef",
      "1 cup mixed vegetables",
      "2 tbsp soy sauce",
      "1 tsp sesame oil",
    ],
    instructions: [
      "Stir fry beef for 3 minutes.",
      "Add vegetables.",
      "Add soy sauce and sesame oil.",
      "Cook until done.",
    ],
    nutrition: {
      calories: "450 kcal",
      protein: "30g",
      carbs: "22g",
      fat: "18g",
      fiber: "2g",
      sodium: "780mg",
    },
    tips: [
      "Freeze beef slightly before slicing for thin cuts.",
      "Use high heat for best flavor.",
    ],
  },
];

//func to load random meal
function loadRandomMeal() {
  // get meal by random number from math.
  const meal = meals[Math.floor(Math.random() * meals.length)];

  // basic info about meal.
  document.getElementById("mealImage").src = meal.image;
  document.getElementById("mealTitle").textContent = meal.title;
  document.getElementById("mealDescription").textContent = meal.description;
  document.getElementById("mealRating").textContent = meal.rating;
  document.getElementById(
    "mealReviews"
  ).textContent = `(${meal.reviews} reviews)`;

  // time to (cook, prep, serv)
  document.getElementById(
    "mealPrepTime"
  ).textContent = `(${meal.prepTime} min)`;
  document.getElementById(
    "mealCookTime"
  ).textContent = `(${meal.cookTime} min)`;

  document
    .getElementById("timeWarning")
    .classList.toggle("d-none", meal.prepTime + meal.cookTime <= 45);

  document.getElementById("mealServings").textContent = meal.servings;

  // badges
  const badgeContainer = document.getElementById("badgeContainer");
  badgeContainer.innerHTML = "";
  meal.category.forEach((cat, i) => {
    badgeContainer.innerHTML += `
            <span class="badge badge-${
              i % 2 === 0 ? "success" : "primary"
            } me-1">${cat}</span>
        `;
  });

  // ingredients
  const ingList = document.getElementById("ingredientsList");
  ingList.innerHTML = meal.ingredients
    .map(
      (ing, idx) => `
            <li class="d-flex align-items-start mb-2">
                <div class="ingredient-number">${idx + 1}</div>
                <span>${ing}</span>
            </li>
        `
    )
    .join("");

  // instructions
  const instList = document.getElementById("instructions");
  instList.innerHTML = meal.instructions
    .map(
      (step, idx) => `
            <div class="mb-3 d-flex">
                <div class="step-number">${idx + 1}</div>
                <p>${step}</p>
            </div>
        `
    )
    .join("");

  // nutritions
  document.getElementById("calories-value").textContent =
    meal.nutrition.calories;
  document.getElementById("protein-value").textContent = meal.nutrition.protein;
  document.getElementById("carbs-value").textContent = meal.nutrition.carbs;
  document.getElementById("fat-value").textContent = meal.nutrition.fat;
  document.getElementById("fiber-value").textContent = meal.nutrition.fiber;
  document.getElementById("sodium-value").textContent = meal.nutrition.sodium;

  // tips
  const tipsList = document.getElementById("tipsList");
  tipsList.innerHTML = meal.tips
    .map(
      (t) => `
            <div class="d-flex align-items-start tip-item">
                <i class="fa-solid fa-circle-check"></i>
                <p class="text-muted mb-0">${t}</p>
            </div>
        `
    )
    .join("");
}
