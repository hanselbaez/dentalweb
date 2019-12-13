
fetch ('https://applab-challenge.staging.applab.do/api/v1/specialties')
.then (Response => Response.json())
.then (data => {
    console.log (data)
    for (let valor of data)
    contenido.innerHTML += `

    <div class="card-services align-self-start">
        <img src="assets/circle-01.svg" alt="" class="circle">
        <p class="li-services">${valor.name}</p>                             
    </div>

    `
    
})