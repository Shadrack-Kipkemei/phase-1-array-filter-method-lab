// Code your solution here
function findMatching(drivers, names) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === names.toLowerCase()
    })
}

function fuzzyMatch(drivers, names) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase().startsWith(names.toLowerCase())
    })
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase()

)
}
