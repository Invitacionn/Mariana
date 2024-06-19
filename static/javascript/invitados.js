export const getInvitado = (uuid) => {
    const invitados = getInvitados()
    const invitado = invitados.find(i => i.uuid == uuid)

    const array = invitados.map(e => {
        const invitado = e.nombre.split(' ').join('+')
        const cantidad = e.adultos + e.ninos
        const formsURL = `https://docs.google.com/forms/d/e/1FAIpQLScLLyaK9LGChkGF1-Ni2-t_Zw97e3Rf42XYTRjv_uibbdA9_g/viewform?entry.1503077025=${invitado}&entry.1200103917=${cantidad}`

        return {
            "link": formsURL
        }
    })

    console.log(array)


    return invitado
}

const getInvitados = () => {
    return [
        {
            "id": 1,
            "uuid": 96074517,
            "nombre": "Fam. Ortiz de la Riva",
            "adultos": 5,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 2,
            "uuid": 91790083,
            "nombre": "Fam. De la Riva Esparza",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 3,
            "uuid": 72159119,
            "nombre": "Fam. Valadez de la Riva",
            "adultos": 4,
            "ninos": 1,
            "confirmado": false
        },
        {
            "id": 4,
            "uuid": 46873464,
            "nombre": "Fam. Bernal de la Riva",
            "adultos": 2,
            "ninos": 3,
            "confirmado": false
        },
        {
            "id": 5,
            "uuid": 87372435,
            "nombre": "Fam. Peña de la Riva",
            "adultos": 2,
            "ninos": 1,
            "confirmado": false
        },
        {
            "id": 6,
            "uuid": 4277380,
            "nombre": "Fam. Ortiz de la Cruz",
            "adultos": 3,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 7,
            "uuid": 27677686,
            "nombre": "Fam. Ortiz Baez",
            "adultos": 3,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 8,
            "uuid": 88107856,
            "nombre": "Fam. Herrera Ortiz",
            "adultos": 4,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 9,
            "uuid": 64503574,
            "nombre": "Fam. Ortiz Torres",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 10,
            "uuid": 57951508,
            "nombre": "Fam. Quintanilla",
            "adultos": 2,
            "ninos": 1,
            "confirmado": false
        },
        {
            "id": 11,
            "uuid": 13780285,
            "nombre": "Fam. Lopez",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 12,
            "uuid": 83009367,
            "nombre": "Fam. Tristan",
            "adultos": 7,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 13,
            "uuid": 39323480,
            "nombre": "Fam. Ibarra",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 14,
            "uuid": 1300045,
            "nombre": "Fam. Pavis",
            "adultos": 3,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 15,
            "uuid": 56396901,
            "nombre": "Fam. De la Riva Luna",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 16,
            "uuid": 74981858,
            "nombre": "Fam. De la Riva Quintanilla",
            "adultos": 4,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 17,
            "uuid": 18801440,
            "nombre": "Fam. Campos de la Riva",
            "adultos": 3,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 18,
            "uuid": 68627812,
            "nombre": "Fam. Prisci Campos",
            "adultos": 1,
            "ninos": 2,
            "confirmado": false
        },
        {
            "id": 19,
            "uuid": 17027220,
            "nombre": "Fam. Daniel Campos",
            "adultos": 2,
            "ninos": 1,
            "confirmado": false
        },
        {
            "id": 20,
            "uuid": 610990,
            "nombre": "Fam. Castillo",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 21,
            "uuid": 27190488,
            "nombre": "Fam. Gonzalez Castillo",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 22,
            "uuid": 56811831,
            "nombre": "Fam. Valadez Castillo",
            "adultos": 2,
            "ninos": 3,
            "confirmado": false
        },
        {
            "id": 23,
            "uuid": 9972248,
            "nombre": "Fam. Yesenia",
            "adultos": 5,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 24,
            "uuid": 89812343,
            "nombre": "Fam. Martha",
            "adultos": 3,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 25,
            "uuid": 8614789,
            "nombre": "Fam. Panchis",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 26,
            "uuid": 8738505,
            "nombre": "Fam Valades Angel",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 27,
            "uuid": 39422517,
            "nombre": "Fam Lopez Perez",
            "adultos": 4,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 28,
            "uuid": 54694521,
            "nombre": "Yuli",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 29,
            "uuid": 46816631,
            "nombre": "Sofi y Luci",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 30,
            "uuid": 42073531,
            "nombre": "Lili y Yami",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 31,
            "uuid": 58460123,
            "nombre": "Fam Rene Campos",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 32,
            "uuid": 15737639,
            "nombre": "Fam. Reynosa",
            "adultos": 3,
            "ninos": 1,
            "confirmado": false
        },
        {
            "id": 33,
            "uuid": 96653119,
            "nombre": "Hermana de madrina",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 34,
            "uuid": 19137048,
            "nombre": "Alan Facu",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 35,
            "uuid": 83602513,
            "nombre": "Ing Rosales",
            "adultos": 2,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 36,
            "uuid": 3875851,
            "nombre": "Yandel Mezquitic",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 37,
            "uuid": 46746202,
            "nombre": "Dania Sanchez",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 38,
            "uuid": 84523066,
            "nombre": "Gloria Rodriguez",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 39,
            "uuid": 97508601,
            "nombre": "Natali Guardado",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 40,
            "uuid": 52494891,
            "nombre": "Natalia Rangel",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 41,
            "uuid": 69580064,
            "nombre": "Marcela Castillo",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 42,
            "uuid": 67020412,
            "nombre": "Monse",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 43,
            "uuid": 89965761,
            "nombre": "Merari Rocha",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 44,
            "uuid": 86366994,
            "nombre": "Nubia Martinez",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 45,
            "uuid": 3392794,
            "nombre": "Karen Tamez",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 46,
            "uuid": 96392061,
            "nombre": "Jaqueline",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 47,
            "uuid": 26425597,
            "nombre": "Josgar",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 48,
            "uuid": 13343961,
            "nombre": "Johan",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 49,
            "uuid": 53151082,
            "nombre": "Andrik",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 50,
            "uuid": 73096014,
            "nombre": "Santiago Martinez",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 51,
            "uuid": 92881750,
            "nombre": "Maria",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 52,
            "uuid": 44046594,
            "nombre": "Fernando Torres",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 53,
            "uuid": 37980699,
            "nombre": "Gery",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 54,
            "uuid": 85123524,
            "nombre": "Pedro",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 55,
            "uuid": 53213467,
            "nombre": "Lizeth",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 56,
            "uuid": 42117884,
            "nombre": "Ashley",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 57,
            "uuid": 80878892,
            "nombre": "Denisse",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 58,
            "uuid": 37978956,
            "nombre": "Jade Ortega",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 59,
            "uuid": 79708175,
            "nombre": "Dylan",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 60,
            "uuid": 69222404,
            "nombre": "Noe Garcia",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 61,
            "uuid": 72217331,
            "nombre": "Hugo Molleda",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 62,
            "uuid": 79455194,
            "nombre": "Flor",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 63,
            "uuid": 95813853,
            "nombre": "Daniela",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 64,
            "uuid": 74275976,
            "nombre": "Renata Larios",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 65,
            "uuid": 29974497,
            "nombre": "Aletse",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 66,
            "uuid": 47904075,
            "nombre": "Daniela Tostado",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 67,
            "uuid": 28886896,
            "nombre": "Mariana Tostado",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 68,
            "uuid": 17360450,
            "nombre": "Barbie",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 69,
            "uuid": 86667058,
            "nombre": "Evan Sanchez",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 70,
            "uuid": 10091840,
            "nombre": "Sebastian Sanchez",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 71,
            "uuid": 96201267,
            "nombre": "Eira Ornelas",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 72,
            "uuid": 96245016,
            "nombre": "Ximena Gamboa",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 73,
            "uuid": 29849282,
            "nombre": "Bere",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 74,
            "uuid": 87255757,
            "nombre": "Alec",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 75,
            "uuid": 67880097,
            "nombre": "Angel",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 76,
            "uuid": 63672123,
            "nombre": "Azael Montoya",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 77,
            "uuid": 72246119,
            "nombre": "Yahir",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 78,
            "uuid": 22492720,
            "nombre": "Haromi",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 79,
            "uuid": 99680930,
            "nombre": "Victoria",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 80,
            "uuid": 16049158,
            "nombre": "Vannesa",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 81,
            "uuid": 38114413,
            "nombre": "Niriam",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 82,
            "uuid": 49459734,
            "nombre": "Brayan Parra",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 83,
            "uuid": 21305599,
            "nombre": "Fernanda Maldonado",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 84,
            "uuid": 20407182,
            "nombre": "Izabella",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 85,
            "uuid": 69078704,
            "nombre": "Camila",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 86,
            "uuid": 47725069,
            "nombre": "Allison Maldonado",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 87,
            "uuid": 62918132,
            "nombre": "Alison",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 88,
            "uuid": 77516128,
            "nombre": "Gaby",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 89,
            "uuid": 13166157,
            "nombre": "Miranda",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 90,
            "uuid": 40774591,
            "nombre": "Angela",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 91,
            "uuid": 79699189,
            "nombre": "Nathaly",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 92,
            "uuid": 53718211,
            "nombre": "Dania",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 93,
            "uuid": 74343276,
            "nombre": "Axel",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 94,
            "uuid": 57566543,
            "nombre": "Carlos Zabala",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 95,
            "uuid": 86667656,
            "nombre": "Emma",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 96,
            "uuid": 6119958,
            "nombre": "Cesar",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 97,
            "uuid": 52732555,
            "nombre": "Miranda",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 98,
            "uuid": 99939268,
            "nombre": "Magie",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 99,
            "uuid": 43649102,
            "nombre": "Oswaldo Jacob",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 100,
            "uuid": 51392759,
            "nombre": "Alisson",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 101,
            "uuid": 28083774,
            "nombre": "Jair Mezquitic",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 102,
            "uuid": 48253855,
            "nombre": "Alison Lizeth",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        },
        {
            "id": 103,
            "uuid": 16032625,
            "nombre": "Anali",
            "adultos": 1,
            "ninos": 0,
            "confirmado": false
        }
    ]
}

