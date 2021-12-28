import ManufacturerObject from "./serviceObjects/ManufacturerObject";
import GlassPatternObject from "./serviceObjects/GlassPatternObject";

const Service = {
    // @ts-ignore
    getResults(query : string[]) {
        return [1, 2];
    },

    getPatternStub(id: number) {
        return id === 1 ? {
            id : id,
            imgSrc: "./glass.jpg",
            manufacturers: ["L.E. Smith"],
            patternName: "Moon & Stars"
        } : {
            id : id,
            imgSrc: "./cameo.jpg",
            manufacturers: ["Anchor Hocking"],
            patternName: "Cameo"
        }
    },

    getManufacturer(id: number) : ManufacturerObject | undefined {
        if(id !== 1) { return; }
        return {
            id: id,
            manufacturerName: "Anchor Hocking",
            companyLogo: "./anchorhocking.png",
            makerMarks: [
                "./anchormark.jpg", "./anchormark.jpg"
            ],
            description: "Anchor Hocking Company is a manufacturer of glassware. The Hocking Glass Company was founded in 1905 by Isaac Jacob (Ike) Collins in Lancaster, Ohio, and named  after the Hocking River. That company merged with the Anchor Cap and Closure Corporation in 1937. From 1937-1983 the company operated the oldest glass manufacturing facility in the United States, established in 1863, in Salem, New Jersey. Anchor Hocking's wine and spirit bottles are crafted at a factory in Monaca, Pennsylvania. It also had facilities in Elmira, New York, and Streator, Illinois. In 1987, the Newell Company acquired Anchor Hocking Corporation.",
            patterns: [
                {
                    id: 1,
                    patternName: "Cameo"
                },
                {
                    id: 1,
                    patternName: "Royal Lace"
                },

                {
                    id: 1,
                    patternName: "Princess"
                },

                {
                    id: 1,
                    patternName: "Sweetheart"
                },

                {
                    id: 1,
                    patternName: "Mayfair"
                }
            ]
        }
    },

    getPattern(id: number) : GlassPatternObject | undefined {
        if(id !== 1) { return; }
        return {
            id: id,
            patternName: "Moon & Stars",
            description: "Easily Identifyable by it's starburst in circle design paired with ovals inside ovals to represent the moon it is one of the most sought after and cherished patterns of glass.<br/><br/> Collectors are drawn to the distinct pattern and the electric colors, ranging from ruby red, amber, green, colonial blue, amberina cobalt or the original crystal clear. For many of Americans, the memories of the Moon and Star pieces are what make this glass one of the most popular patterns in vintage glassware collecting.<br/><br/> When beginning to study about the history of “Moon and Star” pattern glass it is important to realize that there have been many companies that have produced the popular pattern.",
            patternImages: [
                {src: "./glass.jpg"},
                {src: "./glass.jpg"},
                {src: "./glass.jpg"},
                {src: "./glass.jpg"}
            ],
            tags: ["Oval", "Star", "Moon", "Round", "Circle"],
            manufacturers: [
                {
                    id: 1,
                    name: "Adams & Co.",
                    isCurrent: false,
                    yearStarted: "1880",
                    yearFinished: "1890"
                },
                {
                    id: 1,
                    name: "U.S. Glass",
                    isCurrent: false,
                    yearStarted: "1890",
                    yearFinished: "1900"
                },
                {
                    id: 1,
                    name: "L.G. Wright",
                    isCurrent: false,
                    yearStarted: "1930",
                    yearFinished: "1960"
                },
                {
                    id: 1,
                    name: "L.E. Smith Glass Co.",
                    isCurrent: false,
                    yearStarted: "1940",
                    yearFinished: "2004"
                },
                {
                    id: 1,
                    name: "Imperial Glass Co. for L.E. Smith",
                    isCurrent: false,
                    yearStarted: "1960",
                    yearFinished: "1970"
                },
                {
                    id: 1,
                    name: "Miniatures by L.E. Smith for Levay Distributing Co.",
                    isCurrent: false,
                    yearStarted: "1970",
                    yearFinished: "1980"
                },
                {
                    id: 1,
                    name: "Weishar Enterprises or Island Mold",
                    isCurrent: true,
                    yearStarted: "1980",
                    yearFinished: null

                },
                {
                    id: 1,
                    name: "Kemple Glass Co. credited with “Moon & Star Pattern” variations",
                    isCurrent: false,
                    yearStarted: null,
                    yearFinished: null
                },
                {
                    id: 1,
                    name: "Crescent Glass Co. for L.E. Smith",
                    isCurrent: false,
                    yearStarted: null,
                    yearFinished: null
                }
            ]
        }
    },

    getAttributes: function() {
        return ["Oval", "Star", "Moon", "Round", "Circle"];
    }
}

export default Service;