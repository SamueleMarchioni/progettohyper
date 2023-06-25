import { loremIpsum } from "lorem-ipsum"

export default async (models) => {

    const areaModel = [
        {
            name: "Economy",
            number: 1,
            description: " breve descrizione area economy"
        },
        {
            name: "Tourism",
            number: 2,
            description: " breve descrizione area tourism"
        },
        {
            name: "Health",
            number: 3,
            description: " breve descrizione area Health"
        }
    ]

    const area0 = await models.Area.create(areaModel[0])
    const area1 = await models.Area.create(areaModel[1])
    const area2 = await models.Area.create(areaModel[2])

    const dogModel = [
        {
            name: "Tony Stark",
            breed: "Co-Founder",
            age: 35,
            description: "He co-founded Oltre after a journey in the social sector started in 2002 with the establishment of Fondazione Oltre, the first Italian Venture Philanthropy foundation. Previously, he worked for 20 years in the Venture Capital and Private Equity sector, as co-founder of B&S Private Equity and General Manager of Finnova, the first VC company in Italy.",
        },
        {
            name: "Bruce Wayne",
            breed: "Co-Founder",
            age: 38,
            description: "Bruce has over 15 years of experience in impact investing. He participated in the establishment and growth of this venture capital, where he followed the birth of the main companies financed by the company. He started his career in investment banking in Jp Morgan, Microcredito Lombardo and in the financial management of Gruppo Rinascente.",
            },
        {
            name: "Peter Parker",
            breed: "Investement Manager",
            age: 19,
            description: "prova3",
            },
        {
            name: "Steven Strange",
            breed: "Investement Manager",
            age: 40,
            description: "prova4",
            },
        {
            name: "Diana Prince",
            breed: "Marketing",
            age: 40,
            description: "prova5",
            },
        {
            name: "Maria Hill",
            breed: "Marketing",
            age: 32,
            description: "prova6",
            },
        {
            name: "Natasha Romanov",
            breed: "Partner",
            age: 30,
            description: "prova7",
            },
        {
            name: "Barry Allen",
            breed: "Partner",
            age: 22,
            description: "prova8",
             },
        {
            name: "Wanda Maximof",
            breed: "legal assistant",
            age: 28,
            description: "prova9",
             },
        {
            name: "Wade Wilson",
            breed: "legal assistant",
            age: 35,
            description: "prova10",
        }
    ]
    
    const dog0 = await models.Dog.create(dogModel[0])
    const dog1 = await models.Dog.create(dogModel[1])
    const dog2 = await models.Dog.create(dogModel[2])
    const dog3 = await models.Dog.create(dogModel[3])
    const dog4 = await models.Dog.create(dogModel[4])
    const dog5 = await models.Dog.create(dogModel[5])
    const dog6 = await models.Dog.create(dogModel[6])
    const dog7 = await models.Dog.create(dogModel[7])
    const dog8 = await models.Dog.create(dogModel[8])
    const dog9 = await models.Dog.create(dogModel[9])

    const locationModel = [
        {
            name: "progetto 1",
            city: "Economy",
            areaId: area0.id,
            dogId : dog0.id,
            description: "p1",
            most : 1,
            area_selection : 1
        },
        {
            name: "progetto 2",
            city: "Economy ",
            areaId: area0.id,
            dogId : dog1.id,
            description: "p2",
            most : 0,
            area_selection : 1
        },
        {
            name: "progetto 3",
            city: "Economy ",
            areaId: area0.id,
            dogId : dog2.id,
            description: "p3",
            most : 0,
            area_selection : 1
        },
        {
            name: "progetto 4",
            city: "Economy ",
            areaId: area0.id,
            dogId : dog3.id,
            description: "p4",
            most : 0,
            area_selection : 1
        },
        {
            name: "progetto 5",
            city: "Economy ",
            areaId: area0.id,
            dogId : dog4.id,
            description: "p5",
            most : 1,
            area_selection : 1
        },
        {
            name: "progetto 6",
            city: "Tourism ",
            areaId: area1.id,
            dogId : dog5.id,
            description: "p6",
            most : 1,
            area_selection : 2
        },
        {
            name: "progetto 7",
            city: "Tourism ",
            areaId: area1.id,
            dogId : dog6.id,
            description: "p7",
            most : 0,
            area_selection : 2
        },
        {
            name: "progetto 8",
            city: "Tourism ",
            areaId: area1.id,
            dogId : dog7.id,
            description: "p8",
            most : 0,
            area_selection : 2
        },
        {
            name: "progetto 9",
            city: "Tourism ",
            areaId: area1.id,
            dogId : dog8.id,
            description: "p9",
            most : 0,
            area_selection : 2
        },
        {
            name: "progetto 10",
            city: "Tourism ",
            areaId: area1.id,
            dogId : dog9.id,
            description: "p10",
            most : 1,
            area_selection : 2
        },
        {
            name: "progetto 11",
            city: "Health ",
            areaId: area2.id,
            dogId : dog0.id,
            description: "p11",
            most : 1,
            area_selection : 3
        },
        {
            name: "progetto 12",
            city: "Health ",
            areaId: area2.id,
            dogId : dog1.id,
            description: "p12",
            most : 0,
            area_selection : 3
        },
        {
            name: "progetto 13",
            city: "Health ",
            areaId: area2.id,
            dogId : dog2.id,
            description: "p13",
            most : 0,
            area_selection : 3
        },
        {
            name: "progetto 14",
            city: "Health ",
            areaId: area2.id,
            dogId : dog3.id,
            description: "p14",
            most : 0,
            area_selection : 3
        },
        {
            name: "progetto 15",
            city: "Health",
            areaId: area2.id,
            dogId : dog4.id,
            description: "p15",
            most : 0,
            area_selection : 3
        }

    ]

    await models.Location.bulkCreate(locationModel)
}
