import type { DeliveryCard, ImageCard, WineItem } from '~/content/home/types'

export const categories: ImageCard[] = [
  { name: 'Napoli', imageSrc: '/img/carousel/4-200x100.webp' },
  { name: 'Michele', imageSrc: '/img/michele-due.webp' },
  { name: 'Calzone', imageSrc: '/img/carousel/carousel-2.webp' },
  { name: 'Bresaola e tartufo', imageSrc: '/img/carousel/carousel-1.webp' },
  { name: 'Dehors', imageSrc: '/img/carousel/outside-pizzeria.webp' },
]

export const galleriesFr: ImageCard[] = [
  { name: 'Mortadella', imageSrc: '/img/uno.webp' },
  { name: 'Burrata', imageSrc: '/img/due.webp' },
  { name: 'Emporter', imageSrc: '/img/tre.webp' },
  { name: 'Michele', imageSrc: '/img/michele-three.webp' },
  { name: 'Special', imageSrc: '/img/cinque.webp' },
]

export const galleriesEn: ImageCard[] = [
  { name: 'Mortadella', imageSrc: '/img/uno.webp' },
  { name: 'Burrata', imageSrc: '/img/due.webp' },
  { name: 'Take away', imageSrc: '/img/tre.webp' },
  { name: 'Michele', imageSrc: '/img/michele-three.webp' },
  { name: 'Special', imageSrc: '/img/cinque.webp' },
]

export const galleriesIt: ImageCard[] = [
  { name: 'Mortadella', imageSrc: '/img/uno.webp' },
  { name: 'Burrata', imageSrc: '/img/due.webp' },
  { name: 'Asporto', imageSrc: '/img/tre.webp' },
  { name: 'Michele', imageSrc: '/img/michele-three.webp' },
  { name: 'Special', imageSrc: '/img/cinque.webp' },
]

export const winesFr: WineItem[] = [
  { name: 'Prosecco Doc Settolo Bio', grapes: 'Glera', producer: 'Fratelli Collavo', origin: 'Veneto', suggestion: 'Pizza Fresca', glass: '7,50', bottle: '34,00' },
  { name: 'Trebbiano Charisma Biodinamico', grapes: 'Trebbiano', producer: 'Lunaria', origin: 'Abruzzo', suggestion: 'Pizza Rucola Reggiano', glass: '8,00', bottle: '34,00' },
  { name: 'Malvasia Labelle Biodinamico', grapes: 'Malvasia', producer: 'Lunaria', origin: 'Abruzzo', suggestion: 'Pizza Siciliana', glass: '8,00', bottle: '35,00' },
  { name: 'Pinot Grigio Ramoro Biodinamico', grapes: 'Pinot Grigio', producer: 'Lunaria', origin: 'Abruzzo', suggestion: 'Pizza Principessa', glass: '8,00', bottle: '35,00' },
  { name: 'Lambrusco Emilia Secco Bio', grapes: 'Lambrusco', producer: 'Medici Ermete', origin: 'Emilia Romagna', suggestion: 'Pizza Regina', glass: '7,00', bottle: '26,00' },
  { name: "Nero D'Avola Bio", grapes: "Nero D'Avola", producer: 'Due Terre Wines', origin: 'Sicilia', suggestion: 'Pizza Napoli', glass: '8,00', bottle: '35,00' },
  { name: 'Negroamaro del Salento IGP', grapes: 'Negroamaro', producer: 'Vecchia Torre', origin: 'Puglia', suggestion: 'Pizza Calabrese', glass: '8,00', bottle: '35,00' },
  { name: 'Primitivo Elementa', grapes: 'Primitivo', producer: 'Orsogna', origin: 'Abruzzo', suggestion: 'Pizza Boscaiola', glass: '8,00', bottle: '38,00' },
  { name: 'Montepulciano Coste di Moro Bio', grapes: 'Montepulciano', producer: 'Lunaria', origin: 'Abruzzo', suggestion: 'Pizza 4 Stagioni', glass: '8,00', bottle: '37,00' },
  { name: "Dolcetto D'Alba Bio", grapes: 'Dolcetto', producer: 'Brezza', origin: 'Piemonte', suggestion: 'Pizza Porchetta Funghi', glass: '9,00', bottle: '39,00' },
  { name: 'Nebbiolo Delle Langhe Bio', grapes: 'Nebbiolo', producer: 'Brezza', origin: 'Piemonte', suggestion: 'Pizza Patate e Tartufo', glass: '9,00', bottle: '39,00' },
  { name: 'Valpolicella Classico Superiore Persegà', grapes: 'corvina, corvinone, rondinella', producer: 'Antolini', origin: 'Veneto', suggestion: 'Salsiccia Friarielli', glass: '9,00', bottle: '39,00' },
]

export const winesEn: WineItem[] = [
  { name: 'Prosecco Doc Settolo Bio', grapes: 'Glera', producer: 'Fratelli Collavo', origin: 'Veneto', suggestion: 'Pizza Fresca', glass: '7,50', bottle: '34,00' },
  { name: 'Trebbiano Charisma Biodinamico', grapes: 'Trebbiano', producer: 'Lunaria', origin: 'Abruzzo', suggestion: 'Pizza Rucola Reggiano', glass: '8,00', bottle: '34,00' },
  { name: 'Malvasia Labelle Biodinamico', grapes: 'Malvasia', producer: 'Lunaria', origin: 'Abruzzo', suggestion: 'Pizza Siciliana', glass: '8,00', bottle: '35,00' },
  { name: 'Pinot Grigio Ramoro Biodinamico', grapes: 'Pinot Grigio', producer: 'Lunaria', origin: 'Abruzzo', suggestion: 'Pizza Principessa', glass: '8,00', bottle: '35,00' },
  { name: 'Lambrusco Emilia Secco Bio', grapes: 'Lambrusco', producer: 'Medici Ermete', origin: 'Emilia Romagna', suggestion: 'Pizza Regina', glass: '7,00', bottle: '26,00' },
  { name: "Nero D'Avola Bio", grapes: "Nero D'Avola", producer: 'Due Terre Wines', origin: 'Sicilia', suggestion: 'Pizza Napoli', glass: '8,00', bottle: '35,00' },
  { name: 'Negroamaro del Salento IGP', grapes: 'Negroamaro', producer: 'Vecchia Torre', origin: 'Puglia', suggestion: 'Pizza Calabrese', glass: '8,00', bottle: '35,00' },
  { name: 'Primitivo Elementa', grapes: 'Primitivo', producer: 'Orsogna', origin: 'Abruzzo', suggestion: 'Pizza Boscaiola', glass: '8,00', bottle: '38,00' },
  { name: 'Montepulciano Coste di Moro Bio', grapes: 'Montepulciano', producer: 'Lunaria', origin: 'Abruzzo', suggestion: 'Pizza 4 Stagioni', glass: '8,00', bottle: '37,00' },
  { name: "Dolcetto D'Alba Bio", grapes: 'Dolcetto', producer: 'Brezza', origin: 'Piemonte', suggestion: 'Pizza Porchetta Funghi', glass: '9,00', bottle: '39,00' },
  { name: 'Nebbiolo Delle Langhe Bio', grapes: 'Nebbiolo', producer: 'Brezza', origin: 'Piemonte', suggestion: 'Pizza Patate e Tartufo', glass: '9,00', bottle: '39,00' },
  { name: 'Valpolicella Classico Superiore Persegà', grapes: 'corvina, corvinone, rondinella', producer: 'Antolini', origin: 'Veneto', suggestion: 'Salsiccia Friarielli', glass: '9,00', bottle: '39,00' },
]

export const winesIt: WineItem[] = [
  { name: 'Prosecco Doc Settolo Bio', grapes: 'Glera', producer: 'Fratelli Collavo', origin: 'Veneto', suggestion: 'Pizza Fresca', glass: '7,50', bottle: '34,00' },
  { name: 'Trebbiano Charisma Biodinamico', grapes: 'Trebbiano', producer: 'Lunaria', origin: 'Abruzzo', suggestion: 'Pizza Rucola Reggiano', glass: '8,00', bottle: '34,00' },
  { name: 'Malvasia Labelle Biodinamico', grapes: 'Malvasia', producer: 'Lunaria', origin: 'Abruzzo', suggestion: 'Pizza Siciliana', glass: '8,00', bottle: '35,00' },
  { name: 'Pinot Grigio Ramoro Biodinamico', grapes: 'Pinot Grigio', producer: 'Lunaria', origin: 'Abruzzo', suggestion: 'Pizza Principessa', glass: '8,00', bottle: '35,00' },
  { name: 'Lambrusco Emilia Secco Bio', grapes: 'Lambrusco', producer: 'Medici Ermete', origin: 'Emilia Romagna', suggestion: 'Pizza Regina', glass: '7,00', bottle: '26,00' },
  { name: "Nero D'Avola Bio", grapes: "Nero D'Avola", producer: 'Due Terre Wines', origin: 'Sicilia', suggestion: 'Pizza Napoli', glass: '8,00', bottle: '35,00' },
  { name: 'Negroamaro del Salento IGP', grapes: 'Negroamaro', producer: 'Vecchia Torre', origin: 'Puglia', suggestion: 'Pizza Calabrese', glass: '8,00', bottle: '35,00' },
  { name: 'Primitivo Elementa', grapes: 'Primitivo', producer: 'Orsogna', origin: 'Abruzzo', suggestion: 'Pizza Boscaiola', glass: '8,00', bottle: '38,00' },
  { name: 'Montepulciano Coste di Moro Bio', grapes: 'Montepulciano', producer: 'Lunaria', origin: 'Abruzzo', suggestion: 'Pizza 4 Stagioni', glass: '8,00', bottle: '37,00' },
  { name: "Dolcetto D'Alba Bio", grapes: 'Dolcetto', producer: 'Brezza', origin: 'Piemonte', suggestion: 'Pizza Porchetta Funghi', glass: '9,00', bottle: '39,00' },
  { name: 'Nebbiolo Delle Langhe Bio', grapes: 'Nebbiolo', producer: 'Brezza', origin: 'Piemonte', suggestion: 'Pizza Patate e Tartufo', glass: '9,00', bottle: '39,00' },
  { name: 'Valpolicella Classico Superiore Persegà', grapes: 'corvina, corvinone, rondinella', producer: 'Antolini', origin: 'Veneto', suggestion: 'Salsiccia Friarielli', glass: '9,00', bottle: '39,00' },
]

export const partners: ImageCard[] = [
  { name: 'Caputo', imageSrc: '/img/farine-caputo.png' },
  { name: 'Vini Veneti', imageSrc: '/img/viniveneti.png' },
  { name: 'Pomodorino DOP', imageSrc: '/img/pomodorinoDOP.png' },
  { name: 'Peroni', imageSrc: '/img/Birra_peroni_s.r.l._logo.png' },
]

export const deliveryFr: DeliveryCard[] = [
  { name: 'Commandez via Deliveroo', link: 'https://deliveroo.be/fr/menu/brussels/boondael/pizza-vino', imageSrc: '/img/deliveroo.png', description: 'Faites-vous livrer vos pizzas préférées à Ixelles et dans les environs.' },
  { name: 'Commandez via Uber Eats', link: 'https://www.ubereats.com/be/store/pizzavino/FMBh-fUqQLaX1ctZnOTC3w', imageSrc: '/img/Uber-Eats-Logo.png', description: 'Retrouvez Pizza Vino sur Uber Eats pour une livraison rapide.' },
]

export const deliveryEn: DeliveryCard[] = [
  { name: 'Order on Deliveroo', link: 'https://deliveroo.be/fr/menu/brussels/boondael/pizza-vino', imageSrc: '/img/deliveroo.png', description: 'Get your favorite Neapolitan-style pizzas delivered in Ixelles and nearby.' },
  { name: 'Order on Uber Eats', link: 'https://www.ubereats.com/be/store/pizzavino/FMBh-fUqQLaX1ctZnOTC3w', imageSrc: '/img/Uber-Eats-Logo.png', description: 'Find Pizza Vino on Uber Eats for a quick and reliable delivery option.' },
]

export const deliveryIt: DeliveryCard[] = [
  { name: 'Ordina su Deliveroo', link: 'https://deliveroo.be/fr/menu/brussels/boondael/pizza-vino', imageSrc: '/img/deliveroo.png', description: 'Ricevi a casa le pizze di Pizza Vino a Ixelles e nei dintorni.' },
  { name: 'Ordina su Uber Eats', link: 'https://www.ubereats.com/be/store/pizzavino/FMBh-fUqQLaX1ctZnOTC3w', imageSrc: '/img/Uber-Eats-Logo.png', description: 'Una soluzione rapida per gustare Pizza Vino anche a domicilio.' },
]
