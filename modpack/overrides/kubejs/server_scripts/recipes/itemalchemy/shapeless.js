
const recipes = [
    {
        output: 'itemalchemy:high_covalence_dust',
        pattern: ['AB '],
        key: {
          A: 'botania:mana_diamond',
          B: 'botania:ender_air_bottle'
        },
        id: 'itemalchemy:high_covalence_dust'
    },
    {
        output: 'itemalchemy:middle_covalence_dust',
        pattern: ['AB '],
        key: {
            A: 'twilightforest:raw_ironwood',
            B: 'modern_industrialization:redstone_battery'
        },
        id: 'itemalchemy:middle_covalence_dust'
    },
    {
        output: 'itemalchemy:low_covalence_dust',
        pattern: ['BBB', 'BBB', 'BBA'],
        key: {
            B: 'compressor:octuple_compressed_cobblestone',
            A: 'twilightforest:raw_ironwood'
        },
        id: 'itemalchemy:low_covalence_dust'
    }
];


function recipesDust(event) {
    recipes.forEach((recipes) => {
      event.shaped(recipes.output, recipes.pattern, recipes.key).id(recipes.id);
    });
}

ServerEvents.recipes(recipesDust);