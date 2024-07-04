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



    return invitado
}

const getInvitados = () => {
    return [
      {
        "id": 1,
        "uuid": 96074517,
        "nombre": "Fam. Ortiz De La Riva",
        "adultos": 5,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 2,
        "uuid": 91790083,
        "nombre": "Fam. De La Riva Esparza",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 3,
        "uuid": 72159119,
        "nombre": "Fam. Valadez De La Riva",
        "adultos": 4,
        "ninos": 1,
        "confirmado": "FALSE"
      },
      {
        "id": 4,
        "uuid": 46873464,
        "nombre": "Fam. Bernal De La Riva",
        "adultos": 2,
        "ninos": 3,
        "confirmado": "FALSE"
      },
      {
        "id": 5,
        "uuid": 87372435,
        "nombre": "Fam. Peña De La Riva",
        "adultos": 2,
        "ninos": 1,
        "confirmado": "FALSE"
      },
      {
        "id": 6,
        "uuid": 4277380,
        "nombre": "Fam. Ortiz De La Cruz",
        "adultos": 3,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 7,
        "uuid": 27677686,
        "nombre": "Fam. Ortiz Baez",
        "adultos": 3,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 8,
        "uuid": 88107856,
        "nombre": "Fam. Herrera Ortiz",
        "adultos": 4,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 9,
        "uuid": 64503574,
        "nombre": "Fam. Ortiz Torres",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 10,
        "uuid": 57951508,
        "nombre": "Fam. Quintanilla",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 11,
        "uuid": 13780285,
        "nombre": "Fam. Lopez Tapia",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 12,
        "uuid": 83009367,
        "nombre": "Fam. Tristan Vazquez",
        "adultos": 7,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 13,
        "uuid": 39323480,
        "nombre": "Fam. Ibarra Sanchez",
        "adultos": 2,
        "ninos": 3,
        "confirmado": "FALSE"
      },
      {
        "id": 14,
        "uuid": 1300045,
        "nombre": "Fam. Gutiérrez",
        "adultos": 3,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 15,
        "uuid": 56396901,
        "nombre": "Fam. De La Riva Luna",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 16,
        "uuid": 74981858,
        "nombre": "Fam. De La Riva Quintanilla",
        "adultos": 4,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 17,
        "uuid": 18801440,
        "nombre": "Fam. Campos De La Riva",
        "adultos": 3,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 18,
        "uuid": 68627812,
        "nombre": "Fam. Prisci Campos",
        "adultos": 1,
        "ninos": 2,
        "confirmado": "FALSE"
      },
      {
        "id": 19,
        "uuid": 17027220,
        "nombre": "Fam. Daniel Campos",
        "adultos": 2,
        "ninos": 1,
        "confirmado": "FALSE"
      },
      {
        "id": 20,
        "uuid": 610990,
        "nombre": "Fam. Castillo Rodríguez",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 21,
        "uuid": 27190488,
        "nombre": "Fam. Gonzalez Castillo",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 22,
        "uuid": 56811831,
        "nombre": "Fam. Vazquez Castillo",
        "adultos": 2,
        "ninos": 3,
        "confirmado": "FALSE"
      },
      {
        "id": 23,
        "uuid": 9972248,
        "nombre": "Fam. Flores Rodriguez",
        "adultos": 5,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 24,
        "uuid": 89812343,
        "nombre": "Fam. Rodriguez",
        "adultos": 4,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 25,
        "uuid": 8614789,
        "nombre": "Fam. Herrera",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 26,
        "uuid": 8738505,
        "nombre": "Fam. Bustamante",
        "adultos": 5,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 27,
        "uuid": 39422517,
        "nombre": "Fam. Lopez Perez",
        "adultos": 4,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 28,
        "uuid": 54694521,
        "nombre": "Fam. Erika Ayala",
        "adultos": 1,
        "ninos": 1,
        "confirmado": "FALSE"
      },
      {
        "id": 29,
        "uuid": 46816631,
        "nombre": "Fam. Maldonado",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 30,
        "uuid": 42073531,
        "nombre": "Fam. Mezquitic",
        "adultos": 5,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 31,
        "uuid": 58460123,
        "nombre": "Fam. Rene Campos",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 32,
        "uuid": 15737639,
        "nombre": "Fam. Cortes Mares",
        "adultos": 3,
        "ninos": 1,
        "confirmado": "FALSE"
      },
      {
        "id": 33,
        "uuid": 96653119,
        "nombre": "Fam. Garcia",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 34,
        "uuid": 19137048,
        "nombre": "Alan Sanchez",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 35,
        "uuid": 83602513,
        "nombre": "Ing. Rosales",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 36,
        "uuid": 3875851,
        "nombre": "Fam. Banda Cortes",
        "adultos": 6,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 37,
        "uuid": 46746202,
        "nombre": "Fam. Orozco García",
        "adultos": 5,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 38,
        "uuid": 84523066,
        "nombre": "Gloria Rodriguez",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 39,
        "uuid": 97508601,
        "nombre": "Natali Guardado",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 40,
        "uuid": 52494891,
        "nombre": "Natalia Rangel",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 41,
        "uuid": 69580064,
        "nombre": "Marcela Castillo",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 42,
        "uuid": 67020412,
        "nombre": "Monse",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 43,
        "uuid": 89965761,
        "nombre": "Merari Rocha",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 44,
        "uuid": 86366994,
        "nombre": "Nubia Martinez",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 45,
        "uuid": 3392794,
        "nombre": "Karen Tamez",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 46,
        "uuid": 96392061,
        "nombre": "Jaqueline",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 47,
        "uuid": 26425597,
        "nombre": "Josgar",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 48,
        "uuid": 13343961,
        "nombre": "Johan",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 49,
        "uuid": 53151082,
        "nombre": "Andrik",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 50,
        "uuid": 73096014,
        "nombre": "Santiago Martinez",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 51,
        "uuid": 92881750,
        "nombre": "Maria",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 52,
        "uuid": 44046594,
        "nombre": "Fernando Torres",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 53,
        "uuid": 37980699,
        "nombre": "Ximena",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 54,
        "uuid": 85123524,
        "nombre": "Pedro",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 55,
        "uuid": 53213467,
        "nombre": "Lizeth",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 56,
        "uuid": 42117884,
        "nombre": "Ashley",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 57,
        "uuid": 80878892,
        "nombre": "Denisse",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 58,
        "uuid": 37978956,
        "nombre": "Jade Ortega",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 59,
        "uuid": 79708175,
        "nombre": "Lizeth",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 60,
        "uuid": 69222404,
        "nombre": "Noe Garcia",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 61,
        "uuid": 72217331,
        "nombre": "Hugo Molleda",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 62,
        "uuid": 79455194,
        "nombre": "Flor",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 63,
        "uuid": 95813853,
        "nombre": "Daniela",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 64,
        "uuid": 74275976,
        "nombre": "Renata Larios",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 65,
        "uuid": 29974497,
        "nombre": "Aletse",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 66,
        "uuid": 47904075,
        "nombre": "Daniela Tostado",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 67,
        "uuid": 28886896,
        "nombre": "Mariana Tostado",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 68,
        "uuid": 17360450,
        "nombre": "Barbie",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 69,
        "uuid": 86667058,
        "nombre": "Evan Sanchez",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 70,
        "uuid": 10091840,
        "nombre": "Sebastian Sanchez",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 71,
        "uuid": 96201267,
        "nombre": "Eira Ornelas",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 72,
        "uuid": 96245016,
        "nombre": "Ximena Gamboa",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 73,
        "uuid": 29849282,
        "nombre": "Bere",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 74,
        "uuid": 87255757,
        "nombre": "Alison",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 75,
        "uuid": 67880097,
        "nombre": "Angel",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 76,
        "uuid": 63672123,
        "nombre": "Azael Montoya",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 77,
        "uuid": 72246119,
        "nombre": "Yahir",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 78,
        "uuid": 22492720,
        "nombre": "Haromi",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 79,
        "uuid": 99680930,
        "nombre": "Victoria",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 80,
        "uuid": 16049158,
        "nombre": "Vannesa",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 81,
        "uuid": 38114413,
        "nombre": "Niriam",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 82,
        "uuid": 49459734,
        "nombre": "Brayan Parra",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 83,
        "uuid": 21305599,
        "nombre": "Fernanda Maldonado",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 84,
        "uuid": 20407182,
        "nombre": "Izabella",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 85,
        "uuid": 69078704,
        "nombre": "Camila",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 86,
        "uuid": 47725069,
        "nombre": "Allison Maldonado",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 87,
        "uuid": 62918132,
        "nombre": "Said",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 88,
        "uuid": 77516128,
        "nombre": "Gaby",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 89,
        "uuid": 13166157,
        "nombre": "Miranda",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 90,
        "uuid": 40774591,
        "nombre": "Angela",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 91,
        "uuid": 79699189,
        "nombre": "Nathaly",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 92,
        "uuid": 53718211,
        "nombre": "Dania",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 93,
        "uuid": 74343276,
        "nombre": "Pedro jaziel",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 94,
        "uuid": 57566543,
        "nombre": "Carlos Zabala",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 95,
        "uuid": 86667656,
        "nombre": "Emma",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 96,
        "uuid": 6119958,
        "nombre": "Cesar",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 97,
        "uuid": 52732555,
        "nombre": "Miranda",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 98,
        "uuid": 99939268,
        "nombre": "Sofía",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 99,
        "uuid": 43649102,
        "nombre": "Oswaldo Jacob",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 100,
        "uuid": 51392759,
        "nombre": "Alisson",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 101,
        "uuid": 28083774,
        "nombre": "Keren",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 102,
        "uuid": 48253855,
        "nombre": "Daryana",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 103,
        "uuid": 16032625,
        "nombre": "Dany",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 104,
        "uuid": 51813237,
        "nombre": "Yuli",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 105,
        "uuid": 98437999,
        "nombre": "Sofía y Lucia",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 106,
        "uuid": 27269753,
        "nombre": "Daniel Garcia",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 107,
        "uuid": 54238414,
        "nombre": "Lily y Yami",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 108,
        "uuid": 81518539,
        "nombre": "Mia",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 109,
        "uuid": 75424660,
        "nombre": "Dania Sanchez",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 110,
        "uuid": 44421456,
        "nombre": "Adriana Pesina",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 111,
        "uuid": 33413468,
        "nombre": "Natali De Alejandro",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 112,
        "uuid": 12428907,
        "nombre": "Adrián Renteria",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 113,
        "uuid": "09786436",
        "nombre": "José Juan Sandoval",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 114,
        "uuid": 87653685,
        "nombre": "Debanhi Chavez",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 115,
        "uuid": 28671361,
        "nombre": "Arturo Lopez",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 116,
        "uuid": 13892317,
        "nombre": "Fam. Vargas Cirilo",
        "adultos": 4,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 117,
        "uuid": 514177293,
        "nombre": "Casas Arellano",
        "adultos": 3,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 118,
        "uuid": 9931202047,
        "nombre": "Enrique Caraza",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 119,
        "uuid": 14075318,
        "nombre": "Raul Borjas",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 120,
        "uuid": 36210489,
        "nombre": "Liliana",
        "adultos": 1,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 121,
        "uuid": 62626179,
        "nombre": "Veida",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      },
      {
        "id": 122,
        "uuid": 51436279,
        "nombre": "Fam. López Coronado",
        "adultos": 2,
        "ninos": 0,
        "confirmado": "FALSE"
      }
    ]
}

