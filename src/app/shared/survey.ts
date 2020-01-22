export class Survey {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public getToKnowUs: string,
        public purchaseLocation: string,
        public purchaseReason: string,
        public issues: string,
        public benefits: string,
        public occupation: string,
        public ageGroup: string,
        public residence: string,
        public rate: string,
        public suggestions: string
    ) {}
}
