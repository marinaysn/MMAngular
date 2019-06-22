export class Course {
    constructor(
        public id: number,
        public name: string,
        public category?: string,
        public description?: string,
        public price?: number,
        public coach?: string
    )
    { }
}