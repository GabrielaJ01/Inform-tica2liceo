urlsHtml=["https://invdes.com.mx/wp-content/uploads/2020/09/10-09-20-einstein-800x445.jpg","https://1.bp.blogspot.com/_dAGq_7k2IB8/TGroYFW87lI/AAAAAAAACHE/P7Wk_cP8TA4/s1600/curie.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Charles_Darwin_1880.jpg/1200px-Charles_Darwin_1880.jpg","https://images.immediate.co.uk/production/volatile/sites/4/2019/11/GettyImages-56217082-73a561f-1.jpg?quality=90&resize=620%2C832"]
nombres=["Albert Einstein","Marie Curie","Charles Darwin","Archimedes"]

html = ""
for (let i = 0; i < 4; i++) {
    html = html + `<div class = "cientifico"> <img src="${urlsHtml[i]}"width="350" height="300"/> <p>${nombres[i]}</p></div>`
}

contenedor = document.querySelector ("#contenedor")
contenedor.innerHTML = html   