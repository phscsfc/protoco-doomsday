const hero = {
    name: 'Loki',
    team: 'Anti-heroi',
    power: 67,
    weapons: [
        'Ragnir',
        'Gungnir'
    ],
    origin: {
        planet:"Asgard"
    }
}
hero.name // notação de ponto
hero['name'] // notação de colchetes
console.log(hero.name)

hero.origin.planet // obj dentro do obj
console.log(hero.origin.planet) 

console.log(hero.weapons[0])

const key = 'power'
hero[key]

hero.age // undefined -> não existe
console.log(hero.age)

// Alterar, adicionando e removendo

hero.power = 99
console.log(hero)

hero.nickname = "Deus da mentira"
console.log(hero)

delete hero.nickname
console.log(hero)

// Percorrendo um objeto

for (const prop in hero){
    console.log(prop, hero[prop])
}

Object.keys(hero)
Object.values(hero)

const {name, team} = hero
console.log(name, team)

const villain = {
    name: 'Doutor Destino',
    power: 500,
    attack(target) {
        return `${this.name} atacou ${target}!`
    },
    powerUp(amount){
        this.power += amount
        return this.power
    }
}

console.log(villain.attack("Loki"))
console.log(villain.powerUp(50))

// referencia x copia

const ref = hero

ref.power = 1

console.log(hero.power)