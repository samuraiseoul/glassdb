export default interface ManufacturerObject {
    id: number,
    manufacturerName: string,
    companyLogo: string,
    makerMarks: string[],
    description: string,
    patterns: { id: number, patternName: string }[]
}