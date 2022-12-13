export default class envelopeWorker{
    constructor() {

    }

    makeDeduction(envelope) {
        const enevlopeClone = {...envelope}
        if(enevlopeClone.allocatedFund - enevlopeClone.decrementSteps >= 0){
            enevlopeClone.allocatedFund -= enevlopeClone.decrementSteps;
        }else if(enevlopeClone.allocatedFund - enevlopeClone.decrementSteps < 0){
            enevlopeClone.allocatedFund = 0
        }
        

        return enevlopeClone;
    }

    madeIncrementation(envelope) {
        const enevlopeClone = {...envelope}
        enevlopeClone.allocatedFund = Number(enevlopeClone.allocatedFund) + Number(enevlopeClone.incrementSteps);

        return enevlopeClone;
    }
}