// Code your solution here

let findMatching = (drivers, name)=> {
    return drivers.filter(driver => driver.toLowerCase() == name.toLowerCase())
}

let fuzzyMatch = (drivers, name)=> {
    return drivers.filter(driver => driver.charAt(0) == name.charAt(0))
}

let matchName = (drivers, name) => {
  return drivers.filter(driver => driver.name === name)
}