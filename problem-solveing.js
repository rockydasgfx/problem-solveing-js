// problem-1
function anaToVori(ana) {
  if (ana >= 0) {
    const vori = ana / 16;
    return vori;
  } else {
    return "give a number";
  }
}

// problem-2
function pandaCost(singara, samosa, jalebi) {
  const singaraPrice = 7;
  const samosaPrice = 10;
  const jalebiPrice = 15;

  if (singara >= 0 && samosa >= 0 && jalebi >= 0) {
    const totalSingaraPrice = singara * singaraPrice;
    const totalSamosaPrice = samosa * samosaPrice;
    const totalJalebiPrice = jalebi * jalebiPrice;
    const total = totalSingaraPrice + totalSamosaPrice + totalJalebiPrice;
    return total;
  } else {
    return "give number value and give the three paramiter value";
  }
}

//   problem-3
function picnicBudget(parson) {
  const firstHundredParson = 5000;
  const secondHundredParson = 4000;
  const aboveTwoHundredParson = 3000;
  if (parson >= 0) {
    if (parson <= 100) {
      const totalCost = parson * firstHundredParson;
      return totalCost;
    } else if (parson <= 200) {
      const firstHundredCost = 100 * firstHundredParson;
      const excludeParson = parson - 100;
      const secondHundredCost = excludeParson * secondHundredParson;
      const totalCost = firstHundredCost + secondHundredCost;
      return totalCost;
    } else {
      const firstHundredCost = 100 * firstHundredParson;
      const secondHundredCost = 100 * secondHundredParson;
      const excludeParson = parson - 200;
      const aboveTwoHundredCost = excludeParson * aboveTwoHundredParson;
      const totalCost =
        firstHundredCost + secondHundredCost + aboveTwoHundredCost;
      return totalCost;
    }
  } else {
    return "give a number";
  }
}

// problem-4
function oddFriend(names) {
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.length % 2 != 0) {
      return name;
    }
  }
}

console.log(anaToVori(16));
