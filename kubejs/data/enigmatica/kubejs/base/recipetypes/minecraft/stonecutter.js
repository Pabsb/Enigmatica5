events.listen('recipes', function (event) {
    vanillaWoodTypes.forEach(function (woodType) {
        event.recipes.minecraft.stonecutting(
            item.of('carpetstairsmod:' + woodType + '_wood_floor', 6),
            'minecraft:' + woodType + '_planks'
        );
        event.recipes.minecraft.stonecutting(
            item.of('carpetstairsmod:' + woodType + '_wood_floor', 24),
            '#minecraft:' + woodType + '_logs'
        );
    });

    // Conversion between different storage_blocks of the same material
    materialsToUnify.forEach(function (material) {
        var storage_block_tag = ingredient.of('#forge:storage_blocks/' + material);
        if (storage_block_tag.stacks.size() > 1) {
            storage_block_tag.stacks.forEach(function (storage_block) {
                event.recipes.minecraft.stonecutting({
                    ingredient: {
                        tag: 'forge:storage_blocks/' + material
                    },
                    result: storage_block.id,
                    count: 1
                });
            });
        }
    });
});
