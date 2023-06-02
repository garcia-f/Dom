const arreglo = [
    {
        titulo:"John Wick 4",
        descripcion:'John Wick es un asesino a sueldo retirado que vuelve a la acción después de que un jefe mafioso haya puesto precio a su cabeza y le haya robado todo lo que le quedaba tras la muerte de su esposa.',
        imagen:'https://bolavip.com/__export/1676568742623/sites/bolavip/img/2023/02/16/que-actores-saldran-en-john-wick-4-conoce-al-elenco-del-film-ok.jpeg_1624932088.jpeg',
    },
    {
        titulo:"MARIO-BROS",
        descripcion:'La película cuenta la historia de Mario y Luigi, dos hermanos que viajan a un mundo oculto para rescatar a la Princesa Peach, capturada por el malvado Rey Bowser.',
        imagen:'https://media.tycsports.com/files/2023/04/24/560008/super-mario-bros-la-pelicula_862x485.webp',
    },
    {
        titulo:"Guardianes de la Galaxia",
        descripcion:'En Guardianes de la Galaxia: Volumen 3 Peter Quill, todavía conmocionado por la pérdida de Gamora, debe reunir al equipo en torno a él para defender el universo mientras protege a uno de los suyos.',
        imagen:'https://luznoticiasrm.blob.core.windows.net.optimalcdn.com/images/2023/05/02/gotg-8dec9578-focus-0.01-0.63-966-544.jpg',
    },
    {
        titulo:"El exorcista del papa",
        descripcion:'Película sobre Gabriele Amorth, un sacerdote que ejerció como exorcista principal del Vaticano, realizando más de cien mil exorcismos a lo largo de su vida.',
        imagen:'https://www.infobae.com/new-resizer/LBjKaFh_8dkVcRe9wREfjKuUnUo=/768x512/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/SNSSGIP4LNH7RHEMBVZLJX6AUE.jpg',
    },
    {
        titulo:"Air",
        descripcion:'Narra la increíble y revolucionaria asociación entre Michael Jordan -un novato en ese momento- y la incipiente sección de baloncesto de Nike, que revolucionó el mundo del deporte y la cultura contemporánea con la marca Air Jordan.',
        imagen:'https://i.blogs.es/ea1a9b/air-cartel-pelicula/1366_2000.jpeg',
    },
    {
        titulo:"Interstellar",
        descripcion:'Interstellar narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto con el propósito de superar los límites hasta ahora conocidos por la Humanidad y conquistar las vastas distancias a la que abre paso el viaje interestelar.',
        imagen:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/interstellar-final-explicado-1589395771.jpg?resize=980:*',
    },
    
]

const container = document.getElementById("container");

container.innerHTML += arreglo
  .map((arreglo) => {
    return `
    <div class="card my-card d-flex" style="max-width: 18rem;">
    <img src="${arreglo.imagen}" class="card-img-top my-img" alt="${arreglo.titulo}">
    <div class="card-body ">
        <h5>${arreglo.titulo}</h5>
        <p>${arreglo.descripcion}</p>
    </div>
</div>
    `;
  })
  .join("");