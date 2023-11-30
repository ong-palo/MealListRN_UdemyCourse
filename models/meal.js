class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }

  toJSON() {
    return {
      id: this.id,
      categoryIds: this.categoryIds,
      title: this.title,
      imageUrl: this.imageUrl,
      ingredients: this.ingredients,
      steps: this.steps,
      duration: this.duration,
      complexity: this.complexity,
      affordability: this.affordability,
      isGlutenFree: this.isGlutenFree,
      isVegan: this.isVegan,
      isVegetarian: this.isVegetarian,
      isLactoseFree: this.isLactoseFree
    }
  }
}

export default Meal;
