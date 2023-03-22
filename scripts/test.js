function buscar() {

    var input = document.getElementById("input").value.toLowerCase();

    var mensaje = document.getElementById("mensaje");

    var command = document.querySelector("#command");
    var a = command.value;
    var selectedOption = command.options[command.selectedIndex].value;

    switch (input) {

        case "acacia_button":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            }
            break;

        case "acacia_door":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            }
            break;

        case "acacia_fence_gate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            }
            break;

        case "acacia_hanging_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            }
            break;

        case "acacia_pressure_plate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "acacia_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "acacia_standing_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "ground_sign_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "ground_sign_direction" : 0 ]';
            }
            break;

        case "acacia_trapdoor":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            }
            break;

        case "acacia_wall_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "activator_rail":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "rail_data_bit" : false , "rail_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "rail_data_bit" : false , "rail_direction" : 0 ]';
            }
            break;

        case "air":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "allow":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "amethyst_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "amethyst_cluster":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "ancient_debris":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "andesite_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "anvil":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "damage" : "broken" , "direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "damage" : "broken" , "direction" : 0 ]';
            }
            break;

        case "azalea":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "azalea_leaves":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "persistent_bit" : false , "update_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "persistent_bit" : false , "update_bit" : false ]';
            }
            break;

        case "azalea_leaves_flowered":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "persistent_bit" : false , "update_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "persistent_bit" : false , "update_bit" : false ]';
            }
            break;

        case "bamboo":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "age_bit" : false , "bamboo_leaf_size" : "no_leaves" , "bamboo_stalk_thickness" : "thick" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "age_bit" : false , "bamboo_leaf_size" : "no_leaves" , "bamboo_stalk_thickness" : "thick" ]';
            }
            break;

        case "bamboo_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "bamboo_button":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            }
            break;

        case "bamboo_door":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            }
            break;

        case "bamboo_double_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "bamboo_fence":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "bamboo_fence_gate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            }
            break;

        case "bamboo_hanging_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            }
            break;

        case "bamboo_mosaic":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "bamboo_mosaic_double_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "bamboo_mosaic_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "bamboo_mosaic_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "bamboo_planks":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "bamboo_pressure_plate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "bamboo_sapling":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "age_bit" : false , "sapling_type" : "acacia" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "age_bit" : false , "sapling_type" : "acacia" ]';
            }
            break;

        case "bamboo_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "bamboo_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "bamboo_standing_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "ground_sign_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "ground_sign_direction" : 0 ]';
            }
            break;

        case "bamboo_trapdoor":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            }
            break;

        case "bamboo_wall_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "barrel":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 , "open_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 , "open_bit" : false ]';
            }
            break;

        case "barrier":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "basalt":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "beacon":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "bed":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "head_piece_bit" : false , "occupied_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "head_piece_bit" : false , "occupied_bit" : false ]';
            }
            break;

        case "bedrock":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "infiniburn_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "infiniburn_bit" : false ]';
            }
            break;

        case "bee_nest":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "honey_level" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "honey_level" : 0 ]';
            }
            break;

        case "beehive":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "honey_level" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "honey_level" : 0 ]';
            }
            break;

        case "beetroot":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "growth" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "growth" : 0 ]';
            }
            break;

        case "bell":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "attachment" : "hanging" , "direction" : 0 , "toggle_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "attachment" : "hanging" , "direction" : 0 , "toggle_bit" : false ]';
            }
            break;

        case "big_dripleaf":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "big_dripleaf_head" : false , "big_dripleaf_tilt" : "full_tilt" , "direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "big_dripleaf_head" : false , "big_dripleaf_tilt" : "full_tilt" , "direction" : 0 ]';
            }
            break;

        case "birch_button":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            }
            break;

        case "birch_door":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            }
            break;

        case "birch_fence_gate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            }
            break;

        case "birch_hanging_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            }
            break;

        case "birch_pressure_plate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "birch_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "birch_standing_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "ground_sign_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "ground_sign_direction" : 0 ]';
            }
            break;

        case "birch_trapdoor":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            }
            break;

        case "birch_wall_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "black_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "black_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "black_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "black_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "blackstone":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "blackstone_double_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "blackstone_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "blackstone_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "blackstone_wall":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            }
            break;

        case "blast_furnace":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "blue_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "blue_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "blue_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "blue_ice":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "blue_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "bone_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "deprecated" : 0 , "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "deprecated" : 0 , "pillar_axis" : "x" ]';
            }
            break;

        case "bookshelf":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "border_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            }
            break;

        case "brewing_stand":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "brewing_stand_slot_a_bit" : false , "brewing_stand_slot_b_bit" : false , "brewing_stand_slot_c_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "brewing_stand_slot_a_bit" : false , "brewing_stand_slot_b_bit" : false , "brewing_stand_slot_c_bit" : false ]';
            }
            break;

        case "brick_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "brick_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "brown_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "brown_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "brown_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "brown_mushroom":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "brown_mushroom_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "huge_mushroom_bits" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "huge_mushroom_bits" : 0 ]';
            }
            break;

        case "brown_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "bubble_column":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "drag_down" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "drag_down" : false ]';
            }
            break;

        case "budding_amethyst":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "cactus":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "age" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "age" : 0 ]';
            }
            break;

        case "cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "bite_counter" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "bite_counter" : 0 ]';
            }
            break;

        case "calcite":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "camera":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "campfire":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "extinguished" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "extinguished" : false ]';
            }
            break;

        case "candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "carpet":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "color" : "black" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "color" : "black" ]';
            }
            break;

        case "carrots":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "growth" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "growth" : 0 ]';
            }
            break;

        case "cartography_table":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "carved_pumpkin":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 ]';
            }
            break;

        case "cauldron":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "cauldron_liquid" : "lava" , "fill_level" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "cauldron_liquid" : "lava" , "fill_level" : 0 ]';
            }
            break;

        case "cave_vines":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "growing_plant_age" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "growing_plant_age" : 0 ]';
            }
            break;

        case "cave_vines_body_with_berries":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "growing_plant_age" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "growing_plant_age" : 0 ]';
            }
            break;

        case "cave_vines_head_with_berries":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "growing_plant_age" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "growing_plant_age" : 0 ]';
            }
            break;

        case "chain":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "chain_command_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "conditional_bit" : false , "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "conditional_bit" : false , "facing_direction" : 0 ]';
            }
            break;

        case "chemical_heat":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "chemistry_table":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "chemistry_table_type" : "compound_creator" , "direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "chemistry_table_type" : "compound_creator" , "direction" : 0 ]';
            }
            break;

        case "chest":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "chiseled_bookshelf":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "books_stored" : 0 , "direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "books_stored" : 0 , "direction" : 0 ]';
            }
            break;

        case "chiseled_deepslate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "chiseled_nether_bricks":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "chiseled_polished_blackstone":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "chorus_flower":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "age" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "age" : 0 ]';
            }
            break;

        case "chorus_plant":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "clay":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "client_request_placeholder_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "coal_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "coal_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "cobbled_deepslate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "cobbled_deepslate_double_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "cobbled_deepslate_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "cobbled_deepslate_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "cobbled_deepslate_wall":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            }
            break;

        case "cobblestone":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "cobblestone_wall":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "wall_block_type" : "andesite" , "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "wall_block_type" : "andesite" , "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            }
            break;

        case "cocoa":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "age" : 0 , "direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "age" : 0 , "direction" : 0 ]';
            }
            break;

        case "colored_torch_bp":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "colored_torch_rg":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "command_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "conditional_bit" : false , "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "conditional_bit" : false , "facing_direction" : 0 ]';
            }
            break;

        case "composter":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "composter_fill_level" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "composter_fill_level" : 0 ]';
            }
            break;

        case "concrete":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "color" : "black" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "color" : "black" ]';
            }
            break;

        case "concrete_powder":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "color" : "black" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "color" : "black" ]';
            }
            break;

        case "conduit":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "copper_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "copper_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "coral":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "coral_color" : "blue" , "dead_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "coral_color" : "blue" , "dead_bit" : false ]';
            }
            break;

        case "coral_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "coral_color" : "blue" , "dead_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "coral_color" : "blue" , "dead_bit" : false ]';
            }
            break;

        case "coral_fan":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "coral_color" : "blue" , "coral_fan_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "coral_color" : "blue" , "coral_fan_direction" : 0 ]';
            }
            break;

        case "coral_fan_dead":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "coral_color" : "blue" , "coral_fan_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "coral_color" : "blue" , "coral_fan_direction" : 0 ]';
            }
            break;

        case "coral_fan_hang":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "coral_direction" : 0 , "coral_hang_type_bit" : false , "dead_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "coral_direction" : 0 , "coral_hang_type_bit" : false , "dead_bit" : false ]';
            }
            break;

        case "coral_fan_hang2":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "coral_direction" : 0 , "coral_hang_type_bit" : false , "dead_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "coral_direction" : 0 , "coral_hang_type_bit" : false , "dead_bit" : false ]';
            }
            break;

        case "coral_fan_hang3":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "coral_direction" : 0 , "coral_hang_type_bit" : false , "dead_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "coral_direction" : 0 , "coral_hang_type_bit" : false , "dead_bit" : false ]';
            }
            break;

        case "cracked_deepslate_bricks":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "cracked_deepslate_tiles":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "cracked_nether_bricks":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "cracked_polished_blackstone_bricks":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "crafting_table":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "crimson_button":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            }
            break;

        case "crimson_door":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            }
            break;

        case "crimson_double_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "crimson_fence":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "crimson_fence_gate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            }
            break;

        case "crimson_fungus":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "crimson_hanging_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            }
            break;

        case "crimson_hyphae":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "crimson_nylium":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "crimson_planks":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "crimson_pressure_plate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "crimson_roots":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "crimson_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "crimson_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "crimson_standing_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "ground_sign_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "ground_sign_direction" : 0 ]';
            }
            break;

        case "crimson_stem":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "crimson_trapdoor":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            }
            break;

        case "crimson_wall_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "crying_obsidian":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "cut_copper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "cut_copper_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "cyan_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "cyan_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "cyan_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "cyan_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "dark_oak_button":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            }
            break;

        case "dark_oak_door":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            }
            break;

        case "dark_oak_fence_gate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            }
            break;

        case "dark_oak_hanging_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            }
            break;

        case "dark_oak_pressure_plate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "dark_oak_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "dark_oak_trapdoor":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            }
            break;

        case "dark_prismarine_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "darkoak_standing_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "ground_sign_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "ground_sign_direction" : 0 ]';
            }
            break;

        case "darkoak_wall_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "daylight_detector":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "daylight_detector_inverted":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "deadbush":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "decorated_pot":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 ]';
            }
            break;

        case "deepslate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "deepslate_brick_double_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "deepslate_brick_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "deepslate_brick_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "deepslate_brick_wall":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            }
            break;

        case "deepslate_bricks":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "deepslate_coal_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "deepslate_copper_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "deepslate_diamond_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "deepslate_emerald_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "deepslate_gold_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "deepslate_iron_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "deepslate_lapis_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "deepslate_redstone_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "deepslate_tile_double_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "deepslate_tile_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "deepslate_tile_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "deepslate_tile_wall":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            }
            break;

        case "deepslate_tiles":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "deny":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "detector_rail":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "rail_data_bit" : false , "rail_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "rail_data_bit" : false , "rail_direction" : 0 ]';
            }
            break;

        case "diamond_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "diamond_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "diorite_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "dirt":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "dirt_type" : "coarse" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "dirt_type" : "coarse" ]';
            }
            break;

        case "dirt_with_roots":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "dispenser":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 , "triggered_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 , "triggered_bit" : false ]';
            }
            break;

        case "double_cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "double_plant":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "double_plant_type" : "fern" , "upper_block_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "double_plant_type" : "fern" , "upper_block_bit" : false ]';
            }
            break;

        case "double_stone_block_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "stone_slab_type" : "brick" , "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "stone_slab_type" : "brick" , "top_slot_bit" : false ]';
            }
            break;

        case "double_stone_block_slab2":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "stone_slab_type_2" : "mossy_cobblestone" , "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "stone_slab_type_2" : "mossy_cobblestone" , "top_slot_bit" : false ]';
            }
            break;

        case "double_stone_block_slab3":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "stone_slab_type_3" : "andesite" , "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "stone_slab_type_3" : "andesite" , "top_slot_bit" : false ]';
            }
            break;

        case "double_stone_block_slab4":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "stone_slab_type_4" : "cut_red_sandstone" , "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "stone_slab_type_4" : "cut_red_sandstone" , "top_slot_bit" : false ]';
            }
            break;

        case "double_wooden_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false , "wood_type" : "acacia" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false , "wood_type" : "acacia" ]';
            }
            break;

        case "dragon_egg":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "dried_kelp_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "dripstone_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "dropper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 , "triggered_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 , "triggered_bit" : false ]';
            }
            break;

        case "element_0":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_1":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_10":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_100":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_101":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_102":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_103":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_104":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_105":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_106":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_107":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_108":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_109":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_11":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_110":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_111":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_112":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_113":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_114":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_115":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_116":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_117":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_118":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_12":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_13":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_14":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_15":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_16":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_17":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_18":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_19":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_2":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_20":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_21":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_22":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_23":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_24":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_25":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_26":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_27":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_28":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_29":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_3":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_30":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_31":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_32":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_33":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_34":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_35":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_36":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_37":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_38":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_39":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_4":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_40":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_41":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_42":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_43":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_44":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_45":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_46":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_47":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_48":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_49":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_5":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_50":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_51":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_52":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_53":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_54":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_55":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_56":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_57":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_58":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_59":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_6":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_60":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_61":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_62":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_63":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_64":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_65":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_66":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_67":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_68":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_69":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_7":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_70":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_71":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_72":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_73":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_74":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_75":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_76":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_77":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_78":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_79":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_8":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_80":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_81":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_82":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_83":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_84":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_85":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_86":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_87":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_88":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_89":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_9":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_90":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_91":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_92":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_93":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_94":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_95":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_96":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_97":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_98":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "element_99":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "emerald_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "emerald_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "enchanting_table":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "end_brick_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ] ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ] ';
            }
            break;

        case "end_bricks":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "end_gateway":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "end_portal":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "end_portal_frame":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "end_portal_eye_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "end_portal_eye_bit" : false ]';
            }
            break;

        case "end_rod":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "end_stone":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "ender_chest":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "exposed_copper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "exposed_cut_copper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "exposed_cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "exposed_cut_copper_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "exposed_double_cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "farmland":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "moisturized_amount" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "moisturized_amount" : 0 ]';
            }
            break;

        case "fence":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "wood_type" : "oak" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "wood_type" : "oak" ]';
            }
            break;

        case "fence_gate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "direction" : 0 ] ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "direction" : 0 ] ';
            }
            break;

        case "fire":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "age" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "age" : 0 ]';
            }
            break;

        case "fletching_table":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "flower_pot":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "update_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "update_bit" : false ]';
            }
            break;

        case "flowering_azalea":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "flowing_lava":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "liquid_depth" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "liquid_depth" : 0 ]';
            }
            break;

        case "flowing_water":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "liquid_depth" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "liquid_depth" : 0 ]';
            }
            break;

        case "frame":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 , "item_frame_map_bit" : false , "item_frame_photo_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 , "item_frame_map_bit" : false , "item_frame_photo_bit" : false ]';
            }
            break;

        case "frog_spawn":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "frosted_ice":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "age" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "age" : 0 ]';
            }
            break;

        case "furnace":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "gilded_blackstone":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "glass":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "glass_pane":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "glow_frame":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 , "item_frame_map_bit" : false , "item_frame_photo_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 , "item_frame_map_bit" : false , "item_frame_photo_bit" : false ]';
            }
            break;

        case "glow_lichen":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "multi_face_direction_bits" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "multi_face_direction_bits" : 0 ]';
            }
            break;

        case "glowingobsidian":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "glowstone":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "gold_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "gold_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "golden_rail":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "rail_data_bit" : false , "rail_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "rail_data_bit" : false , "rail_direction" : 0 ]';
            }
            break;

        case "granite_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "grass":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "grass_path":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "gravel":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "gray_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "gray_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "gray_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "gray_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "green_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "green_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "green_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "green_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "grindstone":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "attachment" : "hanging" , "direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "attachment" : "hanging" , "direction" : 0 ]';
            }
            break;

        case "hanging_roots":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "hard_glass":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "hard_glass_pane":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "hard_stained_glass":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "hard_stained_glass_pane":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "hardened_clay":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "hay_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "deprecated" : 0 , "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "deprecated" : 0 , "pillar_axis" : "x" ]';
            }
            break;

        case "heavy_weighted_pressure_plate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "honey_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "honeycomb_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "hopper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 , "toggle_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 , "toggle_bit" : false ]';
            }
            break;

        case "ice":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "infested_deepslate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "info_update":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "info_update2":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "invisible_bedrock":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "iron_bars":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "iron_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "iron_door":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            }
            break;

        case "iron_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "iron_trapdoor":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            }
            break;

        case "jigsaw":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "jukebox":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "jungle_button":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            }
            break;

        case "jungle_door":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            }
            break;

        case "jungle_fence_gate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            }
            break;

        case "jungle_hanging_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            }
            break;

        case "jungle_pressure_plate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "jungle_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "jungle_standing_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "ground_sign_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "ground_sign_direction" : 0 ]';
            }
            break;

        case "jungle_trapdoor":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            }
            break;

        case "jungle_wall_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "kelp":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "kelp_age" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "kelp_age" : 0 ]';
            }
            break;

        case "ladder":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "lantern":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "hanging" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "hanging" : false ]';
            }
            break;

        case "lapis_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "lapis_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "large_amethyst_bud":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "lava":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "liquid_depth" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "liquid_depth" : 0 ]';
            }
            break;

        case "lava_cauldron":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "cauldron_liquid" : "lava" , "fill_level" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "cauldron_liquid" : "lava" , "fill_level" : 0 ]';
            }
            break;

        case "leaves":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "old_leaf_type" : "birch" , "persistent_bit" : false , "update_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "old_leaf_type" : "birch" , "persistent_bit" : false , "update_bit" : false ]';
            }
            break;

        case "leaves2":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "new_leaf_type" : "acacia" , "persistent_bit" : false , "update_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "new_leaf_type" : "acacia" , "persistent_bit" : false , "update_bit" : false ]';
            }
            break;

        case "lectern":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "powered_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "powered_bit" : false ]';
            }
            break;

        case "lever":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lever_direction" : "down_east_west" , "open_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lever_direction" : "down_east_west" , "open_bit" : false ]';
            }
            break;

        case "light_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "block_light_level" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "block_light_level" : 0 ]';
            }
            break;

        case "light_blue_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "light_blue_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "light_blue_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "light_blue_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "light_gray_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "light_gray_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "light_gray_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "light_weighted_pressure_plate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "lightning_rod":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "lime_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "lime_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "lime_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "lime_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "lit_blast_furnace":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "lit_deepslate_redstone_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "lit_furnace":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "lit_pumpkin":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 ]';
            }
            break;

        case "lit_redstone_lamp":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "lit_redstone_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "lit_smoker":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "lodestone":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "log":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "old_log_type" : "oak" , "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "old_log_type" : "oak" , "pillar_axis" : "x" ]';
            }
            break;

        case "log2":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "new_log_type" : "acacia" , "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "new_log_type" : "acacia" , "pillar_axis" : "x" ]';
            }
            break;

        case "loom":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 ]';
            }
            break;

        case "magenta_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "magenta_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "magenta_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "magenta_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "magma":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "mangrove_button":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            }
            break;

        case "mangrove_door":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            }
            break;

        case "mangrove_double_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "mangrove_fence":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "mangrove_fence_gate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            }
            break;

        case "mangrove_hanging_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            }
            break;

        case "mangrove_leaves":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "persistent_bit" : false , "update_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "persistent_bit" : false , "update_bit" : false ]';
            }
            break;

        case "mangrove_log":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "mangrove_planks":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "mangrove_pressure_plate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "mangrove_propagule":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "hanging" : false , "propagule_stage" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "hanging" : false , "propagule_stage" : 0 ]';
            }
            break;

        case "mangrove_roots":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "mangrove_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "mangrove_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "mangrove_standing_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "ground_sign_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "ground_sign_direction" : 0 ]';
            }
            break;

        case "mangrove_trapdoor":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            }
            break;

        case "mangrove_wall_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "mangrove_wood":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" , "stripped_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" , "stripped_bit" : false ]';
            }
            break;

        case "medium_amethyst_bud":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "melon_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "melon_stem":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 , "growth" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 , "growth" : 0 ]';
            }
            break;

        case "mob_spawner":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "monster_egg":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "monster_egg_stone_type" : "chiseled_stone_brick" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "monster_egg_stone_type" : "chiseled_stone_brick" ]';
            }
            break;

        case "moss_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "moss_carpet":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "mossy_cobblestone":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "mossy_cobblestone_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "mossy_stone_brick_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "moving_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "mud":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "mud_brick_double_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "mud_brick_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "mud_brick_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "mud_brick_wall":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            }
            break;

        case "mud_bricks":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "muddy_mangrove_roots":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "mycelium":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "nether_brick":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "nether_brick_fence":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "nether_brick_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "nether_gold_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "nether_sprouts":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "nether_wart":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "age" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "age" : 0 ]';
            }
            break;

        case "nether_wart_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "netherite_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "netherrack":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "netherreactor":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "normal_stone_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "noteblock":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "oak_hanging_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            }
            break;

        case "oak_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "observer":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 , "powered_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 , "powered_bit" : false ]';
            }
            break;

        case "obsidian":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "ochre_froglight":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "orange_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "orange_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "orange_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "orange_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "oxidized_copper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "oxidized_cut_copper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "oxidized_cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "oxidized_cut_copper_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "oxidized_double_cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "packed_ice":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "packed_mud":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "pearlescent_froglight":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "pink_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "pink_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "pink_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "pink_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "piston":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "piston_arm_collision":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "planks":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "wood_type" : "acacia" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "wood_type" : "acacia" ]';
            }
            break;

        case "podzol":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "pointed_dripstone":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "dripstone_thickness" : "base" , "hanging" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "dripstone_thickness" : "base" , "hanging" : false ]';
            }
            break;

        case "polished_andesite_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "polished_basalt":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "polished_blackstone":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "polished_blackstone_brick_double_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "polished_blackstone_brick_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "polished_blackstone_brick_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "polished_blackstone_brick_wall":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            }
            break;

        case "polished_blackstone_bricks":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "polished_blackstone_button":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            }
            break;

        case "polished_blackstone_double_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "polished_blackstone_pressure_plate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "polished_blackstone_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "polished_blackstone_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "polished_blackstone_wall":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            }
            break;

        case "polished_deepslate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "polished_deepslate_double_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "polished_deepslate_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "polished_deepslate_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "polished_deepslate_wall":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "wall_connection_type_east" : "none" , "wall_connection_type_north" : "none" , "wall_connection_type_south" : "none" , "wall_connection_type_west" : "none" , "wall_post_bit" : false ]';
            }
            break;

        case "polished_diorite_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "polished_granite_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "portal":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "portal_axis" : "unknown" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "portal_axis" : "unknown" ]';
            }
            break;

        case "potatoes":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "growth" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "growth" : 0 ]';
            }
            break;

        case "powder_snow":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "powered_comparator":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "output_lit_bit" : false , "output_subtract_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "output_lit_bit" : false , "output_subtract_bit" : false ]';
            }
            break;

        case "powered_repeater":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "repeater_delay" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "repeater_delay" : 0 ]';
            }
            break;

        case "prismarine":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "prismarine_block_type" : "bricks" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "prismarine_block_type" : "bricks" ]';
            }
            break;

        case "prismarine_bricks_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "prismarine_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "pumpkin":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 ]';
            }
            break;

        case "pumpkin_stem":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 , "growth" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 , "growth" : 0 ]';
            }
            break;

        case "purple_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "purple_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "purple_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "purple_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "purpur_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "chisel_type" : "chiseled" , "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "chisel_type" : "chiseled" , "pillar_axis" : "x" ]';
            }
            break;

        case "purpur_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "quartz_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "chisel_type" : "chiseled" , "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "chisel_type" : "chiseled" , "pillar_axis" : "x" ]';
            }
            break;

        case "quartz_bricks":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "quartz_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "quartz_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "rail":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "rail_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "rail_direction" : 0 ]';
            }
            break;

        case "raw_copper_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "raw_gold_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "raw_iron_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "red_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "red_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "red_flower":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "flower_type" : "allium" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "flower_type" : "allium" ]';
            }
            break;

        case "red_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "red_mushroom":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "red_mushroom_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "huge_mushroom_bits" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "huge_mushroom_bits" : 0 ]';
            }
            break;

        case "red_nether_brick":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "red_nether_brick_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "red_sandstone":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "sand_stone_type" : "cut" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "sand_stone_type" : "cut" ]';
            }
            break;

        case "red_sandstone_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "red_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "redstone_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "redstone_lamp":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "redstone_ore":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "redstone_torch":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "torch_facing_direction" : "east" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "torch_facing_direction" : "east" ]';
            }
            break;

        case "redstone_wire":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "reeds":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "age" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "age" : 0 ]';
            }
            break;

        case "reinforced_deepslate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "repeating_command_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "conditional_bit" : false , "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "conditional_bit" : false , "facing_direction" : 0 ]';
            }
            break;

        case "reserved6":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "respawn_anchor":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "respawn_anchor_charge" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "respawn_anchor_charge" : 0 ]';
            }
            break;

        case "sand":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "sand_type" : "normal" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "sand_type" : "normal" ]';
            }
            break;

        case "sandstone":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "sand_stone_type" : "cut" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "sand_stone_type" : "cut" ]';
            }
            break;

        case "sandstone_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "sapling":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "age_bit" : false , "sapling_type" : "acacia" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "age_bit" : false , "sapling_type" : "acacia" ]';
            }
            break;

        case "scaffolding":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "stability" : 0 , "stability_check" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "stability" : 0 , "stability_check" : false ]';
            }
            break;

        case "sculk":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "sculk_catalyst":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "bloom" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "bloom" : false ]';
            }
            break;

        case "sculk_sensor":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "powered_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "powered_bit" : false ]';
            }
            break;

        case "sculk_shrieker":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "active" : false , "can_summon" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "active" : false , "can_summon" : false ]';
            }
            break;

        case "sculk_vein":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "multi_face_direction_bits" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "multi_face_direction_bits" : 0 ]';
            }
            break;

        case "sea_lantern":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "sea_pickle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "cluster_count" : 0 , "dead_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "cluster_count" : 0 , "dead_bit" : false ]';
            }
            break;

        case "seagrass":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "sea_grass_type" : "default" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "sea_grass_type" : "default" ]';
            }
            break;

        case "shroomlight":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "shulker_box":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "color" : "black" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "color" : "black" ]';
            }
            break;

        case "silver_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "skull":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "slime":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "small_amethyst_bud":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "small_dripleaf_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "upper_block_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "upper_block_bit" : false ]';
            }
            break;

        case "smithing_table":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "smoker":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "smooth_basalt":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "smooth_quartz_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "smooth_red_sandstone_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "smooth_sandstone_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "smooth_stone":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "snow":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "snow_layer":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "covered_bit" : false , "height" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "covered_bit" : false , "height" : 0 ]';
            }
            break;

        case "soul_campfire":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "extinguished" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "extinguished" : false ]';
            }
            break;

        case "soul_fire":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "age" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "age" : 0 ]';
            }
            break;

        case "soul_lantern":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "hanging" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "hanging" : false ]';
            }
            break;

        case "soul_sand":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "soul_soil":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "soul_torch":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "torch_facing_direction" : "east" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "torch_facing_direction" : "east" ]';
            }
            break;

        case "sponge":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "sponge_type" : "dry" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "sponge_type" : "dry" ]';
            }
            break;

        case "spore_blossom":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "spruce_button":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            }
            break;

        case "spruce_door":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            }
            break;

        case "spruce_fence_gate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            }
            break;

        case "spruce_hanging_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            }
            break;

        case "spruce_pressure_plate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "spruce_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "spruce_standing_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "ground_sign_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "ground_sign_direction" : 0 ]';
            }
            break;

        case "spruce_trapdoor":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            }
            break;

        case "spruce_wall_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "stained_glass":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "color" : "black" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "color" : "black" ]';
            }
            break;

        case "stained_glass_pane":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "color" : "black" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "color" : "black" ]';
            }
            break;

        case "stained_hardened_clay":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "color" : "black" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "color" : "black" ]';
            }
            break;

        case "standing_banner":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "ground_sign_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "ground_sign_direction" : 0 ]';
            }
            break;

        case "standing_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "ground_sign_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "ground_sign_direction" : 0 ]';
            }
            break;

        case "sticky_piston":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "sticky_piston_arm_collision":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "stone":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "stone_type" : "andesite" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "stone_type" : "andesite" ]';
            }
            break;

        case "stone_block_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "stone_slab_type" : "brick" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "stone_slab_type" : "brick" ]';
            }
            break;

        case "stone_block_slab2":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "stone_slab_type_2" : "mossy_cobblestone" , "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "stone_slab_type_2" : "mossy_cobblestone" , "top_slot_bit" : false ]';
            }
            break;

        case "stone_block_slab3":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "stone_slab_type_3" : "andesite" , "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "stone_slab_type_3" : "andesite" , "top_slot_bit" : false ]';
            }
            break;

        case "stone_block_slab4":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "stone_slab_type_4" : "cut_red_sandstone" , "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "stone_slab_type_4" : "cut_red_sandstone" , "top_slot_bit" : false ]';
            }
            break;

        case "stone_brick_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "stone_button":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            }
            break;

        case "stone_pressure_plate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "stone_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "stonebrick":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "stone_brick_type" : "chiseled" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "stone_brick_type" : "chiseled" ]';
            }
            break;

        case "stonecutter":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "stonecutter_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "stripped_acacia_log":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "stripped_bamboo_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "stripped_birch_log":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "stripped_crimson_hyphae":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "stripped_crimson_stem":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "stripped_dark_oak_log":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "stripped_jungle_log":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "stripped_mangrove_log":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "stripped_mangrove_wood":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "stripped_oak_log":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "stripped_spruce_log":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "stripped_warped_hyphae":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "stripped_warped_stem":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "structure_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "structure_block_type" : "corner" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "structure_block_type" : "corner" ]';
            }
            break;

        case "structure_void":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "structure_void_type" : "air" ] ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "structure_void_type" : "air" ] ';
            }
            break;

        case "suspicious_sand":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "brushed_progress" : 0 , "hanging" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "brushed_progress" : 0 , "hanging" : false ]';
            }
            break;

        case "sweet_berry_bush":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "growth" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "growth" : 0 ]';
            }
            break;

        case "tallgrass":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "tall_grass_type" : "default" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "tall_grass_type" : "default" ]';
            }
            break;

        case "target":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "tinted_glass":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "tnt":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "allow_underwater_bit" : false , "explode_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "allow_underwater_bit" : false , "explode_bit" : false ]';
            }
            break;

        case "torch":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "torch_facing_direction" : "east" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "torch_facing_direction" : "east" ]';
            }
            break;

        case "torchflower":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "torchflower_crop":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "growth" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "growth" : 0 ]';
            }
            break;

        case "trapdoor":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            }
            break;

        case "trapped_chest":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "trip_wire":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "attached_bit" : false , "disarmed_bit" : false , "powered_bit" : false , "suspended_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "attached_bit" : false , "disarmed_bit" : false , "powered_bit" : false , "suspended_bit" : false ]';
            }
            break;

        case "tripwire_hook":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "attached_bit" : false , "direction" : 0 , "powered_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "attached_bit" : false , "direction" : 0 , "powered_bit" : false ]';
            }
            break;

        case "tuff":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "turtle_egg":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "cracked_state" : "cracked" , "turtle_egg_count" : "four_egg" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "cracked_state" : "cracked" , "turtle_egg_count" : "four_egg" ]';
            }
            break;

        case "twisting_vines":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "twisting_vines_age" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "twisting_vines_age" : 0 ]';
            }
            break;

        case "underwater_torch":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' !Este bloque tiene un error! ';
            }
            break;

        case "undyed_shulker_box":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "unknown":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "unlit_redstone_torch":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "torch_facing_direction" : "east" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "torch_facing_direction" : "east" ]';
            }
            break;

        case "unpowered_comparator":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "output_lit_bit" : false , "output_subtract_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "output_lit_bit" : false , "output_subtract_bit" : false ]';
            }
            break;

        case "unpowered_repeater":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "repeater_delay" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "repeater_delay" : 0 ]';
            }
            break;

        case "verdant_froglight":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "vine":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "vine_direction_bits" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "vine_direction_bits" : 0 ]';
            }
            break;

        case "wall_banner":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "wall_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "warped_button":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            }
            break;

        case "warped_door":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            }
            break;

        case "warped_double_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "warped_fence":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "warped_fence_gate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "in_wall_bit" : false , "open_bit" : false ]';
            }
            break;

        case "warped_fungus":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "warped_hanging_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "attached_bit" : false , "facing_direction" : 0 , "ground_sign_direction" : 0 , "hanging" : false ]';
            }
            break;

        case "warped_hyphae":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "warped_nylium":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "warped_planks":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "warped_pressure_plate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "warped_roots":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "warped_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "warped_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "warped_standing_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "ground_sign_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "ground_sign_direction" : 0 ]';
            }
            break;

        case "warped_stem":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" ]';
            }
            break;

        case "warped_trapdoor":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "open_bit" : false , "upside_down_bit" : false ]';
            }
            break;

        case "warped_wall_sign":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "warped_wart_block":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "water":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "liquid_depth" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "liquid_depth" : 0 ]';
            }
            break;

        case "waterlily":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "waxed_copper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "waxed_cut_copper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "waxed_cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "waxed_cut_copper_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "waxed_double_cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "waxed_exposed_copper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "waxed_exposed_cut_copper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "waxed_exposed_cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "waxed_exposed_cut_copper_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "waxed_exposed_double_cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "waxed_oxidized_copper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "waxed_oxidized_cut_copper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "waxed_oxidized_cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "waxed_oxidized_cut_copper_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "waxed_oxidized_double_cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "waxed_weathered_copper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "waxed_weathered_cut_copper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "waxed_weathered_cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "waxed_weathered_cut_copper_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "waxed_weathered_double_cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "weathered_copper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "weathered_cut_copper":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "weathered_cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "weathered_cut_copper_stairs":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "upside_down_bit" : false , "weirdo_direction" : 0 ]';
            }
            break;

        case "weathered_double_cut_copper_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false ]';
            }
            break;

        case "web":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "weeping_vines":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "weeping_vines_age" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "weeping_vines_age" : 0 ]';
            }
            break;

        case "wheat":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "growth" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "growth" : 0 ]';
            }
            break;

        case "white_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "white_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "white_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "white_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "wither_rose":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "wood":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "pillar_axis" : "x" , "stripped_bit" : false , "wood_type" : "acacia" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "pillar_axis" : "x" , "stripped_bit" : false , "wood_type" : "acacia" ]';
            }
            break;

        case "wooden_button":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "button_pressed_bit" : false , "facing_direction" : 0 ]';
            }
            break;

        case "wooden_door":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "direction" : 0 , "door_hinge_bit" : false , "open_bit" : false , "upper_block_bit" : false ]';
            }
            break;

        case "wooden_pressure_plate":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "redstone_signal" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "redstone_signal" : 0 ]';
            }
            break;

        case "wooden_slab":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "top_slot_bit" : false , "wood_type" : "acacia" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "top_slot_bit" : false , "wood_type" : "acacia" ]';
            }
            break;

        case "wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "color" : "black" ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "color" : "black" ]';
            }
            break;

        case "yellow_candle":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "candles" : 0 , "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "candles" : 0 , "lit" : false ]';
            }
            break;

        case "yellow_candle_cake":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "lit" : false ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "lit" : false ]';
            }
            break;

        case "yellow_flower":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "yellow_glazed_terracotta":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ "facing_direction" : 0 ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ "facing_direction" : 0 ]';
            }
            break;

        case "yellow_wool":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' [ ]';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = "/" + a + " ~ ~ ~ " + input + ' [ ]';
            }
            break;

        case "":
            if (selectedOption === "disabled") {
                mensaje.innerHTML = ' Ingresa el nombre de un bloque ';
            } else if (selectedOption === "testforblock" || selectedOption === "setblock") {
                mensaje.innerHTML = ' Ingresa el nombre de un bloque ';
            }
            break;

        default:
            mensaje.innerHTML = input + " No es un bloque válido.";
            break;

    }

}
