const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.2212755",
        lng: "-49.6481859",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco ou vunerabilidade social.",
        whatsapp: "281971893712",
        images: [
            "https://images.unsplash.com/photo-1602859116629-ef273dfb77d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=79",

            "https://images.unsplash.com/photo-1602859116629-ef273dfb77d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 8h as 18h",
        open_on_weekends: "0"
    })
   
    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente um orfanato pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)


    // deletar dado na tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})