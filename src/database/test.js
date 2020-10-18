const Database = require('./db.js')
const saveOrphanage = require('./saveOrphanage.js')
Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat:"-22.9590215",
        lng:"-43.1757737",
        name:"Lar dos Meninos",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"998989898",
        images: [
            "https://images.unsplash.com/photo-1600711724564-526eda91ac29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1574559854225-4349f0fda8cd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horário de visitas Das 18h até 8h",
        open_on_weekends:"0"
    })

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)


    // consultar somente 1 orphanato,pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // deletar dado da tabela

    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})