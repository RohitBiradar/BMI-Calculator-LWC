
const getBMI = function(weightInKg, heightInMt) {
    
    try {
        return this.weightInKg / (this.heightInMt * this.heightInMt);
    } catch(error) {
        return undefined;
    }
}

export{getBMI};
