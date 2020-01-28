import { ref } from '@vue/composition-api'

export function useRecipes() {
  const recipes = ref([])
  const current = ref(null)

  const selectRecipe = id => current.value = recipes.value.find(r => r.id === id)

  const addRecipe = recipe => recipes.value.push(recipe)

  const removeRecipe = id => {
    recipes.value = recipes.value.filter(r => r.id !== id)
    current.value = null
  }
  return { recipes, current, selectRecipe, addRecipe, removeRecipe  }
}