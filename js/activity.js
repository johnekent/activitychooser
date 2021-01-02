
const configs = {
    "categories": ["art", "school", "music"],
    "art": ["drawing", "paper airplanes", "sidewalk chalk"],
    "school": ["review homework", "read chapter", "make practice test"],
    "music": ["listen to top 10", "play guitar", "play piano", "make song on ipad"]
}

const CATEGORY_SELECT = "#category-select"
const OUTPUT_ELEMENT = "#activity-output-selection-pane"

function setupInputForm() {

    // on server, read the config from the config service.  here use the hardcoded

    categoryDD = $(CATEGORY_SELECT)
    categoryDD.append("<option value=\"\">Select a category...</option>")

    categories = configs['categories']

    for (category of categories) {
        $("<option>", { value: category, text: category }).appendTo(categoryDD)
    }
}

function chooseActivity() {

    categoryDD = $(CATEGORY_SELECT)

    // get activities based on the category
    activitiesInCategory = configs[categoryDD.val()]
    
    // randomly choose one of the activities from the category list - make it an int
    randomIndex = Math.floor(Math.random() * Math.floor(activitiesInCategory.length))
    selectedActivity = activitiesInCategory[randomIndex]

    outputElement = $(OUTPUT_ELEMENT)
    outputElement.empty()

    $("<h2>", { text: "Ok how about a nice time of ... "}).appendTo(outputElement)
    activityEl = $("<p>", { text: selectedActivity, class: 'selected-activity'})
    activityEl.appendTo(outputElement).animate({
        opacity: 0.7,
        marginLeft: "0.6in",
        fontSize: "13em",
        borderWidth: "5px"
      }, 1500 );
}

