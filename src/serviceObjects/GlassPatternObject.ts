import ManufacturerStub from "./ManufacturerStub";

export default interface GlassPatternObject {
    id: number,
    patternName: string,
    description: string,
    patternImages: { src : string }[],
    tags: string[],
    manufacturers: ManufacturerStub[]
}