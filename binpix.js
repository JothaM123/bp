function pix(element, art, theme, color, width, height) { 

        var resultd = art.replace(/0/g, "\xa0".repeat(3))
        var finald = resultd.replace(/1/g, "█")
        var el = document.getElementById(element)
        el.style.background= theme
        el.innerHTML = finald
        el.style.width = width
        el.style.height = height
        el.style.paddingBottom = "20px"
        el.style.color = color
   
}