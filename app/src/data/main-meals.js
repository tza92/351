// Published SFU lunch and dinner menus, November 2-21, 2026.
// Source links and portions are retained; repeated item/portion rows are collapsed.
// Categories are app groupings, not dietary labels or SFU station names.
(() => {
  const catalog = {
  "chicken-yassa": {
    "name": "Chicken Yassa",
    "sourceName": "Chicken Yassa"
  },
  "chef-s-special": {
    "name": "Chef's Special",
    "sourceName": "Chef's Special"
  },
  "vegetable-rice-pilaf": {
    "name": "Vegetable & Rice Pilaf",
    "sourceName": "Vegetable & Rice Pilaf"
  },
  "moroccan-couscous-salad": {
    "name": "Moroccan Couscous Salad",
    "sourceName": "Moroccan Couscous Salad"
  },
  "marinated-beets-with-dill": {
    "name": "Marinated Beets with Dill",
    "sourceName": "Marinated Beets with Dill"
  },
  "chili-and-lime-roasted-corn": {
    "name": "Chili and Lime Roasted Corn",
    "sourceName": "Chili and Lime Roasted Corn"
  },
  "paprika-roasted-chickpeas": {
    "name": "Paprika Roasted Chickpeas",
    "sourceName": "Paprika Roasted Chickpeas"
  },
  "roasted-cauliflower": {
    "name": "Roasted Cauliflower",
    "sourceName": "Roasted Cauliflower"
  },
  "nacho-chips": {
    "name": "Nacho Chips",
    "sourceName": "Nacho Chips"
  },
  "spicy-black-beans": {
    "name": "Spicy Black Beans",
    "sourceName": "Spicy Black Beans"
  },
  "cheese-sauce": {
    "name": "Cheese Sauce",
    "sourceName": "Cheese Sauce"
  },
  "tomato-salsa": {
    "name": "Tomato Salsa",
    "sourceName": "Tomato Salsa"
  },
  "sour-cream-14-43-ml-cdn": {
    "name": "Sour Cream",
    "sourceName": "Sour Cream, 14%, 43 ml, CDN"
  },
  "pickled-red-onions-with-jalapenos": {
    "name": "Pickled Red Onions with Jalapenos",
    "sourceName": "Pickled Red Onions with Jalapenos"
  },
  "hot-and-sour-chinese-pork-soup": {
    "name": "Hot and Sour Chinese Pork Soup",
    "sourceName": "Hot and Sour Chinese Pork Soup"
  },
  "cream-of-tomato-soup": {
    "name": "Cream of Tomato Soup",
    "sourceName": "Cream of Tomato Soup"
  },
  "side-of-sliced-tomato": {
    "name": "Sliced Tomato",
    "sourceName": "Side of Sliced Tomato"
  },
  "leaf-lettuce": {
    "name": "Leaf Lettuce",
    "sourceName": "Leaf Lettuce"
  },
  "sliced-red-onions": {
    "name": "Sliced Red Onions",
    "sourceName": "Sliced Red Onions"
  },
  "sliced-fresh-cucumbers": {
    "name": "Sliced Fresh Cucumbers",
    "sourceName": "Sliced Fresh Cucumbers"
  },
  "smoked-deli-ham": {
    "name": "Smoked Deli Ham",
    "sourceName": "Smoked Deli Ham"
  },
  "deli-roast-beef": {
    "name": "Deli Roast Beef",
    "sourceName": "Deli Roast Beef"
  },
  "sliced-deli-turkey": {
    "name": "Sliced Deli Turkey",
    "sourceName": "Sliced Deli Turkey"
  },
  "light-type-mayonnaise": {
    "name": "Light Type Mayonnaise",
    "sourceName": "Light Type Mayonnaise"
  },
  "mustard": {
    "name": "Mustard",
    "sourceName": "Mustard"
  },
  "chipotle-aioli": {
    "name": "Chipotle Aioli",
    "sourceName": "Chipotle Aioli"
  },
  "hummus": {
    "name": "Hummus",
    "sourceName": "Hummus"
  },
  "chao-cheese": {
    "name": "Chao Cheese",
    "sourceName": "Chao Cheese"
  },
  "mozzarella-cheese-slices": {
    "name": "Mozzarella Cheese Slices",
    "sourceName": "Mozzarella Cheese Slices"
  },
  "cheddar-cheese-slices-mild": {
    "name": "Mild Cheddar Cheese Slices",
    "sourceName": "Cheddar Cheese Slices, Mild"
  },
  "sliced-white-bread": {
    "name": "Sliced White Bread",
    "sourceName": "Sliced White Bread"
  },
  "homemade-whole-wheat-bread": {
    "name": "Homemade Whole Wheat Bread",
    "sourceName": "Homemade Whole Wheat Bread"
  },
  "flour-tortilla-wrap-10": {
    "name": "Flour Tortilla Wrap (10-inch)",
    "sourceName": "Flour Tortilla Wrap, 10\""
  },
  "sourdough-bread-pre-sliced": {
    "name": "Sliced Sourdough Bread",
    "sourceName": "Sourdough Bread, Pre-Sliced"
  },
  "egg-salad-sandwich": {
    "name": "Egg Salad Sandwich",
    "sourceName": "Egg Salad Sandwich"
  },
  "shaved-black-forest-ham-honey-mustard-and-cheddar": {
    "name": "Shaved Black Forest Ham, Honey Mustard and Cheddar",
    "sourceName": "Shaved Black Forest Ham, Honey Mustard and Cheddar"
  },
  "falafel-wrap": {
    "name": "Falafel Wrap",
    "sourceName": "Falafel Wrap"
  },
  "turmeric-scented-rice": {
    "name": "Turmeric Scented Rice",
    "sourceName": "Turmeric Scented Rice"
  },
  "chicken-shawarma": {
    "name": "Chicken Shawarma",
    "sourceName": "Chicken Shawarma"
  },
  "shredded-lettuce": {
    "name": "Shredded Lettuce",
    "sourceName": "Shredded Lettuce"
  },
  "sliced-black-olives": {
    "name": "Sliced Black Olives",
    "sourceName": "Sliced Black Olives"
  },
  "diced-tomatoes": {
    "name": "Diced Tomatoes",
    "sourceName": "Diced Tomatoes"
  },
  "diced-fresh-english-cucumber": {
    "name": "Diced Fresh English Cucumber",
    "sourceName": "Diced Fresh English Cucumber"
  },
  "sliced-dill-pickles": {
    "name": "Sliced Dill Pickles",
    "sourceName": "Sliced Dill Pickles"
  },
  "sliced-pickled-jalapeno-peppers": {
    "name": "Sliced Pickled Jalapeno Peppers",
    "sourceName": "Sliced Pickled Jalapeno Peppers"
  },
  "tabbouleh-salad": {
    "name": "Tabbouleh Salad",
    "sourceName": "Tabbouleh Salad"
  },
  "pickled-red-onions": {
    "name": "Pickled Red Onions",
    "sourceName": "Pickled Red Onions"
  },
  "roasted-red-pepper-hummus": {
    "name": "Roasted Red Pepper Hummus",
    "sourceName": "Roasted Red Pepper Hummus"
  },
  "tzatziki": {
    "name": "Tzatziki",
    "sourceName": "Tzatziki"
  },
  "shawarma-garlic-sauce": {
    "name": "Shawarma Garlic Sauce",
    "sourceName": "Shawarma Garlic Sauce"
  },
  "pita-chips": {
    "name": "Pita Chips",
    "sourceName": "Pita Chips"
  },
  "sriracha-hot-sauce": {
    "name": "Sriracha Hot Sauce",
    "sourceName": "Sriracha Hot Sauce"
  },
  "fresh-chopped-cilantro": {
    "name": "Fresh Chopped Cilantro",
    "sourceName": "Fresh Chopped Cilantro"
  },
  "sesame-seeds": {
    "name": "Sesame Seeds",
    "sourceName": "Sesame Seeds"
  },
  "crispy-chickpeas": {
    "name": "Crispy Chickpeas",
    "sourceName": "Crispy Chickpeas"
  },
  "chicken-stir-fry": {
    "name": "Chicken Stir-fry",
    "sourceName": "Chicken Stir-fry"
  },
  "crispytofu-stir-fry": {
    "name": "Crispy Tofu Stir-Fry",
    "sourceName": "CrispyTofu Stir-Fry"
  },
  "stir-fry-vegetable-vermicelli": {
    "name": "Stir-Fry Vegetable Vermicelli",
    "sourceName": "Stir-Fry Vegetable Vermicelli"
  },
  "jasmine-rice": {
    "name": "Jasmine Rice",
    "sourceName": "Jasmine Rice"
  },
  "marinated-chipotle-chicken-breast": {
    "name": "Marinated Chipotle Chicken Breast",
    "sourceName": "Marinated Chipotle Chicken Breast"
  },
  "chili-con-carne": {
    "name": "Chili Con Carne",
    "sourceName": "Chili Con Carne"
  },
  "smoked-bbq-tofu": {
    "name": "Smoked BBQ Tofu",
    "sourceName": "Smoked BBQ Tofu"
  },
  "two-alarm-four-bean-chili": {
    "name": "Two Alarm Four Bean Chili",
    "sourceName": "Two Alarm Four Bean Chili"
  },
  "cilantro-lime-brown-rice": {
    "name": "Cilantro Lime Brown Rice",
    "sourceName": "Cilantro Lime Brown Rice"
  },
  "fluffy-rice": {
    "name": "Fluffy Rice",
    "sourceName": "Fluffy Rice"
  },
  "pico-de-gallo": {
    "name": "Pico de Gallo",
    "sourceName": "Pico de Gallo"
  },
  "shredded-cheddar-cheese": {
    "name": "Shredded Cheddar Cheese",
    "sourceName": "Shredded Cheddar Cheese"
  },
  "roasted-corn-salsa": {
    "name": "Roasted Corn Salsa",
    "sourceName": "Roasted Corn Salsa"
  },
  "pickled-red-onion": {
    "name": "Pickled Red Onion",
    "sourceName": "Pickled Red Onion"
  },
  "sour-cream": {
    "name": "Sour Cream",
    "sourceName": "Sour Cream"
  },
  "mild-chunky-salsa": {
    "name": "Mild Chunky Salsa",
    "sourceName": "Mild Chunky Salsa"
  },
  "guacamole": {
    "name": "Guacamole",
    "sourceName": "Guacamole"
  },
  "spicy-tuna-roll-sushi": {
    "name": "Spicy Tuna Roll Sushi",
    "sourceName": "Spicy Tuna Roll Sushi"
  },
  "avocado-roll-sushi": {
    "name": "Avocado Roll Sushi",
    "sourceName": "Avocado Roll Sushi"
  },
  "japanese-inspired-cucumber-salad": {
    "name": "Japanese Inspired Cucumber Salad",
    "sourceName": "Japanese Inspired Cucumber Salad"
  },
  "sea-salt-edamame": {
    "name": "Sea Salt Edamame",
    "sourceName": "Sea Salt Edamame"
  },
  "arugula-and-beet-salad-with-miso-dressing": {
    "name": "Arugula and Beet Salad with Miso Dressing",
    "sourceName": "Arugula and Beet Salad with Miso Dressing"
  },
  "greek-potato-salad": {
    "name": "Greek Potato Salad",
    "sourceName": "Greek Potato Salad"
  },
  "miso-barley-with-mushrooms-and-greens": {
    "name": "Miso Barley with Mushrooms and Greens",
    "sourceName": "Miso Barley with Mushrooms and Greens"
  },
  "mango-black-bean-and-quinoa-salad": {
    "name": "Mango, Black Bean and Quinoa Salad",
    "sourceName": "Mango, Black Bean and Quinoa Salad"
  },
  "deluxe-fruit-salad": {
    "name": "Deluxe Fruit Salad",
    "sourceName": "Deluxe Fruit Salad"
  },
  "chopped-romaine": {
    "name": "Chopped Romaine",
    "sourceName": "Chopped Romaine"
  },
  "spring-mix-lettuce": {
    "name": "Spring Mix Lettuce",
    "sourceName": "Spring Mix Lettuce"
  },
  "baby-spinach": {
    "name": "Baby Spinach",
    "sourceName": "Baby Spinach"
  },
  "grape-tomatoes": {
    "name": "Grape Tomatoes",
    "sourceName": "Grape Tomatoes"
  },
  "fresh-julienne-sliced-carrots": {
    "name": "Fresh Julienne Sliced Carrots",
    "sourceName": "Fresh Julienne Sliced Carrots"
  },
  "diced-fresh-celery": {
    "name": "Diced Fresh Celery",
    "sourceName": "Diced Fresh Celery"
  },
  "chopped-broccoli": {
    "name": "Chopped Broccoli",
    "sourceName": "Chopped Broccoli"
  },
  "fresh-chopped-cauliflower": {
    "name": "Fresh Chopped Cauliflower",
    "sourceName": "Fresh Chopped Cauliflower"
  },
  "corn": {
    "name": "Corn",
    "sourceName": "Corn"
  },
  "sliced-beets": {
    "name": "Sliced Beets",
    "sourceName": "Sliced Beets"
  },
  "chopped-hard-cooked-egg": {
    "name": "Chopped Hard Cooked Egg",
    "sourceName": "Chopped Hard Cooked Egg"
  },
  "black-beans": {
    "name": "Black Beans",
    "sourceName": "Black Beans"
  },
  "chickpeas": {
    "name": "Chickpeas",
    "sourceName": "Chickpeas"
  },
  "seasoned-croutons": {
    "name": "Seasoned Croutons",
    "sourceName": "Seasoned Croutons"
  },
  "salted-sunflower-seeds": {
    "name": "Salted Sunflower Seeds",
    "sourceName": "Salted Sunflower Seeds"
  },
  "caesar-salad-dressing": {
    "name": "Caesar Salad Dressing",
    "sourceName": "Caesar Salad Dressing"
  },
  "cw-ranch-salad-dressing": {
    "name": "Ranch Salad Dressing",
    "sourceName": "CW Ranch Salad Dressing"
  },
  "balsamic-salad-dressing": {
    "name": "Balsamic Salad Dressing",
    "sourceName": "Balsamic Salad Dressing"
  },
  "golden-italian-dressing": {
    "name": "Golden Italian Dressing",
    "sourceName": "Golden Italian Dressing"
  },
  "buffalo-crispy-chicken-wrap": {
    "name": "Buffalo Crispy Chicken Wrap",
    "sourceName": "Buffalo Crispy Chicken Wrap"
  },
  "kettle-chips-regular": {
    "name": "Kettle Chips (Regular)",
    "sourceName": "Kettle Chips (Regular)"
  },
  "chicken-tender-strips": {
    "name": "Chicken Tender Strips",
    "sourceName": "Chicken Tender Strips"
  },
  "bbq-sauce": {
    "name": "BBQ Sauce",
    "sourceName": "BBQ Sauce"
  },
  "sriracha-mayonnaise": {
    "name": "Sriracha Mayonnaise",
    "sourceName": "Sriracha Mayonnaise"
  },
  "herb-aioli": {
    "name": "Herb Aioli",
    "sourceName": "Herb Aioli"
  },
  "thai-green-curry-vegetables": {
    "name": "Thai Green Curry Vegetables",
    "sourceName": "Thai Green Curry Vegetables"
  },
  "panang-curry-vegetable": {
    "name": "Panang Curry (Vegetable)",
    "sourceName": "Panang Curry (Vegetable)"
  },
  "butter-chicken-sauce": {
    "name": "Butter Chicken Sauce",
    "sourceName": "Butter Chicken Sauce"
  },
  "roasted-chicken-breast": {
    "name": "Roasted Chicken Breast",
    "sourceName": "Roasted Chicken Breast"
  },
  "tofu": {
    "name": "Tofu",
    "sourceName": "Tofu"
  },
  "spinach": {
    "name": "Spinach",
    "sourceName": "Spinach"
  },
  "diced-carrots": {
    "name": "Diced Carrots",
    "sourceName": "Diced Carrots"
  },
  "green-beans": {
    "name": "Green Beans",
    "sourceName": "Green Beans"
  },
  "broccoli-florets": {
    "name": "Broccoli Florets",
    "sourceName": "Broccoli Florets"
  },
  "green-peas": {
    "name": "Green Peas",
    "sourceName": "Green Peas"
  },
  "minced-garlic": {
    "name": "Minced Garlic",
    "sourceName": "Minced Garlic"
  },
  "fresh-grated-ginger-root": {
    "name": "Fresh Grated Ginger Root",
    "sourceName": "Fresh Grated Ginger Root"
  },
  "naan-bread": {
    "name": "Naan Bread",
    "sourceName": "Naan Bread"
  },
  "fresh-chiffonade-cut-green-onions": {
    "name": "Fresh Chiffonade Cut Green Onions",
    "sourceName": "Fresh Chiffonade Cut Green Onions"
  },
  "chili-oil": {
    "name": "Chili Oil",
    "sourceName": "Chili Oil"
  },
  "philly-cheese-steak-pizza": {
    "name": "Philly Cheese Steak Pizza",
    "sourceName": "Philly Cheese Steak Pizza"
  },
  "crispy-chorizo-pizza": {
    "name": "Crispy Chorizo Pizza",
    "sourceName": "Crispy Chorizo Pizza"
  },
  "margherita-pizza": {
    "name": "Margherita Pizza",
    "sourceName": "Margherita Pizza"
  },
  "ice-cream-scoop": {
    "name": "Ice Cream Scoop",
    "sourceName": "Ice Cream Scoop"
  },
  "cranberry-lemon-muffins": {
    "name": "Cranberry Lemon Muffins",
    "sourceName": "Cranberry Lemon Muffins"
  },
  "chocolate-chip-scone": {
    "name": "Chocolate Chip Scone",
    "sourceName": "Chocolate Chip Scone"
  },
  "cinnamon-sugared-donut-holes": {
    "name": "Cinnamon Sugared Donut Holes",
    "sourceName": "Cinnamon Sugared Donut Holes"
  },
  "two-bite-iced-vanilla-cupcake": {
    "name": "Two Bite Iced Vanilla Cupcake",
    "sourceName": "Two Bite Iced Vanilla Cupcake"
  },
  "date-squares": {
    "name": "Date Squares",
    "sourceName": "Date Squares"
  },
  "oatmeal-apple-loaf": {
    "name": "Oatmeal Apple Loaf",
    "sourceName": "Oatmeal Apple Loaf"
  },
  "lemon-and-oregano-roast-chicken": {
    "name": "Lemon and Oregano Roast Chicken",
    "sourceName": "Lemon and Oregano Roast Chicken"
  },
  "beef-lasagna": {
    "name": "Beef Lasagna",
    "sourceName": "Beef Lasagna"
  },
  "herb-rice-pilaf": {
    "name": "Herb Rice Pilaf",
    "sourceName": "Herb Rice Pilaf"
  },
  "rosemary-roasted-potatoes": {
    "name": "Rosemary Roasted Potatoes",
    "sourceName": "Rosemary Roasted Potatoes"
  },
  "ratatouille": {
    "name": "Ratatouille",
    "sourceName": "Ratatouille"
  },
  "thyme-roasted-turnip": {
    "name": "Thyme Roasted Turnip",
    "sourceName": "Thyme Roasted Turnip"
  },
  "buttered-green-peas-and-carrots": {
    "name": "Buttered Green Peas and Carrots",
    "sourceName": "Buttered Green Peas and Carrots"
  },
  "braised-lentils": {
    "name": "Braised Lentils",
    "sourceName": "Braised Lentils"
  },
  "shepherd-s-pie-with-tvp": {
    "name": "Shepherd's Pie with TVP",
    "sourceName": "Shepherd's Pie with TVP"
  },
  "lemon-orzo": {
    "name": "Lemon Orzo",
    "sourceName": "Lemon Orzo"
  },
  "herbed-polenta-cake": {
    "name": "Herbed Polenta Cake",
    "sourceName": "Herbed Polenta Cake"
  },
  "teriyaki-chicken-stir-fry": {
    "name": "Teriyaki Chicken Stir-Fry",
    "sourceName": "Teriyaki Chicken Stir-Fry"
  },
  "orange-chick-n-madarin-stir-fry": {
    "name": "Orange \"Chick'n\" Madarin Stir-Fry",
    "sourceName": "Orange \"Chick'n\" Madarin Stir-Fry"
  },
  "vegetable-chow-mein": {
    "name": "Vegetable Chow Mein",
    "sourceName": "Vegetable Chow Mein"
  },
  "sushi-roll-smoked-salmon": {
    "name": "Sushi Roll Smoked Salmon",
    "sourceName": "Sushi Roll Smoked Salmon"
  },
  "quinoa-avocado-cucumber-rolls": {
    "name": "Quinoa Avocado Cucumber Rolls",
    "sourceName": "Quinoa Avocado Cucumber Rolls"
  },
  "quinoa-and-potato-salad": {
    "name": "Quinoa and Potato Salad",
    "sourceName": "Quinoa and Potato Salad"
  },
  "roasted-tofu-salad-with-broccoli-and-sesame": {
    "name": "Roasted Tofu Salad with Broccoli and Sesame",
    "sourceName": "Roasted Tofu Salad with Broccoli and Sesame"
  },
  "pesto-rice-salad": {
    "name": "Pesto Rice Salad",
    "sourceName": "Pesto Rice Salad"
  },
  "healthy-cobb-salad": {
    "name": "Healthy Cobb Salad",
    "sourceName": "Healthy Cobb Salad"
  },
  "loaded-jalapeno-burger": {
    "name": "Loaded Jalapeno Burger",
    "sourceName": "Loaded Jalapeno Burger"
  },
  "golden-fried-french-fries": {
    "name": "Golden Fried French Fries",
    "sourceName": "Golden Fried French Fries"
  },
  "shaved-fresh-red-onions": {
    "name": "Shaved Fresh Red Onions",
    "sourceName": "Shaved Fresh Red Onions"
  },
  "cucumber-pickles": {
    "name": "Cucumber Pickles",
    "sourceName": "Cucumber Pickles"
  },
  "kimchi-style-coleslaw": {
    "name": "Kimchi-Style Coleslaw",
    "sourceName": "Kimchi-Style Coleslaw"
  },
  "bbq-chicken-pizza": {
    "name": "BBQ Chicken Pizza",
    "sourceName": "BBQ Chicken Pizza"
  },
  "salami-and-caramelized-onion-pizza": {
    "name": "Salami and Caramelized Onion Pizza",
    "sourceName": "Salami and Caramelized Onion Pizza"
  },
  "greek-pizza": {
    "name": "Greek Pizza",
    "sourceName": "Greek Pizza"
  },
  "small-croissant": {
    "name": "Small Croissant",
    "sourceName": "Small Croissant"
  },
  "mni-apple-danish": {
    "name": "Mini Apple Danish",
    "sourceName": "Mni Apple Danish"
  },
  "carnival-cookie": {
    "name": "Carnival Cookie",
    "sourceName": "Carnival Cookie"
  },
  "classic-rice-pudding": {
    "name": "Classic Rice Pudding",
    "sourceName": "Classic Rice Pudding"
  },
  "chocolate-pudding": {
    "name": "Chocolate Pudding",
    "sourceName": "Chocolate Pudding"
  },
  "coconut-and-chocolate-chip-granola-bar": {
    "name": "Coconut and Chocolate Chip Granola Bar",
    "sourceName": "Coconut and Chocolate Chip Granola Bar"
  },
  "beef-kofta": {
    "name": "Beef Kofta",
    "sourceName": "Beef Kofta"
  },
  "rice-pilaf": {
    "name": "Rice Pilaf",
    "sourceName": "Rice Pilaf"
  },
  "roasted-za-atar-potatoes": {
    "name": "Roasted Za'atar Potatoes",
    "sourceName": "Roasted Za'atar Potatoes"
  },
  "sumac-roasted-butternut-squash": {
    "name": "Sumac Roasted Butternut Squash",
    "sourceName": "Sumac Roasted Butternut Squash"
  },
  "roasted-cauliflower-with-citrus-tahini-and-caramelized-onions": {
    "name": "Roasted Cauliflower with Citrus Tahini and Caramelized Onions",
    "sourceName": "Roasted Cauliflower with Citrus Tahini and Caramelized Onions"
  },
  "roasted-peppers": {
    "name": "Roasted Peppers",
    "sourceName": "Roasted Peppers"
  },
  "harissa-roasted-tofu": {
    "name": "Harissa Roasted Tofu",
    "sourceName": "Harissa Roasted Tofu"
  },
  "cumin-roasted-eggplant": {
    "name": "Cumin Roasted Eggplant",
    "sourceName": "Cumin Roasted Eggplant"
  },
  "yogurt-dip": {
    "name": "Yogurt Dip",
    "sourceName": "Yogurt Dip"
  },
  "timberline-beef-chili": {
    "name": "Timberline Beef Chili",
    "sourceName": "Timberline Beef Chili"
  },
  "creamy-broccoli-soup-puree": {
    "name": "Creamy Broccoli Soup Puree",
    "sourceName": "Creamy Broccoli Soup Puree"
  },
  "avocado-chicken-wrap": {
    "name": "Avocado Chicken Wrap",
    "sourceName": "Avocado Chicken Wrap"
  },
  "queen-margherita-sandwich": {
    "name": "Queen Margherita Sandwich",
    "sourceName": "Queen Margherita Sandwich"
  },
  "hoisin-beef-stir-fry": {
    "name": "Hoisin Beef Stir-Fry",
    "sourceName": "Hoisin Beef Stir-Fry"
  },
  "szechaun-style-eggplant-with-egg-rolls": {
    "name": "Szechaun Style Eggplant with Egg Rolls",
    "sourceName": "Szechaun Style Eggplant with Egg Rolls"
  },
  "three-bean-and-vegetable-chili": {
    "name": "Three Bean and Vegetable Chili",
    "sourceName": "Three Bean and Vegetable Chili"
  },
  "alaska-roll-sushi": {
    "name": "Alaska Roll Sushi",
    "sourceName": "Alaska Roll Sushi"
  },
  "hokey-poke-bowl": {
    "name": "Hokey Poke Bowl",
    "sourceName": "Hokey Poke Bowl"
  },
  "tempura-sweet-potato-roll-sushi": {
    "name": "Tempura Sweet Potato Roll Sushi",
    "sourceName": "Tempura Sweet Potato Roll Sushi"
  },
  "wakame-salad": {
    "name": "Wakame Salad",
    "sourceName": "Wakame Salad"
  },
  "grilled-vegetable-salad-with-feta": {
    "name": "Grilled Vegetable Salad with Feta",
    "sourceName": "Grilled Vegetable Salad with Feta"
  },
  "jerk-chicken-salad": {
    "name": "Jerk Chicken Salad",
    "sourceName": "Jerk Chicken Salad"
  },
  "golden-jewel-salad": {
    "name": "Golden Jewel Salad",
    "sourceName": "Golden Jewel Salad"
  },
  "beef-burger-on-ww-bun": {
    "name": "Beef Burger on WW Bun",
    "sourceName": "Beef Burger on WW Bun"
  },
  "sourdough-grilled-cheese-sandwich": {
    "name": "Sourdough Grilled Cheese Sandwich",
    "sourceName": "Sourdough Grilled Cheese Sandwich"
  },
  "spicy-curly-fries": {
    "name": "Spicy Curly Fries",
    "sourceName": "Spicy Curly Fries"
  },
  "tandoori-chicken-flat-bread": {
    "name": "Tandoori Chicken Flat Bread",
    "sourceName": "Tandoori Chicken Flat Bread"
  },
  "bacon-pizza": {
    "name": "Bacon Pizza",
    "sourceName": "Bacon Pizza"
  },
  "mushroom-and-caramelized-onion-pizza": {
    "name": "Mushroom and Caramelized Onion Pizza",
    "sourceName": "Mushroom and Caramelized Onion Pizza"
  },
  "banana-muffins": {
    "name": "Banana Muffins",
    "sourceName": "Banana Muffins"
  },
  "four-berry-blend-scone": {
    "name": "Four Berry Blend Scone",
    "sourceName": "Four Berry Blend Scone"
  },
  "cinnamon-sugar-coated-churros": {
    "name": "Cinnamon Sugar Coated Churros",
    "sourceName": "Cinnamon Sugar Coated Churros"
  },
  "caramel-rice-krispie-squares": {
    "name": "Caramel Rice Krispie Squares",
    "sourceName": "Caramel Rice Krispie Squares"
  },
  "lemon-blueberry-bar": {
    "name": "Lemon Blueberry Bar",
    "sourceName": "Lemon Blueberry Bar"
  },
  "oatmeal-berry-loaf": {
    "name": "Oatmeal Berry Loaf",
    "sourceName": "Oatmeal Berry Loaf"
  },
  "poached-lemongrass-chicken": {
    "name": "Poached Lemongrass Chicken",
    "sourceName": "Poached Lemongrass Chicken"
  },
  "spicy-red-thai-fish-curry": {
    "name": "Spicy Red Thai Fish Curry",
    "sourceName": "Spicy Red Thai Fish Curry"
  },
  "indonesian-sesame-rice": {
    "name": "Indonesian Sesame Rice",
    "sourceName": "Indonesian Sesame Rice"
  },
  "sesame-and-soy-roasted-potatoes": {
    "name": "Sesame and Soy Roasted Potatoes",
    "sourceName": "Sesame and Soy Roasted Potatoes"
  },
  "thai-green-sweet-potato-curry": {
    "name": "Thai Green Sweet Potato Curry",
    "sourceName": "Thai Green Sweet Potato Curry"
  },
  "green-beans-with-garlic-and-rosemary": {
    "name": "Green Beans with Garlic and Rosemary",
    "sourceName": "Green Beans with Garlic and Rosemary"
  },
  "tofu-pad-thai": {
    "name": "Tofu Pad Thai",
    "sourceName": "Tofu Pad Thai"
  },
  "ginger-pepper-chick-n": {
    "name": "Ginger Pepper Chick'n",
    "sourceName": "Ginger Pepper Chick'n"
  },
  "sauteed-bok-choy": {
    "name": "Sauteed Bok Choy",
    "sourceName": "Sauteed Bok Choy"
  },
  "stir-fry-vegetables": {
    "name": "Stir-Fry Vegetables",
    "sourceName": "Stir-Fry Vegetables"
  },
  "thai-curry-vegetables": {
    "name": "Thai Curry Vegetables",
    "sourceName": "Thai Curry Vegetables"
  },
  "shrimp-and-vegetable-stir-fry": {
    "name": "Shrimp and Vegetable Stir-Fry",
    "sourceName": "Shrimp and Vegetable Stir-Fry"
  },
  "sweet-and-sour-tofu": {
    "name": "Sweet and Sour Tofu",
    "sourceName": "Sweet and Sour Tofu"
  },
  "indian-fried-rice-with-fresh-chilies-and-cilantro": {
    "name": "Indian Fried Rice with Fresh Chilies and Cilantro",
    "sourceName": "Indian Fried Rice with Fresh Chilies and Cilantro"
  },
  "zucchini-and-mushroom-salad": {
    "name": "Zucchini and Mushroom Salad",
    "sourceName": "Zucchini and Mushroom Salad"
  },
  "cajun-chicken-kale-caesar-salad": {
    "name": "Cajun Chicken Kale Caesar Salad",
    "sourceName": "Cajun Chicken Kale Caesar Salad"
  },
  "roasted-butternut-squash-kale-salad": {
    "name": "Roasted Butternut Squash & Kale Salad",
    "sourceName": "Roasted Butternut Squash & Kale Salad"
  },
  "chicken-tinga-street-taco": {
    "name": "Chicken Tinga Street Taco",
    "sourceName": "Chicken Tinga Street Taco"
  },
  "baked-sweet-potato-fries": {
    "name": "Baked Sweet Potato Fries",
    "sourceName": "Baked Sweet Potato Fries"
  },
  "salsa-sauce": {
    "name": "Salsa Sauce",
    "sourceName": "Salsa Sauce"
  },
  "hamburger-pizza": {
    "name": "Hamburger Pizza",
    "sourceName": "Hamburger Pizza"
  },
  "meat-lovers-pizza": {
    "name": "Meat Lovers Pizza",
    "sourceName": "Meat Lovers Pizza"
  },
  "jerk-chicken-pizza": {
    "name": "Jerk Chicken Pizza",
    "sourceName": "Jerk Chicken Pizza"
  },
  "lemon-danish": {
    "name": "Lemon Danish",
    "sourceName": "Lemon Danish"
  },
  "chocolate-chip-cookie": {
    "name": "Chocolate Chip Cookie",
    "sourceName": "Chocolate Chip Cookie"
  },
  "fruit-trifle-parfait": {
    "name": "Fruit Trifle Parfait",
    "sourceName": "Fruit Trifle Parfait"
  },
  "fruit-jelly-orange-with-whipped-topping": {
    "name": "Fruit Jelly (Orange) with Whipped Topping",
    "sourceName": "Fruit Jelly (Orange) with Whipped Topping"
  },
  "cherry-chocolate-cake": {
    "name": "Cherry Chocolate Cake",
    "sourceName": "Cherry Chocolate Cake"
  },
  "italian-inspired-porchetta": {
    "name": "Italian Inspired Porchetta",
    "sourceName": "Italian Inspired Porchetta"
  },
  "chicken-piccata": {
    "name": "Chicken Piccata",
    "sourceName": "Chicken Piccata"
  },
  "spaghetti": {
    "name": "Spaghetti",
    "sourceName": "Spaghetti"
  },
  "penne-pasta": {
    "name": "Penne Pasta",
    "sourceName": "Penne Pasta"
  },
  "pot-roasted-artichokes": {
    "name": "Pot-Roasted Artichokes",
    "sourceName": "Pot-Roasted Artichokes"
  },
  "baked-eggplant-parmesan-pasta-bake": {
    "name": "Baked Eggplant Parmesan Pasta Bake",
    "sourceName": "Baked Eggplant Parmesan Pasta Bake"
  },
  "sauteed-red-and-green-peppers": {
    "name": "Sauteed Red and Green Peppers",
    "sourceName": "Sauteed Red and Green Peppers"
  },
  "sauteed-mushrooms": {
    "name": "Sauteed Mushrooms",
    "sourceName": "Sauteed Mushrooms"
  },
  "roasted-butternut-squash": {
    "name": "Roasted Butternut Squash",
    "sourceName": "Roasted Butternut Squash"
  },
  "alfredo-sauce": {
    "name": "Alfredo Sauce",
    "sourceName": "Alfredo Sauce"
  },
  "bolognese-meat-sauce": {
    "name": "Bolognese Meat Sauce",
    "sourceName": "Bolognese Meat Sauce"
  },
  "vegetarian-bolognese-sauce": {
    "name": "Vegetarian Bolognese Sauce",
    "sourceName": "Vegetarian Bolognese Sauce"
  },
  "sauteed-squash": {
    "name": "Sauteed Squash",
    "sourceName": "Sauteed Squash"
  },
  "asparagus-and-roasted-red-peppers": {
    "name": "Asparagus and Roasted Red Peppers",
    "sourceName": "Asparagus and Roasted Red Peppers"
  },
  "vegetarian-mushroom-risotto": {
    "name": "Vegetarian Mushroom Risotto",
    "sourceName": "Vegetarian Mushroom Risotto"
  },
  "soft-polenta": {
    "name": "Soft Polenta",
    "sourceName": "Soft Polenta"
  },
  "crab-bisque": {
    "name": "Crab Bisque",
    "sourceName": "Crab Bisque"
  },
  "minestrone-soup": {
    "name": "Minestrone Soup",
    "sourceName": "Minestrone Soup"
  },
  "meatball-sub-on-hot-dog-roll": {
    "name": "Meatball Sub on Hot Dog Roll",
    "sourceName": "Meatball Sub on Hot Dog Roll"
  },
  "vegetable-sandwich": {
    "name": "Vegetable Sandwich",
    "sourceName": "Vegetable Sandwich"
  },
  "cantonese-style-chow-mein-noodles": {
    "name": "Cantonese Style Chow Mein Noodles",
    "sourceName": "Cantonese Style Chow Mein Noodles"
  },
  "diced-chicken": {
    "name": "Diced Chicken",
    "sourceName": "Diced Chicken"
  },
  "asian-beef-strips": {
    "name": "Asian Beef Strips",
    "sourceName": "Asian Beef Strips"
  },
  "seasoned-tofu": {
    "name": "Seasoned Tofu",
    "sourceName": "Seasoned Tofu"
  },
  "sliced-yellow-onions": {
    "name": "Sliced Yellow Onions",
    "sourceName": "Sliced Yellow Onions"
  },
  "julienne-slice-green-peppers": {
    "name": "Julienne Slice Green Peppers",
    "sourceName": "Julienne Slice Green Peppers"
  },
  "julienne-slice-red-peppers": {
    "name": "Julienne Slice Red Peppers",
    "sourceName": "Julienne Slice Red Peppers"
  },
  "sliced-fresh-mushrooms": {
    "name": "Sliced Fresh Mushrooms",
    "sourceName": "Sliced Fresh Mushrooms"
  },
  "sliced-fresh-green-cabbage": {
    "name": "Sliced Fresh Green Cabbage",
    "sourceName": "Sliced Fresh Green Cabbage"
  },
  "bean-sprouts": {
    "name": "Bean Sprouts",
    "sourceName": "Bean Sprouts"
  },
  "sesame-bok-choy": {
    "name": "Sesame Bok Choy",
    "sourceName": "Sesame Bok Choy"
  },
  "crispy-onion-strings": {
    "name": "Crispy Onion Strings",
    "sourceName": "Crispy Onion Strings"
  },
  "teriyaki-sauce": {
    "name": "Teriyaki Sauce",
    "sourceName": "Teriyaki Sauce"
  },
  "ultimate-honey-garlic-sauce": {
    "name": "Ultimate Honey Garlic Sauce",
    "sourceName": "Ultimate Honey Garlic Sauce"
  },
  "sticky-honey-garlic-pork": {
    "name": "Sticky Honey Garlic Pork",
    "sourceName": "Sticky Honey Garlic Pork"
  },
  "korean-inspired-sweet-and-spicy-chili-tofu": {
    "name": "Korean Inspired Sweet and Spicy Chili Tofu",
    "sourceName": "Korean Inspired Sweet and Spicy Chili Tofu"
  },
  "sriracha-fried-rice": {
    "name": "Sriracha Fried Rice",
    "sourceName": "Sriracha Fried Rice"
  },
  "tempura-shrimp-roll-sushi": {
    "name": "Tempura Shrimp Roll Sushi",
    "sourceName": "Tempura Shrimp Roll Sushi"
  },
  "crab-salad": {
    "name": "Crab Salad",
    "sourceName": "Crab Salad"
  },
  "thai-coconut-cucumber-salad": {
    "name": "Thai Coconut Cucumber Salad",
    "sourceName": "Thai Coconut Cucumber Salad"
  },
  "kale-caesar-salad-with-garlic-roasted-chickpeas": {
    "name": "Kale Caesar Salad with Garlic Roasted Chickpeas",
    "sourceName": "Kale Caesar Salad with Garlic Roasted Chickpeas"
  },
  "broccoli-crunch-salad": {
    "name": "Broccoli Crunch Salad",
    "sourceName": "Broccoli Crunch Salad"
  },
  "grilled-chicken-santa-fe": {
    "name": "Grilled Chicken Santa Fe",
    "sourceName": "Grilled Chicken Santa Fe"
  },
  "grilled-vegetable-and-bean-quesadillas": {
    "name": "Grilled Vegetable and Bean Quesadillas",
    "sourceName": "Grilled Vegetable and Bean Quesadillas"
  },
  "spiced-potato-wedges": {
    "name": "Spiced Potato Wedges",
    "sourceName": "Spiced Potato Wedges"
  },
  "cream-of-mushroom-soup": {
    "name": "Cream of Mushroom Soup",
    "sourceName": "Cream of Mushroom Soup"
  },
  "chicken-noodle-soup": {
    "name": "Chicken Noodle Soup",
    "sourceName": "Chicken Noodle Soup"
  },
  "meatball-station": {
    "name": "Meatball Station",
    "sourceName": "Meatball Station"
  },
  "seafood-casserole": {
    "name": "Seafood Casserole",
    "sourceName": "Seafood Casserole"
  },
  "cod-fish-cakes": {
    "name": "Cod Fish Cakes",
    "sourceName": "Cod Fish Cakes"
  },
  "sliced-carrots-frozen": {
    "name": "Sliced Carrots (Frozen)",
    "sourceName": "Sliced Carrots (Frozen)"
  },
  "fresh-quartered-bok-choy": {
    "name": "Fresh Quartered Bok Choy",
    "sourceName": "Fresh Quartered Bok Choy"
  },
  "sliced-fresh-nappa-cabbage": {
    "name": "Sliced Fresh Nappa Cabbage",
    "sourceName": "Sliced Fresh Nappa Cabbage"
  },
  "whole-kernel-corn": {
    "name": "Whole Kernel Corn",
    "sourceName": "Whole Kernel Corn"
  },
  "chicken-diablo-pizza": {
    "name": "Chicken Diablo Pizza",
    "sourceName": "Chicken Diablo Pizza"
  },
  "pepperoni-pizza": {
    "name": "Pepperoni Pizza",
    "sourceName": "Pepperoni Pizza"
  },
  "oatmeal-apple-muffins": {
    "name": "Oatmeal Apple Muffins",
    "sourceName": "Oatmeal Apple Muffins"
  },
  "pineapple-scone": {
    "name": "Pineapple Scone",
    "sourceName": "Pineapple Scone"
  },
  "two-bite-coconut-macaroons": {
    "name": "Two Bite Coconut Macaroons",
    "sourceName": "Two Bite Coconut Macaroons"
  },
  "two-bite-iced-chocolate-cupcake": {
    "name": "Two Bite Iced Chocolate Cupcake",
    "sourceName": "Two Bite Iced Chocolate Cupcake"
  },
  "pumpkin-brownies": {
    "name": "Pumpkin Brownies",
    "sourceName": "Pumpkin Brownies"
  },
  "caramel-swirl-coffee-cake": {
    "name": "Caramel Swirl Coffee Cake",
    "sourceName": "Caramel Swirl Coffee Cake"
  },
  "tandoori-chicken-leg": {
    "name": "Tandoori Chicken Leg",
    "sourceName": "Tandoori Chicken Leg"
  },
  "lamb-rogan-josh": {
    "name": "Lamb Rogan Josh",
    "sourceName": "Lamb Rogan Josh"
  },
  "yellow-basmati-rice": {
    "name": "Yellow Basmati Rice",
    "sourceName": "Yellow Basmati Rice"
  },
  "cumin-scented-baked-potato-wedges": {
    "name": "Cumin Scented Baked Potato Wedges",
    "sourceName": "Cumin Scented Baked Potato Wedges"
  },
  "rajma-curry": {
    "name": "Rajma Curry",
    "sourceName": "Rajma Curry"
  },
  "tandoori-root-vegetables": {
    "name": "Tandoori Root Vegetables",
    "sourceName": "Tandoori Root Vegetables"
  },
  "sauteed-green-peas": {
    "name": "Sauteed Green Peas",
    "sourceName": "Sauteed Green Peas"
  },
  "butter-chickpea-curry": {
    "name": "Butter Chickpea Curry",
    "sourceName": "Butter Chickpea Curry"
  },
  "vegetable-pakoras": {
    "name": "Vegetable Pakoras",
    "sourceName": "Vegetable Pakoras"
  },
  "mango-tamarind-chutney": {
    "name": "Mango Tamarind Chutney",
    "sourceName": "Mango Tamarind Chutney"
  },
  "aloo-gobi-rd": {
    "name": "Aloo Gobi (RD)",
    "sourceName": "Aloo Gobi (RD)"
  },
  "kadhi": {
    "name": "Kadhi",
    "sourceName": "Kadhi"
  },
  "sweet-chili-chicken-stir-fry": {
    "name": "Sweet Chili Chicken Stir-Fry",
    "sourceName": "Sweet Chili Chicken Stir-Fry"
  },
  "plant-based-fried-chicken-and-broccoli-stir-fry": {
    "name": "Plant Based Fried Chicken and Broccoli Stir Fry",
    "sourceName": "Plant Based Fried Chicken and Broccoli Stir Fry"
  },
  "sesame-soba-noodles": {
    "name": "Sesame Soba Noodles",
    "sourceName": "Sesame Soba Noodles"
  },
  "california-roll-sushi": {
    "name": "California Roll Sushi",
    "sourceName": "California Roll Sushi"
  },
  "sushi-roll-vegetarian": {
    "name": "Sushi Roll Vegetarian",
    "sourceName": "Sushi Roll Vegetarian"
  },
  "korean-japchae-salad": {
    "name": "Korean Japchae Salad",
    "sourceName": "Korean Japchae Salad"
  },
  "tomato-basil-pasta-salad": {
    "name": "Tomato Basil Pasta Salad",
    "sourceName": "Tomato Basil Pasta Salad"
  },
  "caribbean-marinated-cucumber-salad": {
    "name": "Caribbean Marinated Cucumber Salad",
    "sourceName": "Caribbean Marinated Cucumber Salad"
  },
  "moroccan-carrot-salad": {
    "name": "Moroccan Carrot Salad",
    "sourceName": "Moroccan Carrot Salad"
  },
  "indian-style-chickpea-potato-salad": {
    "name": "Indian Style Chickpea & Potato Salad",
    "sourceName": "Indian Style Chickpea & Potato Salad"
  },
  "plant-based-italian-inspired-sausage": {
    "name": "Plant Based Italian Inspired Sausage",
    "sourceName": "Plant Based Italian Inspired Sausage"
  },
  "mexican-taco-pizza": {
    "name": "Mexican Taco Pizza",
    "sourceName": "Mexican Taco Pizza"
  },
  "cheese-pizza": {
    "name": "Cheese Pizza",
    "sourceName": "Cheese Pizza"
  },
  "raspberry-danish": {
    "name": "Raspberry Danish",
    "sourceName": "Raspberry Danish"
  },
  "oatmeal-raisin-cookies": {
    "name": "Oatmeal Raisin Cookies",
    "sourceName": "Oatmeal Raisin Cookies"
  },
  "cheesecake-blueberry": {
    "name": "Cheesecake (Blueberry)",
    "sourceName": "Cheesecake (Blueberry)"
  },
  "coconut-cream-pudding": {
    "name": "Coconut Cream Pudding",
    "sourceName": "Coconut Cream Pudding"
  },
  "chocolate-chia-parfait": {
    "name": "Chocolate Chia Parfait",
    "sourceName": "Chocolate Chia Parfait"
  },
  "biryani-rice-mix": {
    "name": "Biryani Rice Mix",
    "sourceName": "Biryani Rice Mix"
  },
  "goan-fish-curry": {
    "name": "Goan Fish Curry",
    "sourceName": "Goan Fish Curry"
  },
  "vegetable-biryani-with-chickpeas": {
    "name": "Vegetable Biryani with Chickpeas",
    "sourceName": "Vegetable Biryani with Chickpeas"
  },
  "homemade-potato-wedges": {
    "name": "Homemade Potato Wedges",
    "sourceName": "Homemade Potato Wedges"
  },
  "mushroom-and-pea-coconut-korma": {
    "name": "Mushroom and Pea Coconut Korma",
    "sourceName": "Mushroom and Pea Coconut Korma"
  },
  "curried-cauliflower": {
    "name": "Curried Cauliflower",
    "sourceName": "Curried Cauliflower"
  },
  "matar-paneer": {
    "name": "Matar Paneer",
    "sourceName": "Matar Paneer"
  },
  "chana-masala": {
    "name": "Chana Masala",
    "sourceName": "Chana Masala"
  },
  "aloo-gobhi": {
    "name": "Aloo Gobhi",
    "sourceName": "Aloo Gobhi"
  },
  "vegetable-samosas": {
    "name": "Vegetable Samosas",
    "sourceName": "Vegetable Samosas"
  },
  "roasted-mixed-peppers": {
    "name": "Roasted Mixed Peppers",
    "sourceName": "Roasted Mixed Peppers"
  },
  "louisiana-chicken-rice-soup": {
    "name": "Louisiana Chicken Rice Soup",
    "sourceName": "Louisiana Chicken Rice Soup"
  },
  "pasta-bean-soup": {
    "name": "Pasta Bean Soup",
    "sourceName": "Pasta Bean Soup"
  },
  "jerk-chicken-sandwich": {
    "name": "Jerk Chicken Sandwich",
    "sourceName": "Jerk Chicken Sandwich"
  },
  "vegetable-cheese-sandwich": {
    "name": "Vegetable Cheese Sandwich",
    "sourceName": "Vegetable Cheese Sandwich"
  },
  "cooked-yellow-split-peas": {
    "name": "Cooked Yellow Split Peas",
    "sourceName": "Cooked Yellow Split Peas"
  },
  "baba-ganoush": {
    "name": "Baba Ganoush",
    "sourceName": "Baba Ganoush"
  },
  "dip-garlic-creamy-sauce-44-ml-cdn": {
    "name": "Creamy Garlic Dip",
    "sourceName": "Dip, Garlic, Creamy Sauce, 44 ml, CDN"
  },
  "kalamata-olives": {
    "name": "Kalamata Olives",
    "sourceName": "Kalamata Olives"
  },
  "tomato-and-cucumber-salad": {
    "name": "Tomato and Cucumber Salad",
    "sourceName": "Tomato and Cucumber Salad"
  },
  "whole-wheat-pita-bread": {
    "name": "Whole Wheat Pita Bread",
    "sourceName": "Whole Wheat Pita Bread"
  },
  "falafel-balls": {
    "name": "Falafel Balls",
    "sourceName": "Falafel Balls"
  },
  "lemon-chicken": {
    "name": "Lemon Chicken",
    "sourceName": "Lemon Chicken"
  },
  "roasted-red-beet-and-orange-salad": {
    "name": "Roasted Red Beet and Orange Salad",
    "sourceName": "Roasted Red Beet and Orange Salad"
  },
  "high-protein-salad": {
    "name": "High Protein Salad",
    "sourceName": "High Protein Salad"
  },
  "mediterranean-salad-with-tuna": {
    "name": "Mediterranean Salad with Tuna",
    "sourceName": "Mediterranean Salad with Tuna"
  },
  "pesto-penne-with-peas-and-tomato-salad": {
    "name": "Pesto Penne with Peas and Tomato Salad",
    "sourceName": "Pesto Penne with Peas and Tomato Salad"
  },
  "black-bean-veggie-burger-deluxe-rd": {
    "name": "Black Bean Veggie Burger Deluxe (RD)",
    "sourceName": "Black Bean Veggie Burger Deluxe (RD)"
  },
  "golden-fried-onion-rings": {
    "name": "Golden Fried Onion Rings",
    "sourceName": "Golden Fried Onion Rings"
  },
  "rotini-pasta": {
    "name": "Rotini Pasta",
    "sourceName": "Rotini Pasta"
  },
  "marinara-sauce": {
    "name": "Marinara Sauce",
    "sourceName": "Marinara Sauce"
  },
  "pesto": {
    "name": "Pesto",
    "sourceName": "Pesto"
  },
  "vidalia-onions-diced": {
    "name": "Diced Vidalia Onions",
    "sourceName": "Vidalia Onions, Diced"
  },
  "chopped-garlic": {
    "name": "Chopped Garlic",
    "sourceName": "Chopped Garlic"
  },
  "artichokes": {
    "name": "Artichokes",
    "sourceName": "Artichokes"
  },
  "ground-veggie-mexican-chipotle-crumble": {
    "name": "Ground Veggie Mexican Chipotle Crumble",
    "sourceName": "Ground Veggie Mexican Chipotle Crumble"
  },
  "breakfast-ham": {
    "name": "Breakfast Ham",
    "sourceName": "Breakfast Ham"
  },
  "shredded-mozzarella-cheese": {
    "name": "Shredded Mozzarella Cheese",
    "sourceName": "Shredded Mozzarella Cheese"
  },
  "parmesan-cheese": {
    "name": "Parmesan Cheese",
    "sourceName": "Parmesan Cheese"
  },
  "the-great-canadian-pizza": {
    "name": "The Great Canadian Pizza",
    "sourceName": "The Great Canadian Pizza"
  },
  "grilled-pesto-and-chicken-pizza": {
    "name": "Grilled Pesto and Chicken Pizza",
    "sourceName": "Grilled Pesto and Chicken Pizza"
  },
  "morning-glory-muffins": {
    "name": "Morning Glory Muffins",
    "sourceName": "Morning Glory Muffins"
  },
  "raisin-scone": {
    "name": "Raisin Scone",
    "sourceName": "Raisin Scone"
  },
  "cherry-tarts": {
    "name": "Cherry Tarts",
    "sourceName": "Cherry Tarts"
  },
  "vanilla-cupcake": {
    "name": "Vanilla Cupcake",
    "sourceName": "Vanilla Cupcake"
  },
  "miso-marinated-cod-fillets": {
    "name": "Miso Marinated Cod Fillets",
    "sourceName": "Miso Marinated Cod Fillets"
  },
  "breaded-pork-cutlets": {
    "name": "Breaded Pork Cutlets",
    "sourceName": "Breaded Pork Cutlets"
  },
  "garlic-rice": {
    "name": "Garlic Rice",
    "sourceName": "Garlic Rice"
  },
  "thai-pumpkin-curry-sauce": {
    "name": "Thai Pumpkin Curry Sauce",
    "sourceName": "Thai Pumpkin Curry Sauce"
  },
  "buttered-poached-mini-potatoes": {
    "name": "Buttered Poached Mini Potatoes",
    "sourceName": "Buttered Poached Mini Potatoes"
  },
  "sesame-kale": {
    "name": "Sesame Kale",
    "sourceName": "Sesame Kale"
  },
  "kung-pao-style-cauliflower-and-beans": {
    "name": "Kung Pao-Style Cauliflower and Beans",
    "sourceName": "Kung Pao-Style Cauliflower and Beans"
  },
  "thai-rice-noodles": {
    "name": "Thai Rice Noodles",
    "sourceName": "Thai Rice Noodles"
  },
  "roasted-sweet-potatoes": {
    "name": "Roasted Sweet Potatoes",
    "sourceName": "Roasted Sweet Potatoes"
  },
  "gingered-carrots": {
    "name": "Gingered Carrots",
    "sourceName": "Gingered Carrots"
  },
  "mongolian-beef-stir-fry": {
    "name": "Mongolian Beef Stir-Fry",
    "sourceName": "Mongolian Beef Stir-Fry"
  },
  "veggie-medley-chop-suey": {
    "name": "Veggie Medley Chop Suey",
    "sourceName": "Veggie Medley Chop Suey"
  },
  "vegetable-fried-rice": {
    "name": "Vegetable Fried Rice",
    "sourceName": "Vegetable Fried Rice"
  },
  "teriyaki-chicken-poke-bowl": {
    "name": "Teriyaki Chicken Poke Bowl",
    "sourceName": "Teriyaki Chicken Poke Bowl"
  },
  "california-cobb-salad": {
    "name": "California Cobb Salad",
    "sourceName": "California Cobb Salad"
  },
  "asian-cucumber-salad": {
    "name": "Asian Cucumber Salad",
    "sourceName": "Asian Cucumber Salad"
  },
  "sweet-potato-and-yukon-gold-salad": {
    "name": "Sweet Potato and Yukon Gold Salad",
    "sourceName": "Sweet Potato and Yukon Gold Salad"
  },
  "santa-fe-grilled-cheese": {
    "name": "Santa Fe Grilled Cheese",
    "sourceName": "Santa Fe Grilled Cheese"
  },
  "butter-chicken-flat-bread": {
    "name": "Butter Chicken Flat Bread",
    "sourceName": "Butter Chicken Flat Bread"
  },
  "blueberry-danish": {
    "name": "Blueberry Danish",
    "sourceName": "Blueberry Danish"
  },
  "double-chocolate-chip-gourmet-cookie": {
    "name": "Double Chocolate Chip Gourmet Cookie",
    "sourceName": "Double Chocolate Chip Gourmet Cookie"
  },
  "tiramisu-layered-cake": {
    "name": "Tiramisu Layered Cake",
    "sourceName": "Tiramisu Layered Cake"
  },
  "fruit-jelly-grape-with-whipped-topping": {
    "name": "Fruit Jelly (Grape) with Whipped Topping",
    "sourceName": "Fruit Jelly (Grape) with Whipped Topping"
  },
  "oreo-cookie-cupcake-mix": {
    "name": "Oreo Cookie Cupcake (Mix)",
    "sourceName": "Oreo Cookie Cupcake (Mix)"
  },
  "east-coast-fish-stew": {
    "name": "East Coast Fish Stew",
    "sourceName": "East Coast Fish Stew"
  },
  "house-slow-roasted-beef": {
    "name": "House Slow Roasted Beef",
    "sourceName": "House Slow Roasted Beef"
  },
  "black-bean-rice": {
    "name": "Black Bean Rice",
    "sourceName": "Black Bean Rice"
  },
  "black-bean-and-sweet-potato-chili": {
    "name": "Black Bean and Sweet Potato Chili",
    "sourceName": "Black Bean and Sweet Potato Chili"
  },
  "roasted-peruvian-potatoes": {
    "name": "Roasted Peruvian Potatoes",
    "sourceName": "Roasted Peruvian Potatoes"
  },
  "roasted-root-vegetables": {
    "name": "Roasted Root Vegetables",
    "sourceName": "Roasted Root Vegetables"
  },
  "brussels-sprouts": {
    "name": "Brussels Sprouts",
    "sourceName": "Brussels Sprouts"
  },
  "spiced-chick-n-and-okra-stew": {
    "name": "Spiced Chick'n and Okra Stew",
    "sourceName": "Spiced Chick'n and Okra Stew"
  },
  "tex-mex-style-cauliflower-steaks": {
    "name": "Tex-Mex Style Cauliflower Steaks",
    "sourceName": "Tex-Mex Style Cauliflower Steaks"
  },
  "cumin-honey-roasted-carrots": {
    "name": "Cumin & Honey Roasted Carrots",
    "sourceName": "Cumin & Honey Roasted Carrots"
  },
  "chipotle-baked-beans": {
    "name": "Chipotle Baked Beans",
    "sourceName": "Chipotle Baked Beans"
  },
  "turkey-lentil-soup": {
    "name": "Turkey Lentil Soup",
    "sourceName": "Turkey Lentil Soup"
  },
  "moroccan-inspired-vegetable-soup": {
    "name": "Moroccan Inspired Vegetable Soup",
    "sourceName": "Moroccan Inspired Vegetable Soup"
  },
  "ultimate-peameal-bacon-sandwich": {
    "name": "Ultimate Peameal Bacon Sandwich",
    "sourceName": "Ultimate Peameal Bacon Sandwich"
  },
  "salumeria-caprese-sandwich": {
    "name": "Salumeria Caprese Sandwich",
    "sourceName": "Salumeria Caprese Sandwich"
  },
  "szechuan-chicken-stir-fry": {
    "name": "Szechuan Chicken Stir-Fry",
    "sourceName": "Szechuan Chicken Stir-Fry"
  },
  "tofu-bulgogi": {
    "name": "Tofu Bulgogi",
    "sourceName": "Tofu Bulgogi"
  },
  "sushi-dynamite-sushi-roll-9-ea-cdn": {
    "name": "Dynamite Sushi Roll",
    "sourceName": "Sushi, Dynamite Sushi Roll, 9 ea, CDN"
  },
  "lebanese-fattoush-salad-with-beans": {
    "name": "Lebanese Fattoush Salad with Beans",
    "sourceName": "Lebanese Fattoush Salad with Beans"
  },
  "marinated-chickpea-salad": {
    "name": "Marinated Chickpea Salad",
    "sourceName": "Marinated Chickpea Salad"
  },
  "roasted-beet-salad": {
    "name": "Roasted Beet Salad",
    "sourceName": "Roasted Beet Salad"
  },
  "quinoa-corn-and-black-bean-side-salad": {
    "name": "Quinoa, Corn and Black Bean Side Salad",
    "sourceName": "Quinoa, Corn and Black Bean Side Salad"
  },
  "battered-fried-fish-pollock-fillet": {
    "name": "Battered Fried Fish-Pollock Fillet",
    "sourceName": "Battered Fried Fish-Pollock Fillet"
  },
  "coleslaw": {
    "name": "Coleslaw",
    "sourceName": "Coleslaw"
  },
  "tartar-sauce": {
    "name": "Tartar Sauce",
    "sourceName": "Tartar Sauce"
  },
  "buffalo-chicken-pizza": {
    "name": "Buffalo Chicken Pizza",
    "sourceName": "Buffalo Chicken Pizza"
  },
  "hawaiian-pizza": {
    "name": "Hawaiian Pizza",
    "sourceName": "Hawaiian Pizza"
  },
  "caramel-coffee-cake-swirl-muffins": {
    "name": "Caramel Coffee Cake Swirl Muffins",
    "sourceName": "Caramel Coffee Cake Swirl Muffins"
  },
  "cheddar-scone": {
    "name": "Cheddar Scone",
    "sourceName": "Cheddar Scone"
  },
  "rice-krispie-squares": {
    "name": "Rice Krispie Squares",
    "sourceName": "Rice Krispie Squares"
  },
  "mixed-berry-crumble-squares": {
    "name": "Mixed Berry Crumble Squares",
    "sourceName": "Mixed Berry Crumble Squares"
  },
  "banana-chocolate-chip-mini-loaf": {
    "name": "Banana Chocolate Chip Mini Loaf",
    "sourceName": "Banana Chocolate Chip Mini Loaf"
  },
  "chicken-mole": {
    "name": "Chicken Mole",
    "sourceName": "Chicken Mole"
  },
  "spanish-style-fish-pollock": {
    "name": "Spanish Style Fish (Pollock)",
    "sourceName": "Spanish Style Fish (Pollock)"
  },
  "mexican-rice-pilaf": {
    "name": "Mexican Rice Pilaf",
    "sourceName": "Mexican Rice Pilaf"
  },
  "cajun-spicy-potato-medallions": {
    "name": "Cajun Spicy Potato Medallions",
    "sourceName": "Cajun Spicy Potato Medallions"
  },
  "chipotle-bean-and-corn-stew": {
    "name": "Chipotle Bean and Corn Stew",
    "sourceName": "Chipotle Bean and Corn Stew"
  },
  "roasted-corn": {
    "name": "Roasted Corn",
    "sourceName": "Roasted Corn"
  },
  "chili-lime-marinated-roasted-turnip": {
    "name": "Chili Lime Marinated & Roasted Turnip",
    "sourceName": "Chili Lime Marinated & Roasted Turnip"
  },
  "bean-tostada": {
    "name": "Bean Tostada",
    "sourceName": "Bean Tostada"
  },
  "refried-beans": {
    "name": "Refried Beans",
    "sourceName": "Refried Beans"
  },
  "singapore-noodles": {
    "name": "Singapore Noodles",
    "sourceName": "Singapore Noodles"
  },
  "soba-noodle-and-edamame-salad": {
    "name": "Soba Noodle and Edamame Salad",
    "sourceName": "Soba Noodle and Edamame Salad"
  },
  "barley-and-apple-salad-with-kale": {
    "name": "Barley and Apple Salad with Kale",
    "sourceName": "Barley and Apple Salad with Kale"
  },
  "carolina-salad": {
    "name": "Carolina Salad",
    "sourceName": "Carolina Salad"
  },
  "roasted-root-vegetable-salad": {
    "name": "Roasted Root Vegetable Salad",
    "sourceName": "Roasted Root Vegetable Salad"
  },
  "cubano-pork-slider": {
    "name": "Cubano Pork Slider",
    "sourceName": "Cubano Pork Slider"
  },
  "brown-gravy": {
    "name": "Brown Gravy",
    "sourceName": "Brown Gravy"
  },
  "corn-relish": {
    "name": "Corn Relish",
    "sourceName": "Corn Relish"
  },
  "caribbean-chicken-and-pineapple-pizza": {
    "name": "Caribbean Chicken and Pineapple Pizza",
    "sourceName": "Caribbean Chicken and Pineapple Pizza"
  },
  "chocolate-avalanche-danish": {
    "name": "Chocolate Avalanche Danish",
    "sourceName": "Chocolate Avalanche Danish"
  },
  "lemon-curd-tart": {
    "name": "Lemon Curd Tart",
    "sourceName": "Lemon Curd Tart"
  },
  "vanilla-pudding": {
    "name": "Vanilla Pudding",
    "sourceName": "Vanilla Pudding"
  },
  "strawberry-shortcake-parfait": {
    "name": "Strawberry Shortcake Parfait",
    "sourceName": "Strawberry Shortcake Parfait"
  },
  "beef-stir-fry": {
    "name": "Beef Stir-Fry",
    "sourceName": "Beef Stir-Fry"
  },
  "fish-cake-soup": {
    "name": "Fish Cake Soup",
    "sourceName": "Fish Cake Soup"
  },
  "basmati-rice-with-green-onions-and-parsley": {
    "name": "Basmati Rice with Green Onions and Parsley",
    "sourceName": "Basmati Rice with Green Onions and Parsley"
  },
  "braised-escarole": {
    "name": "Braised Escarole",
    "sourceName": "Braised Escarole"
  },
  "sweet-and-spicy-cauliflower": {
    "name": "Sweet and Spicy Cauliflower",
    "sourceName": "Sweet and Spicy Cauliflower"
  },
  "chili-garlic-bok-choy": {
    "name": "Chili Garlic Bok Choy",
    "sourceName": "Chili Garlic Bok Choy"
  },
  "sesame-roasted-brussel-sprouts": {
    "name": "Sesame Roasted Brussel Sprouts",
    "sourceName": "Sesame Roasted Brussel Sprouts"
  },
  "green-beans-in-oyster-sauce": {
    "name": "Green Beans in Oyster Sauce",
    "sourceName": "Green Beans in Oyster Sauce"
  },
  "korean-bbq-tofu": {
    "name": "Korean BBQ Tofu",
    "sourceName": "Korean BBQ Tofu"
  },
  "asian-mixed-vegetable-blend": {
    "name": "Asian Mixed Vegetable Blend",
    "sourceName": "Asian Mixed Vegetable Blend"
  },
  "breaded-zucchini-sticks": {
    "name": "Breaded Zucchini Sticks",
    "sourceName": "Breaded Zucchini Sticks"
  },
  "mulligatawny-soup": {
    "name": "Mulligatawny Soup",
    "sourceName": "Mulligatawny Soup"
  },
  "turkey-and-swiss-sandwich": {
    "name": "Turkey and Swiss Sandwich",
    "sourceName": "Turkey and Swiss Sandwich"
  },
  "cheddar-and-tomato-sandwich": {
    "name": "Cheddar and Tomato Sandwich",
    "sourceName": "Cheddar and Tomato Sandwich"
  },
  "fresh-pineapple-stir-fry-with-black-beans": {
    "name": "Fresh Pineapple Stir-Fry with Black Beans",
    "sourceName": "Fresh Pineapple Stir-Fry with Black Beans"
  },
  "tofu-teriyaki-rice-bowl": {
    "name": "Tofu Teriyaki Rice Bowl",
    "sourceName": "Tofu Teriyaki Rice Bowl"
  },
  "blackened-chicken-caesar-salad": {
    "name": "Blackened Chicken Caesar Salad",
    "sourceName": "Blackened Chicken Caesar Salad"
  },
  "roasted-cauliflower-raisin-salad": {
    "name": "Roasted Cauliflower & Raisin Salad",
    "sourceName": "Roasted Cauliflower & Raisin Salad"
  },
  "kachumber-salad-indian-inspired-salad": {
    "name": "Kachumber Salad (Indian Inspired Salad)",
    "sourceName": "Kachumber Salad (Indian Inspired Salad)"
  },
  "lime-cilantro-shrimp-burrito": {
    "name": "Lime Cilantro Shrimp Burrito",
    "sourceName": "Lime Cilantro Shrimp Burrito"
  },
  "grilled-vegetable-and-cheese-quesadilla": {
    "name": "Grilled Vegetable and Cheese Quesadilla",
    "sourceName": "Grilled Vegetable and Cheese Quesadilla"
  },
  "breakfast-pizza": {
    "name": "Breakfast Pizza",
    "sourceName": "Breakfast Pizza"
  },
  "blueberry-muffins": {
    "name": "Blueberry Muffins",
    "sourceName": "Blueberry Muffins",
    "image": "blueberry-muffin.jpg"
  },
  "plain-scone": {
    "name": "Plain Scone",
    "sourceName": "Plain Scone"
  },
  "easy-red-velvet-cupcakes": {
    "name": "Easy Red Velvet Cupcakes",
    "sourceName": "Easy Red Velvet Cupcakes"
  },
  "denver-omelette": {
    "name": "Denver Omelette",
    "sourceName": "Denver Omelette"
  },
  "eggs-benedict": {
    "name": "Eggs Benedict",
    "sourceName": "Eggs Benedict"
  },
  "roasted-leg-of-lamb-with-rosemary-demi-and-mint-sauce": {
    "name": "Roasted Leg of Lamb with Rosemary Demi and Mint Sauce",
    "sourceName": "Roasted Leg of Lamb with Rosemary Demi and Mint Sauce"
  },
  "cilantro-pesto-rice": {
    "name": "Cilantro Pesto Rice",
    "sourceName": "Cilantro Pesto Rice"
  },
  "lemon-and-oregano-roasted-potatoes": {
    "name": "Lemon and Oregano Roasted Potatoes",
    "sourceName": "Lemon and Oregano Roasted Potatoes"
  },
  "thyme-roasted-butternut-squash": {
    "name": "Thyme Roasted Butternut Squash",
    "sourceName": "Thyme Roasted Butternut Squash"
  },
  "waffles-with-maple-syrup": {
    "name": "Waffles with Maple Syrup",
    "sourceName": "Waffles with Maple Syrup"
  },
  "showtime-fajita-station-tofu": {
    "name": "Showtime Fajita Station-Tofu",
    "sourceName": "Showtime Fajita Station-Tofu"
  },
  "grilled-tofu-steaks-with-chimichurri-sauce": {
    "name": "Grilled Tofu Steaks with Chimichurri Sauce",
    "sourceName": "Grilled Tofu Steaks with Chimichurri Sauce"
  },
  "chicken-tinga": {
    "name": "Chicken Tinga",
    "sourceName": "Chicken Tinga"
  },
  "lime-wedge": {
    "name": "Lime Wedge",
    "sourceName": "Lime Wedge"
  },
  "sauteed-peppers-and-red-onions": {
    "name": "Sauteed Peppers and Red Onions",
    "sourceName": "Sauteed Peppers and Red Onions"
  },
  "french-toast": {
    "name": "French Toast",
    "sourceName": "French Toast"
  },
  "strawberry-coulis": {
    "name": "Strawberry Coulis",
    "sourceName": "Strawberry Coulis"
  },
  "pineapple-salsa": {
    "name": "Pineapple Salsa",
    "sourceName": "Pineapple Salsa"
  },
  "chocolate-syrup": {
    "name": "Chocolate Syrup",
    "sourceName": "Chocolate Syrup"
  },
  "whipped-cream": {
    "name": "Whipped Cream",
    "sourceName": "Whipped Cream"
  },
  "hot-honey-drizzle": {
    "name": "Hot Honey Drizzle",
    "sourceName": "Hot Honey Drizzle"
  },
  "lemon-creme": {
    "name": "Lemon Crème",
    "sourceName": "Lemon Crème"
  },
  "semi-sweet-chocolate-chips": {
    "name": "Semi Sweet Chocolate Chips",
    "sourceName": "Semi Sweet Chocolate Chips"
  },
  "toasted-shredded-coconut": {
    "name": "Toasted Shredded Coconut",
    "sourceName": "Toasted Shredded Coconut"
  },
  "kung-pao-chicken": {
    "name": "Kung Pao Chicken",
    "sourceName": "Kung Pao Chicken"
  },
  "mixed-vegetable-stir-fry": {
    "name": "Mixed Vegetable Stir-Fry",
    "sourceName": "Mixed Vegetable Stir-Fry"
  },
  "vegetable-lo-mein": {
    "name": "Vegetable Lo Mein",
    "sourceName": "Vegetable Lo Mein"
  },
  "apple-grain-salad": {
    "name": "Apple Grain Salad",
    "sourceName": "Apple Grain Salad"
  },
  "caprese-pasta-salad": {
    "name": "Caprese Pasta Salad",
    "sourceName": "Caprese Pasta Salad"
  },
  "spinach-salad-with-bacon-egg": {
    "name": "Spinach Salad with Bacon & Egg",
    "sourceName": "Spinach Salad with Bacon & Egg"
  },
  "spiced-potato-and-tofu-breakfast-tacos": {
    "name": "Spiced Potato and Tofu Breakfast Tacos",
    "sourceName": "Spiced Potato and Tofu Breakfast Tacos"
  },
  "chicken-pesto-with-mushroom-pizza": {
    "name": "Chicken Pesto with Mushroom Pizza",
    "sourceName": "Chicken Pesto with Mushroom Pizza"
  },
  "pizza-primavera": {
    "name": "Pizza Primavera",
    "sourceName": "Pizza Primavera"
  },
  "mini-raspberry-danish": {
    "name": "Mini Raspberry Danish",
    "sourceName": "Mini Raspberry Danish"
  },
  "apple-tarts": {
    "name": "Apple Tarts",
    "sourceName": "Apple Tarts"
  },
  "fruit-jelly-lime-with-whipped-topping": {
    "name": "Fruit Jelly (Lime) with Whipped Topping",
    "sourceName": "Fruit Jelly (Lime) with Whipped Topping"
  },
  "nanaimo-bar-squares": {
    "name": "Nanaimo Bar Squares",
    "sourceName": "Nanaimo Bar Squares"
  },
  "roasted-wild-pacific-salmon-with-lemon-caper-sauce": {
    "name": "Roasted Wild Pacific Salmon with Lemon Caper Sauce",
    "sourceName": "Roasted Wild Pacific Salmon with Lemon Caper Sauce"
  },
  "baked-meatloaf": {
    "name": "Baked Meatloaf",
    "sourceName": "Baked Meatloaf"
  },
  "bbq-cajun-cauliflower": {
    "name": "BBQ Cajun Cauliflower",
    "sourceName": "BBQ Cajun Cauliflower"
  },
  "bc-whipped-yukon-potatoes": {
    "name": "BC Whipped Yukon Potatoes",
    "sourceName": "BC Whipped Yukon Potatoes"
  },
  "braised-greens": {
    "name": "Braised Greens",
    "sourceName": "Braised Greens"
  },
  "corn-with-red-peppers": {
    "name": "Corn with Red Peppers",
    "sourceName": "Corn with Red Peppers"
  },
  "maple-glazed-beets-and-parsnips": {
    "name": "Maple Glazed Beets and Parsnips",
    "sourceName": "Maple Glazed Beets and Parsnips"
  },
  "savoury-quinoa-pilaf": {
    "name": "Savoury Quinoa Pilaf",
    "sourceName": "Savoury Quinoa Pilaf"
  },
  "curried-roasted-vegetable-stew": {
    "name": "Curried Roasted Vegetable Stew",
    "sourceName": "Curried Roasted Vegetable Stew"
  },
  "mac-and-cheese": {
    "name": "Mac and Cheese",
    "sourceName": "Mac and Cheese"
  },
  "jalapeno-cornbread": {
    "name": "Jalapeno Cornbread",
    "sourceName": "Jalapeno Cornbread"
  },
  "buttered-peas": {
    "name": "Buttered Peas",
    "sourceName": "Buttered Peas"
  },
  "chicken-leek-and-rice-soup": {
    "name": "Chicken, Leek and Rice Soup",
    "sourceName": "Chicken, Leek and Rice Soup"
  },
  "roasted-potato-and-leek-soup": {
    "name": "Roasted Potato and Leek Soup",
    "sourceName": "Roasted Potato and Leek Soup"
  },
  "tuna-salad-filling": {
    "name": "Tuna Salad Filling",
    "sourceName": "Tuna Salad Filling"
  },
  "roasted-ham-german-mustard-and-classic-pickle-sandwich": {
    "name": "Roasted Ham, German Mustard and Classic Pickle Sandwich",
    "sourceName": "Roasted Ham, German Mustard and Classic Pickle Sandwich"
  },
  "green-goddess-wrap": {
    "name": "Green Goddess Wrap",
    "sourceName": "Green Goddess Wrap"
  },
  "spicy-szechuan-sauce": {
    "name": "Spicy Szechuan Sauce",
    "sourceName": "Spicy Szechuan Sauce"
  },
  "bbq-chicken": {
    "name": "BBQ Chicken",
    "sourceName": "BBQ Chicken"
  },
  "chipotle-bbq-pulled-pork": {
    "name": "Chipotle BBQ Pulled Pork",
    "sourceName": "Chipotle BBQ Pulled Pork"
  },
  "tuna-poke-bowl": {
    "name": "Tuna Poke Bowl",
    "sourceName": "Tuna Poke Bowl"
  },
  "sweet-garden-corn-salad": {
    "name": "Sweet Garden Corn Salad",
    "sourceName": "Sweet Garden Corn Salad"
  },
  "teriyaki-chicken-burger-with-grilled-pineapple": {
    "name": "Teriyaki Chicken Burger with Grilled Pineapple",
    "sourceName": "Teriyaki  Chicken Burger with Grilled Pineapple"
  },
  "vegetarian-tofu-burrito": {
    "name": "Vegetarian Tofu Burrito",
    "sourceName": "Vegetarian Tofu Burrito"
  },
  "double-chocolate-muffins": {
    "name": "Double Chocolate Muffins",
    "sourceName": "Double Chocolate Muffins"
  },
  "dried-cranberry-scone": {
    "name": "Dried Cranberry Scone",
    "sourceName": "Dried Cranberry Scone"
  },
  "black-forest-cake": {
    "name": "Black Forest Cake",
    "sourceName": "Black Forest Cake"
  },
  "cherry-pudding-cake": {
    "name": "Cherry Pudding Cake",
    "sourceName": "Cherry Pudding Cake"
  },
  "applewood-bacon-and-mushroom-egg-skillet": {
    "name": "Applewood Bacon and Mushroom Egg Skillet",
    "sourceName": "Applewood Bacon and Mushroom Egg Skillet"
  },
  "corned-beef-hash": {
    "name": "Corned Beef Hash",
    "sourceName": "Corned Beef Hash"
  },
  "lemon-pepper-pork-roast": {
    "name": "Lemon Pepper Pork Roast",
    "sourceName": "Lemon Pepper Pork Roast"
  },
  "plantain-and-black-bean-stew": {
    "name": "Plantain and Black Bean Stew",
    "sourceName": "Plantain and Black Bean Stew"
  },
  "fresh-green-beans": {
    "name": "Fresh Green Beans",
    "sourceName": "Fresh Green Beans"
  },
  "baked-tortilla-chips": {
    "name": "Baked Tortilla Chips",
    "sourceName": "Baked Tortilla Chips"
  },
  "cheese-nachos": {
    "name": "Cheese Nachos",
    "sourceName": "Cheese Nachos"
  },
  "salsa-roja": {
    "name": "Salsa Roja",
    "sourceName": "Salsa Roja"
  },
  "salsa-verde": {
    "name": "Salsa Verde",
    "sourceName": "Salsa Verde"
  },
  "pancakes": {
    "name": "Pancakes",
    "sourceName": "Pancakes"
  },
  "sushi-roll-imitation-crab": {
    "name": "Sushi Roll Imitation Crab",
    "sourceName": "Sushi Roll Imitation Crab"
  },
  "roasted-fennel-and-pear-salad": {
    "name": "Roasted Fennel and Pear Salad",
    "sourceName": "Roasted Fennel and Pear Salad"
  },
  "tuscan-bread-salad": {
    "name": "Tuscan Bread Salad",
    "sourceName": "Tuscan Bread Salad"
  },
  "vegetarian-breakfast-wrap": {
    "name": "Vegetarian Breakfast Wrap",
    "sourceName": "Vegetarian Breakfast Wrap"
  },
  "tater-tots": {
    "name": "Tater Tots",
    "sourceName": "Tater Tots"
  },
  "cherry-danish": {
    "name": "Cherry Danish",
    "sourceName": "Cherry Danish"
  },
  "easy-vegan-chocolate-cake": {
    "name": "Easy Vegan Chocolate Cake",
    "sourceName": "Easy Vegan Chocolate Cake"
  },
  "oreo-crumb-squares": {
    "name": "Oreo Crumb Squares",
    "sourceName": "Oreo Crumb Squares"
  },
  "oven-fried-chicken": {
    "name": "Oven Fried Chicken",
    "sourceName": "Oven Fried Chicken"
  },
  "cheeseburger-mac-cheese": {
    "name": "Cheeseburger Mac & Cheese",
    "sourceName": "Cheeseburger Mac & Cheese"
  },
  "dirty-rice": {
    "name": "Dirty Rice",
    "sourceName": "Dirty Rice"
  },
  "chips-potato-regular-40-g-cdn": {
    "name": "Chips, Potato, Regular, 40 g, CDN",
    "sourceName": "Chips, Potato, Regular, 40 g, CDN"
  },
  "succotash": {
    "name": "Succotash",
    "sourceName": "Succotash"
  },
  "balsamic-roasted-brussel-sprouts": {
    "name": "Balsamic Roasted Brussel Sprouts",
    "sourceName": "Balsamic Roasted Brussel Sprouts"
  },
  "roasted-brussel-sprouts": {
    "name": "Roasted Brussel Sprouts",
    "sourceName": "Roasted Brussel Sprouts"
  },
  "grilled-peppers-and-onions": {
    "name": "Grilled Peppers and Onions",
    "sourceName": "Grilled Peppers and Onions"
  },
  "chicken-encilada-soup": {
    "name": "Chicken Encilada Soup",
    "sourceName": "Chicken Encilada Soup"
  },
  "italian-tomato-and-pepper-soup": {
    "name": "Italian Tomato and Pepper Soup",
    "sourceName": "Italian Tomato and Pepper Soup"
  },
  "buffalo-chicken-wrap": {
    "name": "Buffalo Chicken Wrap",
    "sourceName": "Buffalo Chicken Wrap"
  },
  "caprese-sandwich": {
    "name": "Caprese Sandwich",
    "sourceName": "Caprese Sandwich"
  },
  "asian-inspired-quinoa-salad": {
    "name": "Asian Inspired Quinoa Salad",
    "sourceName": "Asian Inspired Quinoa Salad"
  },
  "orzo-vegetable-salad-with-green-beans": {
    "name": "Orzo Vegetable Salad with Green Beans",
    "sourceName": "Orzo Vegetable Salad with Green Beans"
  },
  "crispy-chicken-caesar-wrap": {
    "name": "Crispy Chicken Caesar Wrap",
    "sourceName": "Crispy Chicken Caesar Wrap"
  },
  "spicy-black-bean-quesadilla": {
    "name": "Spicy Black Bean Quesadilla",
    "sourceName": "Spicy Black Bean Quesadilla"
  },
  "thai-red-curry-sauce": {
    "name": "Thai Red Curry Sauce",
    "sourceName": "Thai Red Curry Sauce"
  },
  "laksa-curry-sauce": {
    "name": "Laksa Curry Sauce",
    "sourceName": "Laksa Curry Sauce"
  },
  "cranberry-orange-low-fat-muffins": {
    "name": "Cranberry Orange Low Fat Muffins",
    "sourceName": "Cranberry Orange Low Fat Muffins"
  },
  "cherry-loaf": {
    "name": "Cherry Loaf",
    "sourceName": "Cherry Loaf"
  },
  "butter-chicken": {
    "name": "Butter Chicken",
    "sourceName": "Butter Chicken"
  },
  "zeera-rice": {
    "name": "Zeera Rice",
    "sourceName": "Zeera Rice"
  },
  "chili-cumin-roasted-potatoes": {
    "name": "Chili Cumin Roasted Potatoes",
    "sourceName": "Chili Cumin Roasted Potatoes"
  },
  "turmeric-roasted-cauliflower": {
    "name": "Turmeric Roasted Cauliflower",
    "sourceName": "Turmeric Roasted Cauliflower"
  },
  "roasted-carrots": {
    "name": "Roasted Carrots",
    "sourceName": "Roasted Carrots"
  },
  "tofu-keema-pau-indian-spiced-tofu": {
    "name": "Tofu Keema Pau Indian Spiced Tofu",
    "sourceName": "Tofu Keema Pau Indian Spiced Tofu"
  },
  "mango-chutney": {
    "name": "Mango Chutney",
    "sourceName": "Mango Chutney"
  },
  "palak-gravy": {
    "name": "Palak Gravy",
    "sourceName": "Palak Gravy"
  },
  "stir-fried-chicken-and-broccoli": {
    "name": "Stir-Fried Chicken and Broccoli",
    "sourceName": "Stir-Fried Chicken and Broccoli"
  },
  "legume-roasted-corn-salad": {
    "name": "Legume Roasted Corn Salad",
    "sourceName": "Legume Roasted Corn Salad"
  },
  "chicken-dijon-and-potato-salad": {
    "name": "Chicken, Dijon and Potato Salad",
    "sourceName": "Chicken, Dijon and Potato Salad"
  },
  "ranch-chopped-salad": {
    "name": "Ranch Chopped Salad",
    "sourceName": "Ranch Chopped Salad"
  },
  "autumn-lentil-and-arugula-salad": {
    "name": "Autumn Lentil and Arugula Salad",
    "sourceName": "Autumn Lentil and Arugula Salad"
  },
  "bbq-glazed-smash-burger": {
    "name": "BBQ Glazed Smash Burger",
    "sourceName": "BBQ Glazed Smash Burger"
  },
  "chocolate-fudge-brownie": {
    "name": "Chocolate Fudge Brownie",
    "sourceName": "Chocolate Fudge Brownie"
  },
  "butterscotch-pudding": {
    "name": "Butterscotch Pudding",
    "sourceName": "Butterscotch Pudding"
  },
  "baked-apple-crisp": {
    "name": "Baked Apple Crisp",
    "sourceName": "Baked Apple Crisp"
  },
  "vietnamese-inspired-lemongrass-chicken": {
    "name": "Vietnamese Inspired Lemongrass Chicken",
    "sourceName": "Vietnamese Inspired Lemongrass Chicken"
  },
  "carrots-with-garlic-and-rosemary": {
    "name": "Carrots with Garlic and Rosemary",
    "sourceName": "Carrots with Garlic and Rosemary"
  },
  "lemongrass-tofu-for-banh-mi": {
    "name": "Lemongrass Tofu for Banh Mi",
    "sourceName": "Lemongrass Tofu for Banh Mi"
  },
  "sweet-and-spicy-bean-stir-fry": {
    "name": "Sweet and Spicy Bean Stir-Fry",
    "sourceName": "Sweet and Spicy Bean Stir-Fry"
  },
  "rice-vermicelli-noodles": {
    "name": "Rice Vermicelli Noodles",
    "sourceName": "Rice Vermicelli Noodles"
  },
  "swiss-chard": {
    "name": "Swiss Chard",
    "sourceName": "Swiss Chard"
  },
  "french-onion-soup": {
    "name": "French Onion Soup",
    "sourceName": "French Onion Soup"
  },
  "autumn-vegetable-soup": {
    "name": "Autumn Vegetable Soup",
    "sourceName": "Autumn Vegetable Soup"
  },
  "roast-beef-and-cheddar-sandwich": {
    "name": "Roast Beef and Cheddar Sandwich",
    "sourceName": "Roast Beef and Cheddar Sandwich"
  },
  "portobello-club-with-smoky-mayo-and-roasted-tomato": {
    "name": "Portobello Club with Smoky Mayo and Roasted Tomato",
    "sourceName": "Portobello Club with Smoky Mayo and Roasted Tomato"
  },
  "kale-and-cabbage-chili-stir-fry": {
    "name": "Kale and Cabbage Chili Stir-Fry",
    "sourceName": "Kale and Cabbage Chili Stir-Fry"
  },
  "arugula-salad-with-white-beans-and-farro": {
    "name": "Arugula Salad with White Beans and Farro",
    "sourceName": "Arugula Salad with White Beans and Farro"
  },
  "italian-inspired-bread-salad": {
    "name": "Italian Inspired Bread Salad",
    "sourceName": "Italian Inspired Bread Salad"
  },
  "latin-chipotle-quinoa-salad": {
    "name": "Latin Chipotle Quinoa Salad",
    "sourceName": "Latin Chipotle Quinoa Salad"
  },
  "banana-chocolate-chunk-muffins": {
    "name": "Banana Chocolate Chunk Muffins",
    "sourceName": "Banana Chocolate Chunk Muffins"
  },
  "chocolate-chip-buttermilk-loaf": {
    "name": "Chocolate Chip Buttermilk Loaf",
    "sourceName": "Chocolate Chip Buttermilk Loaf"
  },
  "herbed-lemon-rice": {
    "name": "Herbed Lemon Rice",
    "sourceName": "Herbed Lemon Rice"
  },
  "garlic-mashed-potatoes": {
    "name": "Garlic Mashed Potatoes",
    "sourceName": "Garlic Mashed Potatoes"
  },
  "roasted-mushrooms-with-thyme": {
    "name": "Roasted Mushrooms with Thyme",
    "sourceName": "Roasted Mushrooms with Thyme"
  },
  "sauteed-beans-tomato": {
    "name": "Sauteed Beans & Tomato",
    "sourceName": "Sauteed Beans & Tomato"
  },
  "lyonnaise-carrots": {
    "name": "Lyonnaise Carrots",
    "sourceName": "Lyonnaise Carrots"
  },
  "cauliflower-lentil-stew": {
    "name": "Cauliflower Lentil Stew",
    "sourceName": "Cauliflower Lentil Stew"
  },
  "barley-pilaf": {
    "name": "Barley Pilaf",
    "sourceName": "Barley Pilaf"
  },
  "mushroom-bourguignonne": {
    "name": "Mushroom Bourguignonne",
    "sourceName": "Mushroom Bourguignonne"
  },
  "sauteed-sugar-snap-peas-with-red-peppers": {
    "name": "Sautéed Sugar Snap Peas with Red Peppers",
    "sourceName": "Sautéed Sugar Snap Peas with Red Peppers"
  },
  "braised-purple-cabbage": {
    "name": "Braised Purple Cabbage",
    "sourceName": "Braised Purple Cabbage"
  },
  "thai-peppered-beef": {
    "name": "Thai Peppered Beef",
    "sourceName": "Thai Peppered Beef"
  },
  "hakka-chinese-inspired-noodles": {
    "name": "Hakka Chinese Inspired Noodles",
    "sourceName": "Hakka Chinese Inspired Noodles"
  },
  "vegetarian-taco-pasta-salad": {
    "name": "Vegetarian Taco Pasta Salad",
    "sourceName": "Vegetarian Taco Pasta Salad"
  },
  "bacon-and-brussels-sprouts-salad": {
    "name": "Bacon and Brussels Sprouts Salad",
    "sourceName": "Bacon and Brussels Sprouts Salad"
  },
  "roasted-potato-salad": {
    "name": "Roasted Potato Salad",
    "sourceName": "Roasted Potato Salad"
  },
  "grilled-vegetable-tofu-salad-with-feta": {
    "name": "Grilled Vegetable Tofu Salad with Feta",
    "sourceName": "Grilled Vegetable Tofu Salad with Feta"
  },
  "pork-carnitas-tacos": {
    "name": "Pork Carnitas Tacos",
    "sourceName": "Pork Carnitas Tacos"
  },
  "bbq-cauliflower-taco": {
    "name": "BBQ Cauliflower Taco",
    "sourceName": "BBQ Cauliflower Taco"
  },
  "pumpkin-loaf": {
    "name": "Pumpkin Loaf",
    "sourceName": "Pumpkin Loaf"
  },
  "fruit-jelly-strawberry-with-whipped-topping": {
    "name": "Fruit Jelly (Strawberry) with Whipped Topping",
    "sourceName": "Fruit Jelly (Strawberry) with Whipped Topping"
  },
  "mixed-berry-crisp": {
    "name": "Mixed Berry Crisp",
    "sourceName": "Mixed Berry Crisp"
  },
  "marinated-slow-roasted-lamb": {
    "name": "Marinated Slow Roasted Lamb",
    "sourceName": "Marinated Slow Roasted Lamb"
  },
  "italian-breaded-chicken": {
    "name": "Italian Breaded Chicken",
    "sourceName": "Italian Breaded Chicken"
  },
  "fettuccini": {
    "name": "Fettuccini",
    "sourceName": "Fettuccini"
  },
  "tuscan-garden-vegetables": {
    "name": "Tuscan Garden Vegetables",
    "sourceName": "Tuscan Garden Vegetables"
  },
  "garlic-bread": {
    "name": "Garlic Bread",
    "sourceName": "Garlic Bread"
  },
  "roasted-broccoli": {
    "name": "Roasted Broccoli",
    "sourceName": "Roasted Broccoli"
  },
  "pasta-with-salmon-and-alfredo-sauce": {
    "name": "Pasta with Salmon and Alfredo Sauce",
    "sourceName": "Pasta with Salmon and Alfredo Sauce"
  },
  "pomodoro-sauce": {
    "name": "Pomodoro Sauce",
    "sourceName": "Pomodoro Sauce"
  },
  "creamy-pesto-sauce": {
    "name": "Creamy Pesto Sauce",
    "sourceName": "Creamy Pesto Sauce"
  },
  "chicken-cacciatore": {
    "name": "Chicken Cacciatore",
    "sourceName": "Chicken Cacciatore"
  },
  "baked-zucchini-and-tomatoes": {
    "name": "Baked Zucchini and Tomatoes",
    "sourceName": "Baked Zucchini and Tomatoes"
  },
  "roasted-asparagus": {
    "name": "Roasted Asparagus",
    "sourceName": "Roasted Asparagus"
  },
  "thai-beef-and-vegetable-noodle-soup": {
    "name": "Thai Beef and Vegetable Noodle Soup",
    "sourceName": "Thai Beef and Vegetable Noodle Soup"
  },
  "thai-inspired-curry-coconut-tofu-soup": {
    "name": "Thai Inspired Curry Coconut Tofu Soup",
    "sourceName": "Thai Inspired Curry Coconut Tofu Soup"
  },
  "spicy-grilled-chicken-madras-sandwich": {
    "name": "Spicy Grilled Chicken Madras Sandwich",
    "sourceName": "Spicy Grilled Chicken Madras Sandwich"
  },
  "smoky-tempeh-and-hummus-sandwich": {
    "name": "Smoky Tempeh and Hummus Sandwich",
    "sourceName": "Smoky Tempeh and Hummus Sandwich"
  },
  "mongolian-inspired-beef": {
    "name": "Mongolian Inspired Beef",
    "sourceName": "Mongolian Inspired Beef"
  },
  "filipino-inspired-garlic-fried-rice-with-eggs": {
    "name": "Filipino Inspired Garlic Fried Rice with Eggs",
    "sourceName": "Filipino Inspired Garlic Fried Rice with Eggs"
  },
  "balsamic-marinated-vegetable-salad": {
    "name": "Balsamic Marinated Vegetable Salad",
    "sourceName": "Balsamic Marinated Vegetable Salad"
  },
  "crispy-chicken-burger": {
    "name": "Crispy Chicken Burger",
    "sourceName": "Crispy Chicken Burger"
  },
  "chicken-pesto-and-mushroom-pizza": {
    "name": "Chicken, Pesto and Mushroom Pizza",
    "sourceName": "Chicken, Pesto and Mushroom Pizza"
  },
  "dark-bran-muffins": {
    "name": "Dark Bran Muffins",
    "sourceName": "Dark Bran Muffins"
  },
  "lemon-loaf": {
    "name": "Lemon Loaf",
    "sourceName": "Lemon Loaf"
  },
  "jamaican-style-jerk-chicken-legs": {
    "name": "Jamaican Style Jerk Chicken Legs",
    "sourceName": "Jamaican Style Jerk Chicken Legs"
  },
  "caribbean-beef-pepperpot": {
    "name": "Caribbean Beef Pepperpot",
    "sourceName": "Caribbean Beef Pepperpot"
  },
  "jamaican-rice-and-beans": {
    "name": "Jamaican Rice and Beans",
    "sourceName": "Jamaican Rice and Beans"
  },
  "chickpea-vegetable-curry": {
    "name": "Chickpea & Vegetable Curry",
    "sourceName": "Chickpea & Vegetable Curry"
  },
  "roasted-vegetables": {
    "name": "Roasted Vegetables",
    "sourceName": "Roasted Vegetables"
  },
  "braised-curried-cabbage": {
    "name": "Braised Curried Cabbage",
    "sourceName": "Braised Curried Cabbage"
  },
  "fresh-steamed-green-beans": {
    "name": "Fresh Steamed Green Beans",
    "sourceName": "Fresh Steamed Green Beans"
  },
  "cracked-pepper-garlic-parsnips": {
    "name": "Cracked Pepper & Garlic Parsnips",
    "sourceName": "Cracked Pepper & Garlic Parsnips"
  },
  "island-jerk-tofu-box": {
    "name": "Island Jerk Tofu Box",
    "sourceName": "Island Jerk Tofu Box"
  },
  "caribbean-black-beans": {
    "name": "Caribbean Black Beans",
    "sourceName": "Caribbean Black Beans"
  },
  "chickpea-and-vegetable-curry": {
    "name": "Chickpea and Vegetable Curry",
    "sourceName": "Chickpea and Vegetable Curry"
  },
  "roti-dough": {
    "name": "Roti Dough",
    "sourceName": "Roti Dough"
  },
  "sweet-and-sour-pork": {
    "name": "Sweet and Sour Pork",
    "sourceName": "Sweet and Sour Pork"
  },
  "vegetable-stir-fry": {
    "name": "Vegetable Stir-Fry",
    "sourceName": "Vegetable Stir-Fry"
  },
  "autumn-harvest-wild-rice-salad": {
    "name": "Autumn Harvest Wild Rice Salad",
    "sourceName": "Autumn Harvest Wild Rice Salad"
  },
  "roasted-corn-salad": {
    "name": "Roasted Corn Salad",
    "sourceName": "Roasted Corn Salad"
  },
  "cheesecake-lemon": {
    "name": "Cheesecake (Lemon)",
    "sourceName": "Cheesecake (Lemon)"
  },
  "strawberry-pudding": {
    "name": "Strawberry Pudding",
    "sourceName": "Strawberry Pudding"
  },
  "cream-filled-croissant": {
    "name": "Cream Filled Croissant",
    "sourceName": "Cream Filled Croissant"
  },
  "chicken-biryani": {
    "name": "Chicken Biryani",
    "sourceName": "Chicken Biryani"
  },
  "pork-vindaloo": {
    "name": "Pork Vindaloo",
    "sourceName": "Pork Vindaloo"
  },
  "vegetable-biryani": {
    "name": "Vegetable Biryani",
    "sourceName": "Vegetable Biryani"
  },
  "lentil-and-vegetable-curry": {
    "name": "Lentil and Vegetable Curry",
    "sourceName": "Lentil and Vegetable Curry"
  },
  "steamed-green-beans": {
    "name": "Steamed Green Beans",
    "sourceName": "Steamed Green Beans"
  },
  "tofu-makhani": {
    "name": "Tofu Makhani",
    "sourceName": "Tofu Makhani"
  },
  "roasted-potato-and-chicken-soup": {
    "name": "Roasted Potato and Chicken Soup",
    "sourceName": "Roasted Potato and Chicken Soup"
  },
  "hoisin-pork-stir-fry": {
    "name": "Hoisin Pork Stir-Fry",
    "sourceName": "Hoisin Pork Stir-Fry"
  },
  "cucumber-salad": {
    "name": "Cucumber Salad",
    "sourceName": "Cucumber Salad"
  },
  "macaroni-salad": {
    "name": "Macaroni Salad",
    "sourceName": "Macaroni Salad"
  },
  "dilled-potato-and-apple-salad": {
    "name": "Dilled Potato and Apple Salad",
    "sourceName": "Dilled Potato and Apple Salad"
  },
  "beef-burrito": {
    "name": "Beef Burrito",
    "sourceName": "Beef Burrito"
  },
  "carrot-muffins": {
    "name": "Carrot Muffins",
    "sourceName": "Carrot Muffins"
  },
  "raisin-pudding-cake": {
    "name": "Raisin Pudding Cake",
    "sourceName": "Raisin Pudding Cake"
  },
  "wild-rice-blend": {
    "name": "Wild Rice Blend",
    "sourceName": "Wild Rice Blend"
  },
  "roasted-beets": {
    "name": "Roasted Beets",
    "sourceName": "Roasted Beets"
  },
  "roasted-roma-vegetables": {
    "name": "Roasted Roma Vegetables",
    "sourceName": "Roasted Roma Vegetables"
  },
  "greek-moussaka-with-tomato-ragout": {
    "name": "Greek Moussaka with Tomato Ragout",
    "sourceName": "Greek Moussaka with Tomato Ragout"
  },
  "vegetable-lasagna": {
    "name": "Vegetable Lasagna",
    "sourceName": "Vegetable Lasagna"
  },
  "roasted-carrots-with-balsamic-glaze-and-fresh-dill": {
    "name": "Roasted Carrots with Balsamic Glaze and Fresh Dill",
    "sourceName": "Roasted Carrots with Balsamic Glaze and Fresh Dill"
  },
  "creamy-parmesan-polenta": {
    "name": "Creamy Parmesan Polenta",
    "sourceName": "Creamy Parmesan Polenta"
  },
  "orange-ginger-chicken-with-vegetables": {
    "name": "Orange Ginger Chicken with Vegetables",
    "sourceName": "Orange Ginger Chicken with Vegetables"
  },
  "brussel-sprout-and-squash-caesar-salad": {
    "name": "Brussel Sprout and Squash Caesar Salad",
    "sourceName": "Brussel Sprout and Squash Caesar Salad"
  },
  "roasted-vegetable-herb-salad": {
    "name": "Roasted Vegetable & Herb Salad",
    "sourceName": "Roasted Vegetable & Herb Salad"
  },
  "pulled-curried-chicken-spinach-salad": {
    "name": "Pulled Curried Chicken & Spinach Salad",
    "sourceName": "Pulled Curried Chicken & Spinach Salad"
  },
  "bacon-and-tomato-grilled-cheese": {
    "name": "Bacon and Tomato Grilled Cheese",
    "sourceName": "Bacon and Tomato Grilled Cheese"
  },
  "tart-apple-compote": {
    "name": "Tart Apple Compote",
    "sourceName": "Tart Apple Compote"
  },
  "fruit-jelly-peach-with-whipped-topping": {
    "name": "Fruit Jelly (Peach) with Whipped Topping",
    "sourceName": "Fruit Jelly (Peach) with Whipped Topping"
  },
  "s-mores-cupcake-mix": {
    "name": "S'mores Cupcake (Mix)",
    "sourceName": "S'mores Cupcake (Mix)"
  },
  "beef-curry-with-vegetables": {
    "name": "Beef Curry with Vegetables",
    "sourceName": "Beef Curry with Vegetables"
  },
  "vegetable-pilaf": {
    "name": "Vegetable Pilaf",
    "sourceName": "Vegetable Pilaf"
  },
  "masala-loaded-potato-hash-shredded-potato": {
    "name": "Masala Loaded Potato Hash (Shredded Potato)",
    "sourceName": "Masala Loaded Potato Hash (Shredded Potato)"
  },
  "fresh-steamed-carrots": {
    "name": "Fresh Steamed Carrots",
    "sourceName": "Fresh Steamed Carrots"
  },
  "spiced-cauliflower": {
    "name": "Spiced Cauliflower",
    "sourceName": "Spiced Cauliflower"
  },
  "moroccan-style-tofu": {
    "name": "Moroccan Style Tofu",
    "sourceName": "Moroccan Style Tofu"
  },
  "minted-sweet-peas-and-carrots": {
    "name": "Minted Sweet Peas and Carrots",
    "sourceName": "Minted Sweet Peas and Carrots"
  },
  "grape-tomato-couscous": {
    "name": "Grape Tomato Couscous",
    "sourceName": "Grape Tomato Couscous"
  },
  "ethiopian-tomato-lentil-stew": {
    "name": "Ethiopian Tomato Lentil Stew",
    "sourceName": "Ethiopian Tomato Lentil Stew"
  },
  "african-inspired-sweet-potato-stew": {
    "name": "African Inspired Sweet Potato Stew",
    "sourceName": "African Inspired Sweet Potato Stew"
  },
  "hamburger-soup": {
    "name": "Hamburger Soup",
    "sourceName": "Hamburger Soup"
  },
  "asparagus-soup": {
    "name": "Asparagus Soup",
    "sourceName": "Asparagus Soup"
  },
  "italian-blt-sandwich": {
    "name": "Italian BLT Sandwich",
    "sourceName": "Italian BLT Sandwich"
  },
  "energy-plus-salad": {
    "name": "Energy Plus Salad",
    "sourceName": "Energy Plus Salad"
  },
  "greek-salad": {
    "name": "Greek Salad",
    "sourceName": "Greek Salad"
  },
  "beer-battered-fish": {
    "name": "Beer Battered Fish",
    "sourceName": "Beer Battered Fish"
  },
  "fruit-extreme-muffins": {
    "name": "Fruit Extreme Muffins",
    "sourceName": "Fruit Extreme Muffins"
  },
  "banana-loaf": {
    "name": "Banana Loaf",
    "sourceName": "Banana Loaf"
  },
  "spicy-red-fish-curry": {
    "name": "Spicy Red Fish Curry",
    "sourceName": "Spicy Red Fish Curry"
  },
  "beef-massaman": {
    "name": "Beef Massaman",
    "sourceName": "Beef Massaman"
  },
  "thai-lemongrass-rice": {
    "name": "Thai Lemongrass Rice",
    "sourceName": "Thai Lemongrass Rice"
  },
  "spicy-szechuan-green-beans": {
    "name": "Spicy Szechuan Green Beans",
    "sourceName": "Spicy Szechuan Green Beans"
  },
  "bhel-puri": {
    "name": "Bhel Puri",
    "sourceName": "Bhel Puri"
  },
  "pani-puri": {
    "name": "Pani Puri",
    "sourceName": "Pani Puri"
  },
  "pani-puri-filling": {
    "name": "Pani Puri Filling",
    "sourceName": "Pani Puri Filling"
  },
  "tamarind-chutney": {
    "name": "Tamarind Chutney",
    "sourceName": "Tamarind Chutney"
  },
  "cilantro-and-mint-chutney": {
    "name": "Cilantro and Mint Chutney",
    "sourceName": "Cilantro and Mint Chutney"
  },
  "pani-puri-spicy-water": {
    "name": "Pani Puri Spicy Water",
    "sourceName": "Pani Puri Spicy Water"
  },
  "pork-stir-fry": {
    "name": "Pork Stir-Fry",
    "sourceName": "Pork Stir-Fry"
  },
  "golden-tofu-with-onions-and-peppers": {
    "name": "Golden Tofu with Onions and Peppers",
    "sourceName": "Golden Tofu with Onions and Peppers"
  },
  "pineapple-cabbage-salad": {
    "name": "Pineapple Cabbage Salad",
    "sourceName": "Pineapple Cabbage Salad"
  },
  "hot-turkey-and-swiss-slider": {
    "name": "Hot Turkey and Swiss Slider",
    "sourceName": "Hot Turkey and Swiss Slider"
  },
  "roasted-red-pepper-and-garlic-aioli": {
    "name": "Roasted Red Pepper and Garlic Aioli",
    "sourceName": "Roasted Red Pepper and Garlic Aioli"
  },
  "spring-greens": {
    "name": "Spring Greens",
    "sourceName": "Spring Greens"
  },
  "basil-pesto": {
    "name": "Basil Pesto",
    "sourceName": "Basil Pesto"
  },
  "chocolate-mousse-parfait": {
    "name": "Chocolate Mousse Parfait",
    "sourceName": "Chocolate Mousse Parfait"
  },
  "lemon-pudding": {
    "name": "Lemon Pudding",
    "sourceName": "Lemon Pudding"
  },
  "stifado": {
    "name": "Stifado",
    "sourceName": "Stifado"
  },
  "herb-crusted-fish-loins": {
    "name": "Herb Crusted Fish Loins",
    "sourceName": "Herb Crusted Fish Loins"
  },
  "garden-rice-pilaf": {
    "name": "Garden Rice Pilaf",
    "sourceName": "Garden Rice Pilaf"
  },
  "oven-blistered-tomatoes": {
    "name": "Oven Blistered Tomatoes",
    "sourceName": "Oven Blistered Tomatoes"
  },
  "couscous": {
    "name": "Couscous",
    "sourceName": "Couscous"
  },
  "mini-spanakopita": {
    "name": "Mini Spanakopita",
    "sourceName": "Mini Spanakopita"
  },
  "warm-pita-bread": {
    "name": "Warm Pita Bread",
    "sourceName": "Warm Pita Bread"
  },
  "warm-greek-inspired-style-chickpea-pita-with-tzatziki": {
    "name": "Warm Greek Inspired Style Chickpea Pita with Tzatziki",
    "sourceName": "Warm Greek Inspired Style Chickpea Pita with Tzatziki"
  },
  "sun-dried-tomato-hummus": {
    "name": "Sun-Dried Tomato Hummus",
    "sourceName": "Sun-Dried Tomato Hummus"
  },
  "fish-chowder": {
    "name": "Fish Chowder",
    "sourceName": "Fish Chowder"
  },
  "sweet-and-sour-cabbage-soup": {
    "name": "Sweet and Sour Cabbage Soup",
    "sourceName": "Sweet and Sour Cabbage Soup"
  },
  "grilled-chicken-sandwich": {
    "name": "Grilled Chicken Sandwich",
    "sourceName": "Grilled Chicken Sandwich"
  },
  "szechuan-inspired-orange-ginger-chicken": {
    "name": "Szechuan Inspired Orange Ginger Chicken",
    "sourceName": "Szechuan Inspired Orange Ginger Chicken"
  },
  "ginger-soy-spinach-barley-salad": {
    "name": "Ginger, Soy, Spinach & Barley Salad",
    "sourceName": "Ginger, Soy, Spinach & Barley Salad"
  },
  "mexican-corn-salad": {
    "name": "Mexican Corn Salad",
    "sourceName": "Mexican Corn Salad"
  },
  "loaded-french-fry-burrito-with-chorizo": {
    "name": "Loaded French Fry Burrito with Chorizo",
    "sourceName": "Loaded French Fry Burrito with Chorizo"
  },
  "cheeseburger-pizza": {
    "name": "Cheeseburger Pizza",
    "sourceName": "Cheeseburger Pizza"
  },
  "raspberry-yogurt-muffins": {
    "name": "Raspberry Yogurt Muffins",
    "sourceName": "Raspberry Yogurt Muffins"
  },
  "cinnamon-loaf": {
    "name": "Cinnamon Loaf",
    "sourceName": "Cinnamon Loaf"
  },
  "southwestern-fiesta-breakfast-bake": {
    "name": "Southwestern Fiesta Breakfast Bake",
    "sourceName": "Southwestern Fiesta Breakfast Bake"
  },
  "eggs-ranchero": {
    "name": "Eggs Ranchero",
    "sourceName": "Eggs Ranchero"
  },
  "slow-roasted-bone-in-ham": {
    "name": "Slow Roasted Bone-in Ham",
    "sourceName": "Slow Roasted Bone-in Ham"
  },
  "cajun-rice": {
    "name": "Cajun Rice",
    "sourceName": "Cajun Rice"
  },
  "potato-bean-and-tomato-stew": {
    "name": "Potato, Bean and Tomato Stew",
    "sourceName": "Potato, Bean and Tomato Stew"
  },
  "hash-brown-patty-triangle": {
    "name": "Hash Brown Patty-Triangle",
    "sourceName": "Hash Brown Patty-Triangle"
  },
  "cooked-corn": {
    "name": "Cooked Corn",
    "sourceName": "Cooked Corn"
  },
  "flour-tortilla-wrap-6": {
    "name": "Flour Tortilla Wrap (6-inch)",
    "sourceName": "Flour Tortilla Wrap, 6\""
  },
  "chipotle-bbq-pulled-jackfruit": {
    "name": "Chipotle BBQ Pulled Jackfruit",
    "sourceName": "Chipotle BBQ Pulled Jackfruit"
  },
  "sauteed-peppers-and-onions": {
    "name": "Sauteed Peppers and Onions",
    "sourceName": "Sauteed Peppers and Onions"
  },
  "korean-beef-stir-fry": {
    "name": "Korean Beef Stir-Fry",
    "sourceName": "Korean Beef Stir-Fry"
  },
  "fried-rice": {
    "name": "Fried Rice",
    "sourceName": "Fried Rice"
  },
  "corn-red-bell-pepper-salad": {
    "name": "Corn & Red Bell Pepper Salad",
    "sourceName": "Corn & Red Bell Pepper Salad"
  },
  "quinoa-tabbouleh-salad": {
    "name": "Quinoa Tabbouleh Salad",
    "sourceName": "Quinoa Tabbouleh Salad"
  },
  "honey-balsamic-squash-salad": {
    "name": "Honey Balsamic Squash Salad",
    "sourceName": "Honey Balsamic Squash Salad"
  },
  "breakfast-sandwich-egg-cheese-sausage": {
    "name": "Breakfast Sandwich (Egg, Cheese, Sausage)",
    "sourceName": "Breakfast Sandwich (Egg, Cheese, Sausage)"
  },
  "coconut-cinnamon-chia-parfait": {
    "name": "Coconut Cinnamon Chia Parfait",
    "sourceName": "Coconut Cinnamon Chia Parfait"
  },
  "fruit-jelly-raspberry-with-whipped-topping": {
    "name": "Fruit Jelly (Raspberry) with Whipped Topping",
    "sourceName": "Fruit Jelly (Raspberry) with Whipped Topping"
  },
  "blueberry-lemon-cake": {
    "name": "Blueberry Lemon Cake",
    "sourceName": "Blueberry Lemon Cake"
  },
  "chinese-style-steamed-fish": {
    "name": "Chinese Style Steamed Fish",
    "sourceName": "Chinese Style Steamed Fish"
  },
  "spiced-asian-pork": {
    "name": "Spiced Asian Pork",
    "sourceName": "Spiced Asian Pork"
  },
  "sesame-rice": {
    "name": "Sesame Rice",
    "sourceName": "Sesame Rice"
  },
  "pickled-carrots": {
    "name": "Pickled Carrots",
    "sourceName": "Pickled Carrots"
  },
  "charred-broccoli-chilis": {
    "name": "Charred Broccoli & Chilis",
    "sourceName": "Charred Broccoli & Chilis"
  },
  "spicy-red-thai-inspired-tofu-vegtable-stir-fry": {
    "name": "Spicy Red Thai Inspired Tofu Vegtable Stir-Fry",
    "sourceName": "Spicy Red Thai Inspired Tofu Vegtable Stir-Fry"
  },
  "thai-curry": {
    "name": "Thai Curry",
    "sourceName": "Thai Curry"
  },
  "ramen-noodle-bowl": {
    "name": "Ramen Noodle Bowl",
    "sourceName": "Ramen Noodle Bowl"
  },
  "sauteed-kale": {
    "name": "Sauteed Kale",
    "sourceName": "Sauteed Kale"
  },
  "greek-inspired-chicken-soup": {
    "name": "Greek Inspired Chicken Soup",
    "sourceName": "Greek Inspired Chicken Soup"
  },
  "tomato-vegetable-soup": {
    "name": "Tomato Vegetable Soup",
    "sourceName": "Tomato Vegetable Soup"
  },
  "corned-beef-and-swiss-on-rye": {
    "name": "Corned Beef and Swiss on Rye",
    "sourceName": "Corned Beef and Swiss on Rye"
  },
  "curried-carrot-salad": {
    "name": "Curried Carrot Salad",
    "sourceName": "Curried Carrot Salad"
  },
  "lo-mein-salad": {
    "name": "Lo Mein Salad",
    "sourceName": "Lo Mein Salad"
  },
  "black-bean-and-sweet-potato-burrito": {
    "name": "Black Bean and Sweet Potato Burrito",
    "sourceName": "Black Bean and Sweet Potato Burrito"
  },
  "chocolate-chunk-muffins": {
    "name": "Chocolate Chunk Muffins",
    "sourceName": "Chocolate Chunk Muffins"
  },
  "raspberry-bars": {
    "name": "Raspberry Bars",
    "sourceName": "Raspberry Bars"
  },
  "cowboy-hash-brown-skillet": {
    "name": "Cowboy Hash Brown Skillet",
    "sourceName": "Cowboy Hash Brown Skillet"
  },
  "shakshuka-breakfast-skillet": {
    "name": "Shakshuka Breakfast Skillet",
    "sourceName": "Shakshuka Breakfast Skillet"
  },
  "roasted-leg-of-lamb-with-black-garlic-jus": {
    "name": "Roasted Leg of Lamb with Black Garlic Jus",
    "sourceName": "Roasted Leg of Lamb with Black Garlic Jus"
  },
  "persian-cranberry-rice-pilaf": {
    "name": "Persian Cranberry Rice Pilaf",
    "sourceName": "Persian Cranberry Rice Pilaf"
  },
  "middle-eastern-lentil-chili": {
    "name": "Middle Eastern Lentil Chili",
    "sourceName": "Middle Eastern Lentil Chili"
  },
  "spiced-eggplant-and-chickpeas": {
    "name": "Spiced Eggplant and Chickpeas",
    "sourceName": "Spiced Eggplant and Chickpeas"
  },
  "chipotle-vegan-crumble-taco-filling": {
    "name": "Chipotle Vegan Crumble Taco Filling",
    "sourceName": "Chipotle Vegan Crumble Taco Filling"
  },
  "beef-and-broccoli-stir-fry": {
    "name": "Beef and Broccoli Stir-Fry",
    "sourceName": "Beef and Broccoli Stir-Fry"
  },
  "kung-pao-tofu": {
    "name": "Kung Pao Tofu",
    "sourceName": "Kung Pao Tofu"
  },
  "waldorf-salad": {
    "name": "Waldorf Salad",
    "sourceName": "Waldorf Salad"
  },
  "smokey-potato-salad": {
    "name": "Smokey Potato Salad",
    "sourceName": "Smokey Potato Salad"
  },
  "greek-lentil-salad": {
    "name": "Greek Lentil Salad",
    "sourceName": "Greek Lentil Salad"
  },
  "mcfraser-breakfast-sandwich": {
    "name": "McFraser Breakfast Sandwich",
    "sourceName": "McFraser Breakfast Sandwich"
  },
  "fruit-jelly-cherry-with-whipped-topping": {
    "name": "Fruit Jelly (Cherry) with Whipped Topping",
    "sourceName": "Fruit Jelly (Cherry) with Whipped Topping"
  },
  "carrot-cake-cupcakes-with-cream-cheese-icing": {
    "name": "Carrot Cake Cupcakes with Cream Cheese Icing",
    "sourceName": "Carrot Cake Cupcakes with Cream Cheese Icing"
  },
  "moroccan-roast-turkey": {
    "name": "Moroccan Roast Turkey",
    "sourceName": "Moroccan Roast Turkey"
  },
  "sumac-roasted-potatoes": {
    "name": "Sumac Roasted Potatoes",
    "sourceName": "Sumac Roasted Potatoes"
  },
  "steamed-vegetable-medley": {
    "name": "Steamed Vegetable Medley",
    "sourceName": "Steamed Vegetable Medley"
  },
  "lebanese-vegetable-quinoa-hash": {
    "name": "Lebanese Vegetable Quinoa Hash",
    "sourceName": "Lebanese Vegetable Quinoa Hash"
  },
  "roasted-parsnips": {
    "name": "Roasted Parsnips",
    "sourceName": "Roasted Parsnips"
  },
  "nacho-bar-fajita-chicken": {
    "name": "Nacho Bar-Fajita Chicken",
    "sourceName": "Nacho Bar-Fajita Chicken"
  },
  "walking-beans-walking-taco": {
    "name": "Walking Beans Walking Taco",
    "sourceName": "Walking Beans Walking Taco"
  },
  "salsa-fresca": {
    "name": "Salsa Fresca",
    "sourceName": "Salsa Fresca"
  },
  "spicy-jalapeno-chili": {
    "name": "Spicy Jalapeno Chili",
    "sourceName": "Spicy Jalapeno Chili"
  },
  "italian-inspired-wedding-soup": {
    "name": "Italian Inspired Wedding Soup",
    "sourceName": "Italian Inspired Wedding Soup"
  },
  "cream-of-carrot-and-ginger-soup": {
    "name": "Cream of Carrot and Ginger Soup",
    "sourceName": "Cream of Carrot and Ginger Soup"
  },
  "southern-bean-and-veggie-gumbo": {
    "name": "Southern Bean and Veggie Gumbo",
    "sourceName": "Southern Bean and Veggie Gumbo"
  },
  "green-bean-casserole-the-fresh-fork": {
    "name": "Green Bean Casserole (The Fresh Fork)",
    "sourceName": "Green Bean Casserole (The Fresh Fork)"
  },
  "sauteed-spinach-and-garlic": {
    "name": "Sauteed Spinach and Garlic",
    "sourceName": "Sauteed Spinach and Garlic"
  },
  "fried-dill-pickles": {
    "name": "Fried Dill Pickles",
    "sourceName": "Fried Dill Pickles"
  },
  "sweet-potato-and-coconut-soup": {
    "name": "Sweet Potato and Coconut Soup",
    "sourceName": "Sweet Potato and Coconut Soup"
  },
  "sicilian-cod-loin": {
    "name": "Sicilian Cod Loin",
    "sourceName": "Sicilian Cod Loin"
  },
  "greek-rice": {
    "name": "Greek Rice",
    "sourceName": "Greek Rice"
  },
  "mediterranean-inspired-couscous-salad": {
    "name": "Mediterranean Inspired Couscous Salad",
    "sourceName": "Mediterranean Inspired Couscous Salad"
  },
  "roasted-cauliflower-steaks-with-tahini-lemon-dressing": {
    "name": "Roasted Cauliflower Steaks with Tahini Lemon Dressing",
    "sourceName": "Roasted Cauliflower Steaks with Tahini Lemon Dressing"
  },
  "balsamic-roasted-vegetables": {
    "name": "Balsamic Roasted Vegetables",
    "sourceName": "Balsamic Roasted Vegetables"
  },
  "white-greek-pita": {
    "name": "White Greek Pita",
    "sourceName": "White Greek Pita"
  },
  "lemon-oregano-vinaigrette": {
    "name": "Lemon Oregano Vinaigrette",
    "sourceName": "Lemon Oregano Vinaigrette"
  },
  "za-atar-hummus": {
    "name": "Za'atar Hummus",
    "sourceName": "Za'atar Hummus"
  },
  "cucumber-tomato-salad": {
    "name": "Cucumber Tomato Salad",
    "sourceName": "Cucumber Tomato Salad"
  },
  "shrimp-and-bacon-chowder": {
    "name": "Shrimp and Bacon Chowder",
    "sourceName": "Shrimp and Bacon Chowder"
  },
  "black-bean-soup": {
    "name": "Black Bean Soup",
    "sourceName": "Black Bean Soup"
  },
  "patatas-bravas": {
    "name": "Patatas Bravas",
    "sourceName": "Patatas Bravas"
  },
  "seasoned-black-beans": {
    "name": "Seasoned Black Beans",
    "sourceName": "Seasoned Black Beans"
  },
  "flour-tortillas": {
    "name": "Flour Tortillas",
    "sourceName": "Flour Tortillas"
  },
  "chili-lime-crema": {
    "name": "Chili Lime Crema",
    "sourceName": "Chili Lime Crema"
  },
  "split-pea-and-ham-soup": {
    "name": "Split Pea and Ham Soup",
    "sourceName": "Split Pea and Ham Soup"
  },
  "grilled-fish-taco-with-freekeh": {
    "name": "Grilled Fish Taco with Freekeh",
    "sourceName": "Grilled Fish Taco with Freekeh"
  },
  "roast-turkey-on-white": {
    "name": "Roast Turkey on White",
    "sourceName": "Roast Turkey on White"
  },
  "herbed-tomato-sauce": {
    "name": "Herbed Tomato Sauce",
    "sourceName": "Herbed Tomato Sauce"
  },
  "lemon-glazed-carrots": {
    "name": "Lemon Glazed Carrots",
    "sourceName": "Lemon Glazed Carrots"
  },
  "roasted-zucchini": {
    "name": "Roasted Zucchini",
    "sourceName": "Roasted Zucchini"
  },
  "mushroom-bisque-soup": {
    "name": "Mushroom Bisque Soup",
    "sourceName": "Mushroom Bisque Soup"
  },
  "butter-chickpea-vegetable-curry": {
    "name": "Butter Chickpea & Vegetable Curry",
    "sourceName": "Butter Chickpea & Vegetable Curry"
  },
  "vegetable-samosa": {
    "name": "Vegetable Samosa",
    "sourceName": "Vegetable Samosa"
  },
  "steamed-broccoli": {
    "name": "Steamed Broccoli",
    "sourceName": "Steamed Broccoli"
  },
  "spicy-sauteed-corn": {
    "name": "Spicy Sautéed Corn",
    "sourceName": "Spicy Sautéed Corn"
  },
  "paneer-makhani": {
    "name": "Paneer Makhani",
    "sourceName": "Paneer Makhani"
  },
  "aloo-matar": {
    "name": "Aloo Matar",
    "sourceName": "Aloo Matar"
  },
  "adobo-rubbed-pork-tenderloin": {
    "name": "Adobo Rubbed Pork Tenderloin",
    "sourceName": "Adobo Rubbed Pork Tenderloin"
  },
  "teriyaki-broccoli-florets": {
    "name": "Teriyaki Broccoli Florets",
    "sourceName": "Teriyaki Broccoli Florets"
  },
  "tofu-sisig": {
    "name": "Tofu Sisig",
    "sourceName": "Tofu Sisig"
  },
  "mini-vegetable-spring-rolls-with-thai-sauce": {
    "name": "Mini Vegetable Spring Rolls with Thai Sauce",
    "sourceName": "Mini Vegetable Spring Rolls with Thai Sauce"
  },
  "authentic-bombay-chili-cheese-toastie": {
    "name": "Authentic Bombay Chili Cheese Toastie",
    "sourceName": "Authentic Bombay Chili Cheese Toastie"
  },
  "sliced-roast-beef": {
    "name": "Sliced Roast Beef",
    "sourceName": "Sliced Roast Beef"
  },
  "roasted-chicken-drumsticks": {
    "name": "Roasted Chicken Drumsticks",
    "sourceName": "Roasted Chicken Drumsticks"
  },
  "herb-roasted-butternut-squash": {
    "name": "Herb Roasted Butternut Squash",
    "sourceName": "Herb Roasted Butternut Squash"
  },
  "shaved-root-vegetable-and-lemon": {
    "name": "Shaved Root Vegetable and Lemon",
    "sourceName": "Shaved Root Vegetable and Lemon"
  },
  "french-baguette": {
    "name": "French Baguette",
    "sourceName": "French Baguette"
  },
  "maple-roasted-vegetables-on-a-12-grain-bun": {
    "name": "Maple Roasted Vegetables on a 12 Grain Bun",
    "sourceName": "Maple Roasted Vegetables on a 12 Grain Bun"
  },
  "glazed-baby-carrots": {
    "name": "Glazed Baby Carrots",
    "sourceName": "Glazed Baby Carrots"
  },
  "homemade-turkey-and-vegetable-soup": {
    "name": "Homemade Turkey and Vegetable Soup",
    "sourceName": "Homemade Turkey and Vegetable Soup"
  },
  "butternut-squash-and-apple-soup-puree": {
    "name": "Butternut Squash and Apple Soup Puree",
    "sourceName": "Butternut Squash and Apple Soup Puree"
  },
  "orange-ginger-rice": {
    "name": "Orange Ginger Rice",
    "sourceName": "Orange Ginger Rice"
  },
  "sauteed-perogies-and-caramelized-onions": {
    "name": "Sautéed Perogies and Caramelized Onions",
    "sourceName": "Sautéed Perogies and Caramelized Onions"
  },
  "seasoned-buns": {
    "name": "Seasoned Buns",
    "sourceName": "Seasoned Buns"
  },
  "szechuan-green-bean-ramen-w-basil-roasted-mushrooms": {
    "name": "Szechuan Green Bean Ramen w/Basil Roasted Mushrooms",
    "sourceName": "Szechuan Green Bean Ramen w/Basil Roasted Mushrooms"
  },
  "pickled-daikon-radishes": {
    "name": "Pickled Daikon Radishes",
    "sourceName": "Pickled Daikon Radishes"
  },
  "asian-inspired-slaw": {
    "name": "Asian Inspired Slaw",
    "sourceName": "Asian Inspired Slaw"
  },
  "roast-lamb-sandwich": {
    "name": "Roast Lamb Sandwich",
    "sourceName": "Roast Lamb Sandwich"
  },
  "fire-roasted-red-peppers-sliced": {
    "name": "Sliced Fire-Roasted Red Peppers",
    "sourceName": "Fire Roasted Red Peppers, Sliced"
  },
  "lemon-yogurt-sauce": {
    "name": "Lemon Yogurt Sauce",
    "sourceName": "Lemon Yogurt Sauce"
  },
  "korean-roasted-sweet-potatoes": {
    "name": "Korean Roasted Sweet Potatoes",
    "sourceName": "Korean Roasted Sweet Potatoes"
  },
  "orange-glazed-carrots": {
    "name": "Orange Glazed Carrots",
    "sourceName": "Orange Glazed Carrots"
  },
  "braised-tofu": {
    "name": "Braised Tofu",
    "sourceName": "Braised Tofu"
  },
  "sriracha-buffalo-cauliflower-bites": {
    "name": "Sriracha-Buffalo Cauliflower Bites",
    "sourceName": "Sriracha-Buffalo Cauliflower Bites"
  },
  "roasted-broccoli-and-kale-soup": {
    "name": "Roasted Broccoli and Kale Soup",
    "sourceName": "Roasted Broccoli and Kale Soup"
  },
  "mexican-chicken-burrito": {
    "name": "Mexican Chicken Burrito",
    "sourceName": "Mexican Chicken Burrito"
  },
  "herb-crusted-beef-roast": {
    "name": "Herb Crusted Beef Roast",
    "sourceName": "Herb Crusted Beef Roast"
  },
  "creole-rice": {
    "name": "Creole Rice",
    "sourceName": "Creole Rice"
  },
  "chipotle-roasted-potatoes": {
    "name": "Chipotle Roasted Potatoes",
    "sourceName": "Chipotle Roasted Potatoes"
  },
  "french-toast-casserole-non-dairy": {
    "name": "French Toast Casserole (Non Dairy)",
    "sourceName": "French Toast Casserole (Non Dairy)"
  },
  "roast-parsnip-and-carrot-batons": {
    "name": "Roast Parsnip and Carrot Batons",
    "sourceName": "Roast Parsnip and Carrot Batons"
  },
  "chimichurri-tofu-empanadas": {
    "name": "Chimichurri Tofu Empanadas",
    "sourceName": "Chimichurri Tofu Empanadas"
  }
};
  const categoryOrder = {
  "global-eats": [
    "Mains",
    "Grains & breads",
    "Vegetables & sides",
    "Sauces & toppings"
  ],
  "sprout": [
    "Mains",
    "Grains & breads",
    "Vegetables & sides",
    "Sauces & toppings"
  ],
  "spoons-and-ladles": [
    "Soups"
  ],
  "stacks": [
    "Featured sandwiches",
    "Breads & wraps",
    "Proteins",
    "Cheeses",
    "Vegetables",
    "Spreads & sauces"
  ],
  "hot-plate": [
    "Breakfast dishes",
    "Bases",
    "Proteins",
    "Vegetables",
    "Sauces & dips",
    "Toppings",
    "Daily specials"
  ],
  "yin-and-yum": [
    "Mains",
    "Rice & noodles",
    "Vegetables & sides"
  ],
  "fresh-bowl": [
    "Bases",
    "Proteins",
    "Mains",
    "Vegetables & sides",
    "Sauces & dips",
    "Toppings"
  ],
  "nori": [
    "Sushi",
    "Bowls",
    "Sides",
    "Daily specials"
  ],
  "leaf-market": [
    "Prepared salads",
    "Greens & vegetables",
    "Proteins & legumes",
    "Fruit",
    "Toppings",
    "Dressings"
  ],
  "grill-house": [
    "Mains",
    "Sides",
    "Vegetables",
    "Spreads & sauces"
  ],
  "create": [
    "Prepared dishes",
    "Pastas",
    "Bases",
    "Proteins",
    "Vegetables & herbs",
    "Sauces & curries",
    "Cheeses"
  ],
  "al-forno": [
    "Pizza & flatbreads"
  ],
  "sweet-treats": [
    "Desserts",
    "Baked goods"
  ]
};
  window.nutritionMenus.Lunch = { capturedOn: "2026-11-21", catalog, categoryOrder, days: {
    "2026-11-02": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-02/lunch", stations: {
      "global-eats": [
        {"food": "lemon-and-oregano-roast-chicken", "serving": "1 piece", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "beef-lasagna", "serving": "1 piece", "category": "Mains", "diets": ["halal"], "meats": ["beef"]},
        {"food": "herb-rice-pilaf", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "rosemary-roasted-potatoes", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "ratatouille", "serving": "1 piece", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "thyme-roasted-turnip", "serving": "85 g", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "buttered-green-peas-and-carrots", "serving": "120 mL", "category": "Vegetables & sides", "diets": [], "meats": []}
      ],
      "sprout": [
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "braised-lentils", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "shepherd-s-pie-with-tvp", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "lemon-orzo", "serving": "1 serving(s)", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "herbed-polenta-cake", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]}
      ],
      "spoons-and-ladles": [
        {"food": "hot-and-sour-chinese-pork-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["pork"]},
        {"food": "cream-of-tomato-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "2 ounce", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "shaved-black-forest-ham-honey-mustard-and-cheddar", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["pork"]},
        {"food": "falafel-wrap", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "turmeric-scented-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "chicken-shawarma", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-english-cucumber", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-dill-pickles", "serving": "28 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tabbouleh-salad", "serving": "90 mL", "category": "Vegetables", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "roasted-red-pepper-hummus", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "shawarma-garlic-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "teriyaki-chicken-stir-fry", "serving": "90 mL", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "orange-chick-n-madarin-stir-fry", "serving": "199 g", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "vegetable-chow-mein", "serving": "240 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "sushi-roll-smoked-salmon", "serving": "5 each", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "quinoa-avocado-cucumber-rolls", "serving": "1 each", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "sea-salt-edamame", "serving": "1 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "quinoa-and-potato-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "roasted-tofu-salad-with-broccoli-and-sesame", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "pesto-rice-salad", "serving": "120 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "healthy-cobb-salad", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "loaded-jalapeno-burger", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["beef", "pork"]},
        {"food": "golden-fried-french-fries", "serving": "120 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "5 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "30 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "thai-green-curry-vegetables", "serving": "180 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "panang-curry-vegetable", "serving": "1 serving(s)", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "butter-chicken-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "roasted-chicken-breast", "serving": "1/2 serving(s)", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "tofu", "serving": "85 g", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-carrots", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-beans", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-peas", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "minced-garlic", "serving": "240 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-grated-ginger-root", "serving": "454 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "3 piece", "category": "Bases", "diets": [], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "bbq-chicken-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "salami-and-caramelized-onion-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "greek-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "mni-apple-danish", "serving": "2 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "carnival-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "classic-rice-pudding", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "chocolate-pudding", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "coconut-and-chocolate-chip-granola-bar", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-03": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-03/lunch", stations: {
      "global-eats": [
        {"food": "poached-lemongrass-chicken", "serving": "80 mL", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "spicy-red-thai-fish-curry", "serving": "120 mL", "category": "Mains", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "indonesian-sesame-rice", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "sesame-and-soy-roasted-potatoes", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "thai-green-sweet-potato-curry", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "green-beans-with-garlic-and-rosemary", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "tofu-pad-thai", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "ginger-pepper-chick-n", "serving": "90 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-bok-choy", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "stir-fry-vegetables", "serving": "60 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "thai-curry-vegetables", "serving": "113 g", "category": "Mains", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "timberline-beef-chili", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["beef"]},
        {"food": "creamy-broccoli-soup-puree", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "2 ounce", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "avocado-chicken-wrap", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["chicken"]},
        {"food": "queen-margherita-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "turmeric-scented-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "chicken-shawarma", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-english-cucumber", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-dill-pickles", "serving": "28 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tabbouleh-salad", "serving": "90 mL", "category": "Vegetables", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "roasted-red-pepper-hummus", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "shawarma-garlic-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "shrimp-and-vegetable-stir-fry", "serving": "180 mL", "category": "Mains", "diets": [], "meats": ["shellfish"]},
        {"food": "sweet-and-sour-tofu", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "indian-fried-rice-with-fresh-chilies-and-cilantro", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "three-bean-and-vegetable-chili", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "180 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "spicy-tuna-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "avocado-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "japanese-inspired-cucumber-salad", "serving": "60 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "golden-jewel-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "zucchini-and-mushroom-salad", "serving": "85 g", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "cajun-chicken-kale-caesar-salad", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": ["chicken"]},
        {"food": "roasted-butternut-squash-kale-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "chicken-tinga-street-taco", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "baked-sweet-potato-fries", "serving": "180 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "pickled-red-onion", "serving": "180 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "salsa-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "thai-green-curry-vegetables", "serving": "180 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "panang-curry-vegetable", "serving": "1 serving(s)", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "butter-chicken-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "roasted-chicken-breast", "serving": "1/2 serving(s)", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "tofu", "serving": "85 g", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-carrots", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-beans", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-peas", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "minced-garlic", "serving": "240 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-grated-ginger-root", "serving": "454 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "3 piece", "category": "Bases", "diets": [], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "hamburger-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["beef"]},
        {"food": "meat-lovers-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "jerk-chicken-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "lemon-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "chocolate-chip-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "fruit-trifle-parfait", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "fruit-jelly-orange-with-whipped-topping", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "cherry-chocolate-cake", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-04": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-04/lunch", stations: {
      "global-eats": [
        {"food": "tandoori-chicken-leg", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "lamb-rogan-josh", "serving": "1 serving(s)", "category": "Mains", "diets": ["halal"], "meats": ["lamb"]},
        {"food": "yellow-basmati-rice", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "cumin-scented-baked-potato-wedges", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "rajma-curry", "serving": "128 g", "category": "Mains", "diets": [], "meats": []},
        {"food": "tandoori-root-vegetables", "serving": "90 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-green-peas", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "butter-chickpea-curry", "serving": "175 g", "category": "Mains", "diets": [], "meats": []},
        {"food": "vegetable-pakoras", "serving": "4 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "mango-tamarind-chutney", "serving": "30 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "aloo-gobi-rd", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "kadhi", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "naan-bread", "serving": "1 each", "category": "Grains & breads", "diets": [], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "crab-bisque", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "minestrone-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "meatball-sub-on-hot-dog-roll", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["beef"]},
        {"food": "vegetable-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": ["vegan"], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "30 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "sweet-chili-chicken-stir-fry", "serving": "120 mL", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "plant-based-fried-chicken-and-broccoli-stir-fry", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "sesame-soba-noodles", "serving": "113 g", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "three-bean-and-vegetable-chili", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "15 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "california-roll-sushi", "serving": "8 piece", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "sushi-roll-vegetarian", "serving": "5 each", "category": "Sushi", "diets": [], "meats": []},
        {"food": "korean-japchae-salad", "serving": "90 mL", "category": "Sides", "diets": [], "meats": []},
        {"food": "sea-salt-edamame", "serving": "1 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "tomato-basil-pasta-salad", "serving": "240 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "caribbean-marinated-cucumber-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "moroccan-carrot-salad", "serving": "240 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "indian-style-chickpea-potato-salad", "serving": "1 serving(s)", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "plant-based-italian-inspired-sausage", "serving": "2 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "baked-sweet-potato-fries", "serving": "180 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "10 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "salsa-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "cream-of-mushroom-soup", "serving": "120 mL", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "chicken-noodle-soup", "serving": "360 mL", "category": "Prepared dishes", "diets": [], "meats": ["chicken"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "meatball-station", "serving": "1 serving(s)", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "seafood-casserole", "serving": "1 each", "category": "Prepared dishes", "diets": [], "meats": ["fish"]},
        {"food": "cod-fish-cakes", "serving": "1 each", "category": "Prepared dishes", "diets": [], "meats": ["fish"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-carrots-frozen", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-quartered-bok-choy", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-nappa-cabbage", "serving": "1 kg", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "whole-kernel-corn", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "mexican-taco-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["beef"]},
        {"food": "crispy-chorizo-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "cheese-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "raspberry-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "oatmeal-raisin-cookies", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cheesecake-blueberry", "serving": "1 slice", "category": "Desserts", "diets": [], "meats": []},
        {"food": "coconut-cream-pudding", "serving": "90 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "chocolate-chia-parfait", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-05": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-05/lunch", stations: {
      "global-eats": [
        {"food": "miso-marinated-cod-fillets", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "breaded-pork-cutlets", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "garlic-rice", "serving": "120 mL", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "thai-pumpkin-curry-sauce", "serving": "210 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "buttered-poached-mini-potatoes", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "sesame-kale", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "stir-fry-vegetables", "serving": "60 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "kung-pao-style-cauliflower-and-beans", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "thai-rice-noodles", "serving": "180 mL", "category": "Grains & breads", "diets": [], "meats": ["fish"]},
        {"food": "roasted-sweet-potatoes", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "gingered-carrots", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "louisiana-chicken-rice-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken", "pork"]},
        {"food": "pasta-bean-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "15 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "jerk-chicken-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["chicken"]},
        {"food": "vegetable-cheese-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "30 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "mongolian-beef-stir-fry", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "veggie-medley-chop-suey", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "vegetable-fried-rice", "serving": "240 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "cooked-yellow-split-peas", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "baba-ganoush", "serving": "90 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "dip-garlic-creamy-sauce-44-ml-cdn", "serving": "1 each", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "kalamata-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "tomato-and-cucumber-salad", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "whole-wheat-pita-bread", "serving": "1 each", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "falafel-balls", "serving": "3 each", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "lemon-chicken", "serving": "180 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]}
      ],
      "nori": [
        {"food": "tempura-shrimp-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": ["shellfish"]},
        {"food": "tempura-sweet-potato-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": []},
        {"food": "teriyaki-chicken-poke-bowl", "serving": "1 each", "category": "Bowls", "diets": [], "meats": ["chicken"]},
        {"food": "wakame-salad", "serving": "1/2 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "mediterranean-salad-with-tuna", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": ["fish"]},
        {"food": "california-cobb-salad", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": ["chicken", "pork"]},
        {"food": "asian-cucumber-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "sweet-potato-and-yukon-gold-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "santa-fe-grilled-cheese", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "sourdough-grilled-cheese-sandwich", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "spiced-potato-wedges", "serving": "113 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "rotini-pasta", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "butter-chicken-flat-bread", "serving": "1 each", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "bacon-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "margherita-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "blueberry-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "double-chocolate-chip-gourmet-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "tiramisu-layered-cake", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "fruit-jelly-grape-with-whipped-topping", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "oreo-cookie-cupcake-mix", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-06": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-06/lunch", stations: {
      "global-eats": [
        {"food": "chicken-mole", "serving": "1 each", "category": "Mains", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "spanish-style-fish-pollock", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "mexican-rice-pilaf", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "cajun-spicy-potato-medallions", "serving": "90 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "chipotle-bean-and-corn-stew", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "roasted-corn", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "chili-lime-marinated-roasted-turnip", "serving": "85 g", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "bean-tostada", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "refried-beans", "serving": "750 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "tomato-salsa", "serving": "30 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream-14-43-ml-cdn", "serving": "1 each", "category": "Sauces & toppings", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "turkey-lentil-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["turkey"]},
        {"food": "moroccan-inspired-vegetable-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "10 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "ultimate-peameal-bacon-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["pork"]},
        {"food": "salumeria-caprese-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "1 kg", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "56 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "60 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "crispytofu-stir-fry", "serving": "240 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "singapore-noodles", "serving": "90 mL", "category": "Rice & noodles", "diets": [], "meats": ["pork"]},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "cooked-yellow-split-peas", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "baba-ganoush", "serving": "90 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "dip-garlic-creamy-sauce-44-ml-cdn", "serving": "1 each", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "kalamata-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "tomato-and-cucumber-salad", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "whole-wheat-pita-bread", "serving": "1 each", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "falafel-balls", "serving": "3 each", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "lemon-chicken", "serving": "180 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]}
      ],
      "nori": [
        {"food": "sushi-roll-smoked-salmon", "serving": "5 each", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "quinoa-avocado-cucumber-rolls", "serving": "1 each", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "soba-noodle-and-edamame-salad", "serving": "90 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "sea-salt-edamame", "serving": "1 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "barley-and-apple-salad-with-kale", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "roasted-beet-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "carolina-salad", "serving": "85 g", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "roasted-root-vegetable-salad", "serving": "1 serving(s)", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "cubano-pork-slider", "serving": "1 sandwich", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "brown-gravy", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "corn-relish", "serving": "60 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "kettle-chips-regular", "serving": "1 each", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "60 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "rotini-pasta", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "caribbean-chicken-and-pineapple-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "pepperoni-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "mushroom-and-caramelized-onion-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "chocolate-avalanche-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "carnival-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "lemon-curd-tart", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "vanilla-pudding", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "strawberry-shortcake-parfait", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-07": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-07/lunch", stations: {
      "global-eats": [
        {"food": "denver-omelette", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "eggs-benedict", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "roasted-leg-of-lamb-with-rosemary-demi-and-mint-sauce", "serving": "1 serving(s)", "category": "Mains", "diets": ["halal"], "meats": ["beef", "lamb"]},
        {"food": "cilantro-pesto-rice", "serving": "120 mL", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "lemon-and-oregano-roasted-potatoes", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "thyme-roasted-butternut-squash", "serving": "85 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "waffles-with-maple-syrup", "serving": "2 each", "category": "Mains", "diets": [], "meats": []}
      ],
      "sprout": [
        {"food": "showtime-fajita-station-tofu", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "grilled-tofu-steaks-with-chimichurri-sauce", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "chicken-tinga", "serving": "60 mL", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "60 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "lime-wedge", "serving": "1 wedge", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-peppers-and-red-onions", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "mulligatawny-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken"]},
        {"food": "cream-of-mushroom-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "turkey-and-swiss-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["turkey"]},
        {"food": "cheddar-and-tomato-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "french-toast", "serving": "1 slice", "category": "Breakfast dishes", "diets": [], "meats": []},
        {"food": "strawberry-coulis", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "pineapple-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "chocolate-syrup", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "whipped-cream", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "hot-honey-drizzle", "serving": "10 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "lemon-creme", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "semi-sweet-chocolate-chips", "serving": "10 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "toasted-shredded-coconut", "serving": "28 g", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "kung-pao-chicken", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": ["chicken", "shellfish"]},
        {"food": "mixed-vegetable-stir-fry", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "vegetable-lo-mein", "serving": "227 g", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "10 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "alaska-roll-sushi", "serving": "8 piece", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "avocado-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "tofu-teriyaki-rice-bowl", "serving": "1 serving(s)", "category": "Bowls", "diets": [], "meats": ["shellfish"]},
        {"food": "wakame-salad", "serving": "1/2 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "jerk-chicken-salad", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": ["chicken"]},
        {"food": "apple-grain-salad", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "caprese-pasta-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "spinach-salad-with-bacon-egg", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": ["pork"]},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "beef-burger-on-ww-bun", "serving": "1 each", "category": "Mains", "diets": ["halal"], "meats": ["beef"]},
        {"food": "spiced-potato-and-tofu-breakfast-tacos", "serving": "2 each", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "baked-sweet-potato-fries", "serving": "180 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "2250 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "salsa-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "120 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "rotini-pasta", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "chicken-pesto-with-mushroom-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "hawaiian-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "pizza-primavera", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "mini-raspberry-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "chocolate-chip-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "apple-tarts", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "fruit-jelly-lime-with-whipped-topping", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "nanaimo-bar-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-08": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-08/lunch", stations: {
      "global-eats": [
        {"food": "applewood-bacon-and-mushroom-egg-skillet", "serving": "90 mL", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "corned-beef-hash", "serving": "170 g", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "lemon-pepper-pork-roast", "serving": "70 g", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "mexican-rice-pilaf", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "plantain-and-black-bean-stew", "serving": "300 g", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cajun-spicy-potato-medallions", "serving": "90 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "fresh-green-beans", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "baked-tortilla-chips", "serving": "12 each", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "cheese-nachos", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "shredded-lettuce", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream-14-43-ml-cdn", "serving": "1 each", "category": "Sauces & toppings", "diets": [], "meats": []},
        {"food": "guacamole", "serving": "60 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "salsa-roja", "serving": "45 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "salsa-verde", "serving": "60 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "chicken-leek-and-rice-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken"]},
        {"food": "roasted-potato-and-leek-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "tuna-salad-filling", "serving": "60 mL", "category": "Proteins", "diets": [], "meats": ["fish"]},
        {"food": "roasted-ham-german-mustard-and-classic-pickle-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["pork"]},
        {"food": "green-goddess-wrap", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "pancakes", "serving": "2 each", "category": "Breakfast dishes", "diets": [], "meats": []},
        {"food": "strawberry-coulis", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "pineapple-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "chocolate-syrup", "serving": "1-1/2 ounce", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "whipped-cream", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "hot-honey-drizzle", "serving": "10 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "lemon-creme", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "semi-sweet-chocolate-chips", "serving": "10 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "toasted-shredded-coconut", "serving": "28 g", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "chicken-stir-fry", "serving": "120 mL", "category": "Mains", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "korean-bbq-tofu", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "320 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "bbq-chicken", "serving": "1/2 each", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chipotle-bbq-pulled-pork", "serving": "120 mL", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "quinoa-avocado-cucumber-rolls", "serving": "1 each", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "sushi-roll-imitation-crab", "serving": "5 each", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "tofu-teriyaki-rice-bowl", "serving": "1 serving(s)", "category": "Bowls", "diets": [], "meats": ["shellfish"]},
        {"food": "sea-salt-edamame", "serving": "1 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "roasted-fennel-and-pear-salad", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "caribbean-marinated-cucumber-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-crunch-salad", "serving": "60 mL", "category": "Prepared salads", "diets": [], "meats": ["pork"]},
        {"food": "tuscan-bread-salad", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "beef-burger-on-ww-bun", "serving": "1 each", "category": "Mains", "diets": ["halal"], "meats": ["beef"]},
        {"food": "vegetarian-breakfast-wrap", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "tater-tots", "serving": "240 mL", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tomato-salsa", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "sour-cream-14-43-ml-cdn", "serving": "1 each", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "120 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "penne-pasta", "serving": "120 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "bbq-chicken-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "pepperoni-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "mushroom-and-caramelized-onion-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cherry-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "carnival-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "easy-vegan-chocolate-cake", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "fruit-jelly-lime-with-whipped-topping", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "oreo-crumb-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-09": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-09/lunch", stations: {
      "global-eats": [
        {"food": "butter-chicken", "serving": "170 g", "category": "Mains", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "zeera-rice", "serving": "180 mL", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "chili-cumin-roasted-potatoes", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "buttered-peas", "serving": "120 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "turmeric-roasted-cauliflower", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-carrots", "serving": "75 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "tofu-keema-pau-indian-spiced-tofu", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "vegetable-samosas", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "mango-chutney", "serving": "30 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "1 each", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "palak-gravy", "serving": "5 kg", "category": "Mains", "diets": ["halal", "vegan"], "meats": []},
        {"food": "kadhi", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "chicken-encilada-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken"]},
        {"food": "italian-tomato-and-pepper-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "2 ounce", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "tuna-salad-filling", "serving": "60 mL", "category": "Proteins", "diets": [], "meats": ["fish"]},
        {"food": "buffalo-chicken-wrap", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["chicken"]},
        {"food": "caprese-sandwich", "serving": "1 serving(s)", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "turmeric-scented-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "chicken-shawarma", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-english-cucumber", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-dill-pickles", "serving": "28 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tabbouleh-salad", "serving": "90 mL", "category": "Vegetables", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "roasted-red-pepper-hummus", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "shawarma-garlic-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "sticky-honey-garlic-pork", "serving": "240 mL", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "stir-fried-chicken-and-broccoli", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "stir-fry-vegetable-vermicelli", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "bbq-chicken", "serving": "1/2 each", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chipotle-bbq-pulled-pork", "serving": "120 mL", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "spicy-tuna-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "japanese-inspired-cucumber-salad", "serving": "60 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "avocado-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "legume-roasted-corn-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "chicken-dijon-and-potato-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "ranch-chopped-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "autumn-lentil-and-arugula-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "bbq-glazed-smash-burger", "serving": "120 g", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "golden-fried-french-fries", "serving": "70 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "10 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "20 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "thai-red-curry-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "laksa-curry-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": [], "meats": ["shellfish"]},
        {"food": "butter-chicken-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "roasted-chicken-breast", "serving": "1/2 serving(s)", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "tofu", "serving": "85 g", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-carrots", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-beans", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-peas", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "minced-garlic", "serving": "240 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-grated-ginger-root", "serving": "454 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "3 piece", "category": "Bases", "diets": [], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "caribbean-chicken-and-pineapple-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "the-great-canadian-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "mni-apple-danish", "serving": "2 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "chocolate-chip-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "chocolate-fudge-brownie", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "butterscotch-pudding", "serving": "90 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "baked-apple-crisp", "serving": "1 piece", "category": "Desserts", "diets": ["vegan"], "meats": []}
      ],
    } },
    "2026-11-10": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-10/lunch", stations: {
      "global-eats": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "herbed-lemon-rice", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "garlic-mashed-potatoes", "serving": "120 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "roasted-mushrooms-with-thyme", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-beans-tomato", "serving": "85 g", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "lyonnaise-carrots", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "maple-glazed-beets-and-parsnips", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "cauliflower-lentil-stew", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "barley-pilaf", "serving": "90 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "mushroom-bourguignonne", "serving": "160 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-sugar-snap-peas-with-red-peppers", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "braised-purple-cabbage", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "french-onion-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["beef"]},
        {"food": "autumn-vegetable-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "2 ounce", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "tuna-salad-filling", "serving": "60 mL", "category": "Proteins", "diets": [], "meats": ["fish"]},
        {"food": "roast-beef-and-cheddar-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["beef"]},
        {"food": "portobello-club-with-smoky-mayo-and-roasted-tomato", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "turmeric-scented-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "chicken-shawarma", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-english-cucumber", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-dill-pickles", "serving": "28 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tabbouleh-salad", "serving": "90 mL", "category": "Vegetables", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "roasted-red-pepper-hummus", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "shawarma-garlic-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "thai-peppered-beef", "serving": "180 mL", "category": "Mains", "diets": [], "meats": ["beef", "fish"]},
        {"food": "hakka-chinese-inspired-noodles", "serving": "1 each", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "vegetable-lo-mein", "serving": "227 g", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "bbq-chicken", "serving": "1/2 each", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chipotle-bbq-pulled-pork", "serving": "120 mL", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "three-bean-and-vegetable-chili", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "180 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "alaska-roll-sushi", "serving": "8 piece", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "tempura-sweet-potato-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": []},
        {"food": "hokey-poke-bowl", "serving": "1 each", "category": "Bowls", "diets": [], "meats": []},
        {"food": "sea-salt-edamame", "serving": "1 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "vegetarian-taco-pasta-salad", "serving": "120 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "bacon-and-brussels-sprouts-salad", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": ["pork"]},
        {"food": "roasted-potato-salad", "serving": "180 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "grilled-vegetable-tofu-salad-with-feta", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "pork-carnitas-tacos", "serving": "3 each", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "bbq-cauliflower-taco", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "pickled-red-onion", "serving": "180 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "salsa-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "thai-red-curry-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "laksa-curry-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": [], "meats": ["shellfish"]},
        {"food": "butter-chicken-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "roasted-chicken-breast", "serving": "1/2 serving(s)", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "tofu", "serving": "85 g", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-carrots", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-beans", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-peas", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "minced-garlic", "serving": "240 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-grated-ginger-root", "serving": "454 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "3 piece", "category": "Bases", "diets": [], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Pizza & flatbreads", "diets": [], "meats": []},
        {"food": "hawaiian-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "grilled-pesto-and-chicken-pizza", "serving": "1 each", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "lemon-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "oatmeal-raisin-cookies", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "pumpkin-loaf", "serving": "1 slice", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "fruit-jelly-strawberry-with-whipped-topping", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "mixed-berry-crisp", "serving": "1 piece", "category": "Desserts", "diets": ["vegan"], "meats": []}
      ],
    } },
    "2026-11-11": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-11/lunch", stations: {
      "global-eats": [
        {"food": "jamaican-style-jerk-chicken-legs", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "caribbean-beef-pepperpot", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": ["beef", "fish"]},
        {"food": "jamaican-rice-and-beans", "serving": "90 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "chickpea-vegetable-curry", "serving": "120 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "roasted-vegetables", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "braised-curried-cabbage", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "fresh-steamed-green-beans", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "cracked-pepper-garlic-parsnips", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "island-jerk-tofu-box", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "caribbean-black-beans", "serving": "180 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "chickpea-and-vegetable-curry", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "roti-dough", "serving": "1 each", "category": "Grains & breads", "diets": [], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "thai-beef-and-vegetable-noodle-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["beef"]},
        {"food": "thai-inspired-curry-coconut-tofu-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "tuna-salad-filling", "serving": "60 mL", "category": "Proteins", "diets": [], "meats": ["fish"]},
        {"food": "spicy-grilled-chicken-madras-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["chicken"]},
        {"food": "smoky-tempeh-and-hummus-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "30 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "spicy-szechuan-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "sweet-and-sour-pork", "serving": "120 mL", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "vegetable-stir-fry", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "singapore-noodles", "serving": "90 mL", "category": "Rice & noodles", "diets": [], "meats": ["pork"]},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "bbq-chicken", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chipotle-bbq-pulled-pork", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "three-bean-and-vegetable-chili", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "15 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "tempura-shrimp-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": ["shellfish"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "crab-salad", "serving": "90 mL", "category": "Sides", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "roasted-red-beet-and-orange-salad", "serving": "120 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "indian-style-chickpea-potato-salad", "serving": "1 serving(s)", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "autumn-harvest-wild-rice-salad", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "roasted-corn-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "plant-based-italian-inspired-sausage", "serving": "2 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "spicy-curly-fries", "serving": "114 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "salsa-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "cream-of-mushroom-soup", "serving": "120 mL", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "chicken-noodle-soup", "serving": "360 mL", "category": "Prepared dishes", "diets": [], "meats": ["chicken"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "meatball-station", "serving": "1 serving(s)", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "seafood-casserole", "serving": "1 each", "category": "Prepared dishes", "diets": [], "meats": ["fish"]},
        {"food": "cod-fish-cakes", "serving": "1 each", "category": "Prepared dishes", "diets": [], "meats": ["fish"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-carrots-frozen", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-quartered-bok-choy", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-nappa-cabbage", "serving": "1 kg", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "whole-kernel-corn", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "buffalo-chicken-pizza", "serving": "1 each", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "breakfast-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "greek-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "raspberry-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "double-chocolate-chip-gourmet-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cheesecake-lemon", "serving": "1 slice", "category": "Desserts", "diets": [], "meats": []},
        {"food": "strawberry-pudding", "serving": "90 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "cream-filled-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-12": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-12/lunch", stations: {
      "global-eats": [
        {"food": "beef-lasagna", "serving": "1 piece", "category": "Mains", "diets": ["halal"], "meats": ["beef"]},
        {"food": "wild-rice-blend", "serving": "1 serving(s)", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "buttered-poached-mini-potatoes", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "spanish-style-fish-pollock", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "roasted-beets", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-roma-vegetables", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "brussels-sprouts", "serving": "85 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "garlic-bread", "serving": "1 each", "category": "Grains & breads", "diets": [], "meats": []}
      ],
      "sprout": [
        {"food": "greek-moussaka-with-tomato-ragout", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "vegetable-lasagna", "serving": "1 piece", "category": "Mains", "diets": [], "meats": []},
        {"food": "baked-zucchini-and-tomatoes", "serving": "85 g", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "roasted-carrots-with-balsamic-glaze-and-fresh-dill", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "creamy-parmesan-polenta", "serving": "120 mL", "category": "Grains & breads", "diets": [], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "roasted-potato-and-chicken-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken"]},
        {"food": "cream-of-tomato-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "15 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "tuna-salad-filling", "serving": "60 mL", "category": "Proteins", "diets": [], "meats": ["fish"]},
        {"food": "meatball-sub-on-hot-dog-roll", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["beef"]},
        {"food": "falafel-wrap", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "30 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "spicy-szechuan-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "orange-ginger-chicken-with-vegetables", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "fresh-pineapple-stir-fry-with-black-beans", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "vegetable-fried-rice", "serving": "240 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "cooked-yellow-split-peas", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "baba-ganoush", "serving": "90 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "dip-garlic-creamy-sauce-44-ml-cdn", "serving": "1 each", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "kalamata-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "tomato-and-cucumber-salad", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "whole-wheat-pita-bread", "serving": "1 each", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "falafel-balls", "serving": "3 each", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "lemon-chicken", "serving": "180 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]}
      ],
      "nori": [
        {"food": "sushi-roll-smoked-salmon", "serving": "5 each", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "quinoa-avocado-cucumber-rolls", "serving": "1 each", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "japanese-inspired-cucumber-salad", "serving": "60 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "sea-salt-edamame", "serving": "1 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "high-protein-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "brussel-sprout-and-squash-caesar-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "roasted-vegetable-herb-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "pulled-curried-chicken-spinach-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": ["chicken"]},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "bacon-and-tomato-grilled-cheese", "serving": "1 sandwich", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "sourdough-grilled-cheese-sandwich", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "spiced-potato-wedges", "serving": "113 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "penne-pasta", "serving": "120 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "philly-cheese-steak-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["beef"]},
        {"food": "meat-lovers-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "jerk-chicken-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "blueberry-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "carnival-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "tart-apple-compote", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "fruit-jelly-peach-with-whipped-topping", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "s-mores-cupcake-mix", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-13": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-13/lunch", stations: {
      "global-eats": [
        {"food": "spicy-red-fish-curry", "serving": "120 mL", "category": "Mains", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "beef-massaman", "serving": "159 mL", "category": "Mains", "diets": [], "meats": ["beef", "fish"]},
        {"food": "thai-lemongrass-rice", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "thai-green-sweet-potato-curry", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "sesame-and-soy-roasted-potatoes", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "chili-garlic-bok-choy", "serving": "2 each", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "spicy-szechuan-green-beans", "serving": "240 mL", "category": "Vegetables & sides", "diets": [], "meats": ["shellfish"]}
      ],
      "sprout": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "bhel-puri", "serving": "180 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "pani-puri", "serving": "6 each", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "pani-puri-filling", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "tamarind-chutney", "serving": "190 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-and-mint-chutney", "serving": "1 serving(s)", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "pani-puri-spicy-water", "serving": "160 mL", "category": "Mains", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "hamburger-soup", "serving": "180 mL", "category": "Soups", "diets": ["halal"], "meats": ["beef"]},
        {"food": "asparagus-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "10 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "tuna-salad-filling", "serving": "60 mL", "category": "Proteins", "diets": [], "meats": ["fish"]},
        {"food": "italian-blt-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["pork"]},
        {"food": "queen-margherita-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "1 kg", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "56 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "60 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "spicy-szechuan-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "pork-stir-fry", "serving": "120 mL", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "golden-tofu-with-onions-and-peppers", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "stir-fry-vegetable-vermicelli", "serving": "180 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "cooked-yellow-split-peas", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "baba-ganoush", "serving": "90 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "dip-garlic-creamy-sauce-44-ml-cdn", "serving": "1 each", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "kalamata-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "tomato-and-cucumber-salad", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "whole-wheat-pita-bread", "serving": "1 each", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "falafel-balls", "serving": "3 each", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "lemon-chicken", "serving": "180 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]}
      ],
      "nori": [
        {"food": "sushi-dynamite-sushi-roll-9-ea-cdn", "serving": "1 each", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "avocado-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "barley-and-apple-salad-with-kale", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "blackened-chicken-caesar-salad", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": ["chicken", "pork"]},
        {"food": "macaroni-salad", "serving": "80 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "pineapple-cabbage-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "hot-turkey-and-swiss-slider", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["turkey"]},
        {"food": "roasted-red-pepper-and-garlic-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "spring-greens", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "kettle-chips-regular", "serving": "1 each", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "basil-pesto", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "penne-pasta", "serving": "120 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "chicken-diablo-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "crispy-chorizo-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "cheese-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "chocolate-avalanche-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "chocolate-chip-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "chocolate-mousse-parfait", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "lemon-pudding", "serving": "90 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "tiramisu-layered-cake", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-14": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-14/lunch", stations: {
      "global-eats": [
        {"food": "southwestern-fiesta-breakfast-bake", "serving": "1 piece", "category": "Mains", "diets": [], "meats": []},
        {"food": "eggs-ranchero", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "slow-roasted-bone-in-ham", "serving": "85 g", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "cajun-rice", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "potato-bean-and-tomato-stew", "serving": "300 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "waffles-with-maple-syrup", "serving": "2 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "hash-brown-patty-triangle", "serving": "2 each", "category": "Vegetables & sides", "diets": ["halal"], "meats": []},
        {"food": "cooked-corn", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "flour-tortilla-wrap-6", "serving": "1 each", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-bbq-pulled-jackfruit", "serving": "60 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "60 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "lime-wedge", "serving": "1 wedge", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-peppers-and-onions", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "fish-chowder", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["fish"]},
        {"food": "sweet-and-sour-cabbage-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "tuna-salad-filling", "serving": "60 mL", "category": "Proteins", "diets": [], "meats": ["fish"]},
        {"food": "grilled-chicken-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["chicken"]},
        {"food": "vegetable-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": ["vegan"], "meats": []}
      ],
      "hot-plate": [
        {"food": "french-toast", "serving": "1 slice", "category": "Breakfast dishes", "diets": [], "meats": []},
        {"food": "strawberry-coulis", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "pineapple-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "chocolate-syrup", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "whipped-cream", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "hot-honey-drizzle", "serving": "10 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "lemon-creme", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "semi-sweet-chocolate-chips", "serving": "10 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "toasted-shredded-coconut", "serving": "28 g", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "korean-beef-stir-fry", "serving": "180 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "korean-inspired-sweet-and-spicy-chili-tofu", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "fried-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "bbq-chicken", "serving": "1/2 each", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chipotle-bbq-pulled-pork", "serving": "120 mL", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "10 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "sushi-roll-smoked-salmon", "serving": "5 each", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "tempura-sweet-potato-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": []},
        {"food": "tuna-poke-bowl", "serving": "1 serving(s)", "category": "Bowls", "diets": [], "meats": ["fish"]},
        {"food": "sea-salt-edamame", "serving": "1 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "corn-red-bell-pepper-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "quinoa-tabbouleh-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "marinated-chickpea-salad", "serving": "80 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "honey-balsamic-squash-salad", "serving": "60 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "beef-burger-on-ww-bun", "serving": "1 each", "category": "Mains", "diets": ["halal"], "meats": ["beef"]},
        {"food": "breakfast-sandwich-egg-cheese-sausage", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "baked-sweet-potato-fries", "serving": "180 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "30 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "penne-pasta", "serving": "120 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "tandoori-chicken-flat-bread", "serving": "1 piece", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "bacon-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "margherita-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "mini-raspberry-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "oatmeal-raisin-cookies", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "coconut-cinnamon-chia-parfait", "serving": "1 each", "category": "Desserts", "diets": ["vegan"], "meats": []},
        {"food": "fruit-jelly-raspberry-with-whipped-topping", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "blueberry-lemon-cake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-15": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-15/lunch", stations: {
      "global-eats": [
        {"food": "cowboy-hash-brown-skillet", "serving": "90 mL", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "shakshuka-breakfast-skillet", "serving": "120 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "roasted-leg-of-lamb-with-black-garlic-jus", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": ["beef", "lamb"]},
        {"food": "persian-cranberry-rice-pilaf", "serving": "180 mL", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "middle-eastern-lentil-chili", "serving": "180 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "roasted-za-atar-potatoes", "serving": "120 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "spiced-eggplant-and-chickpeas", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-beans-tomato", "serving": "85 g", "category": "Mains", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "baked-tortilla-chips", "serving": "12 each", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-vegan-crumble-taco-filling", "serving": "60 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cheese-nachos", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "shredded-lettuce", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & toppings", "diets": [], "meats": []},
        {"food": "guacamole", "serving": "60 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "salsa-roja", "serving": "45 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "salsa-verde", "serving": "60 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "greek-inspired-chicken-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken"]},
        {"food": "tomato-vegetable-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "corned-beef-and-swiss-on-rye", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["beef"]},
        {"food": "smoky-tempeh-and-hummus-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "pancakes", "serving": "2 each", "category": "Breakfast dishes", "diets": [], "meats": []},
        {"food": "strawberry-coulis", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "pineapple-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "chocolate-syrup", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "whipped-cream", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "hot-honey-drizzle", "serving": "10 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "lemon-creme", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "semi-sweet-chocolate-chips", "serving": "10 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "toasted-shredded-coconut", "serving": "28 g", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "beef-and-broccoli-stir-fry", "serving": "168 g", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "kung-pao-tofu", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "vegetable-fried-rice", "serving": "240 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "sushi-dynamite-sushi-roll-9-ea-cdn", "serving": "1 each", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "avocado-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "tuna-poke-bowl", "serving": "1 serving(s)", "category": "Bowls", "diets": [], "meats": ["fish"]},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "mango-black-bean-and-quinoa-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "waldorf-salad", "serving": "85 g", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "smokey-potato-salad", "serving": "120 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "greek-lentil-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "beef-burger-on-ww-bun", "serving": "1 each", "category": "Mains", "diets": ["halal"], "meats": ["beef"]},
        {"food": "mcfraser-breakfast-sandwich", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "tater-tots", "serving": "240 mL", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "30 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "rotini-pasta", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "chicken-diablo-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "the-great-canadian-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "grilled-pesto-and-chicken-pizza", "serving": "1 each", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cherry-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "double-chocolate-chip-gourmet-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cherry-tarts", "serving": "1 each", "category": "Desserts", "diets": ["vegan"], "meats": []},
        {"food": "fruit-jelly-cherry-with-whipped-topping", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "carrot-cake-cupcakes-with-cream-cheese-icing", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-16": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-16/lunch", stations: {
      "global-eats": [
        {"food": "roasted-wild-pacific-salmon-with-lemon-caper-sauce", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "baked-meatloaf", "serving": "1 slice", "category": "Mains", "diets": [], "meats": ["beef", "pork"]},
        {"food": "herb-rice-pilaf", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "southern-bean-and-veggie-gumbo", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "garlic-mashed-potatoes", "serving": "120 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "green-bean-casserole-the-fresh-fork", "serving": "120 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "maple-glazed-beets-and-parsnips", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-spinach-and-garlic", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "mac-and-cheese", "serving": "240 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "succotash", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "fried-dill-pickles", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "corn-with-red-peppers", "serving": "113 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "italian-inspired-wedding-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["beef"]},
        {"food": "sweet-potato-and-coconut-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "2 ounce", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "shaved-black-forest-ham-honey-mustard-and-cheddar", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["pork"]},
        {"food": "falafel-wrap", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "turmeric-scented-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "chicken-shawarma", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-english-cucumber", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-dill-pickles", "serving": "28 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tabbouleh-salad", "serving": "90 mL", "category": "Vegetables", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "roasted-red-pepper-hummus", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "shawarma-garlic-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "teriyaki-chicken-stir-fry", "serving": "90 mL", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "orange-chick-n-madarin-stir-fry", "serving": "199 g", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "vegetable-chow-mein", "serving": "240 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "sushi-roll-smoked-salmon", "serving": "5 each", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "quinoa-avocado-cucumber-rolls", "serving": "1 each", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "sea-salt-edamame", "serving": "1 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "quinoa-and-potato-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "roasted-tofu-salad-with-broccoli-and-sesame", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "pesto-rice-salad", "serving": "120 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "healthy-cobb-salad", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "loaded-jalapeno-burger", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["beef", "pork"]},
        {"food": "golden-fried-french-fries", "serving": "120 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "5 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "30 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "thai-green-curry-vegetables", "serving": "180 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "panang-curry-vegetable", "serving": "1 serving(s)", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "butter-chicken-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "roasted-chicken-breast", "serving": "1/2 serving(s)", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "tofu", "serving": "85 g", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-carrots", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-beans", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-peas", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "minced-garlic", "serving": "240 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-grated-ginger-root", "serving": "454 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "3 piece", "category": "Bases", "diets": [], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "bbq-chicken-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "salami-and-caramelized-onion-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "greek-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "mni-apple-danish", "serving": "2 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "carnival-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "classic-rice-pudding", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "chocolate-pudding", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "coconut-and-chocolate-chip-granola-bar", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-17": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-17/lunch", stations: {
      "global-eats": [
        {"food": "chicken-mole", "serving": "1 each", "category": "Mains", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "mexican-rice-pilaf", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "patatas-bravas", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "chili-and-lime-roasted-corn", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-peppers", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-black-beans", "serving": "60 mL", "category": "Mains", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "flour-tortillas", "serving": "1 each", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-black-beans", "serving": "60 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "chicken-tinga", "serving": "60 mL", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "pickled-red-onion", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "chili-lime-crema", "serving": "166 mL", "category": "Sauces & toppings", "diets": [], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "split-pea-and-ham-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken", "pork"]},
        {"food": "cream-of-carrot-and-ginger-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "2 ounce", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "avocado-chicken-wrap", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["chicken"]},
        {"food": "queen-margherita-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "turmeric-scented-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "chicken-shawarma", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-english-cucumber", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-dill-pickles", "serving": "28 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tabbouleh-salad", "serving": "90 mL", "category": "Vegetables", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "roasted-red-pepper-hummus", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "shawarma-garlic-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "shrimp-and-vegetable-stir-fry", "serving": "180 mL", "category": "Mains", "diets": [], "meats": ["shellfish"]},
        {"food": "sweet-and-sour-tofu", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "indian-fried-rice-with-fresh-chilies-and-cilantro", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "three-bean-and-vegetable-chili", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "180 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "spicy-tuna-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "avocado-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "japanese-inspired-cucumber-salad", "serving": "60 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "golden-jewel-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "zucchini-and-mushroom-salad", "serving": "85 g", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "cajun-chicken-kale-caesar-salad", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": ["chicken"]},
        {"food": "roasted-butternut-squash-kale-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "grilled-fish-taco-with-freekeh", "serving": "2 each", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "chipotle-vegan-crumble-taco-filling", "serving": "60 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "baked-sweet-potato-fries", "serving": "180 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "pickled-red-onion", "serving": "180 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "salsa-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "thai-green-curry-vegetables", "serving": "180 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "panang-curry-vegetable", "serving": "1 serving(s)", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "butter-chicken-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "roasted-chicken-breast", "serving": "1/2 serving(s)", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "tofu", "serving": "85 g", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-carrots", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-beans", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-peas", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "minced-garlic", "serving": "240 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-grated-ginger-root", "serving": "454 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "3 piece", "category": "Bases", "diets": [], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "hamburger-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["beef"]},
        {"food": "meat-lovers-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "jerk-chicken-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "lemon-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "chocolate-chip-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "fruit-trifle-parfait", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "fruit-jelly-orange-with-whipped-topping", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "cherry-chocolate-cake", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-18": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-18/lunch", stations: {
      "global-eats": [
        {"food": "butter-chicken", "serving": "170 g", "category": "Mains", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "yellow-basmati-rice", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "turmeric-roasted-cauliflower", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "1 each", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "buttered-peas", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "butter-chickpea-vegetable-curry", "serving": "120 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "aloo-gobi-rd", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "1 each", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "kadhi", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "vegetable-samosa", "serving": "1 each", "category": "Mains", "diets": [], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "shrimp-and-bacon-chowder", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["fish", "pork", "shellfish"]},
        {"food": "black-bean-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "meatball-sub-on-hot-dog-roll", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["beef"]},
        {"food": "vegetable-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": ["vegan"], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "30 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "sweet-chili-chicken-stir-fry", "serving": "120 mL", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "plant-based-fried-chicken-and-broccoli-stir-fry", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "sesame-soba-noodles", "serving": "113 g", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "three-bean-and-vegetable-chili", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "15 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "california-roll-sushi", "serving": "8 piece", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "sushi-roll-vegetarian", "serving": "5 each", "category": "Sushi", "diets": [], "meats": []},
        {"food": "korean-japchae-salad", "serving": "90 mL", "category": "Sides", "diets": [], "meats": []},
        {"food": "sea-salt-edamame", "serving": "1 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "tomato-basil-pasta-salad", "serving": "240 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "caribbean-marinated-cucumber-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "moroccan-carrot-salad", "serving": "240 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "indian-style-chickpea-potato-salad", "serving": "1 serving(s)", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "plant-based-italian-inspired-sausage", "serving": "2 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "baked-sweet-potato-fries", "serving": "180 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "10 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "salsa-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "cream-of-mushroom-soup", "serving": "120 mL", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "chicken-noodle-soup", "serving": "360 mL", "category": "Prepared dishes", "diets": [], "meats": ["chicken"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "meatball-station", "serving": "1 serving(s)", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "seafood-casserole", "serving": "1 each", "category": "Prepared dishes", "diets": [], "meats": ["fish"]},
        {"food": "cod-fish-cakes", "serving": "1 each", "category": "Prepared dishes", "diets": [], "meats": ["fish"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-carrots-frozen", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-quartered-bok-choy", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-nappa-cabbage", "serving": "1 kg", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "whole-kernel-corn", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "mexican-taco-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["beef"]},
        {"food": "crispy-chorizo-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "cheese-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "raspberry-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "oatmeal-raisin-cookies", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cheesecake-blueberry", "serving": "1 slice", "category": "Desserts", "diets": [], "meats": []},
        {"food": "coconut-cream-pudding", "serving": "90 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "chocolate-chia-parfait", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-19": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-19/lunch", stations: {
      "global-eats": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "adobo-rubbed-pork-tenderloin", "serving": "85 g", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "filipino-inspired-garlic-fried-rice-with-eggs", "serving": "120 mL", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "sesame-and-soy-roasted-potatoes", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-broccoli-florets", "serving": "80 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "chili-garlic-bok-choy", "serving": "2 each", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sesame-roasted-brussel-sprouts", "serving": "180 mL", "category": "Vegetables & sides", "diets": [], "meats": []}
      ],
      "sprout": [
        {"food": "tofu-sisig", "serving": "180 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "panang-curry-vegetable", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "thai-rice-noodles", "serving": "180 mL", "category": "Grains & breads", "diets": [], "meats": ["fish"]},
        {"food": "mini-vegetable-spring-rolls-with-thai-sauce", "serving": "2 piece", "category": "Mains", "diets": [], "meats": []},
        {"food": "kung-pao-style-cauliflower-and-beans", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "timberline-beef-chili", "serving": "160 mL", "category": "Soups", "diets": [], "meats": ["beef"]},
        {"food": "mushroom-bisque-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "15 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "jerk-chicken-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["chicken"]},
        {"food": "vegetable-cheese-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "30 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "mongolian-beef-stir-fry", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "veggie-medley-chop-suey", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "vegetable-fried-rice", "serving": "240 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "cooked-yellow-split-peas", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "baba-ganoush", "serving": "90 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "dip-garlic-creamy-sauce-44-ml-cdn", "serving": "1 each", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "kalamata-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "tomato-and-cucumber-salad", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "whole-wheat-pita-bread", "serving": "1 each", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "falafel-balls", "serving": "3 each", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "lemon-chicken", "serving": "180 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]}
      ],
      "nori": [
        {"food": "tempura-shrimp-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": ["shellfish"]},
        {"food": "tempura-sweet-potato-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": []},
        {"food": "teriyaki-chicken-poke-bowl", "serving": "1 each", "category": "Bowls", "diets": [], "meats": ["chicken"]},
        {"food": "wakame-salad", "serving": "1/2 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "mediterranean-salad-with-tuna", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": ["fish"]},
        {"food": "california-cobb-salad", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": ["chicken", "pork"]},
        {"food": "asian-cucumber-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "sweet-potato-and-yukon-gold-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "authentic-bombay-chili-cheese-toastie", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "sourdough-grilled-cheese-sandwich", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "spiced-potato-wedges", "serving": "113 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "rotini-pasta", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "butter-chicken-flat-bread", "serving": "1 each", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "bacon-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "margherita-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "blueberry-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "double-chocolate-chip-gourmet-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "tiramisu-layered-cake", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "fruit-jelly-grape-with-whipped-topping", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "oreo-cookie-cupcake-mix", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-20": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-20/lunch", stations: {
      "global-eats": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "orange-ginger-rice", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-perogies-and-caramelized-onions", "serving": "6 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "braised-purple-cabbage", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-beets", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "asparagus-and-roasted-red-peppers", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "fresh-steamed-carrots", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "seasoned-buns", "serving": "1 each", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "szechuan-green-bean-ramen-w-basil-roasted-mushrooms", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pickled-daikon-radishes", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pickled-carrots", "serving": "40 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "asian-inspired-slaw", "serving": "240 mL", "category": "Vegetables & sides", "diets": [], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "homemade-turkey-and-vegetable-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["turkey"]},
        {"food": "butternut-squash-and-apple-soup-puree", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "10 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "ultimate-peameal-bacon-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["pork"]},
        {"food": "salumeria-caprese-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "1 kg", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "56 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "60 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "crispytofu-stir-fry", "serving": "240 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "singapore-noodles", "serving": "90 mL", "category": "Rice & noodles", "diets": [], "meats": ["pork"]},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "cooked-yellow-split-peas", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "baba-ganoush", "serving": "90 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "dip-garlic-creamy-sauce-44-ml-cdn", "serving": "1 each", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "kalamata-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "tomato-and-cucumber-salad", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "whole-wheat-pita-bread", "serving": "1 each", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "falafel-balls", "serving": "3 each", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "lemon-chicken", "serving": "180 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]}
      ],
      "nori": [
        {"food": "sushi-roll-smoked-salmon", "serving": "5 each", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "quinoa-avocado-cucumber-rolls", "serving": "1 each", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "soba-noodle-and-edamame-salad", "serving": "90 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "sea-salt-edamame", "serving": "1 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "barley-and-apple-salad-with-kale", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "roasted-beet-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "carolina-salad", "serving": "85 g", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "roasted-root-vegetable-salad", "serving": "1 serving(s)", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "roast-lamb-sandwich", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["lamb"]},
        {"food": "fire-roasted-red-peppers-sliced", "serving": "28 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "lemon-yogurt-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kettle-chips-regular", "serving": "1 each", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "60 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "rotini-pasta", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "caribbean-chicken-and-pineapple-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "pepperoni-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "mushroom-and-caramelized-onion-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "chocolate-avalanche-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "carnival-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "lemon-curd-tart", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "vanilla-pudding", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "strawberry-shortcake-parfait", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-21": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-21/lunch", stations: {
      "global-eats": [
        {"food": "denver-omelette", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "eggs-benedict", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "herb-crusted-beef-roast", "serving": "56 g", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "creole-rice", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "plantain-and-black-bean-stew", "serving": "300 g", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-roasted-potatoes", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "french-toast-casserole-non-dairy", "serving": "1 piece", "category": "Mains", "diets": [], "meats": []},
        {"food": "roast-parsnip-and-carrot-batons", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "flour-tortilla-wrap-6", "serving": "1 each", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "chimichurri-tofu-empanadas", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "60 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "lime-wedge", "serving": "1 wedge", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-peppers-and-red-onions", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "roasted-potato-and-chicken-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken"]},
        {"food": "roasted-broccoli-and-kale-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "turkey-and-swiss-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["turkey"]},
        {"food": "cheddar-and-tomato-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "french-toast", "serving": "1 slice", "category": "Breakfast dishes", "diets": [], "meats": []},
        {"food": "strawberry-coulis", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "pineapple-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "chocolate-syrup", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "whipped-cream", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "hot-honey-drizzle", "serving": "10 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "lemon-creme", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "semi-sweet-chocolate-chips", "serving": "10 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "toasted-shredded-coconut", "serving": "28 g", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "kung-pao-chicken", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": ["chicken", "shellfish"]},
        {"food": "mixed-vegetable-stir-fry", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "vegetable-lo-mein", "serving": "227 g", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "10 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "alaska-roll-sushi", "serving": "8 piece", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "avocado-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "tofu-teriyaki-rice-bowl", "serving": "1 serving(s)", "category": "Bowls", "diets": [], "meats": ["shellfish"]},
        {"food": "wakame-salad", "serving": "1/2 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "jerk-chicken-salad", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": ["chicken"]},
        {"food": "apple-grain-salad", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "caprese-pasta-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "spinach-salad-with-bacon-egg", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": ["pork"]},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "beef-burger-on-ww-bun", "serving": "1 each", "category": "Mains", "diets": ["halal"], "meats": ["beef"]},
        {"food": "spiced-potato-and-tofu-breakfast-tacos", "serving": "2 each", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "baked-sweet-potato-fries", "serving": "180 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "2250 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "salsa-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "120 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "rotini-pasta", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "chicken-pesto-with-mushroom-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "hawaiian-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "pizza-primavera", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "small-croissant", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "mini-raspberry-danish", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "chocolate-chip-cookie", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "apple-tarts", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "fruit-jelly-lime-with-whipped-topping", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "nanaimo-bar-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
  } };
  window.nutritionMenus.Dinner = { capturedOn: "2026-11-21", catalog, categoryOrder, days: {
    "2026-11-02": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-02/dinner", stations: {
      "global-eats": [
        {"food": "chicken-yassa", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "vegetable-rice-pilaf", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "moroccan-couscous-salad", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "marinated-beets-with-dill", "serving": "120 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "chili-and-lime-roasted-corn", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "paprika-roasted-chickpeas", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "roasted-cauliflower", "serving": "160 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "nacho-chips", "serving": "1 each", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "spicy-black-beans", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cheese-sauce", "serving": "30 mL", "category": "Sauces & toppings", "diets": [], "meats": []},
        {"food": "tomato-salsa", "serving": "30 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream-14-43-ml-cdn", "serving": "1 each", "category": "Sauces & toppings", "diets": [], "meats": []},
        {"food": "pickled-red-onions-with-jalapenos", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "hot-and-sour-chinese-pork-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["pork"]},
        {"food": "cream-of-tomato-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "2 ounce", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "shaved-black-forest-ham-honey-mustard-and-cheddar", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["pork"]},
        {"food": "falafel-wrap", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "turmeric-scented-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "chicken-shawarma", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-english-cucumber", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-dill-pickles", "serving": "28 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tabbouleh-salad", "serving": "90 mL", "category": "Vegetables", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "roasted-red-pepper-hummus", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "shawarma-garlic-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "chicken-stir-fry", "serving": "120 mL", "category": "Mains", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "crispytofu-stir-fry", "serving": "240 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "stir-fry-vegetable-vermicelli", "serving": "240 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "spicy-tuna-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "avocado-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "japanese-inspired-cucumber-salad", "serving": "60 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "sea-salt-edamame", "serving": "1/2 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "arugula-and-beet-salad-with-miso-dressing", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "greek-potato-salad", "serving": "128 g", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "miso-barley-with-mushrooms-and-greens", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "mango-black-bean-and-quinoa-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "buffalo-crispy-chicken-wrap", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "falafel-wrap", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "kettle-chips-regular", "serving": "1 each", "category": "Sides", "diets": [], "meats": []},
        {"food": "chicken-tender-strips", "serving": "3 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "pickled-red-onion", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tomato-salsa", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream-14-43-ml-cdn", "serving": "1 each", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "thai-green-curry-vegetables", "serving": "180 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "panang-curry-vegetable", "serving": "1 serving(s)", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "butter-chicken-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "roasted-chicken-breast", "serving": "1/2 serving(s)", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "tofu", "serving": "85 g", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-carrots", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-beans", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-peas", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "minced-garlic", "serving": "240 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-grated-ginger-root", "serving": "454 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "3 piece", "category": "Bases", "diets": [], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "philly-cheese-steak-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["beef"]},
        {"food": "crispy-chorizo-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "margherita-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "cranberry-lemon-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "chocolate-chip-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cinnamon-sugared-donut-holes", "serving": "5 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-iced-vanilla-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "date-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "oatmeal-apple-loaf", "serving": "1 slice", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-03": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-03/dinner", stations: {
      "global-eats": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "beef-kofta", "serving": "1 serving(s)", "category": "Mains", "diets": ["halal"], "meats": ["beef"]},
        {"food": "rice-pilaf", "serving": "180 mL", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "roasted-za-atar-potatoes", "serving": "120 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "sumac-roasted-butternut-squash", "serving": "85 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-cauliflower-with-citrus-tahini-and-caramelized-onions", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "green-beans", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-peppers", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "harissa-roasted-tofu", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "cumin-roasted-eggplant", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "yogurt-dip", "serving": "60 mL", "category": "Mains", "diets": [], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "timberline-beef-chili", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["beef"]},
        {"food": "creamy-broccoli-soup-puree", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "2 ounce", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "avocado-chicken-wrap", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["chicken"]},
        {"food": "queen-margherita-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "turmeric-scented-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "chicken-shawarma", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-english-cucumber", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-dill-pickles", "serving": "28 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tabbouleh-salad", "serving": "90 mL", "category": "Vegetables", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "roasted-red-pepper-hummus", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "shawarma-garlic-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "hoisin-beef-stir-fry", "serving": "90 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "szechaun-style-eggplant-with-egg-rolls", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "vegetable-chow-mein", "serving": "240 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "three-bean-and-vegetable-chili", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "180 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "alaska-roll-sushi", "serving": "8 piece", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "hokey-poke-bowl", "serving": "1 each", "category": "Bowls", "diets": [], "meats": []},
        {"food": "tempura-sweet-potato-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": []},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "grilled-vegetable-salad-with-feta", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "jerk-chicken-salad", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": ["chicken"]},
        {"food": "golden-jewel-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "moroccan-couscous-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "beef-burger-on-ww-bun", "serving": "1 each", "category": "Mains", "diets": ["halal"], "meats": ["beef"]},
        {"food": "sourdough-grilled-cheese-sandwich", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "spicy-curly-fries", "serving": "114 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "chicken-tender-strips", "serving": "3 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "50 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "120 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "thai-green-curry-vegetables", "serving": "180 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "panang-curry-vegetable", "serving": "1 serving(s)", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "butter-chicken-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "roasted-chicken-breast", "serving": "1/2 serving(s)", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "tofu", "serving": "85 g", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-carrots", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-beans", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-peas", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "minced-garlic", "serving": "240 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-grated-ginger-root", "serving": "454 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "3 piece", "category": "Bases", "diets": [], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "tandoori-chicken-flat-bread", "serving": "1 piece", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "bacon-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "mushroom-and-caramelized-onion-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "banana-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "four-berry-blend-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cinnamon-sugar-coated-churros", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "caramel-rice-krispie-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "lemon-blueberry-bar", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "oatmeal-berry-loaf", "serving": "1 slice", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-04": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-04/dinner", stations: {
      "global-eats": [
        {"food": "italian-inspired-porchetta", "serving": "113 g", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "chicken-piccata", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "spaghetti", "serving": "240 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "penne-pasta", "serving": "240 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "pot-roasted-artichokes", "serving": "150 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "baked-eggplant-parmesan-pasta-bake", "serving": "120 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "sauteed-red-and-green-peppers", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-mushrooms", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-butternut-squash", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "150 g", "category": "Sauces & toppings", "diets": [], "meats": []},
        {"food": "bolognese-meat-sauce", "serving": "120 mL", "category": "Sauces & toppings", "diets": ["halal"], "meats": ["beef"]},
        {"food": "vegetarian-bolognese-sauce", "serving": "120 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "sauteed-squash", "serving": "85 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "asparagus-and-roasted-red-peppers", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "vegetarian-mushroom-risotto", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "soft-polenta", "serving": "120 mL", "category": "Grains & breads", "diets": [], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "crab-bisque", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "minestrone-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "meatball-sub-on-hot-dog-roll", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["beef"]},
        {"food": "vegetable-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": ["vegan"], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "30 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "sticky-honey-garlic-pork", "serving": "240 mL", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "korean-inspired-sweet-and-spicy-chili-tofu", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "sriracha-fried-rice", "serving": "360 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "three-bean-and-vegetable-chili", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "15 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "tempura-shrimp-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": ["shellfish"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "crab-salad", "serving": "90 mL", "category": "Sides", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "sea-salt-edamame", "serving": "1/2 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "thai-coconut-cucumber-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "kale-caesar-salad-with-garlic-roasted-chickpeas", "serving": "1 serving(s)", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "zucchini-and-mushroom-salad", "serving": "85 g", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-crunch-salad", "serving": "60 mL", "category": "Prepared salads", "diets": [], "meats": ["pork"]},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "grilled-chicken-santa-fe", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "grilled-vegetable-and-bean-quesadillas", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "spiced-potato-wedges", "serving": "113 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "chicken-tender-strips", "serving": "3 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "2250 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tomato-salsa", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream-14-43-ml-cdn", "serving": "1 each", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "cream-of-mushroom-soup", "serving": "120 mL", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "chicken-noodle-soup", "serving": "360 mL", "category": "Prepared dishes", "diets": [], "meats": ["chicken"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "meatball-station", "serving": "1 serving(s)", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "seafood-casserole", "serving": "1 each", "category": "Prepared dishes", "diets": [], "meats": ["fish"]},
        {"food": "cod-fish-cakes", "serving": "1 each", "category": "Prepared dishes", "diets": [], "meats": ["fish"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-carrots-frozen", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-quartered-bok-choy", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-nappa-cabbage", "serving": "1 kg", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "whole-kernel-corn", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "chicken-diablo-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "pepperoni-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "oatmeal-apple-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "pineapple-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-coconut-macaroons", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-iced-chocolate-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "pumpkin-brownies", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "caramel-swirl-coffee-cake", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-05": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-05/dinner", stations: {
      "global-eats": [
        {"food": "biryani-rice-mix", "serving": "1 serving(s)", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "goan-fish-curry", "serving": "180 mL", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "vegetable-biryani-with-chickpeas", "serving": "360 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "homemade-potato-wedges", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "mushroom-and-pea-coconut-korma", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "1 each", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "tandoori-root-vegetables", "serving": "113 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "curried-cauliflower", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "matar-paneer", "serving": "128 g", "category": "Mains", "diets": [], "meats": []},
        {"food": "chana-masala", "serving": "128 g", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "aloo-gobhi", "serving": "170 g", "category": "Mains", "diets": ["halal", "vegan"], "meats": []},
        {"food": "vegetable-samosas", "serving": "2 each", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "tandoori-root-vegetables", "serving": "113 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "louisiana-chicken-rice-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken", "pork"]},
        {"food": "pasta-bean-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "15 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "jerk-chicken-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["chicken"]},
        {"food": "vegetable-cheese-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "30 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "shrimp-and-vegetable-stir-fry", "serving": "180 mL", "category": "Mains", "diets": [], "meats": ["shellfish"]},
        {"food": "sweet-and-sour-tofu", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "320 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "cooked-yellow-split-peas", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "baba-ganoush", "serving": "90 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "dip-garlic-creamy-sauce-44-ml-cdn", "serving": "1 each", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "kalamata-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "tomato-and-cucumber-salad", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "whole-wheat-pita-bread", "serving": "1 each", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "falafel-balls", "serving": "3 each", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "lemon-chicken", "serving": "180 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]}
      ],
      "nori": [
        {"food": "sushi-roll-smoked-salmon", "serving": "5 each", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "quinoa-avocado-cucumber-rolls", "serving": "1 each", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "japanese-inspired-cucumber-salad", "serving": "60 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "roasted-red-beet-and-orange-salad", "serving": "120 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "high-protein-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "mediterranean-salad-with-tuna", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": ["fish"]},
        {"food": "pesto-penne-with-peas-and-tomato-salad", "serving": "120 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "beef-burger-on-ww-bun", "serving": "1 each", "category": "Mains", "diets": ["halal"], "meats": ["beef"]},
        {"food": "black-bean-veggie-burger-deluxe-rd", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "golden-fried-onion-rings", "serving": "70 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "chicken-tender-strips", "serving": "3 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "50 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "120 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "rotini-pasta", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "bbq-chicken-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "the-great-canadian-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "grilled-pesto-and-chicken-pizza", "serving": "1 each", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "morning-glory-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "raisin-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cinnamon-sugared-donut-holes", "serving": "5 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-iced-vanilla-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "cherry-tarts", "serving": "1 each", "category": "Desserts", "diets": ["vegan"], "meats": []},
        {"food": "vanilla-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-06": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-06/dinner", stations: {
      "global-eats": [
        {"food": "east-coast-fish-stew", "serving": "240 mL", "category": "Mains", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "house-slow-roasted-beef", "serving": "71 g", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "black-bean-rice", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "black-bean-and-sweet-potato-chili", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "roasted-peruvian-potatoes", "serving": "85 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-root-vegetables", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "brussels-sprouts", "serving": "85 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-cauliflower", "serving": "160 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "spiced-chick-n-and-okra-stew", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "tex-mex-style-cauliflower-steaks", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "cumin-honey-roasted-carrots", "serving": "90 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "chipotle-baked-beans", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "turkey-lentil-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["turkey"]},
        {"food": "moroccan-inspired-vegetable-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "10 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "ultimate-peameal-bacon-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["pork"]},
        {"food": "salumeria-caprese-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "1 kg", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "56 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "60 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "szechuan-chicken-stir-fry", "serving": "90 mL", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "tofu-bulgogi", "serving": "1 each", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "stir-fry-vegetable-vermicelli", "serving": "240 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "cooked-yellow-split-peas", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "baba-ganoush", "serving": "90 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "dip-garlic-creamy-sauce-44-ml-cdn", "serving": "1 each", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "kalamata-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "tomato-and-cucumber-salad", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "whole-wheat-pita-bread", "serving": "1 each", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "falafel-balls", "serving": "3 each", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "lemon-chicken", "serving": "180 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]}
      ],
      "nori": [
        {"food": "sushi-dynamite-sushi-roll-9-ea-cdn", "serving": "1 each", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "avocado-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "sea-salt-edamame", "serving": "1/2 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "lebanese-fattoush-salad-with-beans", "serving": "120 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "marinated-chickpea-salad", "serving": "80 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "roasted-beet-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "quinoa-corn-and-black-bean-side-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "battered-fried-fish-pollock-fillet", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "coleslaw", "serving": "30 mL", "category": "Sides", "diets": [], "meats": []},
        {"food": "golden-fried-french-fries", "serving": "70 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "chicken-tender-strips", "serving": "3 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "50 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "tartar-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "rotini-pasta", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "buffalo-chicken-pizza", "serving": "1 each", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "hawaiian-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "greek-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "caramel-coffee-cake-swirl-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cheddar-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cinnamon-sugar-coated-churros", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "rice-krispie-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "mixed-berry-crumble-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "banana-chocolate-chip-mini-loaf", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-07": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-07/dinner", stations: {
      "global-eats": [
        {"food": "beef-stir-fry", "serving": "120 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "fish-cake-soup", "serving": "200 mL", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "basmati-rice-with-green-onions-and-parsley", "serving": "60 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "braised-escarole", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sweet-and-spicy-cauliflower", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "chili-garlic-bok-choy", "serving": "2 each", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sesame-roasted-brussel-sprouts", "serving": "180 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "green-beans-in-oyster-sauce", "serving": "240 mL", "category": "Vegetables & sides", "diets": [], "meats": ["shellfish"]}
      ],
      "sprout": [
        {"food": "korean-bbq-tofu", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "thai-rice-noodles", "serving": "180 mL", "category": "Grains & breads", "diets": [], "meats": ["fish"]},
        {"food": "asian-mixed-vegetable-blend", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "breaded-zucchini-sticks", "serving": "4 each", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "gingered-carrots", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "mulligatawny-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken"]},
        {"food": "cream-of-mushroom-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "turkey-and-swiss-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["turkey"]},
        {"food": "cheddar-and-tomato-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "1 kg", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "56 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "60 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "sweet-chili-chicken-stir-fry", "serving": "120 mL", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "fresh-pineapple-stir-fry-with-black-beans", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "vegetable-chow-mein", "serving": "240 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "10 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "sushi-roll-smoked-salmon", "serving": "5 each", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "sushi-roll-vegetarian", "serving": "5 each", "category": "Sushi", "diets": [], "meats": []},
        {"food": "tofu-teriyaki-rice-bowl", "serving": "1 serving(s)", "category": "Bowls", "diets": [], "meats": ["shellfish"]},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "blackened-chicken-caesar-salad", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": ["chicken"]},
        {"food": "roasted-cauliflower-raisin-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "barley-and-apple-salad-with-kale", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "kachumber-salad-indian-inspired-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "lime-cilantro-shrimp-burrito", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["shellfish"]},
        {"food": "grilled-vegetable-and-cheese-quesadilla", "serving": "2 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "spicy-curly-fries", "serving": "114 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "chicken-tender-strips", "serving": "3 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "pickled-red-onion", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tomato-salsa", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream-14-43-ml-cdn", "serving": "1 each", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "rotini-pasta", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Pizza & flatbreads", "diets": [], "meats": []},
        {"food": "breakfast-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "grilled-pesto-and-chicken-pizza", "serving": "1 each", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "blueberry-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-coconut-macaroons", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "plain-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-iced-chocolate-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "date-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "easy-red-velvet-cupcakes", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-08": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-08/dinner", stations: {
      "global-eats": [
        {"food": "roasted-wild-pacific-salmon-with-lemon-caper-sauce", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "baked-meatloaf", "serving": "1 slice", "category": "Mains", "diets": [], "meats": ["beef", "pork"]},
        {"food": "herb-rice-pilaf", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "bbq-cajun-cauliflower", "serving": "17 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "bc-whipped-yukon-potatoes", "serving": "120 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "braised-greens", "serving": "85 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "corn-with-red-peppers", "serving": "113 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "maple-glazed-beets-and-parsnips", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "savoury-quinoa-pilaf", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "curried-roasted-vegetable-stew", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "mac-and-cheese", "serving": "240 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "jalapeno-cornbread", "serving": "1 serving(s)", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "buttered-peas", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "chicken-leek-and-rice-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken"]},
        {"food": "roasted-potato-and-leek-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "tuna-salad-filling", "serving": "60 mL", "category": "Proteins", "diets": [], "meats": ["fish"]},
        {"food": "roasted-ham-german-mustard-and-classic-pickle-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["pork"]},
        {"food": "green-goddess-wrap", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "30 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "spicy-szechuan-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "szechuan-chicken-stir-fry", "serving": "90 mL", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "ginger-pepper-chick-n", "serving": "90 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "vegetable-fried-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "bbq-chicken", "serving": "1/2 each", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chipotle-bbq-pulled-pork", "serving": "120 mL", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "sushi-dynamite-sushi-roll-9-ea-cdn", "serving": "1 each", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "tempura-sweet-potato-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": []},
        {"food": "tuna-poke-bowl", "serving": "1 serving(s)", "category": "Bowls", "diets": [], "meats": ["fish"]},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "sweet-garden-corn-salad", "serving": "180 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "zucchini-and-mushroom-salad", "serving": "85 g", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "apple-grain-salad", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "moroccan-carrot-salad", "serving": "240 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "teriyaki-chicken-burger-with-grilled-pineapple", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "vegetarian-tofu-burrito", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "golden-fried-french-fries", "serving": "70 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "50 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tomato-salsa", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream-14-43-ml-cdn", "serving": "1 each", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "120 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "penne-pasta", "serving": "120 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "mexican-taco-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["beef"]},
        {"food": "meat-lovers-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["beef", "pork"]},
        {"food": "jerk-chicken-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "double-chocolate-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "dried-cranberry-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-coconut-macaroons", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-iced-chocolate-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "black-forest-cake", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "cherry-pudding-cake", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-09": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-09/dinner", stations: {
      "global-eats": [
        {"food": "oven-fried-chicken", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "cheeseburger-mac-cheese", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "dirty-rice", "serving": "120 mL", "category": "Grains & breads", "diets": [], "meats": ["chicken"]},
        {"food": "chips-potato-regular-40-g-cdn", "serving": "1 each", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "succotash", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "balsamic-roasted-brussel-sprouts", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-brussel-sprouts", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-mushrooms", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "grilled-peppers-and-onions", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "nacho-chips", "serving": "1 each", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "spicy-black-beans", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cheese-sauce", "serving": "30 mL", "category": "Sauces & toppings", "diets": [], "meats": []},
        {"food": "tomato-salsa", "serving": "30 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream-14-43-ml-cdn", "serving": "1 each", "category": "Sauces & toppings", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pickled-red-onions-with-jalapenos", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "chicken-encilada-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken"]},
        {"food": "italian-tomato-and-pepper-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "2 ounce", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "tuna-salad-filling", "serving": "60 mL", "category": "Proteins", "diets": [], "meats": ["fish"]},
        {"food": "buffalo-chicken-wrap", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["chicken"]},
        {"food": "caprese-sandwich", "serving": "1 serving(s)", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "turmeric-scented-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "chicken-shawarma", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-english-cucumber", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-dill-pickles", "serving": "28 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tabbouleh-salad", "serving": "90 mL", "category": "Vegetables", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "roasted-red-pepper-hummus", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "shawarma-garlic-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "teriyaki-chicken-stir-fry", "serving": "90 mL", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "sweet-and-sour-tofu", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "stir-fry-vegetable-vermicelli", "serving": "150 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "bbq-chicken", "serving": "1/2 each", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chipotle-bbq-pulled-pork", "serving": "120 mL", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "sushi-roll-smoked-salmon", "serving": "5 each", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "quinoa-avocado-cucumber-rolls", "serving": "1 each", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "sea-salt-edamame", "serving": "1/2 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "asian-inspired-quinoa-salad", "serving": "60 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "tuscan-bread-salad", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "orzo-vegetable-salad-with-green-beans", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "greek-potato-salad", "serving": "128 g", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "crispy-chicken-caesar-wrap", "serving": "1 wrap", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "spicy-black-bean-quesadilla", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "kettle-chips-regular", "serving": "1 each", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "pickled-red-onion", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tomato-salsa", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream-14-43-ml-cdn", "serving": "1 each", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "thai-red-curry-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "laksa-curry-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": [], "meats": ["shellfish"]},
        {"food": "butter-chicken-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "roasted-chicken-breast", "serving": "1/2 serving(s)", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "tofu", "serving": "85 g", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-carrots", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-beans", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-peas", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "minced-garlic", "serving": "240 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-grated-ginger-root", "serving": "454 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "3 piece", "category": "Bases", "diets": [], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "butter-chicken-flat-bread", "serving": "1 each", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "salami-and-caramelized-onion-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "cheese-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "cranberry-orange-low-fat-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "chocolate-chip-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cinnamon-sugared-donut-holes", "serving": "5 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-iced-vanilla-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "date-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "cherry-loaf", "serving": "1 slice", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-10": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-10/dinner", stations: {
      "global-eats": [
        {"food": "vietnamese-inspired-lemongrass-chicken", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": ["chicken", "fish"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "basmati-rice-with-green-onions-and-parsley", "serving": "60 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "sesame-and-soy-roasted-potatoes", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "green-beans-in-oyster-sauce", "serving": "240 mL", "category": "Vegetables & sides", "diets": [], "meats": ["shellfish"]},
        {"food": "carrots-with-garlic-and-rosemary", "serving": "113 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "454 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-butternut-squash", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "lemongrass-tofu-for-banh-mi", "serving": "4 slice", "category": "Mains", "diets": [], "meats": []},
        {"food": "sweet-and-spicy-bean-stir-fry", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "panang-curry-vegetable", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "rice-vermicelli-noodles", "serving": "240 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "swiss-chard", "serving": "30 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "french-onion-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["beef"]},
        {"food": "autumn-vegetable-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "2 ounce", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "tuna-salad-filling", "serving": "60 mL", "category": "Proteins", "diets": [], "meats": ["fish"]},
        {"food": "roast-beef-and-cheddar-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["beef"]},
        {"food": "portobello-club-with-smoky-mayo-and-roasted-tomato", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "turmeric-scented-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "chicken-shawarma", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-english-cucumber", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-dill-pickles", "serving": "28 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tabbouleh-salad", "serving": "90 mL", "category": "Vegetables", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "roasted-red-pepper-hummus", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "shawarma-garlic-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "shrimp-and-vegetable-stir-fry", "serving": "180 mL", "category": "Mains", "diets": [], "meats": ["shellfish"]},
        {"food": "kale-and-cabbage-chili-stir-fry", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "vegetable-chow-mein", "serving": "180 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "bbq-chicken", "serving": "1/2 each", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chipotle-bbq-pulled-pork", "serving": "120 mL", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "three-bean-and-vegetable-chili", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "180 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "spicy-tuna-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "avocado-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []},
        {"food": "japanese-inspired-cucumber-salad", "serving": "60 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "arugula-salad-with-white-beans-and-farro", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "italian-inspired-bread-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "latin-chipotle-quinoa-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "pesto-penne-with-peas-and-tomato-salad", "serving": "120 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "beef-burger-on-ww-bun", "serving": "1 each", "category": "Mains", "diets": ["halal"], "meats": ["beef"]},
        {"food": "sourdough-grilled-cheese-sandwich", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "spicy-curly-fries", "serving": "114 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "50 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "120 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "thai-red-curry-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "laksa-curry-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": [], "meats": ["shellfish"]},
        {"food": "butter-chicken-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "roasted-chicken-breast", "serving": "1/2 serving(s)", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "tofu", "serving": "85 g", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-carrots", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-beans", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-peas", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "minced-garlic", "serving": "240 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-grated-ginger-root", "serving": "454 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "3 piece", "category": "Bases", "diets": [], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "caribbean-chicken-and-pineapple-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "bacon-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "margherita-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "banana-chocolate-chunk-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "four-berry-blend-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cinnamon-sugar-coated-churros", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "caramel-rice-krispie-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "lemon-blueberry-bar", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "chocolate-chip-buttermilk-loaf", "serving": "1 slice", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-11": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-11/dinner", stations: {
      "global-eats": [
        {"food": "marinated-slow-roasted-lamb", "serving": "85 g", "category": "Mains", "diets": ["halal"], "meats": ["lamb"]},
        {"food": "italian-breaded-chicken", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "fettuccini", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "rotini-pasta", "serving": "240 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "tuscan-garden-vegetables", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-red-and-green-peppers", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "garlic-bread", "serving": "1 each", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "roasted-broccoli", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pasta-with-salmon-and-alfredo-sauce", "serving": "360 mL", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "pomodoro-sauce", "serving": "60 mL", "category": "Sauces & toppings", "diets": [], "meats": []},
        {"food": "creamy-pesto-sauce", "serving": "90 mL", "category": "Sauces & toppings", "diets": [], "meats": []}
      ],
      "sprout": [
        {"food": "chicken-cacciatore", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "fluffy-rice", "serving": "240 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "baked-zucchini-and-tomatoes", "serving": "85 g", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "roasted-asparagus", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pot-roasted-artichokes", "serving": "350 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "thai-beef-and-vegetable-noodle-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["beef"]},
        {"food": "thai-inspired-curry-coconut-tofu-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "tuna-salad-filling", "serving": "60 mL", "category": "Proteins", "diets": [], "meats": ["fish"]},
        {"food": "spicy-grilled-chicken-madras-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["chicken"]},
        {"food": "smoky-tempeh-and-hummus-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "30 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "spicy-szechuan-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "mongolian-inspired-beef", "serving": "85 g", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "filipino-inspired-garlic-fried-rice-with-eggs", "serving": "120 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "bbq-chicken", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chipotle-bbq-pulled-pork", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "three-bean-and-vegetable-chili", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "15 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "tempura-shrimp-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": ["shellfish"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "korean-japchae-salad", "serving": "90 mL", "category": "Sides", "diets": [], "meats": []},
        {"food": "sea-salt-edamame", "serving": "1/2 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "balsamic-marinated-vegetable-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "kale-caesar-salad-with-garlic-roasted-chickpeas", "serving": "1 serving(s)", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "zucchini-and-mushroom-salad", "serving": "85 g", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-crunch-salad", "serving": "60 mL", "category": "Prepared salads", "diets": [], "meats": ["pork"]},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "crispy-chicken-burger", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "falafel-wrap", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "spiced-potato-wedges", "serving": "113 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "50 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "120 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "cream-of-mushroom-soup", "serving": "120 mL", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "chicken-noodle-soup", "serving": "360 mL", "category": "Prepared dishes", "diets": [], "meats": ["chicken"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "meatball-station", "serving": "1 serving(s)", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "seafood-casserole", "serving": "1 each", "category": "Prepared dishes", "diets": [], "meats": ["fish"]},
        {"food": "cod-fish-cakes", "serving": "1 each", "category": "Prepared dishes", "diets": [], "meats": ["fish"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-carrots-frozen", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-quartered-bok-choy", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-nappa-cabbage", "serving": "1 kg", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "whole-kernel-corn", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "chicken-pesto-and-mushroom-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "pepperoni-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "mushroom-and-caramelized-onion-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "dark-bran-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "pineapple-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-coconut-macaroons", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-iced-chocolate-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "pumpkin-brownies", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "lemon-loaf", "serving": "1 slice", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-12": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-12/dinner", stations: {
      "global-eats": [
        {"food": "chicken-biryani", "serving": "180 mL", "category": "Mains", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "pork-vindaloo", "serving": "180 mL", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "vegetable-biryani", "serving": "85 g", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "mushroom-and-pea-coconut-korma", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "chili-cumin-roasted-potatoes", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "turmeric-roasted-cauliflower", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "braised-curried-cabbage", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-green-peas", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "vegetable-samosas", "serving": "2 each", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "mango-chutney", "serving": "30 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "lentil-and-vegetable-curry", "serving": "240 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "steamed-green-beans", "serving": "85 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "tofu-makhani", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "roasted-potato-and-chicken-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken"]},
        {"food": "cream-of-tomato-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "15 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "tuna-salad-filling", "serving": "60 mL", "category": "Proteins", "diets": [], "meats": ["fish"]},
        {"food": "meatball-sub-on-hot-dog-roll", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["beef"]},
        {"food": "falafel-wrap", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "30 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "spicy-szechuan-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "hoisin-pork-stir-fry", "serving": "90 mL", "category": "Mains", "diets": [], "meats": ["chicken", "pork"]},
        {"food": "mixed-vegetable-stir-fry", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "320 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "cooked-yellow-split-peas", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "baba-ganoush", "serving": "90 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "dip-garlic-creamy-sauce-44-ml-cdn", "serving": "1 each", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "kalamata-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "tomato-and-cucumber-salad", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "whole-wheat-pita-bread", "serving": "1 each", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "falafel-balls", "serving": "3 each", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "lemon-chicken", "serving": "180 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]}
      ],
      "nori": [
        {"food": "california-roll-sushi", "serving": "8 piece", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "tempura-sweet-potato-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": []},
        {"food": "teriyaki-chicken-poke-bowl", "serving": "1 each", "category": "Bowls", "diets": [], "meats": ["chicken"]},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "cucumber-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "macaroni-salad", "serving": "80 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "marinated-chickpea-salad", "serving": "80 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "dilled-potato-and-apple-salad", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "beef-burrito", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "golden-fried-onion-rings", "serving": "70 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "50 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "120 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "penne-pasta", "serving": "120 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "chicken-diablo-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "hawaiian-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "pizza-primavera", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "carrot-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "raisin-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cinnamon-sugared-donut-holes", "serving": "5 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-iced-vanilla-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "cherry-tarts", "serving": "1 each", "category": "Desserts", "diets": ["vegan"], "meats": []},
        {"food": "raisin-pudding-cake", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-13": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-13/dinner", stations: {
      "global-eats": [
        {"food": "tandoori-chicken-leg", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "beef-curry-with-vegetables", "serving": "120 mL", "category": "Mains", "diets": [], "meats": ["beef", "chicken"]},
        {"food": "vegetable-pilaf", "serving": "180 mL", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "masala-loaded-potato-hash-shredded-potato", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "fresh-steamed-carrots", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "cumin-roasted-eggplant", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "spiced-cauliflower", "serving": "38 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "1 each", "category": "Grains & breads", "diets": [], "meats": []}
      ],
      "sprout": [
        {"food": "moroccan-style-tofu", "serving": "90 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "minted-sweet-peas-and-carrots", "serving": "60 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "grape-tomato-couscous", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "ethiopian-tomato-lentil-stew", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "african-inspired-sweet-potato-stew", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "hamburger-soup", "serving": "180 mL", "category": "Soups", "diets": ["halal"], "meats": ["beef"]},
        {"food": "asparagus-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "10 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "tuna-salad-filling", "serving": "60 mL", "category": "Proteins", "diets": [], "meats": ["fish"]},
        {"food": "italian-blt-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["pork"]},
        {"food": "queen-margherita-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "1 kg", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "56 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "60 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "spicy-szechuan-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "sweet-chili-chicken-stir-fry", "serving": "120 mL", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "sriracha-fried-rice", "serving": "360 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "cooked-yellow-split-peas", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "baba-ganoush", "serving": "90 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "dip-garlic-creamy-sauce-44-ml-cdn", "serving": "1 each", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "kalamata-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "tomato-and-cucumber-salad", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "whole-wheat-pita-bread", "serving": "1 each", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "falafel-balls", "serving": "3 each", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "lemon-chicken", "serving": "180 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]}
      ],
      "nori": [
        {"food": "sushi-roll-smoked-salmon", "serving": "5 each", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "quinoa-avocado-cucumber-rolls", "serving": "1 each", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "soba-noodle-and-edamame-salad", "serving": "90 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "sea-salt-edamame", "serving": "1/2 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "energy-plus-salad", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "greek-salad", "serving": "80 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "quinoa-corn-and-black-bean-side-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "marinated-chickpea-salad", "serving": "80 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "beer-battered-fish", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "coleslaw", "serving": "30 mL", "category": "Sides", "diets": [], "meats": []},
        {"food": "golden-fried-french-fries", "serving": "70 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "50 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "tartar-sauce", "serving": "60 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "penne-pasta", "serving": "120 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "bbq-chicken-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "the-great-canadian-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "grilled-pesto-and-chicken-pizza", "serving": "1 each", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "fruit-extreme-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cheddar-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cinnamon-sugar-coated-churros", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "rice-krispie-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "mixed-berry-crumble-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "banana-loaf", "serving": "1 slice", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-14": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-14/dinner", stations: {
      "global-eats": [
        {"food": "stifado", "serving": "240 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "herb-crusted-fish-loins", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "garden-rice-pilaf", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "lemon-and-oregano-roasted-potatoes", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "oven-blistered-tomatoes", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-vegetables", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "couscous", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "steamed-green-beans", "serving": "85 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "harissa-roasted-tofu", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "mini-spanakopita", "serving": "2 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "warm-pita-bread", "serving": "1 each", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "warm-greek-inspired-style-chickpea-pita-with-tzatziki", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "sun-dried-tomato-hummus", "serving": "60 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "fish-chowder", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["fish"]},
        {"food": "sweet-and-sour-cabbage-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "tuna-salad-filling", "serving": "60 mL", "category": "Proteins", "diets": [], "meats": ["fish"]},
        {"food": "grilled-chicken-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["chicken"]},
        {"food": "vegetable-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": ["vegan"], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "1 kg", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "56 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "60 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "spicy-szechuan-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "szechuan-inspired-orange-ginger-chicken", "serving": "240 mL", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "crispytofu-stir-fry", "serving": "180 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "vegetable-lo-mein", "serving": "180 g", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "bbq-chicken", "serving": "1/2 each", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chipotle-bbq-pulled-pork", "serving": "120 mL", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "10 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "alaska-roll-sushi", "serving": "8 piece", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "avocado-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "tofu-teriyaki-rice-bowl", "serving": "1 serving(s)", "category": "Bowls", "diets": [], "meats": ["shellfish"]},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "pesto-penne-with-peas-and-tomato-salad", "serving": "120 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "ginger-soy-spinach-barley-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "mexican-corn-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "roasted-red-beet-and-orange-salad", "serving": "120 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "loaded-french-fry-burrito-with-chorizo", "serving": "1 wrap", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "grilled-vegetable-and-cheese-quesadilla", "serving": "2 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "spicy-curly-fries", "serving": "114 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "pickled-red-onion", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tomato-salsa", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream-14-43-ml-cdn", "serving": "1 each", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "penne-pasta", "serving": "120 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "cheeseburger-pizza", "serving": "1 piece", "category": "Pizza & flatbreads", "diets": [], "meats": ["beef"]},
        {"food": "crispy-chorizo-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "greek-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "raspberry-yogurt-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-coconut-macaroons", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "plain-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-iced-chocolate-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "date-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "cinnamon-loaf", "serving": "1 slice", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-15": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-15/dinner", stations: {
      "global-eats": [
        {"food": "chinese-style-steamed-fish", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "spiced-asian-pork", "serving": "56 g", "category": "Mains", "diets": [], "meats": ["pork", "shellfish"]},
        {"food": "sesame-rice", "serving": "240 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "sesame-and-soy-roasted-potatoes", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pickled-carrots", "serving": "40 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "charred-broccoli-chilis", "serving": "85 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-root-vegetables", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "spicy-red-thai-inspired-tofu-vegtable-stir-fry", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "thai-curry", "serving": "90 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "ramen-noodle-bowl", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "green-beans", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-kale", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "greek-inspired-chicken-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken"]},
        {"food": "tomato-vegetable-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "corned-beef-and-swiss-on-rye", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["beef"]},
        {"food": "smoky-tempeh-and-hummus-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "30 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "sweet-and-sour-pork", "serving": "120 mL", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "320 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "sushi-roll-imitation-crab", "serving": "5 each", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "quinoa-avocado-cucumber-rolls", "serving": "1 each", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "roasted-cauliflower-raisin-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "curried-carrot-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "lo-mein-salad", "serving": "120 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "quinoa-and-potato-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "crispy-chicken-burger", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "black-bean-and-sweet-potato-burrito", "serving": "1 each", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "golden-fried-french-fries", "serving": "70 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "chicken-tender-strips", "serving": "3 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "50 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tomato-salsa", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream-14-43-ml-cdn", "serving": "1 each", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "120 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "rotini-pasta", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "caribbean-chicken-and-pineapple-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "meat-lovers-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["beef", "pork"]},
        {"food": "cheese-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "chocolate-chunk-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "dried-cranberry-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-coconut-macaroons", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-iced-chocolate-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "black-forest-cake", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "raspberry-bars", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-16": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-16/dinner", stations: {
      "global-eats": [
        {"food": "house-slow-roasted-beef", "serving": "71 g", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "moroccan-roast-turkey", "serving": "56 g", "category": "Mains", "diets": [], "meats": ["chicken", "turkey"]},
        {"food": "rice-pilaf", "serving": "180 mL", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "sumac-roasted-potatoes", "serving": "120 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "braised-curried-cabbage", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "steamed-vegetable-medley", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "lebanese-vegetable-quinoa-hash", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "roasted-parsnips", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "nacho-bar-fajita-chicken", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "baked-tortilla-chips", "serving": "12 each", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "walking-beans-walking-taco", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "cheese-sauce", "serving": "30 mL", "category": "Sauces & toppings", "diets": [], "meats": []},
        {"food": "salsa-fresca", "serving": "15 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & toppings", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "spicy-jalapeno-chili", "serving": "240 mL", "category": "Mains", "diets": [], "meats": ["beef", "pork"]}
      ],
      "spoons-and-ladles": [
        {"food": "italian-inspired-wedding-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["beef"]},
        {"food": "cream-of-carrot-and-ginger-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "2 ounce", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "shaved-black-forest-ham-honey-mustard-and-cheddar", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["pork"]},
        {"food": "falafel-wrap", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "turmeric-scented-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "chicken-shawarma", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-english-cucumber", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-dill-pickles", "serving": "28 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tabbouleh-salad", "serving": "90 mL", "category": "Vegetables", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "roasted-red-pepper-hummus", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "shawarma-garlic-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "chicken-stir-fry", "serving": "120 mL", "category": "Mains", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "crispytofu-stir-fry", "serving": "240 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "stir-fry-vegetable-vermicelli", "serving": "240 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "spicy-tuna-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "avocado-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "japanese-inspired-cucumber-salad", "serving": "60 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "sea-salt-edamame", "serving": "1/2 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "arugula-and-beet-salad-with-miso-dressing", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "greek-potato-salad", "serving": "128 g", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "miso-barley-with-mushrooms-and-greens", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "mango-black-bean-and-quinoa-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "buffalo-crispy-chicken-wrap", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "falafel-wrap", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "kettle-chips-regular", "serving": "1 each", "category": "Sides", "diets": [], "meats": []},
        {"food": "chicken-tender-strips", "serving": "3 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "pickled-red-onion", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tomato-salsa", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream-14-43-ml-cdn", "serving": "1 each", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "thai-green-curry-vegetables", "serving": "180 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "panang-curry-vegetable", "serving": "1 serving(s)", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "butter-chicken-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "roasted-chicken-breast", "serving": "1/2 serving(s)", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "tofu", "serving": "85 g", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-carrots", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-beans", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-peas", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "minced-garlic", "serving": "240 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-grated-ginger-root", "serving": "454 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "3 piece", "category": "Bases", "diets": [], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "philly-cheese-steak-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["beef"]},
        {"food": "crispy-chorizo-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "margherita-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "cranberry-lemon-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "chocolate-chip-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cinnamon-sugared-donut-holes", "serving": "5 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-iced-vanilla-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "date-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "oatmeal-apple-loaf", "serving": "1 slice", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-17": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-17/dinner", stations: {
      "global-eats": [
        {"food": "sicilian-cod-loin", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "greek-rice", "serving": "90 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "lemon-and-oregano-roasted-potatoes", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "brussels-sprouts", "serving": "85 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "mediterranean-inspired-couscous-salad", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-cauliflower-steaks-with-tahini-lemon-dressing", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "balsamic-roasted-vegetables", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "greek-moussaka-with-tomato-ragout", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "mini-spanakopita", "serving": "2 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "white-greek-pita", "serving": "1 each", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "lemon-oregano-vinaigrette", "serving": "60 mL", "category": "Sauces & toppings", "diets": [], "meats": []},
        {"food": "shredded-lettuce", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "za-atar-hummus", "serving": "30 mL", "category": "Sauces & toppings", "diets": [], "meats": []},
        {"food": "cucumber-tomato-salad", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & toppings", "diets": [], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "shrimp-and-bacon-chowder", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["fish", "pork", "shellfish"]},
        {"food": "black-bean-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "2 ounce", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "avocado-chicken-wrap", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["chicken"]},
        {"food": "queen-margherita-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "turmeric-scented-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "chicken-shawarma", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-english-cucumber", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-dill-pickles", "serving": "28 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tabbouleh-salad", "serving": "90 mL", "category": "Vegetables", "diets": [], "meats": []},
        {"food": "pickled-red-onions", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "roasted-red-pepper-hummus", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "shawarma-garlic-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "hoisin-beef-stir-fry", "serving": "90 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "szechaun-style-eggplant-with-egg-rolls", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "vegetable-chow-mein", "serving": "240 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "three-bean-and-vegetable-chili", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "180 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "180 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "alaska-roll-sushi", "serving": "8 piece", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "hokey-poke-bowl", "serving": "1 each", "category": "Bowls", "diets": [], "meats": []},
        {"food": "tempura-sweet-potato-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": []},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "grilled-vegetable-salad-with-feta", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "jerk-chicken-salad", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": ["chicken"]},
        {"food": "golden-jewel-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "moroccan-couscous-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "beef-burger-on-ww-bun", "serving": "1 each", "category": "Mains", "diets": ["halal"], "meats": ["beef"]},
        {"food": "sourdough-grilled-cheese-sandwich", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "spicy-curly-fries", "serving": "114 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "chicken-tender-strips", "serving": "3 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "50 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "120 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "thai-green-curry-vegetables", "serving": "180 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "panang-curry-vegetable", "serving": "1 serving(s)", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "butter-chicken-sauce", "serving": "90 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "roasted-chicken-breast", "serving": "1/2 serving(s)", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "tofu", "serving": "85 g", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-carrots", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-beans", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "green-peas", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "minced-garlic", "serving": "240 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-grated-ginger-root", "serving": "454 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "3 piece", "category": "Bases", "diets": [], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "tandoori-chicken-flat-bread", "serving": "1 piece", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "bacon-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "mushroom-and-caramelized-onion-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "banana-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "four-berry-blend-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cinnamon-sugar-coated-churros", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "caramel-rice-krispie-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "lemon-blueberry-bar", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "oatmeal-berry-loaf", "serving": "1 slice", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-18": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-18/dinner", stations: {
      "global-eats": [
        {"food": "roast-turkey-on-white", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["turkey"]},
        {"food": "chicken-piccata", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "penne-pasta", "serving": "240 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "180 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "herbed-tomato-sauce", "serving": "60 mL", "category": "Sauces & toppings", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "60 mL", "category": "Sauces & toppings", "diets": [], "meats": []},
        {"food": "pomodoro-sauce", "serving": "60 mL", "category": "Sauces & toppings", "diets": [], "meats": []},
        {"food": "roasted-asparagus", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-corn", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-mushrooms", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-butternut-squash", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "lemon-glazed-carrots", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "chicken-cacciatore", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "roasted-zucchini", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-butternut-squash", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-sweet-potatoes", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "roasted-peppers", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "timberline-beef-chili", "serving": "240 mL", "category": "Soups", "diets": [], "meats": ["beef"]},
        {"food": "mushroom-bisque-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "60 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "10 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "meatball-sub-on-hot-dog-roll", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["beef"]},
        {"food": "vegetable-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": ["vegan"], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "30 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "sticky-honey-garlic-pork", "serving": "240 mL", "category": "Mains", "diets": [], "meats": ["pork"]},
        {"food": "korean-inspired-sweet-and-spicy-chili-tofu", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "sriracha-fried-rice", "serving": "360 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "three-bean-and-vegetable-chili", "serving": "240 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "15 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "tempura-shrimp-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": [], "meats": ["shellfish"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "crab-salad", "serving": "90 mL", "category": "Sides", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "sea-salt-edamame", "serving": "1/2 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "thai-coconut-cucumber-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "kale-caesar-salad-with-garlic-roasted-chickpeas", "serving": "1 serving(s)", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "zucchini-and-mushroom-salad", "serving": "85 g", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-crunch-salad", "serving": "60 mL", "category": "Prepared salads", "diets": [], "meats": ["pork"]},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "teriyaki-chicken-burger-with-grilled-pineapple", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "grilled-vegetable-and-bean-quesadillas", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "spiced-potato-wedges", "serving": "113 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "chicken-tender-strips", "serving": "3 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "2250 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tomato-salsa", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream-14-43-ml-cdn", "serving": "1 each", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "cream-of-mushroom-soup", "serving": "120 mL", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "chicken-noodle-soup", "serving": "360 mL", "category": "Prepared dishes", "diets": [], "meats": ["chicken"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "meatball-station", "serving": "1 serving(s)", "category": "Prepared dishes", "diets": [], "meats": []},
        {"food": "seafood-casserole", "serving": "1 each", "category": "Prepared dishes", "diets": [], "meats": ["fish"]},
        {"food": "cod-fish-cakes", "serving": "1 each", "category": "Prepared dishes", "diets": [], "meats": ["fish"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "broccoli-florets", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-carrots-frozen", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-quartered-bok-choy", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-nappa-cabbage", "serving": "1 kg", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "whole-kernel-corn", "serving": "120 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chiffonade-cut-green-onions", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chili-oil", "serving": "15 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []}
      ],
      "al-forno": [
        {"food": "chicken-diablo-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "pepperoni-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "oatmeal-apple-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "pineapple-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-coconut-macaroons", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-iced-chocolate-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "pumpkin-brownies", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "caramel-swirl-coffee-cake", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-19": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-19/dinner", stations: {
      "global-eats": [
        {"food": "biryani-rice-mix", "serving": "1 serving(s)", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "goan-fish-curry", "serving": "180 mL", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "vegetable-biryani", "serving": "85 g", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Mains", "diets": [], "meats": []},
        {"food": "tandoori-root-vegetables", "serving": "113 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "naan-bread", "serving": "1 each", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "steamed-broccoli", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "spicy-sauteed-corn", "serving": "60 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "paneer-makhani", "serving": "120 mL", "category": "Mains", "diets": [], "meats": []},
        {"food": "chana-masala", "serving": "128 g", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "aloo-matar", "serving": "170 g", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "turmeric-roasted-cauliflower", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "cumin-roasted-eggplant", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "split-pea-and-ham-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken", "pork"]},
        {"food": "cream-of-carrot-and-ginger-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "15 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "1 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "jerk-chicken-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["chicken"]},
        {"food": "vegetable-cheese-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "30 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "15 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "15 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "10 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "shrimp-and-vegetable-stir-fry", "serving": "180 mL", "category": "Mains", "diets": [], "meats": ["shellfish"]},
        {"food": "sweet-and-sour-tofu", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "320 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "cooked-yellow-split-peas", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "baba-ganoush", "serving": "90 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "dip-garlic-creamy-sauce-44-ml-cdn", "serving": "1 each", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "kalamata-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "tomato-and-cucumber-salad", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "whole-wheat-pita-bread", "serving": "1 each", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "falafel-balls", "serving": "3 each", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "lemon-chicken", "serving": "180 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]}
      ],
      "nori": [
        {"food": "sushi-roll-smoked-salmon", "serving": "5 each", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "quinoa-avocado-cucumber-rolls", "serving": "1 each", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "japanese-inspired-cucumber-salad", "serving": "60 mL", "category": "Sides", "diets": ["vegan"], "meats": []},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "roasted-red-beet-and-orange-salad", "serving": "120 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "high-protein-salad", "serving": "120 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "mediterranean-salad-with-tuna", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": ["fish"]},
        {"food": "pesto-penne-with-peas-and-tomato-salad", "serving": "120 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "beef-burger-on-ww-bun", "serving": "1 each", "category": "Mains", "diets": ["halal"], "meats": ["beef"]},
        {"food": "golden-fried-onion-rings", "serving": "70 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "chicken-tender-strips", "serving": "3 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "50 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "kimchi-style-coleslaw", "serving": "120 mL", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "create": [
        {"food": "rotini-pasta", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "bbq-chicken-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "the-great-canadian-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "grilled-pesto-and-chicken-pizza", "serving": "1 each", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "morning-glory-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "raisin-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cinnamon-sugared-donut-holes", "serving": "5 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-iced-vanilla-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "cherry-tarts", "serving": "1 each", "category": "Desserts", "diets": ["vegan"], "meats": []},
        {"food": "vanilla-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
    "2026-11-20": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-20/dinner", stations: {
      "global-eats": [
        {"food": "sliced-roast-beef", "serving": "500 g", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "roasted-chicken-drumsticks", "serving": "2 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "herb-rice-pilaf", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "garlic-mashed-potatoes", "serving": "120 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "herb-roasted-butternut-squash", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "shaved-root-vegetable-and-lemon", "serving": "90 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "steamed-green-beans", "serving": "85 g", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "buttered-peas", "serving": "120 mL", "category": "Vegetables & sides", "diets": [], "meats": []}
      ],
      "sprout": [
        {"food": "mushroom-bourguignonne", "serving": "160 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "french-baguette", "serving": "1 each", "category": "Grains & breads", "diets": [], "meats": []},
        {"food": "maple-roasted-vegetables-on-a-12-grain-bun", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "ratatouille", "serving": "1 piece", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "glazed-baby-carrots", "serving": "120 mL", "category": "Vegetables & sides", "diets": [], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "homemade-turkey-and-vegetable-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["turkey"]},
        {"food": "butternut-squash-and-apple-soup-puree", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "10 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "ultimate-peameal-bacon-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["pork"]},
        {"food": "salumeria-caprese-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "1 kg", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "56 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "60 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "szechuan-chicken-stir-fry", "serving": "90 mL", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "tofu-bulgogi", "serving": "1 each", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "stir-fry-vegetable-vermicelli", "serving": "240 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "cooked-yellow-split-peas", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "tzatziki", "serving": "30 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "baba-ganoush", "serving": "90 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "dip-garlic-creamy-sauce-44-ml-cdn", "serving": "1 each", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "kalamata-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "tomato-and-cucumber-salad", "serving": "240 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "whole-wheat-pita-bread", "serving": "1 each", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "falafel-balls", "serving": "3 each", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "pita-chips", "serving": "56 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "lemon-chicken", "serving": "180 mL", "category": "Proteins", "diets": [], "meats": ["chicken"]}
      ],
      "nori": [
        {"food": "sushi-dynamite-sushi-roll-9-ea-cdn", "serving": "1 each", "category": "Sushi", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "avocado-roll-sushi", "serving": "4 piece", "category": "Sushi", "diets": ["vegan"], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []},
        {"food": "sea-salt-edamame", "serving": "1/2 each", "category": "Sides", "diets": ["vegan"], "meats": []}
      ],
      "leaf-market": [
        {"food": "lebanese-fattoush-salad-with-beans", "serving": "120 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "marinated-chickpea-salad", "serving": "80 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "roasted-beet-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "quinoa-corn-and-black-bean-side-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "battered-fried-fish-pollock-fillet", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["fish"]},
        {"food": "coleslaw", "serving": "30 mL", "category": "Sides", "diets": [], "meats": []},
        {"food": "golden-fried-french-fries", "serving": "70 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "chicken-tender-strips", "serving": "3 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "shaved-fresh-red-onions", "serving": "50 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "cucumber-pickles", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "tartar-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "rotini-pasta", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "buffalo-chicken-pizza", "serving": "1 each", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]},
        {"food": "hawaiian-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "greek-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": []}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "caramel-coffee-cake-swirl-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cheddar-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "cinnamon-sugar-coated-churros", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "rice-krispie-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "mixed-berry-crumble-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "banana-chocolate-chip-mini-loaf", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []}
      ],
    } },
    "2026-11-21": { source: "https://www.dineoncampus.ca/SFU/whats-on-the-menu/dining-commons/2026-11-21/dinner", stations: {
      "global-eats": [
        {"food": "spicy-red-fish-curry", "serving": "120 mL", "category": "Mains", "diets": [], "meats": ["fish", "shellfish"]},
        {"food": "beef-massaman", "serving": "240 mL", "category": "Mains", "diets": [], "meats": ["beef", "fish"]},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Grains & breads", "diets": ["vegan"], "meats": []},
        {"food": "korean-roasted-sweet-potatoes", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sauteed-spinach-and-garlic", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "orange-glazed-carrots", "serving": "180 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "sweet-and-spicy-bean-stir-fry", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "kale-and-cabbage-chili-stir-fry", "serving": "120 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []}
      ],
      "sprout": [
        {"food": "braised-tofu", "serving": "1 serving(s)", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "ramen-noodle-bowl", "serving": "1 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "thai-green-curry-vegetables", "serving": "180 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "sriracha-buffalo-cauliflower-bites", "serving": "180 mL", "category": "Vegetables & sides", "diets": [], "meats": []},
        {"food": "sesame-roasted-brussel-sprouts", "serving": "180 mL", "category": "Vegetables & sides", "diets": [], "meats": []}
      ],
      "spoons-and-ladles": [
        {"food": "roasted-potato-and-chicken-soup", "serving": "180 mL", "category": "Soups", "diets": [], "meats": ["chicken"]},
        {"food": "roasted-broccoli-and-kale-soup", "serving": "180 mL", "category": "Soups", "diets": ["vegan"], "meats": []}
      ],
      "stacks": [
        {"food": "side-of-sliced-tomato", "serving": "2 slice", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "15 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "smoked-deli-ham", "serving": "56 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "deli-roast-beef", "serving": "72 g", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "sliced-deli-turkey", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["turkey"]},
        {"food": "light-type-mayonnaise", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "mustard", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chipotle-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "hummus", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "chao-cheese", "serving": "1 slice", "category": "Cheeses", "diets": ["vegan"], "meats": []},
        {"food": "mozzarella-cheese-slices", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "cheddar-cheese-slices-mild", "serving": "1 each", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "sliced-white-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "homemade-whole-wheat-bread", "serving": "2 slice", "category": "Breads & wraps", "diets": [], "meats": []},
        {"food": "flour-tortilla-wrap-10", "serving": "1 each", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "sourdough-bread-pre-sliced", "serving": "1 serving(s)", "category": "Breads & wraps", "diets": ["vegan"], "meats": []},
        {"food": "egg-salad-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []},
        {"food": "turkey-and-swiss-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": ["turkey"]},
        {"food": "cheddar-and-tomato-sandwich", "serving": "1 each", "category": "Featured sandwiches", "diets": [], "meats": []}
      ],
      "hot-plate": [
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "cantonese-style-chow-mein-noodles", "serving": "120 mL", "category": "Bases", "diets": [], "meats": []},
        {"food": "diced-chicken", "serving": "90 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "asian-beef-strips", "serving": "90 mL", "category": "Proteins", "diets": [], "meats": ["beef"]},
        {"food": "seasoned-tofu", "serving": "90 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "sliced-yellow-onions", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-green-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "julienne-slice-red-peppers", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-green-cabbage", "serving": "1 kg", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "bean-sprouts", "serving": "30 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sesame-bok-choy", "serving": "60 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "crispy-onion-strings", "serving": "56 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "sriracha-hot-sauce", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cilantro", "serving": "10 g", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sesame-seeds", "serving": "15 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "crispy-chickpeas", "serving": "60 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "teriyaki-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "ultimate-honey-garlic-sauce", "serving": "45 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Daily specials", "diets": [], "meats": []}
      ],
      "yin-and-yum": [
        {"food": "sweet-chili-chicken-stir-fry", "serving": "120 mL", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "fresh-pineapple-stir-fry-with-black-beans", "serving": "1 serving(s)", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "vegetable-chow-mein", "serving": "240 mL", "category": "Rice & noodles", "diets": [], "meats": []},
        {"food": "jasmine-rice", "serving": "120 mL", "category": "Rice & noodles", "diets": ["vegan"], "meats": []}
      ],
      "fresh-bowl": [
        {"food": "marinated-chipotle-chicken-breast", "serving": "113 g", "category": "Proteins", "diets": [], "meats": ["chicken"]},
        {"food": "chili-con-carne", "serving": "150 mL", "category": "Mains", "diets": [], "meats": ["beef"]},
        {"food": "smoked-bbq-tofu", "serving": "1 serving(s)", "category": "Proteins", "diets": [], "meats": []},
        {"food": "two-alarm-four-bean-chili", "serving": "120 mL", "category": "Mains", "diets": ["vegan"], "meats": []},
        {"food": "cilantro-lime-brown-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "fluffy-rice", "serving": "120 mL", "category": "Bases", "diets": ["vegan"], "meats": []},
        {"food": "shredded-lettuce", "serving": "30 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "pico-de-gallo", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "roasted-corn-salsa", "serving": "60 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "pickled-red-onion", "serving": "10 mL", "category": "Vegetables & sides", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream", "serving": "15 mL", "category": "Sauces & dips", "diets": [], "meats": []},
        {"food": "mild-chunky-salsa", "serving": "30 mL", "category": "Sauces & dips", "diets": ["vegan"], "meats": []},
        {"food": "guacamole", "serving": "30 g", "category": "Sauces & dips", "diets": ["vegan"], "meats": []}
      ],
      "nori": [
        {"food": "sushi-roll-smoked-salmon", "serving": "5 each", "category": "Sushi", "diets": [], "meats": ["fish"]},
        {"food": "sushi-roll-vegetarian", "serving": "5 each", "category": "Sushi", "diets": [], "meats": []},
        {"food": "tofu-teriyaki-rice-bowl", "serving": "1 serving(s)", "category": "Bowls", "diets": [], "meats": ["shellfish"]},
        {"food": "wakame-salad", "serving": "1 serving(s)", "category": "Sides", "diets": [], "meats": []}
      ],
      "leaf-market": [
        {"food": "blackened-chicken-caesar-salad", "serving": "1 each", "category": "Prepared salads", "diets": [], "meats": ["chicken"]},
        {"food": "roasted-cauliflower-raisin-salad", "serving": "90 mL", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "barley-and-apple-salad-with-kale", "serving": "1 serving(s)", "category": "Prepared salads", "diets": [], "meats": []},
        {"food": "kachumber-salad-indian-inspired-salad", "serving": "90 mL", "category": "Prepared salads", "diets": ["vegan"], "meats": []},
        {"food": "deluxe-fruit-salad", "serving": "120 mL", "category": "Fruit", "diets": ["vegan"], "meats": []},
        {"food": "chopped-romaine", "serving": "100 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "spring-mix-lettuce", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "baby-spinach", "serving": "15 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-red-onions", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "grape-tomatoes", "serving": "454 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-fresh-cucumbers", "serving": "1 slice", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-julienne-sliced-carrots", "serving": "500 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "diced-fresh-celery", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-broccoli", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "fresh-chopped-cauliflower", "serving": "30 g", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "corn", "serving": "80 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-beets", "serving": "180 mL", "category": "Greens & vegetables", "diets": ["vegan"], "meats": []},
        {"food": "chopped-hard-cooked-egg", "serving": "80 mL", "category": "Proteins & legumes", "diets": [], "meats": []},
        {"food": "black-beans", "serving": "30 g", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "chickpeas", "serving": "30 mL", "category": "Proteins & legumes", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "30 mL", "category": "Toppings", "diets": ["vegan"], "meats": []},
        {"food": "seasoned-croutons", "serving": "10 g", "category": "Toppings", "diets": [], "meats": []},
        {"food": "salted-sunflower-seeds", "serving": "15 mL", "category": "Toppings", "diets": [], "meats": []},
        {"food": "caesar-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "cw-ranch-salad-dressing", "serving": "1 ounce", "category": "Dressings", "diets": [], "meats": []},
        {"food": "balsamic-salad-dressing", "serving": "30 mL", "category": "Dressings", "diets": ["vegan"], "meats": []},
        {"food": "golden-italian-dressing", "serving": "3.78 L", "category": "Dressings", "diets": ["vegan"], "meats": []}
      ],
      "grill-house": [
        {"food": "mexican-chicken-burrito", "serving": "1 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "grilled-vegetable-and-cheese-quesadilla", "serving": "2 each", "category": "Mains", "diets": [], "meats": []},
        {"food": "spicy-curly-fries", "serving": "114 g", "category": "Sides", "diets": [], "meats": []},
        {"food": "chicken-tender-strips", "serving": "3 each", "category": "Mains", "diets": [], "meats": ["chicken"]},
        {"food": "leaf-lettuce", "serving": "12 g", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "pickled-red-onion", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "sliced-pickled-jalapeno-peppers", "serving": "30 mL", "category": "Vegetables", "diets": ["vegan"], "meats": []},
        {"food": "tomato-salsa", "serving": "30 mL", "category": "Spreads & sauces", "diets": ["vegan"], "meats": []},
        {"food": "sour-cream-14-43-ml-cdn", "serving": "1 each", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "bbq-sauce", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": ["fish"]},
        {"food": "sriracha-mayonnaise", "serving": "15 mL", "category": "Spreads & sauces", "diets": [], "meats": []},
        {"food": "herb-aioli", "serving": "30 mL", "category": "Spreads & sauces", "diets": [], "meats": []}
      ],
      "create": [
        {"food": "rotini-pasta", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "spaghetti", "serving": "240 mL", "category": "Pastas", "diets": ["vegan"], "meats": []},
        {"food": "alfredo-sauce", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "marinara-sauce", "serving": "120 mL", "category": "Sauces & curries", "diets": ["vegan"], "meats": []},
        {"food": "pesto", "serving": "30 mL", "category": "Sauces & curries", "diets": [], "meats": []},
        {"food": "sliced-fresh-mushrooms", "serving": "16 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "vidalia-onions-diced", "serving": "60 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "roasted-mixed-peppers", "serving": "56 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "diced-tomatoes", "serving": "30 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "sliced-black-olives", "serving": "10 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "chopped-garlic", "serving": "10 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "artichokes", "serving": "30 g", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "spinach", "serving": "90 mL", "category": "Vegetables & herbs", "diets": ["vegan"], "meats": []},
        {"food": "ground-veggie-mexican-chipotle-crumble", "serving": "60 mL", "category": "Proteins", "diets": ["vegan"], "meats": []},
        {"food": "diced-chicken", "serving": "60 mL", "category": "Proteins", "diets": ["halal"], "meats": ["chicken"]},
        {"food": "breakfast-ham", "serving": "42 g", "category": "Proteins", "diets": [], "meats": ["pork"]},
        {"food": "shredded-cheddar-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "shredded-mozzarella-cheese", "serving": "30 mL", "category": "Cheeses", "diets": [], "meats": []},
        {"food": "parmesan-cheese", "serving": "10 g", "category": "Cheeses", "diets": [], "meats": []}
      ],
      "al-forno": [
        {"food": "chef-s-special", "serving": "1 serving(s)", "category": "Pizza & flatbreads", "diets": [], "meats": []},
        {"food": "breakfast-pizza", "serving": "1 slice", "category": "Pizza & flatbreads", "diets": [], "meats": ["pork"]},
        {"food": "grilled-pesto-and-chicken-pizza", "serving": "1 each", "category": "Pizza & flatbreads", "diets": [], "meats": ["chicken"]}
      ],
      "sweet-treats": [
        {"food": "ice-cream-scoop", "serving": "120 mL", "category": "Desserts", "diets": [], "meats": []},
        {"food": "blueberry-muffins", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "plain-scone", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-coconut-macaroons", "serving": "1 each", "category": "Baked goods", "diets": [], "meats": []},
        {"food": "two-bite-iced-chocolate-cupcake", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []},
        {"food": "date-squares", "serving": "1 piece", "category": "Desserts", "diets": [], "meats": []},
        {"food": "easy-red-velvet-cupcakes", "serving": "1 each", "category": "Desserts", "diets": [], "meats": []}
      ],
    } },
  } };
})();
