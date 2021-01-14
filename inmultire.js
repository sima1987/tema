document.write("<section>")
for(i=0; i<10; i++) {
    document.write ("<div")
    for( j=0; j<10; j++) {
        let bucle = i * j
        document.write(i + " x " + j + " = " + bucle + "<br>")
    }
    document.write("<br>")
    document.write("</div>")
}

document.write("</section>")